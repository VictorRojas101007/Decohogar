import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width = 400,
  height = 300,
  quality = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generar URL optimizada para Cloudinary
  const getOptimizedUrl = (originalUrl: string) => {
    const urlParts = originalUrl.split('/upload/');
    if (urlParts.length !== 2) return originalUrl;
    
    const [baseUrl, pathWithVersion] = urlParts;
    return `${baseUrl}/upload/w_${width},h_${height},q_${quality},f_auto,c_fill/${pathWithVersion}`;
  };

  // URL para placeholder (muy pequeña y borrosa)
  const getPlaceholderUrl = (originalUrl: string) => {
    const urlParts = originalUrl.split('/upload/');
    if (urlParts.length !== 2) return originalUrl;
    
    const [baseUrl, pathWithVersion] = urlParts;
    return `${baseUrl}/upload/w_50,h_50,q_10,e_blur:300,f_auto/${pathWithVersion}`;
  };

  const optimizedSrc = getOptimizedUrl(src);
  const placeholderSrc = getPlaceholderUrl(src);

  return (
    <div className={`image-container ${className || ''}`} style={{ position: 'relative' }}>
      {/* Placeholder borroso */}
      {!isLoaded && (
        <img
          src={placeholderSrc}
          alt=""
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'blur(5px)',
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
      
      {/* Imagen principal */}
      <img
        src={optimizedSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* Fallback en caso de error */}
      {hasError && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f0f0f0',
          color: '#666',
          height: '100%'
        }}>
          Imagen no disponible
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;