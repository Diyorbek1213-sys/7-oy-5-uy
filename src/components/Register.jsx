import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        ConfirmPassword: ''
    })

    function handleRegister(event) {
        event.preventDefault()

        if (formData.username.length < 3) {
            return alert('Username 3 ta harfdan kam!')
        }

        if (formData.password.length < 3) {
            return alert('Password 3 ta harfdan kam!')
        }

        if (formData.ConfirmPassword !== formData.password) {
            return alert('Parol mos emas!')
        }

        const newUser = {
            username: formData.username,
            password: formData.password
        }

        const users = JSON.parse(localStorage.getItem('users')) || []

        users.push(newUser)
        localStorage.setItem('users', JSON.stringify(users))

        alert('Registered!')
        navigate('/login')
        
    }

    return (
        <div className='container mt-[60px] flex items-center justify-center'>
            <form className='flex bg-gray-200 flex-col gap-3 max-w-[400px] w-full border p-5 rounded-md shadow-2xl'>
                <input value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className='border rounded-md p-2 ' type="text" placeholder='Username' />
                <input value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className='border rounded-md p-2 ' type="password" placeholder='Password' />
                <input value={formData.ConfirmPassword} onChange={(e) => setFormData({ ...formData, ConfirmPassword: e.target.value })} className='border rounded-md p-2 ' type="text" placeholder='Confirm Password' />
                <button onClick={handleRegister} className='border bg-gray-300 rounded-md p-2 transition-all cursor-pointer hover:bg-gray-400 hover:text-white'>Register</button>
            </form>
        </div>
    )
}

export default Register