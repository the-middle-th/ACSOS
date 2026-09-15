import { useEffect, useState } from 'react';
import { captureUrlParams, getKeywordGroupFromPath, AttributionData } from '@/utils/attribution';

export function useAttribution() {
  const [attribution, setAttribution] = useState<AttributionData>({
    utm_source: 'direct',
    utm_medium: 'organic',
    utm_campaign: '',
    source_page: '',
    cta_source: '',
    keyword_group: '',
    timestamp: new Date().toISOString(),
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const urlParams = captureUrlParams();
    const keywordGroup = getKeywordGroupFromPath(window.location.pathname);

    setAttribution((prev) => ({
      ...prev,
      ...urlParams,
      source_page: window.location.pathname,
      keyword_group: keywordGroup,
      timestamp: new Date().toISOString(),
    }));
  }, []);

  return attribution;
}
