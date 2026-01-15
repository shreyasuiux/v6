/**
 * PageWithNavigation Component
 * Wraps page components and provides navigation handlers via React Router
 * This eliminates the need for custom event dispatchers and state management
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

interface PageWithNavigationProps {
  children: (props: NavigationProps) => React.ReactElement;
}

export interface NavigationProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: (aiTitle?: string) => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick: () => void;
  onGetStartedClick: () => void;
  onSearchClick?: () => void;
}

/**
 * HOC that provides navigation props to any page component
 */
export function PageWithNavigation({ children }: PageWithNavigationProps) {
  const navigate = useNavigate();
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleClose = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.HOME);
  };

  const handleServiceClick = (serviceTitle: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    switch (serviceTitle) {
      case "Cloud Practice":
        navigate(ROUTES.SERVICES.CLOUD_PRACTICE);
        break;
      case "Digital & Product Engineering":
        navigate(ROUTES.SERVICES.DIGITAL_ENGINEERING);
        break;
      case "Big Data":
        navigate(ROUTES.SERVICES.BIG_DATA);
        break;
      case "App Modernization":
        navigate(ROUTES.SERVICES.APP_MODERNIZATION);
        break;
      case "Security":
        navigate(ROUTES.SERVICES.SECURITY);
        break;
      case "Database Management":
        navigate(ROUTES.SERVICES.DATABASE_MANAGEMENT);
        break;
      case "ERP & Testing":
        navigate(ROUTES.SERVICES.ERP_TESTING);
        break;
    }
  };

  const handleProductClick = (productTitle: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    switch (productTitle) {
      case "Agent Studio":
        navigate(ROUTES.PRODUCTS.AGENT_STUDIO);
        break;
      case "Atlas API Manager":
        navigate(ROUTES.PRODUCTS.ATLAS_API_MANAGER);
        break;
      case "Ottohm Video":
        navigate(ROUTES.PRODUCTS.OTTOHM_VIDEO);
        break;
      case "ITSM Ticketing Tool":
      case "ITSM Ticketing":
        navigate(ROUTES.PRODUCTS.ITSM_TICKETING);
        break;
      case "AI Ops Platform":
        navigate(ROUTES.PRODUCTS.AI_OPS);
        break;
      case "Smart Contracts":
        navigate(ROUTES.PRODUCTS.SMART_CONTRACTS);
        break;
    }
  };

  const handleAIClick = (aiTitle?: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    if (!aiTitle) {
      navigate(ROUTES.AI.INDEX);
      return;
    }
    
    switch (aiTitle) {
      case "BFSI Agents":
        navigate(ROUTES.AI.BFSI_AGENTS);
        break;
      case "Brand Management Agents":
        navigate(ROUTES.AI.BRAND_MANAGEMENT);
        break;
      default:
        navigate(ROUTES.AI.INDEX);
    }
  };

  const handleWhoWeAreItemClick = (item: string) => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    switch (item) {
      case "Our Team":
        navigate(ROUTES.WHO_WE_ARE.OUR_TEAM);
        break;
      case "About Us":
        navigate(ROUTES.WHO_WE_ARE.ABOUT_US);
        break;
      case "Partners":
        navigate(ROUTES.WHO_WE_ARE.PARTNERS);
        break;
      case "Careers":
        navigate(ROUTES.WHO_WE_ARE.CAREERS);
        break;
      case "News & Updates":
        navigate(ROUTES.WHO_WE_ARE.NEWS);
        break;
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.HOME);
  };

  const handleGrowWithUsClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(ROUTES.CASE_STUDIES);
  };

  const handleGetStartedClick = () => {
    setShowGetStarted(true);
  };

  const navigationProps: NavigationProps = {
    onClose: handleClose,
    onServiceClick: handleServiceClick,
    onAIClick: handleAIClick,
    onProductClick: handleProductClick,
    onGrowWithUsClick: handleGrowWithUsClick,
    onWhoWeAreItemClick: handleWhoWeAreItemClick,
    onLogoClick: handleLogoClick,
    onGetStartedClick: handleGetStartedClick,
  };

  return children(navigationProps);
}