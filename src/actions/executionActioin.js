let executionHistory = [
    {
        id: '1',
        title: '/api/users',
        response: {
            'id': 1,
            'name': 'Jacob'
        },
        results: [
            { title: '$.id to equal 1', status: 'pass', detail: '' },
            { title: '$.name to equal Daniel', status: 'fail', detail: '' }
        ]
    }
]

export const fetchExecutionById = (testId) => {
    console.log(testId);
    return {
        type: 'FETCH_EXECUTION',
        payload: executionHistory.find((exec) => { return exec.id === testId })
    }
}

export const fetchAllExecutions = () => {
    return {
        type: 'FETCH_ALL_EXECUTIONS',
        payload: executionHistory
    }
}

export const createExecutionHistory = (title, id, response, results) => {

    let found = true;
    let i = 0;
    while (found) {
        const exist = executionHistory.find((exec) => { return exec.id === id });
        if (exist) {
            id = id + '-' + i;
            i++;
        } else {
            found = false;
        }
    }

    executionHistory.unshift({
        id,
        title,
        response,
        results
    })

    return {
        type: 'FETCH_ALL_EXECUTIONS',
        payload: executionHistory
    }
}