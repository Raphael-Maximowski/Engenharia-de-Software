
const sumNumbersInArray = (numbersArray) => {
    if (!Array.isArray(numbersArray)) return

    return numbersArray.reduce((acc, item) => {
        return acc + item
    }, 0)
}

const returnStringsInUpperCase = (arrayOfString) => {
    return arrayOfString.filter((item) => typeof item === 'string')
        .map((item) => item.toUpperCase())
}

const insertItemInArray = (array, item) => {
    if (!Array.isArray(array) || !item) return
    array.push(item)
    return  array
}

const removeItemFromArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) return
    array.pop()
    return array
}

const filterEvenNumbers = (numbersArray) => {
    if (!Array.isArray(numbersArray)) return
    return numbersArray.filter((item) => typeof item === 'number' && item % 2 === 0)
}

const filterStringLongerThanFive = (stringsArray) => {
    return stringsArray.filter((item) => typeof item === 'string' && item.length > 5)
}

const findBiggestNumberInArray = (numbersArray) => {
    return numbersArray.reduce((acc, item) => {
        item > acc && (acc = item)
        return acc
    }, 0)
}

const returnStringOfArrays = (stringArray) => {
    return stringArray.filter((item) => typeof item === 'string').reduce((finalString, item) => {
        finalString += `${item}, `
        return finalString
    }, "")
}

const returnArrayInverted = (array) => {
    return array.reverse()
}

const returnNumberSquared = (numbersArray) => {
    return numbersArray.filter((item) => typeof item === 'number')
        .map((item) => { return item ** 2 })
}




