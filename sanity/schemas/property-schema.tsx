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
        }
    ]
}

export default property;