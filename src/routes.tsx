/**
 * CENTRALIZED ROUTING CONFIGURATION
 * This file contains all application routes in one place
 * Following React Router v6+ best practices
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Desktop2 from './imports/Desktop72';
import { CloudPracticePage } from './app/components/CloudPracticePage';
import { DigitalEngineeringPage } from './app/components/DigitalEngineeringPage';
import { BigDataPage } from './app/components/BigDataPage';
import { AppModernizationPage } from './app/components/AppModernizationPage';
import { SecurityPage } from './app/components/SecurityPage';
import { DatabaseManagementPage } from './app/components/DatabaseManagementPage';
import { ERPTestingPage } from './app/components/ERPTestingPage';
import { AIPage } from './app/components/AIPage';
import BFSIAgentsPage from './app/components/BFSIAgentsPage';
import { BrandManagementPage } from './app/components/BrandManagementPage';
import { AgentStudioPage } from './app/components/AgentStudioPage';
import { AtlasAPIManagerPage } from './app/components/AtlasAPIManagerPage';
import { OttohmVideoPage } from './app/components/OttohmVideoPage';
import ITSMTicketingPage from './app/components/ITSMTicketingPage';
import AIOpsPage from './app/components/AIOpsPage';
import SmartContractsPage from './app/components/SmartContractsPage';
import { CaseStudiesPage } from './app/components/CaseStudiesPage';
import { OurTeamPage } from './app/components/OurTeamPage';
import AboutUsPage from './app/components/AboutUsPage';
import PartnersPage from './app/components/PartnersPage';
import CareersPage from './app/components/CareersPage';
import NewsUpdatesPage from './app/components/NewsUpdatesPage';
import { PageWithNavigation } from './app/components/PageWithNavigation';

/**
 * Route path constants for consistency across the application
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
 */
export function AppRoutes() {
  return (
    <Routes>
      {/* Home Page */}
      <Route 
        path={ROUTES.HOME} 
        element={
          <PageWithNavigation>
            {(props) => <Desktop2 onSearchClick={props.onSearchClick} />}
          </PageWithNavigation>
        } 
      />
      
      {/* Service Routes */}
      <Route 
        path={ROUTES.SERVICES.CLOUD_PRACTICE} 
        element={
          <PageWithNavigation>
            {(props) => <CloudPracticePage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.DIGITAL_ENGINEERING} 
        element={
          <PageWithNavigation>
            {(props) => <DigitalEngineeringPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.BIG_DATA} 
        element={
          <PageWithNavigation>
            {(props) => <BigDataPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.APP_MODERNIZATION} 
        element={
          <PageWithNavigation>
            {(props) => <AppModernizationPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.SECURITY} 
        element={
          <PageWithNavigation>
            {(props) => <SecurityPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.DATABASE_MANAGEMENT} 
        element={
          <PageWithNavigation>
            {(props) => <DatabaseManagementPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.SERVICES.ERP_TESTING} 
        element={
          <PageWithNavigation>
            {(props) => <ERPTestingPage {...props} />}
          </PageWithNavigation>
        } 
      />
      
      {/* AI Routes */}
      <Route 
        path={ROUTES.AI.INDEX} 
        element={
          <PageWithNavigation>
            {(props) => <AIPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.AI.BFSI_AGENTS} 
        element={
          <PageWithNavigation>
            {(props) => <BFSIAgentsPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.AI.BRAND_MANAGEMENT} 
        element={
          <PageWithNavigation>
            {(props) => <BrandManagementPage {...props} />}
          </PageWithNavigation>
        } 
      />
      
      {/* Product Routes */}
      <Route 
        path={ROUTES.PRODUCTS.AGENT_STUDIO} 
        element={
          <PageWithNavigation>
            {(props) => <AgentStudioPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.PRODUCTS.ATLAS_API_MANAGER} 
        element={
          <PageWithNavigation>
            {(props) => <AtlasAPIManagerPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.PRODUCTS.OTTOHM_VIDEO} 
        element={
          <PageWithNavigation>
            {(props) => <OttohmVideoPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.PRODUCTS.ITSM_TICKETING} 
        element={
          <PageWithNavigation>
            {(props) => <ITSMTicketingPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.PRODUCTS.AI_OPS} 
        element={
          <PageWithNavigation>
            {(props) => <AIOpsPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.PRODUCTS.SMART_CONTRACTS} 
        element={
          <PageWithNavigation>
            {(props) => <SmartContractsPage {...props} />}
          </PageWithNavigation>
        } 
      />
      
      {/* Who We Are Routes */}
      <Route 
        path={ROUTES.WHO_WE_ARE.OUR_TEAM} 
        element={
          <PageWithNavigation>
            {(props) => <OurTeamPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.WHO_WE_ARE.ABOUT_US} 
        element={
          <PageWithNavigation>
            {(props) => <AboutUsPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.WHO_WE_ARE.PARTNERS} 
        element={
          <PageWithNavigation>
            {(props) => <PartnersPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.WHO_WE_ARE.CAREERS} 
        element={
          <PageWithNavigation>
            {(props) => <CareersPage {...props} />}
          </PageWithNavigation>
        } 
      />
      <Route 
        path={ROUTES.WHO_WE_ARE.NEWS} 
        element={
          <PageWithNavigation>
            {(props) => <NewsUpdatesPage {...props} />}
          </PageWithNavigation>
        } 
      />
      
      {/* Case Studies Route */}
      <Route 
        path={ROUTES.CASE_STUDIES} 
        element={
          <PageWithNavigation>
            {(props) => <CaseStudiesPage {...props} />}
          </PageWithNavigation>
        } 
      />
    </Routes>
  );
}