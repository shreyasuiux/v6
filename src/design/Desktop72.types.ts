/**
 * TYPE DEFINITIONS FOR DESKTOP72 DESIGN COMPONENT
 * 
 * This file defines the prop interfaces for the Desktop72 design component.
 * Assets are injected via props instead of direct imports to eliminate figma:asset dependencies.
 * 
 * Architecture:
 * - Design files receive assets as props
 * - Application code imports from asset manifest
 * - Zero figma:asset dependencies in build
 */

/**
 * Asset interface for Desktop72 component
 * Maps all required images for the home page design
 */
export interface Desktop72Assets {
  // Background images
  background: string;
  background1: string;
  
  // Use case / unsplash images (7 total)
  unsplashImage1: string;
  unsplashImage2: string;
  unsplashImage3: string;
  unsplashImage4: string;
  unsplashImage5: string;
  unsplashImage6: string;
  unsplashImage7: string;
  
  // Video thumbnails (6 total)
  videoThumbnail1: string;
  videoThumbnail2: string;
  videoThumbnail3: string;
  videoThumbnail4: string;
  videoThumbnail5: string;
  videoThumbnail6: string;
  
  // Case study images
  caseStudyReligare: string;
  abhijitShah: string;
  
  // Textures
  texture: string;
  noiseTexture: string;
  
  // Career opportunities
  careerOpportunities: string;
}

/**
 * Props interface for Desktop72 component
 */
export interface Desktop72Props {
  /** Assets object containing all required images */
  assets?: Desktop72Assets;
  
  /** Search modal trigger callback */
  onSearchClick?: () => void;
}
