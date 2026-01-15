/**
 * OTTOHM VIDEO PAGE
 * 
 * Presentational page wrapper for Ottohm Video product.
 * Wraps the OttohmVideoPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { OttohmVideoPage } from '@/app/components/OttohmVideoPage';

export function OttohmVideo() {
  return (
    <PageWithNavigation>
      {(props) => <OttohmVideoPage {...props} />}
    </PageWithNavigation>
  );
}
