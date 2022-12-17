// We use sub-path routing. To change to domain routing, see https://nextjs.org/docs/advanced-features/i18n-routing#domain-routing
module.exports = {
  // These are all the locales you want to support in
  // your application
  locales: ['en', 'nl', 'de', 'fr'],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  defaultLocale: 'en',
  pages: {
    '/': ['home', 'keyboardApp', 'tutorApp'],
  },
};
