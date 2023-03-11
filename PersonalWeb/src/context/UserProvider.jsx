import React from 'react'
import { user } from '../model/user'
import { UserContext } from './UserContext'

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}