
// const sendRequest = (rq) => {
//     let config = {
//         method: rq.method,
//         headers: rq.headers
//     }

//     if (rq.requestBody) {
//         config['body'] = rq.requestBody;
//     }


//     return fetch(rq.url, config
//     ).then(response => response.json()
//     ).then(data => {
//         console.log(data);
//         return data;
//     }).catch(err => {
//         // Do something for an error here
//         console.log("Error Reading data " + err);
//     });
// }

const axios = require('axios').default;
const urlJoin = require('url-join');

const sendRequest = async ({
    url,
    headers,
    method,
    body,
    queryParameters
}) => {
    // Build full fetch data
    let fetchData = {};

    if (url) {
        if (queryParameters) {
            for (let key in queryParameters) {
                let param = `?${key}=${queryParameters[key]}`;
                url = urlJoin(url, param);
            }
        }
        fetchData.url = url;
    }

    if (headers && headers.length !== 0) {
        fetchData.headers = headers;
    }
    if (method) {
        fetchData.method = method;
    }
    if (body) {
        fetchData.data = body;
    }

    // Make a request and get text response
    try {
        return await axios(fetchData);
    } catch (e) {
        return e.response;
    }

}

export const apiService = {
    sendRequest
}