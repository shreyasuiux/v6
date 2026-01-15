/**
 * CAREERS PAGE
 * 
 * Presentational page wrapper for Careers.
 * Wraps the CareersPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import CareersPage from '@/app/components/CareersPage';

export function Careers() {
  return (
    <PageWithNavigation>
      {(props) => <CareersPage {...props} />}
    </PageWithNavigation>
  );
}
