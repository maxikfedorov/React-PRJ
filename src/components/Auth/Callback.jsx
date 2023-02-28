import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { exchangeCodeForToken } from './Auth';

const Callback = () => {
    const history = useHistory();

    useEffect(() => {
        const exchangeCode = async () => {
            try {
                const searchParams = new URLSearchParams(window.location.search);
                const code = searchParams.get('code');
                await exchangeCodeForToken(code);
                history.push('/');
            } catch (error) {
                console.error(error);
            }
        };

        exchangeCode();
    }, [history]);

    return (
        <div>
            <p>Logging you in...</p>
        </div>
    );
};

export default Callback;
