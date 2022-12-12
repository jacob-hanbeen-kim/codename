
const sendRequest = (rq) => {
    let config = {
        method: rq.method,
        headers: rq.headers
    }

    if (rq.requestBody) {
        config['body'] = rq.requestBody;
    }


    return fetch(rq.url, config
    ).then(response => response.json()
    ).then(data => {
        // console.log(data);
        return data;
    }).catch(err => {
        // Do something for an error here
        console.log("Error Reading data " + err);
    });
}

export const apiService = {
    sendRequest
}