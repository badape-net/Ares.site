import React from 'react'
import Theme from './theme'

export default () => (
    <style>{`
        body {
            color: ${Theme.colors.lighterGray};
            margin: 0;
            font-size: 14px;
            background-color: ${Theme.colors.black};
            font-family: ${Theme.fonts.sans}
        }
        * {
            box-sizing: border-box;
        }
        a:link, a:visited {
            color: ${Theme.colors.lighterGray};
            text-decoration: none;
            font-weight: bold;
            padding: 14px 25px;
        }        
        a:hover, a:active {
            color: ${Theme.colors.lightGray};
            text-decoration: none;
            font-weight: bold;
        }
    `}
    </style>
)
