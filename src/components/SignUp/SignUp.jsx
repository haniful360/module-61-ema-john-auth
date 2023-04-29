import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';



const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext);

    // console.log(createUser);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPassword.value;
        // console.log(email, password, confirmPass);

        setError('')

        if (password.length < 6) {
            setError('Your password must be 6 character');
            return;
        }

        if (password !== confirmPass) {
            setError("Your password is did't match")
            return;
        }
        // if (password === confirmPass) {
        //     setError("Yay!! Your account is correct")
        //     return;
        // }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='form_container'>
            <h2 className='form_title'>SignUp!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form_control">
                    <label className='label' htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Your Email' id='email' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Your Password' id='password' required />
                </div>
                <div className="form_control">
                    <label className='label' htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name='confirmPassword' placeholder='Confirm Password' id='confirmPassword' required />
                </div>
                <span className='text_error'>{error}</span>
                <input type="submit" value="SignUp" className='submit_btn' />
            </form>
            <p className='new_account'>New to Ema John <Link to='/login'>Already have an account?</Link></p>
            <div className='divide_container'>
                <p className='divide'></p>
                <p>or</p>
                <p className='divide'></p>
            </div>
            {/* <div className='social_login'>
                
                <button className='google_btn'>
                    <span><i class="fa-brands fa-google"></i></span>
                    SignInwith Google</button>
            </div> */}
        </div>
    );
};

export default SignUp;