/**
 * TODO: change to fetch from DB
 */
export default (state = [], action) => {
    return {
        pm360: [
            { title: '/api/users', method: 'GET', id: '1' },
            { title: '/api/reports', method: 'GET', id: '2' }
        ],
        policy: [
            { title: '/api/users', method: 'GET', id: '3' },
            { title: '/api/users/{id}', method: 'PUT', id: '4' },
            { title: '/api/users/{id}', method: 'DELETE', id: '8' }
        ],
        parkmobile: [
            { title: '/api/users', method: 'GET', id: '5' },
            { title: '/api/users', method: 'POST', id: '6' },
            { title: '/api/users/{id}', method: 'GET', id: '7' }
        ]
    }
}