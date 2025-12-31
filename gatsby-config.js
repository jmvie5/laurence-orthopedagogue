module.exports = {
  siteMetadata: {
    title: "Laurence, Orthopédagogue",
    siteUrl: `https://laurencebf.ca`,
    image: `/src/images/logo.webp`,
    description: "Laurence Bernard-Fontaine est l’orthopédagogue derrière la page Laurence bf, orthopédagogue. Elle est spécialisée en difficultés d’apprentissage en français (lecture/écriture) auprès d’enfants de tous âges.",
    menuLinks: [
      {
        name: "Accueil",
        link: "/"
      },
      {
        name: "À propos",
        link: "/a-propos",
      },
      {
        name: "Services",
        link: "/services"
      },
      {
        name: "Blogue",
        link: "/blogue"
      },
      {
        name: "Matériel",
        link: "/materiel"
      },
    ]
    
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 90,
          formats: ['auto', 'webp', 'avif', 'png'],
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blogue`,
        path: `${__dirname}/blogue`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: `transparent`
            },
          },
        ],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Laurence, Orthopédagogue`,
        short_name: `Laurencebf`,
        start_url: `/`,
        background_color: `#e4dacd`,
        theme_color: `#e6a97e`,
        display: `standalone`,
        icon: `src/images/logo.webp`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://laurencebf.ca',
        sitemap: 'https://laurencebf.ca/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    }
  ],
}