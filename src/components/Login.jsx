import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const users = JSON.parse(localStorage.getItem('users')) || []
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        if (users.length > 0) {
            navigate('/')
            window.location.reload()
        }
    }, [])

    function handleLogin(event) {
        event.preventDefault()

        const users = JSON.parse(localStorage.getItem('users')) || []

        if (!users) {
            const user = users.find(e => e.username === login.username && e.password === login.password)

            if (user) {
                alert('Logged')
                navigate('/')
                window.location.reload()
            } else {
                alert('username yoki parol xato')
            }
        } else {
            navigate('/')
        }
    }

    return (
        <div className='container mt-[60px] flex items-center justify-center'>
            <form className='flex bg-gray-200 flex-col gap-3 max-w-[400px] w-full border p-5 rounded-md shadow-2xl'>
                <input onChange={(e) => setLogin({ ...login, username: e.target.value })} className='border rounded-md p-2' type="text" placeholder='Username' />
                <input onChange={(e) => setLogin({ ...login, password: e.target.value })} className='border rounded-md p-2' type="password" placeholder='Password' />
                <button onClick={handleLogin} className='border bg-gray-300 rounded-md p-2 transition-all cursor-pointer hover:bg-gray-400 hover:text-white'>Login</button>
            </form>
        </div>
    )
}

export default Login