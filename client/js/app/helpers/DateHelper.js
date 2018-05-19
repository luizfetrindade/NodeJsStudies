class DateHelper {
    
    constructor(){
        throw new Error('This class can`t be instanced')
    }

    static dateToText(date) {
        return date.getDate()
            + '/' + (date.getMonth() + 1)
            + '/' + date.getFullYear()
    }

    static textToDate(text) {
        return new Date(...text.split('-').map((item, indice) => item - indice % 2))
    }


}