function mapToSquare (input) {
    return input.map(num => Math.pow(num, 2))
}

function convertTemperature (input) {
    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
    return input.map(dp => {return {"date" : dp.date,
                                    "temperature" : fah_to_celsius(dp.temperature)}})
}

function filterEvenNumber (input) {
    return input.filter(num => {return num%2 == 0})
}

function filterAgeRange (input) {
    return input.people.filter(dp => {return input.min <= dp.age && dp.age <= input.max})
}

function removeByFilter (input) {
    return input.people.filter(dp => {return input.removeId != dp.id})
}

function insertBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **แทรก (insert)** สมาชิกเข้าไปใน Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
}

function removeBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **ลบ (remove)** สมาชิกออกจาก Array  
    // เรียงลำดับตัวเลขให้ถูกต้อง
}

function replaceBySplice (input) {
    input.splice(4, 1, 4)
    return input
}

function findAverage(input) {
    // TODO: ให้ใช้ฟังก์ชัน .map() และ/หรือ .filter() และ/หรือ .reduce() ในการหาค่าเฉลี่ยของตัวเลขทั้งหมดใน input  
    // (ให้ถือว่า null, undefined, '' เป็น 0)  
}