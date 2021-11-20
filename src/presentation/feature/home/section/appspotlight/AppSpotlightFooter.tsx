import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {useClickable} from "@chakra-ui/clickable";

export const AppSpotlightFooter = React.memo(appSpotlightFooter)

interface Props {
    onDownloadClick: () => void;
}

function appSpotlightFooter(props: Props): JSX.Element {
    const {onDownloadClick} = props;

    const clickable = useClickable({onClick: onDownloadClick})

    return (
        <Box padding={2}>
            <Box
                borderColor={'white'}
                borderWidth={2}
                borderRadius={'5px'}
                padding={4}
                _hover={{
                    background: '#00000033',
                }}
                {...clickable}
            >
                <Flex direction={'column'}>
                    <Text textAlign={'center'} textColor={'white'} textStyle={'h3'}>
                        Download Now
                    </Text>
                    <Text textAlign={'center'} textColor={'white'} textStyle={'content'}>
                        Free on all Android devices
                    </Text>
                </Flex>
            </Box>
        </Box>
    )
}
