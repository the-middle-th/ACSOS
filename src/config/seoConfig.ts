export const seoConfig = {
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://asiancoding.com',
  siteName: 'AsianCoding',
  defaultTitle: 'AsianCoding - B2B Barcode & Warehouse Solutions Thailand',
  defaultDescription: 'Enterprise barcode scanning, RFID warehouse systems, and retail POS solutions for Thailand businesses.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@asiancoding',
  locale: 'en_US',
  alternateLocales: ['th_TH'],
  
  pages: {
    home: {
      title: 'AsianCoding - B2B Barcode & Warehouse Solutions',
      description: 'Enterprise barcode scanning, RFID warehouse automation, and retail POS systems for Thailand.',
      path: '/',
      keywords: 'barcode scanner, warehouse system, POS, RFID, Thailand',
    },
    barcodeScanner: {
      title: 'Barcode Scanner Solutions Thailand | AsianCoding',
      description: 'Professional barcode scanning systems for retail, warehouse, and inventory management in Thailand. Increase accuracy and efficiency with our B2B solutions.',
      path: '/barcode-scanner-thailand',
      keywords: 'barcode scanner, barcode system, inventory management, retail, Thailand',
      keywordGroup: 'barcode_scanning',
    },
    rfidWarehouse: {
      title: 'RFID Warehouse System Thailand | AsianCoding',
      description: 'Advanced RFID warehouse management systems for Thailand businesses. Real-time inventory tracking, automated workflows, and supply chain optimization.',
      path: '/rfid-warehouse-system',
      keywords: 'RFID, warehouse system, inventory tracking, warehouse automation, Thailand',
      keywordGroup: 'rfid_warehouse',
    },
    warehouseAutomation: {
      title: 'Warehouse Automation Solutions Thailand | AsianCoding',
      description: 'Complete warehouse automation systems for Thailand. Optimize operations with barcode, RFID, WMS, and fulfillment automation.',
      path: '/warehouse-automation-thailand',
      keywords: 'warehouse automation, WMS, fulfillment, logistics, Thailand',
      keywordGroup: 'warehouse_automation',
    },
    retailPos: {
      title: 'Retail POS with Barcode System | AsianCoding',
      description: 'Integrated retail POS and barcode system for Thai retail businesses. Multi-location management, inventory sync, and sales analytics.',
      path: '/retail-pos-barcode-system',
      keywords: 'POS system, barcode, retail, point of sale, Thailand',
      keywordGroup: 'retail_pos',
    },
    contact: {
      title: 'Contact AsianCoding - B2B Solutions Thailand',
      description: 'Get in touch with our team. Request a demo, ask questions, or discuss your warehouse and retail automation needs.',
      path: '/contact',
      keywords: 'contact, support, inquiry, demo request',
      keywordGroup: 'general_inquiry',
    },
  },

  organization: {
    name: 'AsianCoding',
    url: 'https://asiancoding.com',
    logo: 'https://asiancoding.com/logo.png',
    description: 'B2B barcode scanning, RFID warehouse, and retail POS solutions for Thailand',
    areaServed: 'TH',
    contactPoint: {
      telephone: '+66-XXXXXXXXX',
      contactType: 'Sales Support',
      availableLanguage: ['en', 'th'],
    },
    address: {
      streetAddress: '',
      addressLocality: 'Bangkok',
      addressCountry: 'TH',
    },
  },
};
