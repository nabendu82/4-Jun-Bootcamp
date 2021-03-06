import React from 'react'
import { UserContext } from '../App'

const Child = () => {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return <h1>Child component with context - {user}</h1>
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default Child