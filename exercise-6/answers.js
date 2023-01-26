function save () {
    const people = [
        { name: "Aariz Bennett", age: 24 },
        { name: "Najma Shaffer", age: 17 },
        { name: "Jill Schmitt", age: 32 },
        { name: "Anita Rose", age: 44 },
    ]
    localStorage.setItem("people", JSON.stringify(people))
}

function read () {
    return JSON.parse(localStorage.getItem("people"))
}

function remove () {
    localStorage.removeItem("people")
}