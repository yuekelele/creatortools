import React, { Component, useState, useRef, useEffect } from 'react';
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
import * as htmlToImage from 'html-to-image';


export default function MediaKitTool(props) {
    const redtheme = props.redtheme;

    const handleDownloadJpg = async () => {
        htmlToImage.toJpeg(document.getElementById('printReference'), { quality: 0.95 })
            .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'media-kit.jpeg';
        link.href = dataUrl;
        link.click();
        });
      };

    const [mediaKit, setMediaKit] = useState({
        name: '',
        subheader: '',
        bio: '',
        profilePhoto: [],
        followerCounts: [],
        stats: [],
        audience: [],
        services: [],
        rates: [],
        contact: [],
        addlPhotos: []
    });

    const [name, setName] = useState();
    const [subheader, setSubheader] = useState();
    const [bio, setBio] = useState();
    const [followers, setFollowers] = useState({
        platform1: '',
        followers1: '',
        platform2: '',
        followers2: '',
        platform3: '',
        followers3: ''
    });
    const handleFollowers = event => {
        const { name, value } = event.target;
        setFollowers({ ...followers, [name]: value });
    };

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
                        Name *
                        </Text>
                        <Input size='sm' value={name} onChange={event => setName(event.target.value)}/>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Subheader *
                        </Text>
                        <Input placeholder='ex. Fashion | Beauty | Lifestyle' size='sm' value={subheader} onChange={event => setSubheader(event.target.value)}/>
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
                            placeholder="It's generally a good idea to provide ~3 sentences about what kind of content you make and what excites you. For this template, you should aim for somewhere between 400-500 characters."
                            value={bio}
                            onChange={event => setBio(event.target.value)}/>
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

                    <HStack spacing={'3'}
                    maxW={'40vw'}>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        2 Accent Photos (JPG/PNG) *
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
                        <Select placeholder='Select option' 
                        value={followers.platform1} 
                        onChange={handleFollowers}
                        name={'platform1'}>
                            <option value='Tiktok'>TikTok</option>
                            <option value='Instagram'>Instagram</option>
                            <option value='Youtube'>YouTube</option>
                            <option value='Twitch'>Twitch</option>
                            <option value='Twitter'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}
                            >
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' 
                        size='sm' 
                        value={followers.followers1} 
                        onChange={handleFollowers}
                        name={'followers1'}/>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform *
                        </Text>
                        <Select placeholder='Select option' 
                        value={followers.platform2} 
                        onChange={handleFollowers}
                        name={'platform2'}>
                            <option value='Tiktok'>TikTok</option>
                            <option value='Instagram'>Instagram</option>
                            <option value='Youtube'>YouTube</option>
                            <option value='Twitch'>Twitch</option>
                            <option value='Twitter'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' 
                        size='sm' 
                        value={followers.followers2} 
                        onChange={handleFollowers}
                        name={'followers2'}/>
                    </HStack>
                    <HStack spacing={'3'}>
                        <Box minW={'5vw'} />
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Platform
                        </Text>
                        <Select placeholder='Select option' 
                        value={followers.platform3} 
                        onChange={handleFollowers}
                        name={'platform3'}>
                            <option value='Tiktok'>TikTok</option>
                            <option value='Instagram'>Instagram</option>
                            <option value='Youtube'>YouTube</option>
                            <option value='Twitch'>Twitch</option>
                            <option value='Twitter'>Twitter</option>
                        </Select>
                        <Text 
                            fontSize={{ base: 'sm', sm: 'sm', md: 'md' }}
                            minW={'10vw'}
                            color={'redyel.900'}>
                        Followers
                        </Text>
                        <Input placeholder='round up to nearest 100' 
                        size='sm' 
                        value={followers.followers3} 
                        onChange={handleFollowers}
                        name={'followers3'}/>
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
                    <Divider/>

{/*Render Kit Area*/}
                    <Box p={'3vh'} justifyContent={'center'} display={'flex'}>
                        <div id={'printReference'} w={'51vw'} h={'66vw'}>
                            <MinimalistKit 
                                name={name}
                                subheader={subheader}
                                bio={bio}
                                followers={followers}/>
                        </div>
                    </Box>
{/*Generate PDF Button*/}  
                     <Button 
                        bg={'redyel.600'}
                        color={'redyel.300'}
                        minW={'30vw'}
                        maxW={'70vw'}
                        alignSelf={'center'}s
                        _hover={{
                            bg: 'redyel.500',
                        }}
                        onClick={handleDownloadJpg}>
                            Download as JPEG
                    </Button>
                </Stack>
            </Box>
    );
};
