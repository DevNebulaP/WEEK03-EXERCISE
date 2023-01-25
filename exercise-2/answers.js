function convertADtoBE(input) {
    return (typeof(input) == 'number' && input >= 0)? "พ.ศ. " + (input+543) : "ไม่ถูกต้อง"
}

function evenOrOdd(input) {
    return input%2 == 0? "even" : "odd"
}

function getFullName(input) {
    return (input["sex"] == "male"? "Mr. " : "Ms. ") + input["firstName"] + " " + input["lastName"]
}

function getFirstName(input) {
    return input.substring(0, input.indexOf(" "))
}