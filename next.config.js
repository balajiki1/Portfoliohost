const isGithubActions = process.env.GITHUB_ACTIONS || false;

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Portfoliohost';
const assetPrefix = isGithubActions ? `/${repo}/` : '';

export default {

  output: 'export',
  distDir : 'dist',
  assetPrefix: assetPrefix,
  basePath: "",
  images: {
    unoptimized: true, 
  },
  trailingSlash: true, // Ensure proper routing
};




