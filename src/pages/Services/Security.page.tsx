/**
 * SECURITY PAGE
 * 
 * Presentational page wrapper for Security service.
 * Wraps the SecurityPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { SecurityPage } from '@/app/components/SecurityPage';

export function Security() {
  return (
    <PageWithNavigation>
      {(props) => <SecurityPage {...props} />}
    </PageWithNavigation>
  );
}
