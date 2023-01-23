var chai = require('chai');
let { expect, assert } = require('chai');

var jp = require('jsonpath');

export function runTests(res, test) {
    let summary = [];

    test.forEach((t) => {
        let testResult = {
            title: t.path,
            status: 'pending',
            error: null
        }
        try {
            runTest(res, t.path, t.operation, t.expected, t.dataType);
            testResult.status = 'pass'
        } catch (e) {
            testResult.status = 'fail'
            testResult.error = e;
        }

        console.log('summary', summary);

        summary.push(testResult);
    })

    return summary;
}


function runTest(res, path, operation, expectedVal, dataType) {
    let data = jp.query(res, path);
    console.log('data', data);

    if (data.length === 0) {
        throw new Error("Assert Error: no data found");
    }

    data.forEach((actual) => {
        assert[operation](actual, expectedVal);
    })
}