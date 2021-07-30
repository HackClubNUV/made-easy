import React from 'react';
import { Container, Flex, Text, Button, Image, Link } from '@chakra-ui/react';

import Img from '../assets/hero-img.gif';
import auth from '../helper/auth';

const discordAuth = () => {
    window.open(
        `https://discord.com/api/oauth2/authorize?client_id=797155989359034379&redirect_uri=https%3A%2F%2Fhackclubnuv.herokuapp.com%2Fapply&response_type=token&scope=identify`,
        "_parent"
    );
    auth.login();
}

const HomeScreen = () => {
    return (
        <Container maxW="container.lg" paddingY="10" centerContent>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center" marginBottom="8">
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                >Hack Club NUV - </Text>
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                    color="red.400"
                >&nbsp;Application Process</Text>
            </Flex>
            <Container maxW="container.lg" paddingX={{ base: "5", md: "12" }} marginBottom="8">
                <Text textAlign={{ base: "justify", md: "center" }}>
                Hey hackers! We're glad that you've taken interest in joining the team. We believe in the power of community and we want to share the same with you. We are looking for members who love to take initiative and are always up to learn and build something new. <br/>This is an Online Portal that our team has created to help you get updates about your application process.
                </Text>
            </Container>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
                <Button
                    marginRight={{ base: "0", md: "3" }}
                    marginBottom={{ base: "3", md: "0" }}
                    colorScheme="red"
                    borderRadius="25"
                    onClick={discordAuth}
                >Login with Discord</Button>
                <Link href="https://discord.gg/tx5afx6RYd" isExternal target="_blank">
                    <Button borderRadius="25">Join our Discord server</Button>
                </Link>
            </Flex>
            <Image
                marginTop="1"
                boxSize={{ base: "300", md: "400" }}
                objectFit="cover"
                src={Img}
                alt="Application"
            />
        </Container>
    )
}

export default HomeScreen;