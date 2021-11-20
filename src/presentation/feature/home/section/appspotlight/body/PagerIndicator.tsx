import React from "react";
import {Box, Circle, HStack} from "@chakra-ui/react";
import {useClickable} from "@chakra-ui/clickable";

export const PagerIndicator = React.memo(pagerIndicator)

interface Props {
    numPages: number
    currentPageIndex: number
    color: string
    onIndicatorClick: (index: number) => void
}

function pagerIndicator(props: Props): JSX.Element {
    const {numPages, currentPageIndex, color, onIndicatorClick} = props

    const indicatorSize = 4

    const indicators = [...new Array(numPages)].map((_, i) => {
        const opacity = i === currentPageIndex ? 1 : 0.2
        const clickable = useClickable({onClick: onClick})

        function onClick() {
            onIndicatorClick(i)
        }

        return (
            <Box {...clickable} padding={1}>
                <Circle
                    w={indicatorSize}
                    h={indicatorSize}
                    bgColor={color}
                    opacity={opacity}
                    key={i}
                />
            </Box>
        )
    })

    return (
        // The spacing is done by the clickable box padding, to make the click region bigger
        <HStack spacing={0}>
            {indicators}
        </HStack>
    )
}
