function sayHello () {
    return "Hello world!"
}

function isString (input) {
    return typeof(input) == "string"
}

function isNumber (input) {
    return typeof(input) == "number"
}

function isArray (input) {
    return Array.isArray(input)
}

function isObject (input) {
    return typeof(input) === 'object' && !Array.isArray(input) && input !== null
}

function isFunction (input) {
    return typeof(input) == "function"
}