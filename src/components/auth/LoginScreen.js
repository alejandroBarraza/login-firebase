import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginEmailAndPassword, loginWithGoogle } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.ui);
    const [formValue, handleInputChange, reset] = useForm({
        email: '',
        password: '',
    });
    const { email, password } = formValue;

    const handleLogin = (e) => {
        e.preventDefault();
        // dispatch(login(password, 'alejandro'));
        dispatch(loginEmailAndPassword(email, password));
        reset();
    };

    const handleLoginGoogle = () => {
        dispatch(loginWithGoogle('google'));
    };

    return (
        <>
            <h3 className='auth__title'>Login</h3>

            <form onSubmit={handleLogin}>
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    value={password}
                    onChange={handleInputChange}
                />

                <button type='submit' className='btn btn-primary btn-block' disabled={loading}>
                    Login
                </button>

                <div className='auth__social-networks'>
                    <p>Login with social networks</p>

                    <div className='google-btn'>
                        <div className='google-icon-wrapper'>
                            <img
                                className='google-icon'
                                src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
                                alt='google button'
                            />
                        </div>
                        <p className='btn-text' onClick={handleLoginGoogle}>
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to='/auth/register' className='link'>
                    Create new account
                </Link>
            </form>
        </>
    );
};
