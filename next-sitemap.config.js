module.exports = {
  siteUrl: "https://amankmwt-portfolio.netlify.app",
  generateRobotsTxt: true,
  exclude: ["/admin/*"], // Exclude admin or other private pages
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all pages for all user agents
      { userAgent: "Googlebot", disallow: "/private" }, // Disallow private pages for specific bots
    ],
  },
};
