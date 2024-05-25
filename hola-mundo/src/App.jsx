import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('midudev')

const formatUserName = (userName) => `@${userName}`

    return (
    <section className='App'>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName={name} name="Miguel Ángel Durán"/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="laiaxarau" name="Laia Xarau"/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="taispla" name="Tais Experta"/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="ericbg72" name="Eric o Jorge o no sé"/>
    <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="XRabert" name="Xavier Rabert"/>
   <button onClick = {()=> setName('pedromichel')} >
    Cambio de nombre
   </button>

    </section>
    )
}