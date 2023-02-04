export const AssertOperators = [
    'equal', // Asserts non-strict equality (==) of actual and expected.
    'notEqual', // Asserts non-strict inequality (!=) of actual and expected.
    'strictEqual', // Asserts strict equality (===) of actual and expected.
    'notStrictEqual', // Asserts strict inequality (!==) of actual and expected.
    'deepEqual', // Asserts that actual is deeply equal to expected.
    'notDeepEqual', // Assert that actual is not deeply equal to expected.
    'isAbove', // Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
    'isAtLeast', // Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
    'isBelow', // Asserts valueToCheck is strictly less than (<) valueToBeBelow.
    'isAtMost', // Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
    'isTrue', // Asserts that value is true.
    'isNotTrue', // Asserts that value is not true.
    'isFalse', // Asserts that value is false.
    'isNotFalse', // Asserts that value is not false.
    'isNull', // Asserts that value is null.
    'isNotNull', // Asserts that value is not null.
    'isNaN', // Asserts that value is NaN.
    'isNotNaN', // Asserts that value is not NaN.
    'exists', // Asserts that the target is neither null nor undefined.
    'notExists', // Asserts that the target is either null or undefined.
    'isUndefined', // Asserts that value is undefined.
    'isDefined', // Asserts that value is not undefined.
    'isFunction', // Asserts that value is a function.
    'isNotFunction', // Asserts that value is not a function.
    'isObject', // Asserts that value is an object of type ‘Object’ (as revealed by Object.prototype.toString). The assertion does not match subclassed objects.
    'isNotObject', // Asserts that value is not an object of type ‘Object’ (as revealed by Object.prototype.toString).
    'isArray', // Asserts that value is an array.
    'isNotArray', // Asserts that value is not an array.


    'include', // Asserts that haystack includes needle. Can be used to assert the inclusion of a value in an array, a substring in a string, or a subset of properties in an object.
    'notInclude', // Asserts that haystack does not include needle. Can be used to assert the absence of a value in an array, a substring in a string, or a subset of properties in an object.

    'property', // Asserts that object has a direct or inherited property named by property.
    'notProperty', // Asserts that object does not have a direct or inherited property named by property.


    'lengthOf', // Asserts that object has a length or size with the expected value.
]