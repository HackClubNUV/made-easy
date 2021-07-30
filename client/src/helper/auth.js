class Auth {
    constructor() {
        if (localStorage.getItem('auth')) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false
        }
    }

    login(token,exp) {
        this.authenticated = true;
        localStorage.setItem(
            'auth',
            JSON.stringify({
                authStatus: true,
                token: token,
                exp: exp
            })
        );
    }

    logout(redirectPath) {
        this.authenticated = false;
        localStorage.removeItem('auth')
        redirectPath();
    }

    isAuthenticated() {
        return this.authenticated;
    }

    getAuthToken() {
        return JSON.parse(localStorage.getItem('auth')).token;
    }

}

export default new Auth();
