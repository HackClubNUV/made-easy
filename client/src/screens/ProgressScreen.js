import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

import { Button, Container, Link, Text } from '@chakra-ui/react';
import auth from '../helper/auth';
import data from '../assets/data/data.json';
import ProgressContainer from '../components/ProgressContainer';

const ProgressScreen = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [discriminator, setDiscriminator] = useState('');

    const logout = useCallback(() => {
        auth.logout(() => {
            history.replace("/");
        });
    }, [history]);

    const getProgress = useCallback(
        async () => {
            const data = {
                "DiscordID": username + "#" + discriminator,
                "username": username
            }
            const headers = {
                "Content-type": "application/json; charset=UTF-8",
            };
            // const response = await axios.post('/getUserProgress', data, { headers });
            // console.log(response.data);
        }, [username, discriminator]
    );

    const getUserDetails = useCallback(
        async (accessToken, tokenType) => {
            try {
                const response = await axios.get(
                    'https://discord.com/api/users/@me',
                    {
                        headers: {
                            authorization: `${tokenType} ${accessToken}`,
                        }
                    }
                );
                const { username, discriminator } = response.data;
                setUsername(username);
                setDiscriminator(discriminator);
            } catch {
                logout();
            }
        },
        [logout],
    );

    useEffect(() => {
        const fragment = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = fragment.get('access_token');
        const accessExp = fragment.get('expires_in');
        if (!auth.getAuthToken() && auth.isAuthenticated()) {
            auth.login(accessToken, accessExp);
        }
        history.replace('/apply');
        getUserDetails(auth.getAuthToken(), 'Bearer');
        getProgress();
    }, [history, getUserDetails, getProgress]);


    return (
        <>
            <Button colorScheme="red" borderRadius="25" margin="2" size="xs" float="right" paddingX="6" onClick={logout}>
                Logout
            </Button>
            <Container maxW="container.lg" paddingY="10" marginTop="4" centerContent>
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="bold"
                >Hi {username.length > 0 ? username + "!" : 'there!'}</Text>
                <Container maxW="container.lg" paddingX={{ base: "5", md: "12" }} marginY="5">
                    <Text textAlign={{ base: "justify", md: "center" }}>
                        Minim enim ut ipsum magna esse proident consequat esse nisi. Ipsum amet Lorem laboris
                        Lorem excepteur sunt cillum voluptate ad velit pariatur sit. Excepteur consectetur nulla
                        reprehenderit velit ex pariatur dolore eu consequat laborum consectetur deserunt tempor ut.
                    </Text>
                </Container>
                <Link
                    href={data[0].done ? null : "https://form.typeform.com/to/XxJd05Qn"}
                    isExternal target="_blank">
                    <Button colorScheme="red" borderRadius="25" paddingX="8" disabled={data[0].done ? true : false}>
                        Apply now
                    </Button>
                </Link>
                <ProgressContainer />
            </Container>
        </>
    )
}

export default ProgressScreen;