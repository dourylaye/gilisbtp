import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackUnsplash?: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackUnsplash = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
  alt = '',
  className = '',
  ...props
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);

  // Generate candidate paths for local images
  const candidates = React.useMemo(() => {
    if (!src) return [fallbackUnsplash];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return [src, fallbackUnsplash];
    }

    const cleanSrc = src.startsWith('/') ? src.slice(1) : src.startsWith('./') ? src.slice(2) : src;
    const parts = cleanSrc.split('/');
    const dir = parts[0] || '';
    const file = parts.slice(1).join('/');

    const dirUpper = dir.charAt(0).toUpperCase() + dir.slice(1);
    const dirLower = dir.toLowerCase();

    const fileLower = file.toLowerCase();

    const list = [
      src,                                    // e.g. "/Images/Pole1.webp"
      `/${cleanSrc}`,                         // "/Images/Pole1.webp"
      `./${cleanSrc}`,                        // "./Images/Pole1.webp"
      `${cleanSrc}`,                          // "Images/Pole1.webp"
      `/${dirLower}/${file}`,                 // "/images/Pole1.webp"
      `/${dirLower}/${fileLower}`,            // "/images/pole1.webp"
      `/${dirUpper}/${file}`,                 // "/Images/Pole1.webp"
      `/${dirUpper}/${fileLower}`,            // "/Images/pole1.webp"
      `./${dirLower}/${fileLower}`,           // "./images/pole1.webp"
      `./${dirUpper}/${file}`,                // "./Images/Pole1.webp"
      fallbackUnsplash                        // Unsplash fallback
    ];

    // Filter unique candidates
    const unique = list.filter((item, index, self) => self.indexOf(item) === index);
    return unique;
  }, [src, fallbackUnsplash]);

  useEffect(() => {
    setCandidateIndex(0);
  }, [src]);

  const currentSrc = candidates[candidateIndex] || fallbackUnsplash;

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(prev => prev + 1);
    }
  };

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      referrerPolicy="no-referrer"
      className={className}
      onError={handleError}
    />
  );
};
