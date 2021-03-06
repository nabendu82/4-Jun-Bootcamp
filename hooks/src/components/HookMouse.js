import React, { useEffect, useState } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleMouseMove = e => {
        console.log('HookMouse: handleMouseMove')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('HookMouse: useEffect');
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log('HookMouse: cleanup');
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (
        <h1>Hooks X - {x}, Y - {y}</h1>
    )
}

export default HookMouse