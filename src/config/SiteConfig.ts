export const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Na Froncie', // Navigation and Site Title
  siteTitleAlt: 'Na Froncie - Frontend new', // Alternative Site title for SEO
  siteUrl: 'https://typescript-power-blog.github.com', // Domain of your site. No trailing slash!
  siteLanguage: 'pl', // Language Tag on <html> element
  defaultBg: 'static/default_post.jpg', // default post background header
  favicon: 'static/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Front-end, Programowanie, Newsy', // Your site description
  author: 'Łukasz Tyszkiewicz',
  siteLogo: 'static/sigil.svg', 

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username - Optional
  ogSiteName: '', // Facebook Site Name - Optional
  ogLanguage: '', // Facebook Language

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#3498DB',
  backgroundColor: '#2b2e3c',

  // Settings for typography.ts
  headerFontFamily: 'Arvo',
  bodyFontFamily: 'Cabin',
  baseFontSize: '18px',

  // Social media
  siteFBAppID: '',

  GOOGLE_TAG_MANAGER_ID: 'GTM-XXXXXXX',
  POST_PER_PAGE: 10,
  HOMEPAGE_POSTS: 4,
};
export default config;
