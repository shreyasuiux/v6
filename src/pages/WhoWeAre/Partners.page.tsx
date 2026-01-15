/**
 * PARTNERS PAGE
 * 
 * Presentational page wrapper for Partners.
 * Wraps the PartnersPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import PartnersPage from '@/app/components/PartnersPage';

export function Partners() {
  return (
    <PageWithNavigation>
      {(props) => <PartnersPage {...props} />}
    </PageWithNavigation>
  );
}
