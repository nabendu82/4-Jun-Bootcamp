import React, { useContext } from 'react'
import { UserContext } from '../App'
import Child from './Child'

const Parent = () => {
    const user = useContext(UserContext);

    return (
        <>
            <h1>useContext - {user}</h1>
            <Child />
        </>
    )
}

export default Parent