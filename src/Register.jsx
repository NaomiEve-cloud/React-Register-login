import React, { useState } from "react";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [age, setAge] = useState(0);
    const [occupation, setOccupation] = useState('');
    const [maritalStatus , setMaritalStatus] = useState('');
    const [nationality, setNationality] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="age">Age</label>
            <input value={age} onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter age" />
            <label htmlFor="occupation">Occupation</label>
            <input value= {occupation} type="text" onChange={(e) => setOccupation(e.target.value)} id="Occupation" placeholder="Enter Occupation" />
            <label htmlFor="maritalstatus">MaritalStatus</label>
            <input value={maritalStatus} type="text" onChange={(e) => setMaritalStatus(e.target.value)} id="maritalStatus" placeholder="Enter maritalStatus" />
            <label htmlFor="nationality">Nationality</label>
            <input value={nationality} type="Nationality" onChange={(e) => setNationality(e.target.value)} id="Nationality" placeholder="Enter Nationality" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>

    )
}