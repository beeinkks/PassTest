import React, { useState } from 'react';
import "./pass.css";

import Plant from "./haningPlant.png";

export default function Pass () {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = () => {
    const lengthRegex = new RegExp('.{8,}');  // Minimum 8 characters
    const uppercaseRegex = new RegExp('[A-Z]');  // At least one uppercase letter
    const lowercaseRegex = new RegExp('[a-z]');  // At least one lowercase letter
    const digitRegex = new RegExp('\\d');  // At least one digit
    const specialCharRegex = new RegExp('[\\W_]');  // At least one special character

    if (!lengthRegex.test(password)) {
      setStrength('Password should be at least 8 characters long.');
    } else if (!uppercaseRegex.test(password)) {
      setStrength('Password should contain at least one uppercase letter.');
    } else if (!lowercaseRegex.test(password)) {
      setStrength('Password should contain at least one lowercase letter.');
    } else if (!digitRegex.test(password)) {
      setStrength('Password should contain at least one digit.');
    } else if (!specialCharRegex.test(password)) {
      setStrength('Password should contain at least one special character.');
    } else {
      setStrength('Password is strong.');
    }
  };
    return (
        <div id='div'>
            <div id='div-div'>
                <h1>Password Strength Tester</h1>
            
                <div id='input'>
                    <input
                        type="password"
                        id='pass'
                        placeholder="Enter a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button id='butto' onClick={checkPasswordStrength}>Check Strength</button>
                    <p>{strength}</p>
                </div>
            </div>
            <img id='plant' src={Plant} alt='doodle of hanging plant pots' />
        </div>
    )
}