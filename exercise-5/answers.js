function plus(input){
    return input[0] + input[1]
}

function varLetConst() {
    // TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
    // *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***
    const k = 5
    var j = 30
    var i = 0
    for (let  j = 0; j <= 5; j++) {
        i++
    }
    for (let  j = 0; j <= 5; j++) {
        j++
    }
    console.log(j)
    console.log(i)
    console.log(k)
    console.log(j + k + i)
    return j + k + i
}

function chainfunction(input){
    return input.trim().split(" ")[0].toUpperCase() + " " + input.trim().split(" ")[1].toLowerCase()
}