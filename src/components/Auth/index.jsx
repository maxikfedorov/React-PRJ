import {useEffect, useState} from 'react';
import CryptoJS from 'crypto-js';
import "./style.css"

const AuthForm = (onSignIn ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // Функция для генерации случайной строки заданной длины
    const generateRandomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    //прикольная вещь
    useEffect(() => {
        let emailTimer, passwordTimer;
        if (emailError) {
            emailTimer = setTimeout(() => {
                setEmailError(false);
            }, 3000);
        }
        if (passwordError) {
            passwordTimer = setTimeout(() => {
                setPasswordError(false);
            }, 3000);
        }
        return () => {
            clearTimeout(emailTimer);
            clearTimeout(passwordTimer);
        };
    }, [emailError, passwordError]);

    // Функция для генерации кода PKCE
    const generatePKCECode = () => {
        const codeVerifier = generateRandomString(64);
        const codeChallenge = CryptoJS.SHA256(codeVerifier).toString(CryptoJS.enc.Base64)
            .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
        return {
            codeVerifier,
            codeChallenge,
        };
    };

    // Функция для отправки формы
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email) {
            setEmailError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (email && password) {
            const {codeChallenge } = generatePKCECode();
            const redirectUri = 'http://localhost:3000/callback';
            const clientId = 'YOUR_CLIENT_ID';
            const authorizationEndpoint = 'http://localhost:3000/posts';
            const url = `${authorizationEndpoint}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
            window.location.href = url;

            const userData = {
                email: email,
                password: password
            };

            // Вызываем колбэк функцию, передавая данные пользователя
            onSignIn(userData);



        }


    };

    return (
        <form onSubmit={handleSubmit}>

            <div className={"label"}>
                <div className={"label-em"}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={"label-pas"}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {(emailError || passwordError) && <div style={{ color: 'red' }}>Please, fill in all forms</div>}
                </div>
            </div>

            <button type="submit">Sign In</button>
        </form>
    );
};

export default AuthForm;
