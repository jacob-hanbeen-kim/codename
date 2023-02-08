let executionHistory = [
    {
        id: '1',
        title: '/api/users',
        test: [
            { name: '$.id to equal 2', status: 'pass' }
        ]
    }
]

export const fetchExecutionById = (testId) => {
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