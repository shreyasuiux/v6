/**
 * DIGITAL ENGINEERING PAGE
 * 
 * Presentational page wrapper for Digital & Product Engineering service.
 * Wraps the DigitalEngineeringPage component with navigation.
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { DigitalEngineeringPage } from '@/app/components/DigitalEngineeringPage';

export function DigitalEngineering() {
  return (
    <PageWithNavigation>
      {(props) => <DigitalEngineeringPage {...props} />}
    </PageWithNavigation>
  );
}
