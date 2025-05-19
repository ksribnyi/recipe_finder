import Link from 'next/link';
import { getRecipes } from '@/services/spoonacular';
import BackButton from '@/components/BackButton';
import { TOTAL_RECIPES } from '@/constants/constants';

export default async function RecipesPage({ searchParams }: { searchParams: any }) {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const data = await getRecipes({ query, cuisine, maxReadyTime, number: TOTAL_RECIPES });

  return (
    <div className='p-6 max-w-7xl mx-auto bg-white'>
      <h1 className='text-3xl font-extrabold mb-8 text-gray-900'>Recipe Results</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {data.results && data.results.length > 0 ? (
          data.results.map((recipe: any) => (
            <Link
              key={recipe.id}
              href={`/recipes/${recipe.id}`}
              className='group border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white flex flex-col overflow-hidden'
            >
              <div className='w-full aspect-[4/3] overflow-hidden'>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className='w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300'
                  loading='lazy'
                />
              </div>
              <div className='p-4 flex-1 flex items-center justify-center'>
                <h2 className='text-lg font-semibold text-center text-gray-800 line-clamp-2'>
                  {recipe.title}
                </h2>
              </div>
            </Link>
          ))
        ) : (
          <p className='text-center text-gray-500'>No recipes found</p>
        )}
      </div>
      <div className='mt-8'>
        <BackButton />
      </div>
    </div>
  );
}




