import React, { useState } from 'react';
import './password.css'

function Password() {
  const [password, setPassword] = useState('');
  
  const onPasswordInput = (e) => {
    const value = e.target.value;
    const rules = {
      "one lowercase character" : /[a-z]/,
      "one uppercase character" : /[A-Z]/,
      "one number"              : /[0-9]/,
      "one special character"   : /[^a-z0-9]/i,
      "9 characters minimum"    : /.{9,}/
    };

    const $rulesItems = document.querySelectorAll('.field__rules li');

    // mark the input field if it has any value
    e.target.classList.toggle('hasValue', value);

    // iterate all the rules and validate them
    $rulesItems.forEach((elm) => {
      const ruleName = elm.innerText.toLowerCase();
      if (rules[ruleName]) {
        const valid = new RegExp(rules[ruleName]).test(value);
        elm.classList.toggle('pass', valid);
      }
    });

    setPassword(value);
  };

  const onTogglePassBtnClick = () => {
    const passwordInput = document.querySelector('input[name="password"]');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

  };

  return (
    <div className='field'>
      <input 
        type='password' 
        name='password' 
        value={password}
        onChange={onPasswordInput}
        required 
      />
      <label title='Toggle password visibility'>
        Password
        <button type='button' className='togglePass' id='toggleButton' onClick={onTogglePassBtnClick}>
        </button>
      </label>
      <ul className='field__rules'>
        <li>One lowercase character</li>
        <li>One uppercase character</li>
        <li>One number</li>
        <li>One special character</li>
        <li>9 characters minimum</li>
      </ul>
    </div>
  );
}

export default Password;
