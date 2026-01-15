/**
 * BIG DATA PAGE
 * 
 * Presentational page wrapper for Big Data service.
 * Wraps the BigDataPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { BigDataPage } from '@/app/components/BigDataPage';

export function BigData() {
  return (
    <PageWithNavigation>
      {(props) => <BigDataPage {...props} />}
    </PageWithNavigation>
  );
}
