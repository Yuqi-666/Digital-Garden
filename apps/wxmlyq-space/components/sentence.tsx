'use client';
import React from 'react';

interface SentenceProps {
  children: React.ReactNode;
}

const Sentence = (props: SentenceProps) => {
  return (
    <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium leading-loose tracking-wide transition-all duration-300 animate-fadeIn hover:text-gray-900 hover:scale-105">
      {props.children}
    </p>
  );
};

export default Sentence;
