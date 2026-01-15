/**
 * CENTRALIZED ROUTING CONFIGURATION
 * 
 * This file contains all application routes in one place.
 * Following React Router v6+ best practices with proper Pages layer architecture.
 * 
 * ARCHITECTURE:
 * - Single source of truth for all routes
 * - Routes map to pages in /src/pages/
 * - Pages wrap components and provide navigation
 * - Real URL-based routing that works on refresh and direct access
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Page imports - all routing units from /src/pages/
import { HomePage } from '@/pages/Home/Home.page';
import { CloudPractice } from '@/pages/Services/CloudPractice.page';
import { DigitalEngineering } from '@/pages/Services/DigitalEngineering.page';
import { BigData } from '@/pages/Services/BigData.page';
import { AppModernization } from '@/pages/Services/AppModernization.page';
import { Security } from '@/pages/Services/Security.page';
import { DatabaseManagement } from '@/pages/Services/DatabaseManagement.page';
import { ERPTesting } from '@/pages/Services/ERPTesting.page';
import { AI } from '@/pages/AI/AI.page';
import { BFSIAgents } from '@/pages/AI/BFSIAgents.page';
import { BrandManagement } from '@/pages/AI/BrandManagement.page';
import { AgentStudio } from '@/pages/Products/AgentStudio.page';
import { AtlasAPIManager } from '@/pages/Products/AtlasAPIManager.page';
import { OttohmVideo } from '@/pages/Products/OttohmVideo.page';
import { ITSMTicketing } from '@/pages/Products/ITSMTicketing.page';
import { AIOps } from '@/pages/Products/AIOps.page';
import { SmartContracts } from '@/pages/Products/SmartContracts.page';
import { OurTeam } from '@/pages/WhoWeAre/OurTeam.page';
import { AboutUs } from '@/pages/WhoWeAre/AboutUs.page';
import { Partners } from '@/pages/WhoWeAre/Partners.page';
import { Careers } from '@/pages/WhoWeAre/Careers.page';
import { News } from '@/pages/WhoWeAre/News.page';
import { CaseStudies } from '@/pages/CaseStudies/CaseStudies.page';

/**
 * Route path constants for consistency across the application
 * These paths define the URL structure of the entire application
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

/**
 * Main routing component
 * All route definitions are centralized here
 * 
 * ROUTING RULES:
 * - Each route maps to a page component from /src/pages/
 * - Pages handle navigation wrapping and component rendering
 * - URLs update on navigation and work on browser refresh
 * - Direct URL access works correctly
 * - No state-based navigation - all declarative routing
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Home Page */}
      <Route path={ROUTES.HOME} element={<HomePage />} />
      
      {/* Service Routes */}
      <Route path={ROUTES.SERVICES.CLOUD_PRACTICE} element={<CloudPractice />} />
      <Route path={ROUTES.SERVICES.DIGITAL_ENGINEERING} element={<DigitalEngineering />} />
      <Route path={ROUTES.SERVICES.BIG_DATA} element={<BigData />} />
      <Route path={ROUTES.SERVICES.APP_MODERNIZATION} element={<AppModernization />} />
      <Route path={ROUTES.SERVICES.SECURITY} element={<Security />} />
      <Route path={ROUTES.SERVICES.DATABASE_MANAGEMENT} element={<DatabaseManagement />} />
      <Route path={ROUTES.SERVICES.ERP_TESTING} element={<ERPTesting />} />
      
      {/* AI Routes */}
      <Route path={ROUTES.AI.INDEX} element={<AI />} />
      <Route path={ROUTES.AI.BFSI_AGENTS} element={<BFSIAgents />} />
      <Route path={ROUTES.AI.BRAND_MANAGEMENT} element={<BrandManagement />} />
      
      {/* Product Routes */}
      <Route path={ROUTES.PRODUCTS.AGENT_STUDIO} element={<AgentStudio />} />
      <Route path={ROUTES.PRODUCTS.ATLAS_API_MANAGER} element={<AtlasAPIManager />} />
      <Route path={ROUTES.PRODUCTS.OTTOHM_VIDEO} element={<OttohmVideo />} />
      <Route path={ROUTES.PRODUCTS.ITSM_TICKETING} element={<ITSMTicketing />} />
      <Route path={ROUTES.PRODUCTS.AI_OPS} element={<AIOps />} />
      <Route path={ROUTES.PRODUCTS.SMART_CONTRACTS} element={<SmartContracts />} />
      
      {/* Who We Are Routes */}
      <Route path={ROUTES.WHO_WE_ARE.OUR_TEAM} element={<OurTeam />} />
      <Route path={ROUTES.WHO_WE_ARE.ABOUT_US} element={<AboutUs />} />
      <Route path={ROUTES.WHO_WE_ARE.PARTNERS} element={<Partners />} />
      <Route path={ROUTES.WHO_WE_ARE.CAREERS} element={<Careers />} />
      <Route path={ROUTES.WHO_WE_ARE.NEWS} element={<News />} />
      
      {/* Case Studies Route */}
      <Route path={ROUTES.CASE_STUDIES} element={<CaseStudies />} />
    </Routes>
  );
}
