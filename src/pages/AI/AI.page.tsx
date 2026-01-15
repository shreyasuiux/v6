/**
 * AI SOLUTIONS PAGE
 * 
 * Presentational page wrapper for AI Solutions.
 * Wraps the AIPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { AIPage } from '@/app/components/AIPage';

export function AI() {
  return (
    <PageWithNavigation>
      {(props) => <AIPage {...props} />}
    </PageWithNavigation>
  );
}
