/**
 * APP MODERNIZATION PAGE
 * 
 * Presentational page wrapper for App Modernization service.
 * Wraps the AppModernizationPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { AppModernizationPage } from '@/app/components/AppModernizationPage';

export function AppModernization() {
  return (
    <PageWithNavigation>
      {(props) => <AppModernizationPage {...props} />}
    </PageWithNavigation>
  );
}
