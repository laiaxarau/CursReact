import React from "react";
import { useState } from "react";

export type ThisProps={
userName:string;
name:string;
isFollowing:boolean;
formatUserName: Function;
}

export function TwitterFollowCard({formatUserName,userName,name}:ThisProps): JSX.Element{
    // const {userName,name}=props

    // const state = useState(false)
    // const isFollowing = state[0] // com està el llum
    // const setisFollowing = state[1] //interruptor del llum
    const [isFollowing, setisFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing? 
    'is-following tw-followCard-button' 
    : 'tw-followCard-button'

    const handleClick = ()=>{
    setisFollowing(!isFollowing)}
    
    return (
         <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar'
            alt="avatar midudev" 
            src={`https://unavatar.io/${userName}`}/> 
            <div className='tw-followCard-info'>
                <strong >{name}</strong>
                <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}> 
            {/* això es sol dir un handleClick */}
                <span className="tw-followCard-text">
                    {text}
                </span>
                <span className="tw-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}