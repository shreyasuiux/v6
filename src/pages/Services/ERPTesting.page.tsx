/**
 * ERP TESTING PAGE
 * 
 * Presentational page wrapper for ERP & Testing service.
 * Wraps the ERPTestingPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { ERPTestingPage } from '@/app/components/ERPTestingPage';

export function ERPTesting() {
  return (
    <PageWithNavigation>
      {(props) => <ERPTestingPage {...props} />}
    </PageWithNavigation>
  );
}
