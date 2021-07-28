import React from 'react';
import { Container, Flex, Text, Button, Image } from '@chakra-ui/react';

import Img from '../assets/hero-img.png';

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
                <Text textAlign={{ base: "justify", md:"center" }}>
                    Elit mollit duis eu laboris ut mollit laboris et non nisi sunt ea. Qui adipisicing incididunt duis
                    ad dolore. Fugiat ipsum esse eiusmod consequat excepteur consectetur dolore aliquip sit cillum.
                    Quis duis excepteur ex commodo ipsum non nisi minim. Do amet do et anim consequat reprehenderit.
                    Magna aliquip labore laboris pariatur est adipisicing laborum exercitation exercitation. Excepteur
                    amet mollit est eiusmod laboris nisi ex nisi magna exercitation incididunt sint.
                </Text>
            </Container>
            <Flex flexDirection={{ base: "column", md: "row" }} alignItems="center">
                <Button
                    marginRight={{ base: "0", md: "3" }}
                    marginBottom={{ base: "3", md: "0" }}
                    colorScheme="red"
                    borderRadius="25"
                >Authenticate with Discord</Button>
                <Button borderRadius="25">Join our Discord server</Button>
            </Flex>
            <Image
                marginTop="1"
                boxSize={{ base: "300", md:"400" }}
                objectFit="cover"
                src={Img}
                alt="Application"
            />
        </Container>
    )
}

export default HomeScreen;