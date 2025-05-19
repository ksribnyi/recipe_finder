import { getRecipeDetails } from '@/services/spoonacular';
import BackButton from '@/components/BackButton';

export default async function RecipeDetailPage({ params }: { params: any }) {
  const { id } = await params;

  const recipe = await getRecipeDetails(id);

  return (
    <div className='p-6 max-w-4xl mx-auto min-h-screen '>
      <div className='bg-white p-6 rounded-lg shadow-lg relative'>
        <h1 className='text-2xl font-bold mb-4'>{recipe.title}</h1>
        <p className='mb-2'>⏱ {recipe.readyInMinutes} minutes</p>
        <p className='mb-2'>🍽 Servings: {recipe.servings}</p>
        <div className='flex flex-row gap-4 p-4 bg-gray-200 rounded-lg shadow-sm'>
          <img src={recipe.image} alt={recipe.title} className='w-100 h-min object-cover rounded' />
          <div>
            <h2 className='text-xl font-semibold mt-4 mb-2'>Ingredients</h2>
            <ul className='list-disc list-inside'>
              {recipe.extendedIngredients.map((ing: any) => (
                <li key={ing.id}>{ing.original}</li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className='mt-4 text-gray-700'
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
        <BackButton />
      </div>

    </div>
  );
}
