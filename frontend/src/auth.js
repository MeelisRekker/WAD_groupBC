// code from Lab 13
export default {
    user: { authenticated: false },
    authenticated: async function() {
        await fetch("http://localhost:3000/auth/authenticate", {
                credentials: 'include', //  Don't forget to specify this if you need cookies
            })
            .then((response) => response.json())
            .then((data) => {
                this.user.authenticated = data.authenticated;
                console.log(data);
            })
            .catch((e) => {
                console.error(e);
            });
        return this.user.authenticated;
    }

}