import React from 'react'
import { Box, Stack, VStack, Heading, HStack, Button,Text,Input } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
    return <Box bgColor={'blackAlpha.600'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column', 'row']}>
            <VStack alignItems={'stretch'} w={'full'} px='4'>
                <Heading size='md' textTransform={'uppercase'} textAlign={['center','left']}>
                    Subscribe to get more updates
                </Heading>
                <HStack
                    borderBottom={'2px solid white'} py='2'
                >
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} />
                    <Button
                        p={'0'}
                        colorScheme={'linkedin'}
                        variant={'ghost'}
                        borderRadius={'0 20px 20px 0'}
                        focusBorderColor={'none'}
                    >
                        <AiOutlineSend size={20}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'}
                borderLeft={['none', '1px solid white']}
                borderRight={['none', '1px solid white']}
            >
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    PlayViewZ
                </Heading>
                <Text>
                    All rights recieved
                </Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme={'linkedin'}>
                    <a target={'black'} href="https://www.linkedin.com/in/anurag-kumar-3632b31ba/">
                        LinkedIn
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'linkedin'}>
                    <a target={'black'} href="https://github.com/AnuragK2">
                        GitHub
                    </a>
                </Button>
                <Button variant={'link'} colorScheme={'linkedin'}>
                    <a target={'black'} href="https://www.facebook.com/profile.php?id=100005897019480">
                        Facebook
                    </a>
                </Button>
            </VStack>
        </Stack>
    </Box> 
}

export default Footer