export default {
    // called when the user attempts to log in
    login: ({ username }) => {
        localStorage.setItem('username', username);
        // accept all username/password combinations
        return Promise.resolve();
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};

// {
//     id: 1,
//     username: 'frenyig',
//     password: 123456,
//     avatar: 'F',
//     fullName: 'Frenyi W. Guevara'
// }

// import decodeJwr from 'jwt-decode'

// const authProvider = {
//     login: ({ username, password}) => {
//         const request = new Request('https://mydomain.com/authenticate', {
//             method: 'POST',
//             body: JSON.stringify({ username, password }),
//             headers: new Headers( { 'Conten-type': 'application/json' } ),
//         });
//         return fetch(request)
//             .then(response =>  {
//                 if(response.status < 200 || response.status >= 300){
//                     throw new Error(response.statusText)
//                 }
//                 return response.json()
//             })

//             .then(auth => {
//                 localStorage.setItem('auth', JSON.stringify(auth));
//             })
//     },

//     getIdentity: () => {
//         const {id, fullName, avatar} = JSON.parse(localStorage.getItem('auth'))
//         return {id, fullName, avatar} 
//     },

//     logout: () => {
//         localStorage.removeItem('auth')
//         return Promise.resolve()
//     },

//     checkError: (error) => {
//         const status = error.status;
//         if(status === 401 || status === 403){
//             localStorage.removeItem('auth')
//             return Promise.reject()
//         }
//         return Promise.resolve()
//     },

//     checkAuth: () => {
//         localStorage.getItem('auth') ? Promise.resolve() : Promise.reject( { redirectTo: '/no-access' } )
//     }
// }

// export default authProvider