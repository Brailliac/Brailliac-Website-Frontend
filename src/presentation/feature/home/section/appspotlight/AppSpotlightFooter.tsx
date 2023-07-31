import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";
import {Clickable} from "../../../../common/Clickable";

export const AppSpotlightFooter = React.memo(appSpotlightFooter)

interface Props {
    onDownloadClick: () => void;
}

function appSpotlightFooter(props: Props): JSX.Element {
    const {onDownloadClick} = props;

    return (
        <Box padding={2}>
            <Clickable
                borderColor={'white'}
                borderWidth={2}
                borderRadius={'5px'}
                padding={4}
                _hover={{
                    background: '#00000033',
                }}
                onClick={onDownloadClick}
            >
                <Flex direction={'column'}>
                    <Text textAlign={'center'} textColor={'white'} textStyle={'h3'}>
                        Download Now
                    </Text>
                    <Text textAlign={'center'} textColor={'white'} textStyle={'content'}>
                        Free on all Android devices
                    </Text>
                </Flex>
            </Clickable>
        </Box>
    )
}
