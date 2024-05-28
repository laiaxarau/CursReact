import { useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  //pointer move
  useEffect(() => {
    console.log('Efecte', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    } //cleanup: neteja, cada cop que canvia la dependència i si desapareix el component.
  }, [enabled] )
//change body classname
useEffect(()=>{
document.body.classList.toggle ('no-cursor',enabled)

return ()=> {
  document.body.classList.remove('no-cursor')
}
},
[enabled])
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,${position.y}px)`
      }}
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir el puntero</button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
     {mounted && <FollowMouse />}
     <button onClick={()=>setMounted(!mounted)}>
      Toggle Mounted FollowMouse component</button>
    </main>
  )
}

export default App
