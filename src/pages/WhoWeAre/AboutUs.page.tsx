/**
 * ABOUT US PAGE
 * 
 * Presentational page wrapper for About Us.
 * Wraps the AboutUsPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import AboutUsPage from '@/app/components/AboutUsPage';

export function AboutUs() {
  return (
    <PageWithNavigation>
      {(props) => <AboutUsPage {...props} />}
    </PageWithNavigation>
  );
}
