import React, { useState, useEffect } from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackUnsplash?: string;
}

// Curated high-resolution Unsplash photo mapping for BTP domain assets
const getCategoryUnsplashFallback = (srcStr: string, altStr: string): string => {
  const combined = (srcStr + ' ' + altStr).toLowerCase();

  if (combined.includes('pole1') || combined.includes('route')) {
    return 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pole2') || combined.includes('batiment') || combined.includes('bâtiment')) {
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pole3') || combined.includes('genie') || combined.includes('génie') || combined.includes('pont')) {
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pole4') || combined.includes('vrd') || combined.includes('reseau')) {
    return 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pole5') || combined.includes('hydraulique') || combined.includes('eau')) {
    return 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pole6') || combined.includes('rehabilitation') || combined.includes('entretien')) {
    return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('slider1')) {
    return 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1600';
  }
  if (combined.includes('slider2')) {
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1600';
  }
  if (combined.includes('slider3')) {
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600';
  }
  if (combined.includes('pat1') || combined.includes('e1')) {
    return 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pat2') || combined.includes('e2')) {
    return 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pat3') || combined.includes('e3')) {
    return 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pat4') || combined.includes('e4')) {
    return 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pat5') || combined.includes('e5')) {
    return 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200';
  }
  if (combined.includes('pat6') || combined.includes('e6')) {
    return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200';
  }

  return 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200';
};

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  fallbackUnsplash,
  alt = '',
  className = '',
  ...props
}) => {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [hasFailedAll, setHasFailedAll] = useState(false);

  const smartFallback = fallbackUnsplash || getCategoryUnsplashFallback(src || '', alt || '');

  const isLogo = React.useMemo(() => {
    const s = (src || '').toLowerCase();
    const a = (alt || '').toLowerCase();
    return s.includes('logo') || a.includes('logo') || a.includes('gilis');
  }, [src, alt]);

  const isWhiteLogo = React.useMemo(() => {
    const s = (src || '').toLowerCase();
    return s.includes('white');
  }, [src]);

  // Generate candidate paths for local images
  const candidates = React.useMemo(() => {
    if (!src) return [smartFallback];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
      return [src, smartFallback];
    }

    // Strip leading slashes and dot-slashes
    const cleanSrc = src.replace(/^(\.\/|\/)/, '');
    const parts = cleanSrc.split('/');
    const dir = parts[0] || '';
    const file = parts.slice(1).join('/');

    const dirUpper = dir ? dir.charAt(0).toUpperCase() + dir.slice(1) : '';
    const dirLower = dir.toLowerCase();
    const fileLower = file.toLowerCase();

    const rawBase = (import.meta as any).env?.BASE_URL || './';
    const baseUrl = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;

    const list = [
      cleanSrc,
      `./${cleanSrc}`,
      `${baseUrl}${cleanSrc}`,
      `/${cleanSrc}`,
      dirLower ? `${dirLower}/${file}` : '',
      dirLower ? `${dirLower}/${fileLower}` : '',
      dirLower ? `./${dirLower}/${file}` : '',
      dirLower ? `./${dirLower}/${fileLower}` : '',
      dirUpper ? `${dirUpper}/${file}` : '',
      dirUpper ? `${dirUpper}/${fileLower}` : '',
      dirUpper ? `./${dirUpper}/${file}` : '',
      dirUpper ? `./${dirUpper}/${fileLower}` : '',
      src,
      smartFallback
    ];

    return list.filter((item, index, self) => Boolean(item) && self.indexOf(item) === index);
  }, [src, smartFallback]);

  useEffect(() => {
    setCandidateIndex(0);
    setHasFailedAll(false);
  }, [src]);

  const currentSrc = candidates[candidateIndex] || smartFallback;

  const handleError = () => {
    if (candidateIndex < candidates.length - 1) {
      setCandidateIndex(prev => prev + 1);
    } else {
      setHasFailedAll(true);
    }
  };

  // If it's a logo and local image failed, render an elegant branded SVG badge
  if (isLogo && hasFailedAll) {
    const textColor = isWhiteLogo ? 'text-white' : 'text-[#0E2232]';
    return (
      <div className={`inline-flex items-center space-x-2 font-title font-extrabold text-lg sm:text-xl tracking-wider select-none ${textColor} ${className}`}>
        {/* Geometric Helmet / Building Emblem */}
        <div className="w-8 h-8 rounded bg-[#F5C51B] flex items-center justify-center text-[#0E2232] font-black shadow-sm shrink-0">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 20h20" />
            <path d="M6 20V10l6-4 6 4v10" />
            <path d="M10 14h4" />
          </svg>
        </div>
        <div className="flex flex-col justify-center leading-none">
          <span className="font-black text-sm sm:text-base tracking-widest uppercase">
            GILIS <span className="text-[#F5C51B]">BTP</span>
          </span>
          <span className="text-[9px] font-semibold tracking-tight opacity-80 uppercase">SARL</span>
        </div>
      </div>
    );
  }

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


