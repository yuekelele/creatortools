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
    Button } from '@chakra-ui/react';
import Uploader from './Uploader';
import MinimalistKit from './MinimalistKit';

export default function MediaKitTool() {
    const [includeRates, setIncludeRates] = useState(false);
    const onChangeChecked = (e) => {
        setIncludeRates(e.target.checked);
      };
    
    const [upload, setUpload] = useState({
            pictures: [],
            maxFileSize: 5242880,
            imgExtension: [".jpg", ".png"],
            fileContainerStyle: {
                backgroundColor: 'transparent',
                boxShadow: 'none'
            },
            buttonStyles: {
                backgroundColor: '#F6D6C2',
                color: '#B02E0C',
                borderRadius: '5px'
            }
    });
    const handleUploader = (files) => {
        const { pictures } = upload;
        console.warn({ pictures, files });

        setUpload(upload => {
            const newUpload = {
                ...upload,
                pictures: [...pictures, ...files]
            };
            return newUpload;
          });  
      };

        
    return (
            <Box 
                boxShadow={'xl'}
                p={'6'}
                rounded={'md'}
                bg={'redyel.300'}
                minW={'80vw'}>

                <Stack spacing={'3'}>

{/*Start of Bio Section*/}
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        First Name *
                        </Text>
                        <Input size='sm' />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Last Name
                        </Text>
                        <Input placeholder='recommended but not required' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Bio/About *
                        </Text>
                        <Textarea 
                            size='sm' 
                            minH={'30vh'}
                            placeholder="It's generally a good idea to provide 3-5 sentences about what kind of content you make and what excites you."/>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Profile Photo (JPG/PNG) *
                        </Text>
                        <Uploader
                            {...upload}
                            handleChange={handleUploader}
                        />
                    </HStack>

                    <Divider />

{/*Start of Follower Count Section*/}
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            as='b'
                            >
                        Follower Counts -- 2-3 platforms
                        </Text>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform *
                        </Text>
                        <Select placeholder='Select option' defaultValue={'option1'}>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option3'>Twitch</option>
                            <option value='option3'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform *
                        </Text>
                        <Select placeholder='Select option' defaultValue={'option2'}>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option3'>Twitch</option>
                            <option value='option3'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform
                        </Text>
                        <Select placeholder='Select option'>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option3'>Twitch</option>
                            <option value='option3'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' size='sm' />
                    </HStack>

                    <Divider />

{/*Start of Stats Section*/}
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            as='b'>
                        Statistics
                        </Text>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Description *
                        </Text>
                        <Input defaultValue={'Avg IG Reach'}/>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 500K' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Description *
                        </Text>
                        <Input defaultValue={'Avg IG Engagement'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 10%' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Description *
                        </Text>
                        <Input defaultValue={'Avg TikTok Views'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 400K' size='sm' />
                    </HStack>

                    <Divider />
{/*Start of Audience Metrics Section*/}
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            as='b'>
                        Audience Metrics
                        </Text>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Gender *
                        </Text>
                        <Select placeholder='Select option'>
                            <option value='option1'>Men</option>
                            <option value='option2'>Women</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 50%' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Age Range *
                        </Text>
                        <Select placeholder='Select option'>
                            <option value='option1'>13-17</option>
                            <option value='option2'>18-24</option>
                            <option value='option3'>25-34</option>
                            <option value='option4'>35-44</option>
                            <option value='option5'>45-54</option>
                            <option value='option6'>55-64</option>
                            <option value='option7'>65+</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 25.5%' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Country *
                        </Text>
                        <Input defaultValue={'United States'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Metric
                        </Text>
                        <Input placeholder='ex. 20%' size='sm' />
                    </HStack>

                    <Divider />
{/*Start of Services Section*/}   
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            as='b'>
                        Services
                        </Text>
                        <Checkbox isChecked={includeRates} onChange={onChangeChecked}>Include Rates</Checkbox>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Service *
                        </Text>
                        <Input defaultValue={'Dedicated Instagram Feed Post'} maxW={'35vw'}/>
                        <Fade in={includeRates}>
                            <HStack>
                            <Text 
                                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                                minW={'10vw'}
                                color={'redyel.900'}>
                            Rate
                            </Text>
                            <Input placeholder='ex. $500' size='sm' />
                            </HStack>
                        </Fade>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Service *
                        </Text>
                        <Input defaultValue={'Dedicated Instagram Reel'} maxW={'35vw'}/>
                        <Fade in={includeRates}>
                            <HStack>
                            <Text 
                                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                                minW={'10vw'}
                                color={'redyel.900'}>
                            Rate
                            </Text>
                            <Input placeholder='ex. $500' size='sm' />
                            </HStack>
                        </Fade>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Service *
                        </Text>
                        <Input defaultValue={'Dedicated Instagram Story Post'} maxW={'35vw'}/>
                        <Fade in={includeRates}>
                            <HStack>
                            <Text 
                                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                                minW={'10vw'}
                                color={'redyel.900'}>
                            Rate
                            </Text>
                            <Input placeholder='ex. $500' size='sm' />
                            </HStack>
                        </Fade>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Service
                        </Text>
                        <Input defaultValue={'Dedicated TikTok Video (<1 Minute)'} maxW={'35vw'}/>
                        <Fade in={includeRates}>
                            <HStack>
                            <Text 
                                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                                minW={'10vw'}
                                color={'redyel.900'}>
                            Rate
                            </Text>
                            <Input placeholder='ex. $500' size='sm' />
                            </HStack>
                        </Fade>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Service
                        </Text>
                        <Input defaultValue={'Twitter Shoutout'} maxW={'35vw'}/>
                        <Fade in={includeRates}>
                            <HStack>
                            <Text 
                                fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                                minW={'10vw'}
                                color={'redyel.900'}>
                            Rate
                            </Text>
                            <Input placeholder='ex. $500' size='sm' />
                            </HStack>
                        </Fade>
                    </HStack>

                    <Divider />

{/*Start of Contact Section*/}
                    <HStack spacing={'3'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            as='b'>
                        Contact Information -- 2-3 methods
                        </Text>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform *
                        </Text>
                        <Select placeholder='Select option' defaultValue={'option7'}>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option4'>Twitch</option>
                            <option value='option5'>Twitter</option>
                            <option value='option6'>Website</option>
                            <option value='option7'>Email</option>
                            <option value='option8'>All Socials (if handle is same)</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Handle/Address
                        </Text>
                        <Input placeholder='for handles, please include the @' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform *
                        </Text>
                        <Select placeholder='Select option' defaultValue={'option8'}>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option4'>Twitch</option>
                            <option value='option5'>Twitter</option>
                            <option value='option6'>Website</option>
                            <option value='option7'>Email</option>
                            <option value='option8'>All Socials (if handle is same)</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Handle/Address
                        </Text>
                        <Input placeholder='for handles, please include the @' size='sm' />
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform
                        </Text>
                        <Select placeholder='Select option' defaultValue={'option2'}>
                            <option value='option1'>TikTok</option>
                            <option value='option2'>Instagram</option>
                            <option value='option3'>YouTube</option>
                            <option value='option4'>Twitch</option>
                            <option value='option5'>Twitter</option>
                            <option value='option6'>Website</option>
                            <option value='option7'>Email</option>
                            <option value='option8'>All Socials (if handle is same)</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Handle/Address
                        </Text>
                        <Input placeholder='for handles, please include the @' size='sm' />
                    </HStack>
                    
{/*Generate Kit Button*/}   
                    <Button 
                        bg={'redyel.600'}
                        color={'redyel.300'}
                        minW={'30vw'}
                        maxW={'70vw'}
                        alignSelf={'center'}
                        _hover={{
                            bg: 'redyel.500',
                        }} >
                            Generate Media Kit
                    </Button>
{/*Render Kit Area*/}   
                    <MinimalistKit />
                </Stack>
            </Box>
    );
};
