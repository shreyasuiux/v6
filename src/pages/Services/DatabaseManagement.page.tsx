/**
 * DATABASE MANAGEMENT PAGE
 * 
 * Presentational page wrapper for Database Management service.
 * Wraps the DatabaseManagementPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { DatabaseManagementPage } from '@/app/components/DatabaseManagementPage';

export function DatabaseManagement() {
  return (
    <PageWithNavigation>
      {(props) => <DatabaseManagementPage {...props} />}
    </PageWithNavigation>
  );
}
