/**
 * AGENT STUDIO PAGE
 * 
 * Presentational page wrapper for Agent Studio product.
 * Wraps the AgentStudioPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { AgentStudioPage } from '@/app/components/AgentStudioPage';

export function AgentStudio() {
  return (
    <PageWithNavigation>
      {(props) => <AgentStudioPage {...props} />}
    </PageWithNavigation>
  );
}
