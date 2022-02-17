import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [Loading, setLoading] = useState(true);
    const [isLoggedIn, setIsloggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        const suscribe = onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsloggedIn(true);
            } else {
                setIsloggedIn(false);
            }

            setLoading(false);
        });
        return () => suscribe();
    }, [dispatch, setLoading]);

    if (Loading) {
        return <h1>Espere....</h1>;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoutes isLoggedIn={isLoggedIn} component={AuthRouter} path='/auth' />
                    <PrivateRoutes
                        isLoggedIn={isLoggedIn}
                        component={JournalScreen}
                        exact
                        path='/'
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </Router>
    );
};
