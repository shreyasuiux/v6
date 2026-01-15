/**
 * AI OPS PAGE
 * 
 * Presentational page wrapper for AI Ops Platform product.
 * Wraps the AIOpsPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import AIOpsPage from '@/app/components/AIOpsPage';

export function AIOps() {
  return (
    <PageWithNavigation>
      {(props) => <AIOpsPage {...props} />}
    </PageWithNavigation>
  );
}
