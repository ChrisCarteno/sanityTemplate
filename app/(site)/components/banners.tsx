"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { getProjects } from '@/sanity/sanity-utils';


type PurposeProps = {
    purpose: string,
    title1: string,
    title2: string,
    desc1: string,
    buttonText: string,
    LinkName: string,
    imageUrl: string  
};

const Banner: React.FunctionComponent<PurposeProps> = ( props ) => {
    const {purpose} = props;
    const {title1} = props;
    const {title2} = props; 
    const {desc1} = props;
    const {buttonText} = props;
    const {LinkName} = props;
    const {imageUrl} = props;

    return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} alt="banner" width={500} height={300}/>
        <Box p="5">
            <Text color="gray.700" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="2xl" fontWeight="bold" color="gray.700">{title1}<br /> {title2}</Text>
            <Text fontSize="lg" fontWeight="bold" color="gray.700">{desc1}</Text>
            <Button fontSize="xl" fontWeight="bold" color="gray.700">
                <Link href={LinkName}>{buttonText}</Link>
            </Button>
        </Box>
    </Flex>
    )
}

export default async function Banners() {
    const projects = await getProjects();

    return (
        <>
            <h1> Hello World! </h1>
            <Banner 
            purpose={'for sale'}
            title1='3 Bedroom House'
            title2='in the heart of the city'
            desc1='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            buttonText='View Property'
            LinkName='/'
            imageUrl={projects[1].image}
            />

        </>
    )

}
