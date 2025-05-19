const API_BASE = 'https://api.spoonacular.com';
const API_KEY = process.env.SPOONACULAR_API_KEY;


const cache = new Map<string, { data: any; expiry: number }>();

function getUrl(endpoint: string, params: Record<string, any> = {}) {
  const url = new URL(`${API_BASE}${endpoint}`);
  url.searchParams.set('apiKey', API_KEY!);

  for (const key in params) {
    if (params[key]) {
      url.searchParams.set(key, params[key]);
    }
  }

  return url.toString();
}

export async function getRecipes(params: {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
  number?: number;
}) {
  const cacheKey = JSON.stringify(params);

  const cached = cache.get(cacheKey);
  if (cached && cached.expiry > Date.now()) {
    console.log(`[CACHE HIT] Key: ${cacheKey}`);
    return cached.data;
  }

  const res = await fetch(getUrl('/recipes/complexSearch', params));
  if (!res.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await res.json();

  cache.set(cacheKey, {
    data,
    expiry: Date.now() + 60 * 1000,
  });

  return data;
}

export async function getRecipeDetails(id: string) {
  const res = await fetch(getUrl(`/recipes/${id}/information`), {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch recipe details');
  }

  return res.json();
}
