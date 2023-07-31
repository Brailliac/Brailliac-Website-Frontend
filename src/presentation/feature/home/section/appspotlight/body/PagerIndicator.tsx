import React from "react";
import {Box, Circle, HStack} from "@chakra-ui/react";
import {Clickable} from "../../../../../common/Clickable";

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

        function onClick() {
            onIndicatorClick(i)
        }

        return (
            <Clickable onClick={onClick} padding={1} key={i}>
                <Circle
                    w={indicatorSize}
                    h={indicatorSize}
                    bgColor={color}
                    opacity={opacity}
                />
            </Clickable>
        )
    })

    return (
        // The spacing is done by the clickable box padding, to make the click region bigger
        <HStack spacing={0}>
            {indicators}
        </HStack>
    )
}
