'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-4 px-4 py-2 bg-gray-500 text-white cursor-pointer rounded hover:bg-gray-700 transition"
    >
      Back
    </button>
  );
}