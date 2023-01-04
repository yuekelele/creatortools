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
    Flex,
    Icon,
    extendTheme } from '@chakra-ui/react';
import { SiInstagram,
         SiTiktok,
         SiTwitter,
         SiYoutube,
         SiTwitch
         } from 'react-icons/si';
import { IoMdMail, 
         IoMdLink,
         IoMdShare } from 'react-icons/io'
import '@fontsource/playfair-display/400.css';
import '@fontsource/source-sans-pro/600.css';

const bodyFont = "'Playfair Display', serif"; 
const headerFont = "'Source Sans Pro', sans-serif";

const renderIcon = (social) => {
    switch(social){
        case 'Instagram':
            return  <Icon as={SiInstagram} color={'beige.100'} p={'0.1vw'} boxSize={'2vw'}/>
        case 'Tiktok':
            return  <Icon as={SiTiktok} color={'beige.100'} p={'0.1vw'} boxSize={'2vw'}/>
        case 'Twitter':
            return  <Icon as={SiTwitter} color={'beige.100'} p={'0.1vw'} boxSize={'2vw'}/>
        case 'Youtube':
            return  <Icon as={SiYoutube} color={'beige.100'} p={'0.1vw'} boxSize={'2vw'}/>
        case 'Twitch':
            return  <Icon as={SiTwitch} color={'beige.100'} p={'0.1vw'} boxSize={'2vw'} />
        default:
            return;
    }
}

export default function ContactBar(props){
    const social = props.social;
    const handle = props.handle;
    
    return (
        <Flex>
            {renderIcon(social)}
            <Text
            fontFamily={headerFont}
            fontSize={'1.2vw'}
            color={'beige.400'}
            textTransform={'uppercase'}>
                {handle}
            </Text>
        </Flex>

    );
}