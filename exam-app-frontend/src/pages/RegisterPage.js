import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        axios.post('http://localhost:5000/api/register', { name, email, password })
            .then(response => alert('User registered successfully'))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
        </div>
    );
}

export default RegisterPage;

