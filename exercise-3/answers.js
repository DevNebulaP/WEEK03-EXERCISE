function getDayName (input) {
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
    return daysInWeek[input]
}

function formatDate (input) {
    const monthsInYear = [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
    return `${getDayName(input.day)}ที่ ${input.date} ${monthsInYear[input.month]} ${convertADtoBE(input.year)}`
}

function findTotal (input) {
    let sum = 0;
    for(let i = 0; i < input.length; i++){
        sum += input[i]
    }
    return sum
}

function convertADtoBE(input) {
    return (typeof(input) == 'number' && input >= 0)? "พ.ศ. " + (input+543) : "ไม่ถูกต้อง"
}