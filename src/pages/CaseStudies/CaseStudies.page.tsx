/**
 * CASE STUDIES PAGE
 * 
 * Presentational page wrapper for Case Studies.
 * Wraps the CaseStudiesPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { CaseStudiesPage } from '@/app/components/CaseStudiesPage';

export function CaseStudies() {
  return (
    <PageWithNavigation>
      {(props) => <CaseStudiesPage {...props} />}
    </PageWithNavigation>
  );
}
