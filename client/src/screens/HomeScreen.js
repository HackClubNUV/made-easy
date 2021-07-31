import React from 'react';
import { Container, Flex, Text, Button, Image, Link } from '@chakra-ui/react';

import Img from '../assets/GDSCNUV.png';
import Img2 from '../assets/hero-img.gif'
import '../assets/dsc.min.css'
import auth from '../helper/auth';

const discordAuth = () => {
    window.open(
        `https://discord.com/api/oauth2/authorize?client_id=871148961191297074&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapply&response_type=token&scope=identify`,
        "_parent"
    );
    auth.login();
}

const HomeScreen = () => {
    return (
        <Container maxW="container.lg" paddingY="10" centerContent>
                <Image
                    // marginTop="1"
                    // boxSize={{ base: "300", md: "400" }}
                    // boxSize="200px"
                    width="30vw"
                    objectFit="cover"
                    src={Img}
                    alt="Application"
                >
                </Image>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" marginBottom="8">
                {/* <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="#4285F4"
                >Google Developer Student Clubs - </Text> */}
                <Text
                    fontSize={{ base: "lg", md: "4xl" }}
                    fontWeight="bold"
                    color="#4285F4"
                >&nbsp;Application Process</Text>
            </Flex>
            {/* <Flex flexDirection={{ base: "column", md: "row" }} alignItems="flex-start" marginBottom="8">
                <Text
                    fontSize="2xl"
                    // fontWeight="bold"
                    color="#4285F4"
                >Navrachana University</Text>
            </Flex> */}

            <Container maxW="container.lg" paddingX={{ base: "5", md: "12" }} marginBottom="8">
                <Text textAlign={{ base: "justify", md: "center" }}>
                Hey Fellow developers welcome to the Online Portal for Google Developer Student Clubs. Become a part of our community and connect with developers. Login with your discord account, to enroll yourself in the process of recruitment. We've described a four step process to make you confortable with the community and help you with contribution.<br/>We at GDSCNUV believe that developers together can make a great change in the ecosystem if we come together and build community driven projects.
                </Text>
            </Container>
            {/* <div className="loader">
                <div className="dot dot1"></div>
                <div className="dot dot2"></div>
                <div className="dot dot3"></div>
                <div classNae="dot dot4"></div>
                <div className="dot dot5"></div>
                <div className="dot dot6"></div>
                <div className="dot dot7"></div>
            </div> */}
                <Image
                    // marginTop="1"
                    // boxSize={{ base: "300", md: "400" }}
                    // boxSize="200px"
                    width="25vw"
                    objectFit="cover"
                    src={Img2}
                    alt="Application"
                >
                </Image>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
                <Button
                    marginRight={{ base: "0", md: "3" }}
                    marginBottom={{ base: "3", md: "0" }}
                    colorScheme="green"
                    // color="#EA4335"
                    borderRadius="25"
                    onClick={discordAuth}
                >Login with Discord</Button>
                <Link href="https://discord.gg/tx5afx6RYd" isExternal target="_blank">
                    <Button borderRadius="25" colorScheme="red">Join our Discord server</Button>
                </Link>
            </Flex>
        </Container>
    )
}

export default HomeScreen;