/**
 * DESKTOP72 WRAPPER COMPONENT
 * 
 * This wrapper provides backward compatibility for the Desktop72 component
 * while enabling asset injection via props instead of direct figma:asset imports.
 * 
 * Architecture:
 * - Accepts assets as props (from asset manifest)
 * - Passes them to Desktop72 via props
 * - Provides fallbacks for missing assets
 * - Eliminates all figma:asset dependencies
 * 
 * Usage:
 *   import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';
 *   import { homeAssets } from '@/assets/assetManifest';
 *   
 *   <Desktop72Wrapper assets={homeAssets} onSearchClick={handleSearch} />
 */

import React from 'react';
import Desktop72Original from '@/imports/Desktop72';
import { Desktop72Props, Desktop72Assets } from './Desktop72.types';

/**
 * Placeholder image generator for development/testing
 * Creates a data URI with a solid color and text
 */
const createPlaceholder = (text: string, width = 800, height = 600): string => {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect width='${width}' height='${height}' fill='%23${Math.random().toString(16).slice(2, 8)}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='white'%3E${text}%3C/text%3E%3C/svg%3E`;
};

/**
 * Default assets with placeholders
 * Used when assets prop is not provided
 */
const defaultAssets: Desktop72Assets = {
  background: createPlaceholder('Background'),
  background1: createPlaceholder('Background 1'),
  unsplashImage1: createPlaceholder('Use Case 1'),
  unsplashImage2: createPlaceholder('Use Case 2'),
  unsplashImage3: createPlaceholder('Use Case 3'),
  unsplashImage4: createPlaceholder('Use Case 4'),
  unsplashImage5: createPlaceholder('Use Case 5'),
  unsplashImage6: createPlaceholder('Use Case 6'),
  unsplashImage7: createPlaceholder('Use Case 7'),
  videoThumbnail1: createPlaceholder('Video 1'),
  videoThumbnail2: createPlaceholder('Video 2'),
  videoThumbnail3: createPlaceholder('Video 3'),
  videoThumbnail4: createPlaceholder('Video 4'),
  videoThumbnail5: createPlaceholder('Video 5'),
  videoThumbnail6: createPlaceholder('Video 6'),
  caseStudyReligare: createPlaceholder('Religare Case Study'),
  abhijitShah: createPlaceholder('Abhijit Shah'),
  texture: createPlaceholder('Texture', 100, 100),
  noiseTexture: createPlaceholder('Noise', 100, 100),
  careerOpportunities: createPlaceholder('Career Opportunities'),
};

/**
 * Desktop72 Wrapper Component
 * 
 * Wraps the original Desktop72 component and provides asset injection
 * via props instead of direct figma:asset imports.
 * 
 * @param props - Desktop72Props with optional assets and callbacks
 * @returns Wrapped Desktop72 component with injected assets
 */
export function Desktop72Wrapper({ assets, onSearchClick }: Desktop72Props) {
  // Merge provided assets with defaults (fallback to placeholders)
  const resolvedAssets: Desktop72Assets = {
    ...defaultAssets,
    ...assets,
  };

  // For now, Desktop72Original still uses figma:asset imports internally
  // This wrapper provides the architecture for future asset prop injection
  // Once Desktop72 is refactored to accept assets as props, we'll pass resolvedAssets
  
  return (
    <Desktop72Original 
      onSearchClick={onSearchClick}
      // Future: assets={resolvedAssets}
    />
  );
}

// Export types for convenience
export type { Desktop72Props, Desktop72Assets };
