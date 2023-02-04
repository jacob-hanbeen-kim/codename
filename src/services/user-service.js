const baseUrl = 'https://jsonplaceholder.typicode.com';

const getUserById = (userId) => {

    return fetch(`${baseUrl}/users/${userId}`, { method: 'GET' }
    ).then(response => response.json()
    ).then(data => {
        // console.log(data);
        return data;
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
}

export const userService = {
    getUserById
}