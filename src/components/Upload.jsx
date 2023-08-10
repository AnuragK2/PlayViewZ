import { Container,VStack,HStack,Input,Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const upload = () => {
    return (<Container maxW={"container.xl"} h={'100vh'} p={'16'}>
        <VStack color={'linkedin.500'} h={'full'} justifyContent={'center'}>
            <AiOutlineCloudUpload size={'10vmax'} />
            <form>
                <HStack>
                    <Input required type={'file'} css={{
                        "&::file-selector-button": {
                            border: "none",
                            width: 'calc(100%+36px)',
                            height: '100%',
                            marginLeft: '-18px',
                            color: 'blue',
                            background: 'white',
                            cursor: 'pointer',
                        },
                    }} />
                    <Button colorScheme={'linkedin'} type={'submit'}>Upload</Button>
                </HStack>
            </form>
        </VStack>
    </Container>
    );
};

export default upload