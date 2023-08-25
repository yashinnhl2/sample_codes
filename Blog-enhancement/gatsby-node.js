const graphql = require('gatsby').graphql;
const path = require('path');
const { getFirstImage } = require('./src/utils/ast-parser');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            htmlAst
            frontmatter {
              templateKey
              title
              relatedArticles
              time
              subTitle
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const pages = result.data.allMarkdownRemark.edges;

    const generateRelatedArticle = (relatedArticles) => {
      if(!Array.isArray(relatedArticles)) return [];



      const result = pages
        .filter(edge => {
          return relatedArticles.includes(edge.node.fields.slug);
        })
        .map(
          ({
            node: {
              id,
              htmlAst,
              fields: { slug },
              frontmatter: { title, time, subTitle }
            }
          }) => ({
            id,
            title,
            time,
            subTitle,
            slug,
            img: getFirstImage(htmlAst)?.src
          })
        );

        return result;
    };

    pages
      .map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter: { templateKey, relatedArticles }
          }
        }) => ({
          id,
          slug,
          templateKey,
          relatedArticles
        })
      )
      .filter(({ templateKey }) => Boolean(templateKey))
      .forEach(({ id, slug, templateKey, relatedArticles }) => {
        createPage({
          path: slug,
          component: path.resolve(`src/templates/${String(templateKey)}.js`),
          // additional data can be passed via context
          context: {
            id,
            relatedArticles: generateRelatedArticle(relatedArticles),
            slug
          }
        });
      });

    return Promise.resolve();
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  const fileNode = getNode(node.parent);

  if (node.internal.type === `MarkdownRemark` && fileNode.internal.type === `File`) {
    const parsedFilePath = path.parse(fileNode.relativePath);
    let slug;

    if (node.frontmatter && node.frontmatter.slug) {
      slug = `/${parsedFilePath.dir}/${node.frontmatter.slug}/`;
    } else if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === ``) {
      slug = `/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    createNodeField({
      name: `slug`,
      node,
      value: slug
    });
  }
};

// support async/await in compiled scripts https://github.com/gatsbyjs/gatsby/issues/3931#issuecomment-364628369
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `@babel/plugin-transform-runtime`
  });
};

// https://www.gatsbyjs.org/docs/add-custom-webpack-config/#modifying-the-babel-loader
exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      path: require.resolve('path-browserify')
    },
    fallback: {
      ...config.resolve.fallback,
      path: false
    }
  };

  config.module.rules = [
    {
      test: /node_modules\/vfile\/core\.js/,
      use: [
        {
          loader: 'imports-loader',
          options: {
            type: 'commonjs',
            imports: ['single process/browser process', 'single path-browserify path']
          }
        }
      ]
    },
    // Omit the default rule where test === '\.jsx?$'
    ...config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/)),

    // Recreate it with custom exclude filter
    {
      // Called without any arguments, `loaders.js` will return an
      // object like:
      // {
      //   options: undefined,
      //   loader: '/path/to/node_modules/gatsby/dist/utils/babel-loader.js',
      // }
      // Unless you're replacing Babel with a different transpiler, you probably
      // want this so that Gatsby will apply its required Babel
      // presets/plugins.  This will also merge in your configuration from
      // `babel.config.js`.
      ...loaders.js(),

      test: /\.js?$/,

      // Exclude all node_modules from transpilation, except for 'rehype'
      exclude: modulePath => /node_modules/.test(modulePath) && !/node_modules\/(rehype)/.test(modulePath)
    }
  ];

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};
