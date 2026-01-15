/**
 * HOME PAGE
 * 
 * Presentational page wrapper for the home screen.
 * Wraps the Desktop72 design component with navigation.
 * 
 * Architecture:
 * - Pages layer: This file (routing unit)
 * - Design layer: Desktop72 component (presentational, Figma-generated)
 * - Navigation: PageWithNavigation wrapper
 * - Assets: Injected from centralized asset manifest
 * 
 * Asset Injection:
 * - Home page assets imported from @/assets/assetManifest
 * - Assets passed as props to Desktop72Wrapper
 * - Zero figma:asset dependencies (100% isolated)
 */

import React from 'react';
import { PageWithNavigation } from '@/app/components/PageWithNavigation';
import { Desktop72Wrapper } from '@/design/Desktop72.wrapper';
import { homeAssets } from '@/assets/assetManifest';

export function HomePage() {
  return (
    <PageWithNavigation>
      {(props) => (
        <Desktop72Wrapper 
          assets={homeAssets}
          onSearchClick={props.onSearchClick} 
        />
      )}
    </PageWithNavigation>
  );
}