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

export default function PercentageVis(props){
    const metric = parseInt(props.metric.toString());
    const description = props.description;
    const percentWidth = ((18/100)*metric).toString()+'vw';
    const percentMetric = props.metric.toString() + '%';
    const leftOverWidth = ((18/100)*(1-metric)).toString()+'vw';

    return(
        <Stack>
            <Text
                fontFamily={bodyFont}
                fontSize={'1.1vw'}
                color={'beige.500'}
                alignSelf={'flex-start'}
                mb={'-0.7vw'}>
                {description}
            </Text>
            <Box
            h={'2.1vw'}
            w={'18vw'} 
            bgColor={'beige.200'}
            position={'relative'}>
                <Box
                    h={'2.1vw'}
                    w={percentWidth} 
                    bgColor={'beige.400'}
                    position={'absolute'}
                    opacity={'0.8'}
                    />
                <Box
                    h={'2vw'}
                    w={leftOverWidth}
                    position={'absolute'}
                    left={percentWidth}
                    ml={'0.5vw'}>
                        <Text
                        fontFamily={bodyFont}
                        fontSize={'1.1vw'}
                        color={'beige.500'}>
                            {percentMetric}
                        </Text>
                </Box>
            </Box>
        </Stack>
    )
}