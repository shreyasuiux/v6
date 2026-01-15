/**
 * APP ROUTER - CENTRALIZED ROUTING CONFIGURATION
 * 
 * Per Master Instructions: Single source of truth for all application routes.
 * Following React Router v6+ best practices with proper Pages layer architecture.
 * 
 * ARCHITECTURE RULES (NON-NEGOTIABLE):
 * - All routes defined here and ONLY here
 * - Each route points to a Page component from /src/pages/
 * - Pages are composition shells with NO UI or routing logic
 * - Real URL-based routing (works on refresh, direct access, production)
 * - No state-based navigation - declarative routing ONLY
 * - Navigation via <Link> and <NavLink> components only
 * 
 * ROUTING STRUCTURE:
 * - Single BrowserRouter at root (App.tsx)
 * - No nested routers allowed
 * - Clean, SEO-friendly URLs
 * - Deep linking support for production hosting
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// ============================================================================
// PAGE IMPORTS - All routing units from /src/pages/
// ============================================================================

// Home
import { HomePage } from '@/pages/Home/Home.page';

// Services (7 pages)
import { CloudPractice } from '@/pages/Services/CloudPractice.page';
import { DigitalEngineering } from '@/pages/Services/DigitalEngineering.page';
import { BigData } from '@/pages/Services/BigData.page';
import { AppModernization } from '@/pages/Services/AppModernization.page';
import { Security } from '@/pages/Services/Security.page';
import { DatabaseManagement } from '@/pages/Services/DatabaseManagement.page';
import { ERPTesting } from '@/pages/Services/ERPTesting.page';

// AI Solutions (3 pages)
import { AI } from '@/pages/AI/AI.page';
import { BFSIAgents } from '@/pages/AI/BFSIAgents.page';
import { BrandManagement } from '@/pages/AI/BrandManagement.page';

// Products (6 pages)
import { AgentStudio } from '@/pages/Products/AgentStudio.page';
import { AtlasAPIManager } from '@/pages/Products/AtlasAPIManager.page';
import { OttohmVideo } from '@/pages/Products/OttohmVideo.page';
import { ITSMTicketing } from '@/pages/Products/ITSMTicketing.page';
import { AIOps } from '@/pages/Products/AIOps.page';
import { SmartContracts } from '@/pages/Products/SmartContracts.page';

// Who We Are (5 pages)
import { OurTeam } from '@/pages/WhoWeAre/OurTeam.page';
import { AboutUs } from '@/pages/WhoWeAre/AboutUs.page';
import { Partners } from '@/pages/WhoWeAre/Partners.page';
import { Careers } from '@/pages/WhoWeAre/Careers.page';
import { News } from '@/pages/WhoWeAre/News.page';

// Case Studies
import { CaseStudies } from '@/pages/CaseStudies/CaseStudies.page';

// ============================================================================
// ROUTE CONSTANTS - Type-safe route paths
// ============================================================================

/**
 * Route path constants for consistency across the application.
 * Use these constants instead of hardcoded strings.
 * 
 * Usage:
 *   navigate(ROUTES.SERVICES.CLOUD_PRACTICE)
 *   <Link to={ROUTES.HOME}>Home</Link>
 */
export const ROUTES = {
  HOME: '/',
  
  // Services
  SERVICES: {
    CLOUD_PRACTICE: '/services/cloud-practice',
    DIGITAL_ENGINEERING: '/services/digital-engineering',
    BIG_DATA: '/services/big-data',
    APP_MODERNIZATION: '/services/app-modernization',
    SECURITY: '/services/security',
    DATABASE_MANAGEMENT: '/services/database-management',
    ERP_TESTING: '/services/erp-testing',
  },
  
  // AI Solutions
  AI: {
    INDEX: '/ai',
    BFSI_AGENTS: '/ai/bfsi-agents',
    BRAND_MANAGEMENT: '/ai/brand-management',
  },
  
  // Products
  PRODUCTS: {
    AGENT_STUDIO: '/products/agent-studio',
    ATLAS_API_MANAGER: '/products/atlas-api-manager',
    OTTOHM_VIDEO: '/products/ottohm-video',
    ITSM_TICKETING: '/products/itsm-ticketing',
    AI_OPS: '/products/ai-ops',
    SMART_CONTRACTS: '/products/smart-contracts',
  },
  
  // Who We Are
  WHO_WE_ARE: {
    OUR_TEAM: '/who-we-are/our-team',
    ABOUT_US: '/who-we-are/about-us',
    PARTNERS: '/who-we-are/partners',
    CAREERS: '/who-we-are/careers',
    NEWS: '/who-we-are/news',
  },
  
  // Case Studies
  CASE_STUDIES: '/case-studies',
} as const;

// ============================================================================
// APP ROUTER COMPONENT - All route definitions
// ============================================================================

/**
 * Main routing component for the entire application.
 * 
 * MASTER INSTRUCTIONS COMPLIANCE:
 * ✅ Centralized routing (all routes in one place)
 * ✅ Uses React Router v6+
 * ✅ Each route points to Page component only
 * ✅ No routing logic in components
 * ✅ Real URL-based routing (refresh-safe)
 * ✅ Production-ready with deep linking
 * 
 * ROUTING RULES:
 * - Pages are composition shells (no UI logic)
 * - Navigation via Link/NavLink only (no onClick state changes)
 * - URLs are SEO-friendly and human-readable
 * - All routes work on direct access and refresh
 */
export function AppRouter() {
  return (
    <Routes>
      {/* ================================================================== */}
      {/* HOME */}
      {/* ================================================================== */}
      <Route path={ROUTES.HOME} element={<HomePage />} />
      
      {/* ================================================================== */}
      {/* SERVICES (7 routes) */}
      {/* ================================================================== */}
      <Route path={ROUTES.SERVICES.CLOUD_PRACTICE} element={<CloudPractice />} />
      <Route path={ROUTES.SERVICES.DIGITAL_ENGINEERING} element={<DigitalEngineering />} />
      <Route path={ROUTES.SERVICES.BIG_DATA} element={<BigData />} />
      <Route path={ROUTES.SERVICES.APP_MODERNIZATION} element={<AppModernization />} />
      <Route path={ROUTES.SERVICES.SECURITY} element={<Security />} />
      <Route path={ROUTES.SERVICES.DATABASE_MANAGEMENT} element={<DatabaseManagement />} />
      <Route path={ROUTES.SERVICES.ERP_TESTING} element={<ERPTesting />} />
      
      {/* ================================================================== */}
      {/* AI SOLUTIONS (3 routes) */}
      {/* ================================================================== */}
      <Route path={ROUTES.AI.INDEX} element={<AI />} />
      <Route path={ROUTES.AI.BFSI_AGENTS} element={<BFSIAgents />} />
      <Route path={ROUTES.AI.BRAND_MANAGEMENT} element={<BrandManagement />} />
      
      {/* ================================================================== */}
      {/* PRODUCTS (6 routes) */}
      {/* ================================================================== */}
      <Route path={ROUTES.PRODUCTS.AGENT_STUDIO} element={<AgentStudio />} />
      <Route path={ROUTES.PRODUCTS.ATLAS_API_MANAGER} element={<AtlasAPIManager />} />
      <Route path={ROUTES.PRODUCTS.OTTOHM_VIDEO} element={<OttohmVideo />} />
      <Route path={ROUTES.PRODUCTS.ITSM_TICKETING} element={<ITSMTicketing />} />
      <Route path={ROUTES.PRODUCTS.AI_OPS} element={<AIOps />} />
      <Route path={ROUTES.PRODUCTS.SMART_CONTRACTS} element={<SmartContracts />} />
      
      {/* ================================================================== */}
      {/* WHO WE ARE (5 routes) */}
      {/* ================================================================== */}
      <Route path={ROUTES.WHO_WE_ARE.OUR_TEAM} element={<OurTeam />} />
      <Route path={ROUTES.WHO_WE_ARE.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTES.WHO_WE_ARE.PARTNERS} element={<Partners />} />
      <Route path={ROUTES.WHO_WE_ARE.CAREERS} element={<Careers />} />
      <Route path={ROUTES.WHO_WE_ARE.NEWS} element={<News />} />
      
      {/* ================================================================== */}
      {/* CASE STUDIES (1 route) */}
      {/* ================================================================== */}
      <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
    </Routes>
  );
}

/**
 * VALIDATION CHECKLIST (Production Deployment):
 * 
 * [ ] All 22 routes accessible via URL
 * [ ] Browser refresh preserves current page
 * [ ] Direct URL access works (e.g., /services/cloud-practice)
 * [ ] Browser back/forward buttons work correctly
 * [ ] Navigation links use Link/NavLink (no onClick)
 * [ ] Production hosting supports deep linking (e.g., Vercel rewrites)
 * [ ] No console errors on route changes
 * [ ] SEO-friendly URLs (human-readable)
 * [ ] Mobile navigation works correctly
 * [ ] All pages render without crashes
 */
