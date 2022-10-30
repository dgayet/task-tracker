import React from 'react'

interface Props {
    color?: string,
    text: string,
    onClick: React.MouseEventHandler
}

function Button({color = 'white', text, onClick}: Props) {
            

    return (
        <button className="btn" onClick={onClick}
                                style={{backgroundColor: color}}>
            {text}
        </button>
    )
}

export default Button