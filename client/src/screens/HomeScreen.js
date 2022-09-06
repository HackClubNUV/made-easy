import React from 'react';
import { Container, Flex, Text, Button, Image, Link } from '@chakra-ui/react';
import theme from '../helper/theme.js';
import Img from '../assets/GDSCNUV.png';
import dsccenter from '../assets/GDSC Center smooth.png';
import Img2 from '../assets/hero-img.gif';
import '../assets/dsc.min.css';
import auth from '../helper/auth';

const discordAuth = () => {
  window.open(
    `https://discord.com/api/oauth2/authorize?client_id=871148961191297074&redirect_uri=https%3A%2F%2Fgdscnuv.herokuapp.com%2Fapply&response_type=token&scope=identify`,
    '_parent'
  );
  auth.login();
};

const HomeScreen = () => {
  return (
    <Container maxW="container.lg" centerContent>
      <Image
        // marginTop="1"
        width={{ base: '210px', md: '300px' }}
        // boxSize="200px"
        // width="30px"
        objectFit="contain"
        src={dsccenter}
        alt="Application"
      ></Image>
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems="center"
        marginBottom="3"
      >
        {/* <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="#4285F4"
                >Google Developer Student Clubs - </Text> */}
        <Text
          fontSize={{ base: 'lg', md: '4xl' }}
          fontWeight="bold"
          color="#4285F4"
        >
          &nbsp;Application Process
        </Text>
      </Flex>
      {/* <Flex flexDirection={{ base: "column", md: "row" }} alignItems="flex-start" marginBottom="8">
                <Text
                    fontSize="2xl"
                    // fontWeight="bold"
                    color="#4285F4"
                >Navrachana University</Text>
            </Flex> */}

      <Container
        maxW="container.lg"
        paddingX={{ base: '5', md: '13' }}
        marginBottom="3"
      >
        <Text
          textAlign={{ base: 'justify', md: 'center' }}
          fontSize={{ base: '13', md: '17' }}
        >
          Hey Fellow developers Welcome to the Online Portal for Google
          Developer Student Clubs. Become a part of our community and connect
          with developers. Login with your discord account, to enroll yourself
          in the process of recruitment. We've described a four step process to
          make you confortable with the community and help you with
          contribution.
          <br />
          We at GDSC NUV believe that developers together can make a great
          change in the ecosystem if we come together and build community driven
          projects.
        </Text>
      </Container>
      {/* <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div className="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
            </div> */}
      <Image
        boxSize={{ base: '200', md: '300' }}
        // boxSize="200px"
        // width="25vw"
        objectFit="cover"
        src={Img2}
        alt="Application"
      ></Image>
      <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="center">
        <Button
          marginRight={{ base: '0', md: '10' }}
          marginBottom={{ base: '3', md: '0' }}
          colorScheme="blue"
          // bgColor="brand.100"
          // color="white"
          borderRadius="25"
          width="205px"
          onClick={discordAuth}
        >
          Login with Discord
        </Button>
        <Link
          href="https://discord.gg/9bNzn8X"
          isExternal
          target="_blank"
          style={{ textDecoration: 'none' }}
        >
          <Button borderRadius="25" width="205px" colorScheme="green">
            Join our Discord server
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default HomeScreen;
