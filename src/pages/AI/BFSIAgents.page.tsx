/**
 * BFSI AGENTS PAGE
 * 
 * Presentational page wrapper for BFSI Agents.
 * Wraps the BFSIAgentsPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import BFSIAgentsPage from '@/app/components/BFSIAgentsPage';

export function BFSIAgents() {
  return (
    <PageWithNavigation>
      {(props) => <BFSIAgentsPage {...props} />}
    </PageWithNavigation>
  );
}
