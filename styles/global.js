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
    `}
    </style>
)
