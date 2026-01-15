/**
 * DEPRECATED: Navigation Helper Utility
 * 
 * This file is kept for backward compatibility only.
 * The application now uses React Router for navigation.
 * 
 * See /src/routes.tsx for the centralized routing configuration.
 * See /src/app/components/PageWithNavigation.tsx for navigation handlers.
 * 
 * DO NOT add new navigation functions here.
 * Use React Router's useNavigate() hook and ROUTES constant from /src/routes.tsx
 */

/**
 * Service titles mapping (for consistency)
 */
export const SERVICE_TITLES = {
  CLOUD_PRACTICE: 'Cloud Practice',
  DIGITAL_ENGINEERING: 'Digital & Product Engineering',
  BIG_DATA: 'Big Data',
  APP_MODERNIZATION: 'App Modernization',
  SECURITY: 'Security',
  DATABASE_MANAGEMENT: 'Database Management',
  ERP_TESTING: 'ERP & Testing',
} as const;

/**
 * Product titles mapping (for consistency)
 */
export const PRODUCT_TITLES = {
  AGENT_STUDIO: 'Agent Studio',
  ATLAS_API_MANAGER: 'Atlas API Manager',
  OTTOHM_VIDEO: 'Ottohm Video',
  ITSM_TICKETING: 'ITSM Ticketing',
  AI_OPS: 'AI Ops Platform',
  SMART_CONTRACTS: 'Smart Contracts',
} as const;

/**
 * AI Solution titles mapping
 */
export const AI_TITLES = {
  BFSI_AGENTS: 'BFSI Agents',
  BRAND_MANAGEMENT: 'Brand Management Agents',
} as const;

/**
 * Who We Are items mapping
 */
export const WHO_WE_ARE_ITEMS = {
  OUR_TEAM: 'Our Team',
  ABOUT_US: 'About Us',
  PARTNERS: 'Partners',
  CAREERS: 'Careers',
  NEWS: 'News & Updates',
} as const;

/**
 * Utility to close all mobile menus
 */
export function closeAllMobileMenus(): void {
  if (typeof window === 'undefined') return;
  
  // Dispatch event to close mobile menus
  window.dispatchEvent(new CustomEvent('close-mobile-menu'));
  
  // Remove body scroll lock
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

/**
 * Utility to prevent body scroll (for mobile menus)
 */
export function preventBodyScroll(prevent: boolean): void {
  if (typeof window === 'undefined') return;
  
  if (prevent) {
    // Save current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  } else {
    // Restore scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}

/**
 * Debounce function calls
 */
let debounceTimeout: NodeJS.Timeout | null = null;

export function debouncedExecute(callback: () => void, delay: number = 300): void {
  if (debounceTimeout) {
    clearTimeout(debounceTimeout);
  }
  
  debounceTimeout = setTimeout(() => {
    callback();
    debounceTimeout = null;
  }, delay);
}
