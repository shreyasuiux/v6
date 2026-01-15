/**
 * ASSET MANIFEST - PRODUCTION-SAFE ASSET CONFIGURATION
 * 
 * Per Master Instructions:
 * - All images stored in /public/assets/images/ (NOT /src/assets/)
 * - All images converted to WebP or AVIF format
 * - Paths reference public folder: /assets/images/filename.webp
 * - Zero figma:asset dependencies
 * - App must never crash due to missing assets (silent placeholders)
 * 
 * CRITICAL RULES:
 * - DO NOT use /src/assets/... paths directly
 * - DO NOT use JPG or PNG at runtime (WebP/AVIF only)
 * - Replace Figma asset paths with static public assets
 * - Remove all figma:asset/* comments and hashes
 * 
 * ASSET ORGANIZATION:
 * /public/assets/images/
 *   ├── home/          # Home page / Desktop72 assets
 *   ├── about/         # About Us page assets
 *   ├── team/          # Our Team page assets
 *   ├── erp/           # ERP Testing page assets
 *   └── security/      # Security page assets
 */

// ============================================================================
// HOME PAGE / DESKTOP72 ASSETS (20 images)
// ============================================================================

export const homeAssets = {
  // Background images
  background: '/assets/images/home/background.webp',
  background1: '/assets/images/home/background1.webp',
  
  // Use case / feature images (7 images)
  unsplashImage1: '/assets/images/home/use-case-1.webp',
  unsplashImage2: '/assets/images/home/use-case-2.webp',
  unsplashImage3: '/assets/images/home/use-case-3.webp',
  unsplashImage4: '/assets/images/home/use-case-4.webp',
  unsplashImage5: '/assets/images/home/use-case-5.webp',
  unsplashImage6: '/assets/images/home/use-case-6.webp',
  unsplashImage7: '/assets/images/home/use-case-7.webp',
  
  // Video thumbnails (6 images)
  videoThumbnail1: '/assets/images/home/video-thumb-1.webp',
  videoThumbnail2: '/assets/images/home/video-thumb-2.webp',
  videoThumbnail3: '/assets/images/home/video-thumb-3.webp',
  videoThumbnail4: '/assets/images/home/video-thumb-4.webp',
  videoThumbnail5: '/assets/images/home/video-thumb-5.webp',
  videoThumbnail6: '/assets/images/home/video-thumb-6.webp',
  
  // Case study images
  caseStudyReligare: '/assets/images/home/case-study-religare.webp',
  abhijitShah: '/assets/images/home/abhijit-shah.webp',
  
  // Textures
  texture: '/assets/images/home/texture.webp',
  noiseTexture: '/assets/images/home/noise-texture.webp',
  
  // Career opportunities
  careerOpportunities: '/assets/images/home/career-opportunities.webp',
};

// ============================================================================
// ABOUT US PAGE ASSETS (33 images)
// ============================================================================

export const aboutUsAssets = {
  // Our Initiatives Images (6 images)
  initiative1: '/assets/images/about/initiative-1.webp',
  initiative2: '/assets/images/about/initiative-2.webp',
  initiative3: '/assets/images/about/initiative-3.webp',
  initiative4: '/assets/images/about/initiative-4.webp',
  initiative5: '/assets/images/about/initiative-5.webp',
  initiative6: '/assets/images/about/initiative-6.webp',
  
  // ACC Sports & Culture Images (15 images)
  sports1: '/assets/images/about/sports-1.webp',
  sports2: '/assets/images/about/sports-2.webp',
  sports3: '/assets/images/about/sports-3.webp',
  sports4: '/assets/images/about/sports-4.webp',
  sports5: '/assets/images/about/sports-5.webp',
  sports6: '/assets/images/about/sports-6.webp',
  sports7: '/assets/images/about/sports-7.webp',
  sports8: '/assets/images/about/sports-8.webp',
  sports9: '/assets/images/about/sports-9.webp',
  sports10: '/assets/images/about/sports-10.webp',
  sports11: '/assets/images/about/sports-11.webp',
  sports12: '/assets/images/about/sports-12.webp',
  sports13: '/assets/images/about/sports-13.webp',
  sports14: '/assets/images/about/sports-14.webp',
  sports15: '/assets/images/about/sports-15.webp',
  
  // Rewards and Recognition Images (12 images)
  rewards1: '/assets/images/about/rewards-1.webp',
  rewards2: '/assets/images/about/rewards-2.webp',
  rewards3: '/assets/images/about/rewards-3.webp',
  rewards4: '/assets/images/about/rewards-4.webp',
  rewards5: '/assets/images/about/rewards-5.webp',
  rewards6: '/assets/images/about/rewards-6.webp',
  rewards7: '/assets/images/about/rewards-7.webp',
  rewards8: '/assets/images/about/rewards-8.webp',
  rewards9: '/assets/images/about/rewards-9.webp',
  rewards10: '/assets/images/about/rewards-10.webp',
  rewards11: '/assets/images/about/rewards-11.webp',
  rewards12: '/assets/images/about/rewards-12.webp',
};

// ============================================================================
// OUR TEAM PAGE ASSETS (8 images)
// ============================================================================

export const teamAssets = {
  nilesh: '/assets/images/team/nilesh.webp',
  rogin: '/assets/images/team/rogin.webp',
  shubho: '/assets/images/team/shubho.webp',
  ghanshyam: '/assets/images/team/ghanshyam.webp',
  mithun: '/assets/images/team/mithun.webp',
  reema: '/assets/images/team/reema.webp',
  priyanka: '/assets/images/team/priyanka.webp',
  sachin: '/assets/images/team/sachin.webp',
};

// ============================================================================
// ERP TESTING PAGE ASSETS (1 image)
// ============================================================================

export const erpAssets = {
  heroImage: '/assets/images/erp/hero.webp',
};

// ============================================================================
// SECURITY PAGE ASSETS (1 image)
// ============================================================================

export const securityAssets = {
  dashboard: '/assets/images/security/dashboard.webp',
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all assets as a flat object
 */
export const allAssets = {
  ...homeAssets,
  ...aboutUsAssets,
  ...teamAssets,
  ...erpAssets,
  ...securityAssets,
};

/**
 * Get asset by key with fallback to silent placeholder
 * Per Master Instructions: App must never crash due to missing assets
 */
export function getAsset(key: string, fallback: string = ''): string {
  const asset = (allAssets as any)[key];
  
  // If asset exists, return it
  if (asset) return asset;
  
  // Silent fallback - return placeholder data URI
  if (fallback) return fallback;
  
  // Default silent placeholder (1x1 transparent pixel)
  return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
}

/**
 * Check if asset exists in manifest
 */
export function hasAsset(key: string): boolean {
  return key in allAssets;
}

/**
 * Get asset with error handling
 * Returns placeholder on error
 */
export function safeGetAsset(key: string): string {
  try {
    return getAsset(key);
  } catch {
    // Silent error handling - return transparent placeholder
    return 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  }
}

// ============================================================================
// ASSET COUNTS (for documentation)
// ============================================================================

export const ASSET_COUNTS = {
  home: 20,
  aboutUs: 33,
  team: 8,
  erp: 1,
  security: 1,
  total: 63,
};

// ============================================================================
// PRODUCTION CHECKLIST
// ============================================================================

/**
 * MASTER INSTRUCTIONS COMPLIANCE:
 * 
 * ✅ Images in /public/assets/images/ (NOT /src/assets/)
 * ✅ All paths use /assets/images/... (public folder reference)
 * ✅ WebP format specified (production-optimized)
 * ✅ Zero figma:asset references
 * ✅ Silent fallback handling (no crashes)
 * ✅ Clean asset structure
 * 
 * BEFORE DEPLOYMENT:
 * [ ] Export all 63 images from Figma
 * [ ] Convert to WebP format
 * [ ] Place in /public/assets/images/[category]/
 * [ ] Verify all images load correctly
 * [ ] Test with missing images (should not crash)
 * [ ] Optimize WebP compression
 */
