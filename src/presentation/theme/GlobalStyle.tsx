import {Global} from '@emotion/react'
import React from 'react'

/** Fixes some Chakra quirks */
export function GlobalStyle(): JSX.Element {
    return (
        <Global
            styles={`
                /*
                  This will hide the focus indicator if the element receives focus via the mouse,
                  but it will still show up on keyboard focus.
                  (https://medium.com/@keeganfamouss/accessibility-on-demand-with-chakra-ui-and-focus-visible-19413b1bc6f9)
                */
                .js-focus-visible :focus:not([data-focus-visible-added]) {
                   outline: none;
                   box-shadow: none;
                 }
            `}
        />
    );
}
