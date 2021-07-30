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
            const response = await axios.post('/progress', data, { headers });
            console.log(response.data);
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
                        We are happy to see you consider joining Hack Club NUV! We have tailored this process such a way,
                        that its easy for both the new members and the existing members to get to know each other and work well
                        together. Our primary goal is to help the community and learn new things along the way!
                        Get started with your application process by filling the application form linked below :)
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