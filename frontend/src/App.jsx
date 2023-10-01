import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singnin from './components/pages/Signin'
import Signup from './components/pages/Signup'
import JoinRoom from './components/pages/JoinRoom'
import Room from './components/pages/Room'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JoinRoom />} />
                <Route path='/login' element={<Singnin />} />
                <Route path='/register' element={<Signup />} />
                <Route path='/room/:roomId' element={<Room />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App