import React from 'react'
import Button from './Button'


interface Props {
    title: string,
    onClick: Function,
}


function Header({title, onClick}: Props) {

    return (
        <div className="header">
            <h1 className="headerTitle">{title}</h1>
            <Button color='rgb(154, 115, 188)' text='task form' onClick={() => onClick()}/>
        </div>
    );
}

export default Header