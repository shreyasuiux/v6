/**
 * ITSM TICKETING PAGE
 * 
 * Presentational page wrapper for ITSM Ticketing product.
 * Wraps the ITSMTicketingPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import ITSMTicketingPage from '@/app/components/ITSMTicketingPage';

export function ITSMTicketing() {
  return (
    <PageWithNavigation>
      {(props) => <ITSMTicketingPage {...props} />}
    </PageWithNavigation>
  );
}
