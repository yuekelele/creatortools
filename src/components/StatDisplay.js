import React, { Component, useState } from 'react';
import { Box,
    HStack, 
    Stack, 
    Checkbox, 
    Input, 
    Text, 
    Textarea,
    Select,
    Divider,
    Fade,
    Button,
    Icon,
    Flex,
    extendTheme } from '@chakra-ui/react';
import { SiInstagram,
         SiTiktok,
         SiTwitter,
         SiYoutube,
         SiTwitch
         } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io'
import FollowerIcon from './FollowerIcon';
import '@fontsource/playfair-display/400.css';
import '@fontsource/source-sans-pro/600.css';

const bodyFont = "'Playfair Display', serif"; 
const headerFont = "'Source Sans Pro', sans-serif";

export default function StatDisplay(props){
    const metric = props.metric;
    const description = props.description;

    return(
        <Stack>
            <Text
                fontFamily={bodyFont}
                fontSize={'2.2vw'}
                color={'beige.500'}
                mb={'-0.8vw'}>
                {metric}
            </Text>
            <Text
                fontFamily={headerFont}
                fontSize={'1vw'}
                color={'beige.400'}
                textTransform={'uppercase'}>
                {description}
            </Text>
        </Stack>
    )
}