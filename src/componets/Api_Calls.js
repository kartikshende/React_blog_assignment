import React from 'react';
import axios from 'axios';

const baseUrl = `http://178.62.198.162/api`;

// Please add your token in .env file

const token = process.env.REACT_APP_TOKEN_ENV; 

const headers = {
    'Content-Type': 'application/json',
    'token': `${token}`,
}



export default {

    posts(urlend) {
        return {
            getblogs: () => axios.get(`${baseUrl}/${urlend}`, { headers: headers }),

            postBlogs: (blogpost) => axios.post(`${baseUrl}/${urlend}`, blogpost, { headers: headers }),

        }
    }
}
