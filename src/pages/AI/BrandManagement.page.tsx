/**
 * BRAND MANAGEMENT PAGE
 * 
 * Presentational page wrapper for Brand Management.
 * Wraps the BrandManagementPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { BrandManagementPage } from '@/app/components/BrandManagementPage';

export function BrandManagement() {
  return (
    <PageWithNavigation>
      {(props) => <BrandManagementPage {...props} />}
    </PageWithNavigation>
  );
}
