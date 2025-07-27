/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://indiabulls-heights.netlify.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://indiabulls-heights.netlify.app/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api/', '/_next/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      '/': { priority: 1.0, changefreq: 'weekly' },
      '/luxury-apartments-sector-104': { priority: 0.9, changefreq: 'weekly' },
      '/amenities': { priority: 0.8, changefreq: 'monthly' },
      '/pricing': { priority: 0.9, changefreq: 'weekly' },
      '/gallery': { priority: 0.7, changefreq: 'monthly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' },
    }

    const pageConfig = customConfig[path] || {}
    
    return {
      loc: path,
      changefreq: pageConfig.changefreq || config.changefreq,
      priority: pageConfig.priority || config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
