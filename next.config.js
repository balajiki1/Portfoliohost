const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfoliohost';
const assetPrefix = isGithubActions ? `/${repo}/` : '';
const basePath = isGithubActions ? `/${repo}` : '';
export default {

  output: 'export', // Enables static export for Next.js
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Disable image optimization
  },
  trailingSlash: true, // Ensure proper routing
};




