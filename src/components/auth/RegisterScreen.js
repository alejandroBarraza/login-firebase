import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RegisterWithEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.ui);
    const [value, HandleInputChange, reset] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const passwordCheck = (password, password2) => {
        if (password !== password2) {
            console.log('password not match');
            dispatch(setError('password not match')); //send erroe messagge
            return false;
        }
        dispatch(removeError());
        return true;
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (passwordCheck(value.password, value.password2)) {
            dispatch(RegisterWithEmailPassword(value));
            reset();
        }
    };

    return (
        <>
            <h3 className='auth__title'>Register</h3>

            <form>
                {error && <div className='auth__alert-error'>{error}</div>}
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    className='auth__input'
                    autoComplete='off'
                    onChange={HandleInputChange}
                    value={value.name}
                />

                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    className='auth__input'
                    autoComplete='off'
                    onChange={HandleInputChange}
                    value={value.email}
                />

                <input
                    type='password'
                    placeholder='Password'
                    name='password'
                    className='auth__input'
                    onChange={HandleInputChange}
                    value={value.password}
                />

                <input
                    type='password'
                    placeholder='Confirm password'
                    name='password2'
                    className='auth__input'
                    onChange={HandleInputChange}
                    value={value.password2}
                />

                <button
                    type='submit'
                    className='btn btn-primary btn-block mb-5'
                    onClick={handleRegister}>
                    Register
                </button>

                <Link to='/auth/login' className='link'>
                    Already registered?
                </Link>
            </form>
        </>
    );
};
