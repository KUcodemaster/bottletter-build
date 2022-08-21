import axios from 'axios';
import { useState } from 'react';

export const SERVER_URL = 'http://34.64.220.101:8080';

async function getUsers() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
    );
    return response.data;
}

export async function signUpDB(name, email, password) {
    const res = await axios.post(`${SERVER_URL}/user/signup`, {
            name: name,
            email: email,
            password: password,
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
    });
    return res;
};

export async function SignInDB(email, password) {
    let id = -1;
    const res = await axios.post(`${SERVER_URL}/user/signin`, {
        email: email,
        password: password
    }).then(function (response) {
        id = response.data.userId;
        return id;
    }).catch((error) => {
        console.log(error);
    })
}
