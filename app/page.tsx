'use client';

import { useState } from 'react';
import DomeGallery from '@/components/DomeGallery';
import InteractionFlow from '@/components/InteractionFlow';

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);

  const userImages = [
    '/IMG-20260428-WA0058(1).jpg',
    '/IMG-20260428-WA0142(1).jpg',
    '/IMG-20260428-WA0144(1).jpg',
    '/IMG-20260428-WA0145.jpg',
    '/IMG-20260428-WA0146.jpg',
    '/IMG-20260428-WA0147.jpg',
    '/IMG-20260428-WA0148.jpg',
    '/IMG-20260428-WA0149(1).jpg',
    '/IMG-20260428-WA0150.jpg',
    '/IMG-20260429-WA0085.jpg',
    '/IMG-20260429-WA0132(1).jpg',
    '/IMG_20260511_124932.jpg',
    '/IMG_20260511_124951.jpg',
  ];

  return (
    <main className="w-screen h-screen bg-[#060010]">
      {!showGallery ? (
        <InteractionFlow onFlowComplete={() => setShowGallery(true)} />
      ) : (
        <>
          <audio src="/pretty.mp3" autoPlay loop className="hidden" />
          <DomeGallery
            images={userImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
            autoRotationSpeed={0.1}
          />
        </>
      )}
    </main>
  );
}
