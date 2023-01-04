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
    extendTheme, 
    Image,
    Progress,
    Stat} from '@chakra-ui/react';
import { SiInstagram,
         SiTiktok,
         SiTwitter,
         SiYoutube,
         SiTwitch
         } from 'react-icons/si';
import { IoMdMail } from 'react-icons/io'
import FollowerIcon from './FollowerIcon';
import StatDisplay from './StatDisplay';
import '@fontsource/playfair-display/400.css';
import '@fontsource/source-sans-pro/600.css';
import worldMap from '../images/worldmap.png';
import PercentageVis from './PercentageVis';
import ContactBar from './ContactBar';

const bodyFont = "'Playfair Display', serif"; 
const headerFont = "'Source Sans Pro', sans-serif";

export default function MinimalistKit(props){
    const name = props.name;
    const subheader = props.subheader;
    const bio = props.bio;
    const followers = props.followers;

    return (
        <Box
            boxShadow={'xl'}
            bg={'beige.100'}
            w={'51vw'}
            h={'66vw'}
            alignSelf={'center'}>  
                <Stack>
                    <Box
                        w={'51vw'}
                        h={'1vw'}
                        bgColor={'beige.200'} />
                    <HStack
                        w={'51vw'}
                        h={'30vw'}
                        p={'2vw'}
                        spacing={'2vw'}>
                            <Box
                                w={'23vw'}
                                h={'28vw'}
                                bgColor={'white'}>
                                    
                            </Box>
                            <Box
                                w={'23vw'}
                                h={'28vw'} 
                                >
                                    <Stack 
                                        align={'flex-start'}
                                        textAlign={'left'}>
                                        <Text 
                                            fontFamily={headerFont} 
                                            fontSize={'3vw'}
                                            color={'beige.500'}
                                            textTransform={'uppercase'}
                                            mb={'-1.2vw'}> {name} </Text>
                                        <Text 
                                            fontFamily={bodyFont} 
                                            fontSize={'1vw'}
                                            color={'beige.400'}
                                            textTransform={'uppercase'}> {subheader}</Text>
                                        <HStack spacing={'3'} w={'23vw'}>
                                            <FollowerIcon social={followers.platform1} followers={followers.followers1}/>
                                            <FollowerIcon social={followers.platform2} followers={followers.followers2}/>
                                            <FollowerIcon social={followers.platform3} followers={followers.followers3}/>
                                        </HStack>
                                        <Text 
                                            fontFamily={bodyFont} 
                                            fontSize={'1vw'}
                                            color={'beige.600'}
                                            mt={'1vw'}> 
                                                 {bio}
                                            </Text>
                                    </Stack>
                            </Box>
                    </HStack>
                    <HStack spacing={'0.5vw'}>
                        <Box
                            w={'33vw'}
                            h={'7vw'}
                            bgColor={'beige.200'}>
                                <HStack w={'33vw'} alignContent={'center'} display={'flex'} justifyContent={'center'} spacing={'2vw'} pt={'1vw'}>
                                    <StatDisplay metric={'10%'} description={'Avg IG Engagement'}/>
                                    <StatDisplay metric={'500K'} description={'Avg IG Reach'} />
                                    <StatDisplay metric={'300K'} description={'Avg Tiktok Views'} />
                                </HStack>
                        </Box>
                        <Box 
                            w={'7vw'}
                            h={'7vw'}
                            bgColor={'white'} />
                        <Box 
                            w={'7vw'}
                            h={'7vw'}
                            bgColor={'white'} />
                        <Box 
                            w={'3vw'}
                            h={'7vw'}
                            bgColor={'beige.200'} />
                    </HStack>
                    
                    <HStack
                        w={'51vw'}
                        h={'21vw'}
                        px={'2vw'}
                        spacing={'2vw'}
                        >
                            <Stack
                                w={'14vw'}
                                h={'20vw'}
                                alignContent={'center'}
                                justifyContent={'center'}
                                display={'flex'}
                                spacing={'1vw'}
                                bgColor={'beige.150'}
                                >
                                <Text 
                                    fontFamily={headerFont} 
                                    fontSize={'1.5vw'}
                                    color={'beige.400'}
                                    textTransform={'uppercase'}
                                    > 
                                    Services 
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    Instagram Feed Post
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    Instagram Reel
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    Instagram Story Post
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    TikTok Video
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    Contest/Giveaway
                                </Text>
                                
                            </Stack>
                            <Stack
                                w={'7vw'}
                                h={'20vw'}
                                alignContent={'center'}
                                justifyContent={'center'}
                                display={'flex'}
                                spacing={'1vw'}
                                bgColor={'beige.150'}
                                >
                                <Text 
                                    fontFamily={headerFont} 
                                    fontSize={'1.5vw'}
                                    color={'beige.400'}
                                    textTransform={'uppercase'}
                                    > 
                                    Rates
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    $500
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    $500
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    $500
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    $500
                                </Text>
                                <Text
                                    fontFamily={bodyFont}
                                    fontSize={'1vw'}
                                    color={'beige.500'}
                                    >
                                    $500
                                </Text>
                                
                            </Stack>
                            <Box
                                w={'23vw'}
                                h={'21vw'}
                                position={'relative'}
                                justifyContent={'center'}
                                >
                                    <Image src={worldMap} opacity={'0.1'} mt={'4vw'}/>
                                    <Stack 
                                        position={'absolute'}
                                        top={'0'} 
                                        left={'2vw'}
                                        w={'23vw'}
                                        h={'21vw'}
                                        mt={'2vw'}
                                        >
                                            <PercentageVis metric={'65'} description={'Gender: Female'}/>
                                            <PercentageVis metric={'25'} description={'Age Range: 18-24'}/>
                                            <PercentageVis metric={'40'} description={'Location: USA'}/>
                                            <Text
                                                fontFamily={headerFont}
                                                fontSize={'1.5vw'}
                                                color={'beige.400'}
                                                textTransform={'uppercase'}
                                                as={'b'}
                                                pt={'0.7vw'}>
                                                    Audience Demographics
                                            </Text>
                                    </Stack>
                            </Box>
                    </HStack>
                    <Box
                        w={'51vw'}
                        h={'3vw'}
                        bgColor={'beige.200'}
                        justifyContent={'center'}
                        display={'flex'}>
                            <HStack spacing={'2vw'}>
                                <Text
                                fontFamily={headerFont}
                                fontSize={'1.2vw'}
                                color={'beige.400'}
                                textTransform={'uppercase'}
                                >
                                    Contact:
                                </Text>
                                <ContactBar social={'All'} handle={'@janedoe'} />
                                <ContactBar social={'Email'} handle={'janedoe@gmail.com'} />
                            </HStack>
                    </Box>
                </Stack>
        </Box>
    );
};