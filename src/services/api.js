
const sendRequest = async (rq) => {
    fetch({
        url: rq.url,
        method: rq.method,
        headers: rq.headers,
        body: rq.body
    })
}

export const apiService = {
    sendRequest
}