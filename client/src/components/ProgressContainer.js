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

const ProgressContainer = ({progress}) => {
    return (
        <Container maxW="container.lg" paddingY="10" centerContent>
            <Flex flexDirection="column" alignItems="center">
                {stepBox(data[0].title, data[0].desc, progress[0], true)}
                {stepBox(data[1].title, data[1].desc, progress[1],true)}
                {stepBox(data[2].title, data[2].desc, progress[2], true)}
                {stepBox(data[3].title, data[3].desc, progress[3], false)}
            </Flex>
        </Container>
    )
}

export default ProgressContainer;