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
    const [progress, setProgress] = useState([false, false, false, false]);

    const logout = useCallback(() => {
        auth.logout(() => {
            history.replace("/");
        });
    }, [history]);

    const getProgress = useCallback(
        async () => {
            if (username && discriminator) {
                const reqData = {
                    "DiscordID": username + "#" + discriminator,
                    "username": username
                }
                const headers = {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": `Bearer ${auth.getAuthToken()}`
                };
                const response = await axios.post('/progress', reqData, { headers });
                if (response.data.status === "success") {
                    const res = response.data.data;
                    setProgress([res['A1'], res['A2'], res['A3'], res['A4']]);
                }
            }
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
                getProgress();
            } catch {
                logout();
            }
        },
        [logout, getProgress],
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
    }, [history, getUserDetails]);


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
                    <Button colorScheme="red" borderRadius="25" paddingX="8" disabled={progress[0]? true : false}>
                        Apply now
                    </Button>
                </Link>
                <ProgressContainer progress={progress}/>
            </Container>
        </>
    )
}

export default ProgressScreen;