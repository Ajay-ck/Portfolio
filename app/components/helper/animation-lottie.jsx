"use client"

import dynamic from 'next/dynamic';

// Create the actual Lottie component
const LottieComponent = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  // Import Lottie dynamically
  const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false,
    loading: () => <div style={{ width: '95%', height: '200px' }}>Loading...</div>
  });

  return <Lottie {...defaultOptions} />;
};

// Main component with dynamic import
const AnimationLottie = dynamic(
  () => Promise.resolve(LottieComponent),
  { 
    ssr: false,
    loading: () => <div style={{ width: '95%', height: '200px' }}>Loading animation...</div>
  }
);

export default AnimationLottie;
