import { v4 as uuidv4 } from 'uuid';

let tests = [
    {
        id: '1',
        title: '/api/users',
        method: 'get',
        url: 'https://localhost:3000/api/users',
        headers: null,
        body: null,
        dir: ''
    },
    {
        id: '2',
        title: '/api/users',
        method: 'post',
        url: 'https://localhost:3000/api/users',
        headers: {
            "Content-Type": "application/json"
        },
        body: {
            firstName: "Jacob",
            lastName: "Kim"
        },
        dir: 'users'
    },
    {
        id: '3',
        title: '/api/tests',
        method: 'get',
        url: 'https://localhost:3000/api/tests',
        headers: null,
        body: null,
        dir: 'tests'
    },
    {
        id: '4',
        title: '/api/tests',
        method: 'put',
        url: 'https://localhost:3000/api/tests/1',
        headers: null,
        body: {
            name: "Sample Test"
        },
        dir: ''
    }
]

/**
 * TODO: replace with actual api call like above example
 * @param testId 
 * @returns 
 */
export const fetchTest = (testId) => {
    return {
        type: 'FETCH_TEST',
        payload: tests.find((test) => { return test.id === testId })
    }
}

export const fetchTests = () => {
    return {
        type: 'FETCH_TESTS',
        payload: tests
    }
}

export const saveTest = (data) => {

    const foundIndex = tests.findIndex((exec) => { return exec.id === data.id });

    if (foundIndex >= 0) {
        tests[foundIndex] = data;
    } else {
        tests.push(data);
    }

    console.log(tests);

    return {
        type: 'SAVE_TEST',
        payload: {
            tests,
            savedTest: data
        }
    }
}


export const createTemporaryTest = () => {

    return {
        type: 'CREATE_TEMP_TEST',
        payload: {
            id: uuidv4(),
            title: 'Untitled Test',
            method: 'get',
            url: '',
            headers: null,
            body: null,
            dir: ''
        }
    }
}

export const changeActiveTest = (testId) => {
    return {
        type: 'SET_ACTIVE_TEST',
        payload: { id: testId }
    };
}

export const closeTest = (testId) => {
    return {
        type: 'CLOSE_TEST',
        payload: {
            id: testId
        }
    }
}