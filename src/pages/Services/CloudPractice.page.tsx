/**
 * CLOUD PRACTICE PAGE
 * 
 * Presentational page wrapper for Cloud Practice service.
 * Wraps the CloudPracticePage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { CloudPracticePage } from '@/app/components/CloudPracticePage';

export function CloudPractice() {
  return (
    <PageWithNavigation>
      {(props) => <CloudPracticePage {...props} />}
    </PageWithNavigation>
  );
}
