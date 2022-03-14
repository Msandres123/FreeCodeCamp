function convertToRoman(num) {
    let str = ""
    let romKey = [["M", 1000],["CM", 900],["D", 500],["CD", 400],["C", 100],["XC", 90],["L", 50], ["XL", 40],["X", 10], ["IX", 9],["V", 5], ["IV", 4],["I", 1]]
    romKey.forEach(subArr => {
        let ratio = num/subArr[1] 
        if(ratio >= 1) {
        str += subArr[0].repeat(Math.floor(ratio))
        let subtracted = Math.floor(ratio) * subArr[1]
        num = num - subtracted
        }
    })
     return str;
    }
    
    console.log(convertToRoman(68));
    console.log(convertToRoman(3999));