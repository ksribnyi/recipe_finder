'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxTime, setMaxTime] = useState('');

  const isFormValid = query || cuisine || maxTime;

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxTime) params.append('maxReadyTime', maxTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div
        className='flex flex-col items-center justify-center w-full max-w-7xl mx-auto gap-4 p-6 h-max bg-white rounded-lg'>
        <h1 className='text-2xl font-bold'>Recipe Finder</h1>
        <input
          type='text'
          placeholder='Search query (e.g., pasta)'
          className='border rounded p-2 w-80'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type='number'
          placeholder='Max preparation time (minutes)'
          className='border rounded p-2 w-80'
          value={maxTime}
          onChange={(e) => setMaxTime(e.target.value)}
        />
        <select
          className='border rounded p-2 w-80'
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        >
          <option value=''>
            Select Cuisine
          </option>
          <option value='Italian'>Italian</option>
          <option value='Mexican'>Mexican</option>
          <option value='Chinese'>Chinese</option>
          <option value='Japanese'>Japanese</option>
          <option value='French'>French</option>
        </select>
        <button
          className={`bg-gray-500 hover:bg-gray-700 text-white w-40 px-4 py-2 rounded cursor-pointer ${!isFormValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!isFormValid}
          onClick={handleSearch}
        >
          Next
        </button>
      </div>

    </div>
  );
}
