/**
 * NEWS & UPDATES PAGE
 * 
 * Presentational page wrapper for News & Updates.
 * Wraps the NewsUpdatesPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import NewsUpdatesPage from '@/app/components/NewsUpdatesPage';

export function News() {
  return (
    <PageWithNavigation>
      {(props) => <NewsUpdatesPage {...props} />}
    </PageWithNavigation>
  );
}
