// Problem -  36

const safeJsonParse= (str) => {
    try {
        return JSON.parse(str)
    } catch (error) {
        return null ;
    }
}