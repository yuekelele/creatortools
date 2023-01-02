import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Icon,
    IconProps,
    extendTheme,
    Collapse,
    Box,
    useDisclosure
  } from '@chakra-ui/react';
import '@fontsource/raleway/600.css';
import '@fontsource/open-sans/400.css';

  const redtheme = extendTheme({
    colors: {
      redyel: {
        100: "#ED9B40", // mellow yellow
        200: "#F6C58E", // pale yellow
        300: "#FFEEDB", // beige white
        400: "#F6D6C2", // pale pink (red 1)
        500: "#ECBEA8", // red 2
        600: "#D88E74", // red 3
        700: "#C45E40", // red 4
        800: "#B02E0C", // bright red (red 5)
        900: "#711E09", // dark dark red (red 6)
        1000: "#230C06" // essentially black w/ red
      },
    },
    fonts: {
        body: `'Open Sans', sans-serif`,
        heading: `'Raleway', sans-serif`,
      },
  });
  
  
  export default function Header() {
    const { isOpen, onToggle } = useDisclosure()

    return (
      <Container maxW={'4xl'} theme={redtheme} >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 15, md: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            color={'redyel.1000'}
            lineHeight={'110%'}>
            Influencer media kits{' '}
            <Text as={'span'} color={'redyel.700'}>
              made easy
            </Text>
          </Heading>
          <Text color={'redyel.900'} maxW={'3xl'}>
            A customizable media kit generator for influencers -- no design skills required.
            Just enter your information and download your PDF!
          </Text>

          <Button 
            onClick={onToggle}
            bg={'redyel.600'}
            color={'redyel.300'}
            minW={'10vw'}
            _hover={{
                bg: 'redyel.500',
              }} >
                Guidelines
          </Button>
            <Collapse in={isOpen} animateOpacity>
                <Box
                p='40px'
                color='white'
                mt='4'
                bg='redyel.600'
                rounded='md'
                shadow='md'
                maxW='70vw'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
            </Collapse>
        </Stack>
      </Container>
    );
    }