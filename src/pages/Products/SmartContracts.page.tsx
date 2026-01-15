/**
 * SMART CONTRACTS PAGE
 * 
 * Presentational page wrapper for Smart Contracts product.
 * Wraps the SmartContractsPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import SmartContractsPage from '@/app/components/SmartContractsPage';

export function SmartContracts() {
  return (
    <PageWithNavigation>
      {(props) => <SmartContractsPage {...props} />}
    </PageWithNavigation>
  );
}
