import React from 'react';
import { Container, Flex, Box, Text, Divider } from "@chakra-ui/react";

import data from '../assets/data/data.json';

const stepBox = (title, desc,done, line) => {
    return <React.Fragment key={title}>
        <Box bgColor={done?"green.100":"gray.50"} padding="5" borderRadius="25" maxW="container.sm" boxShadow="lg">
            <Text fontSize="xl" textAlign="center" marginBottom="2" fontWeight="bold">{ title }</Text>
            <Text textAlign="center">{ desc }</Text>
        </Box>
        {
            line ?
                <Divider
                    orientation="vertical"
                    style={{ 'height': '80px', 'borderWidth': '2px' }}
                    borderColor={done ? "green.400" : "gray.400"}
                />
                :null
        }
    </React.Fragment>
}

const ProgressContainer = () => {
    return (
        <Container maxW="container.lg" paddingY="10" centerContent>
            <Flex flexDirection="column" alignItems="center">
                {data.slice(0, -1).map((item) => stepBox(item.title, item.desc,item.done, true))}
                {stepBox(data.slice(-1)[0].title, data.slice(-1)[0].desc, data.slice(-1)[0].done, false)}
            </Flex>
        </Container>
    )
}

export default ProgressContainer;