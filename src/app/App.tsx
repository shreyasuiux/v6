// Main App Component with React Router Integration
import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SearchModal } from "./components/SearchModal";
import { Footer } from "./components/Footer";
import { GetStartedModal } from "./components/GetStartedModal";
import { AppRouter, ROUTES } from "@/router/AppRouter";

// Inner component that uses navigation hooks
function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const navigate = useNavigate();

  // Navigation handlers for Footer component
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

  return (
    <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
      {/* Centralized routing - all routes defined in /src/router/AppRouter.tsx */}
      <AppRouter />
      
      {/* Global Footer - appears on all pages */}
      <Footer 
        onServiceClick={handleServiceClick}
        onProductClick={handleProductClick}
        onWhoWeAreItemClick={handleWhoWeAreItemClick}
        onLogoClick={handleLogoClick}
      />
      
      {/* Global Modals */}
      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      
      <GetStartedModal
        isOpen={showGetStarted}
        onClose={() => setShowGetStarted(false)}
      />
    </div>
  );
}

// Main App component wrapper with BrowserRouter
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </BrowserRouter>
  );
}