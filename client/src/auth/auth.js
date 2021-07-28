class Auth {
    constructor() {
        if (localStorage.getItem('auth')) {
            this.authenticated = true;
        }
        else {
            this.authenticated = false
        }
    }

    login(redirectPath) {
        this.authenticated = true;
        localStorage.setItem(
            'auth',
            JSON.stringify({
                authStatus: true,
                // token: token
            })
        );
        redirectPath();
    }

    logout(redirectPath) {
        this.authenticated = false;
        localStorage.removeItem('auth')
        redirectPath();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Auth();
