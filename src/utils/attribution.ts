export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  source_page: string;
  cta_source: string;
  keyword_group: string;
  timestamp: string;
}

export function captureUrlParams(): Partial<AttributionData> {
  if (typeof window === 'undefined') {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direct',
    utm_medium: params.get('utm_medium') || 'organic',
    utm_campaign: params.get('utm_campaign') || '',
  };
}

export function getKeywordGroupFromPath(pathname: string): string {
  const keywordMap: { [key: string]: string } = {
    '/barcode-scanner-thailand': 'barcode_scanning',
    '/rfid-warehouse-system': 'rfid_warehouse',
    '/warehouse-automation-thailand': 'warehouse_automation',
    '/retail-pos-barcode-system': 'retail_pos',
    '/contact': 'general_inquiry',
  };
  return keywordMap[pathname] || 'unknown';
}

export function buildAttributionPayload(
  sourcePage: string,
  ctaSource: string,
  utmParams: Partial<AttributionData>
): AttributionData {
  return {
    source_page: sourcePage,
    cta_source: ctaSource,
    utm_source: utmParams.utm_source || 'direct',
    utm_medium: utmParams.utm_medium || 'organic',
    utm_campaign: utmParams.utm_campaign || '',
    keyword_group: getKeywordGroupFromPath(sourcePage),
    timestamp: new Date().toISOString(),
  };
}
