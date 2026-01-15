/**
 * ATLAS API MANAGER PAGE
 * 
 * Presentational page wrapper for Atlas API Manager product.
 * Wraps the AtlasAPIManagerPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { AtlasAPIManagerPage } from '@/app/components/AtlasAPIManagerPage';

export function AtlasAPIManager() {
  return (
    <PageWithNavigation>
      {(props) => <AtlasAPIManagerPage {...props} />}
    </PageWithNavigation>
  );
}
