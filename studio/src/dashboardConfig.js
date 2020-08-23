export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e8a1afc2c6796149c536ba1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4cr8nppi',
                  apiId: '57d69339-e068-450f-8c0e-435702ac7b48'
                },
                {
                  buildHookId: '5e8a1afcc529ce515e6ee9d2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zsmygcks',
                  apiId: '95d62bde-93ed-4953-9ac8-e6a092442502'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alienwizard/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-zsmygcks.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent pattern posts', order: '_createdAt desc', types: ['pattern']},
      layout: {width: 'medium'}
    }
  ]
}
