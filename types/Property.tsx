import { PortableTextBlock } from "sanity";

export type Property = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    url: string;
    content: PortableTextBlock[];
}
