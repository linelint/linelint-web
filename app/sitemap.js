export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: 'https://linelint.com',
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://linelint.com/privacy-policy',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://linelint.com/terms-of-service',
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
