// Problem -  36

const safeJsonParse= (str) => {
    try {
        return JSON.parse(str)
    } catch (error) {
        return null ;
    }
}
console.log('Problem 36:', safeJsonParse('{"name": "Rahim", "age": 25}'));
 

// Problem -  37

const retry = async (fn, times) => {
    for (let i = 0; i < times ; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === times -1) {
                throw error ;
            }
        }
        
    }
}
retry(async()=>{ throw new Error('Failed')}, 3)
.catch((error) => {
    console.log('Problem 37:', error.message);
})



// Problem -  38

