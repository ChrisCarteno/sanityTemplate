const property = {
    name: 'property',
    title: 'Properties',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                }
            ]
        },
        {
            name: 'squareFeet',
            title: 'Square Feet',
            type: 'number'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'bedrooms',
            title: 'Bedrooms',
            type: 'number'
        },
        {
            name: 'bathrooms',
            title: 'Bathrooms',
            type: 'number'
        }
        ,
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{type: "block"}]
        },

        {
            name: 'images',
            type: 'array',
            title: 'Images',
            of: [
              {
                name: 'image',
                type: 'image',
                title: 'Image',
                options: {
                  hotspot: true,
                },
                fields: [
                  {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text',
                  },
                ],
              },
            ],
            options: {
              layout: 'grid',
            },
          },
          {
            name: 'display',
            type: 'string',
            title: 'Display as',
            description: 'How should we display these images?',
            options: {
              list: [
                { title: 'Stacked on top of eachother', value: 'stacked' },
                { title: 'In-line', value: 'inline' },
                { title: 'Carousel', value: 'carousel' },
              ],
              layout: 'radio', // <-- defaults to 'dropdown'
            },
          },
          {
            name: 'zoom',
            type: 'boolean',
            title: 'Zoom enabled',
            description: 'Should we enable zooming of images?',
          },
    ],
}

export default property;