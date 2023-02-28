const exchangeCodeForToken = async (code) => {
    const tokenEndpoint = 'https://example.com/oauth2/token';
    const redirectUri = 'http://localhost:3000/callback';
    const clientId = 'YOUR_CLIENT_ID';
    const codeVerifier = localStorage.getItem('code_verifier');
    const body = {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        code_verifier: codeVerifier,
    };
    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error('Failed to exchange code for token');
    }
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.removeItem('code_verifier');
};

const refreshToken = async () => {
    const tokenEndpoint = 'https://example.com/oauth2/token';
    const clientId = 'YOUR_CLIENT_ID';
    const refreshToken = localStorage.getItem('refresh_token');
    const body = {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId,
    };
    const response = await fetch(tokenEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        throw new Error('Failed to refresh token');
    }
    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);
};

const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
};

export { exchangeCodeForToken, refreshToken, logout };