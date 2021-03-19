import React from 'react'
import Navbar from '../components/navbar';

function Index({ children }) {
    return (
        <div className='main'>
            <Navbar />
            { children }
        </div>
    )
}

export default Index
