'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='p-6 text-center'>
      <h1 className='text-4xl font-bold mb-4'>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={() => router.push('/')}
        className='mt-4 px-4 py-2 w-40 bg-gray-500 text-white rounded hover:bg-gray-700 transition'
      >
        Home
      </button>
    </div>
  );
}