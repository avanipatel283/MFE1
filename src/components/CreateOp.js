import React, { useState } from 'react';
import '../CreateOp.css';

const CreateOp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
        console.log('First Name value is:', event.target.value);
    };

    const handleLastNameChange = event => {
        setLastName(event.target.value);
        console.log('Last Name value is:', event.target.value);
    };

    const handleCheckChange = event => {
        setCheckbox(event.currentTarget.checked);
        console.log('Checkbox value is:', event.currentTarget.checked);
    };

    const handleClick = event => {
        validateForm(event);
    };
      
    const validateForm = (e) => {
        console.log("checkbox : " + checkbox  )
        console.log("firstName : " + firstName  )
        console.log("lastName : " + lastName  )    
        e.preventDefault();
        if (firstName === '' || lastName === '') {
            alert('Please fill all the fields');
        } else if (!checkbox) {
            alert('Please agree to the terms and conditions');
        } else {
            alert('Form submitted successfully');
        }
    }

    return (
        <form className='create-form'>
            <table>
                <tbody>
                <tr>
                    <td>
                        <label>First Name</label>
                    </td>
                    <td>
                        <input placeholder='First Name' onChange={handleFirstNameChange}/>
                    </td>
                </tr>
                <tr> 
                    <td>
                        <label>Last Name</label>
                    </td>
                    <td>
                        <input placeholder='Last Name' onChange={handleLastNameChange}/>
                    </td>
                </tr>
                <tr> 
                    <td>
                        <input title="checkbox" type="checkbox" id="agree" onChange={handleCheckChange}/>
                    </td>
                    <td>
                        <label htmlFor="agree">I agree to the terms and conditions</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button type='submit' onClick={handleClick}>Submit</button>
                    </td>
                </tr>
                </tbody>
        </table>
    </form>
    );
}

export default CreateOp;

