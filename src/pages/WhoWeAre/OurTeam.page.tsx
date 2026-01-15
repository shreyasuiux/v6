/**
 * OUR TEAM PAGE
 * 
 * Presentational page wrapper for Our Team.
 * Wraps the OurTeamPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { OurTeamPage } from '@/app/components/OurTeamPage';

export function OurTeam() {
  return (
    <PageWithNavigation>
      {(props) => <OurTeamPage {...props} />}
    </PageWithNavigation>
  );
}
