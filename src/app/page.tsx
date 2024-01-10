import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
      </div>
    </>

  );
}
