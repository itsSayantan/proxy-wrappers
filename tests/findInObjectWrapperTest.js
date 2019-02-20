const { findInObjectWrapper } = require('..')

module.exports = {
    findInObjectWrapperTest: () => {
        let obj = {
            a: 10,
            b: [1, 2, 3],
            c: {
                c1: 100,
                c2: 200,
                d: {
                    e: {
                        f: 10
                    }
                }
            }
        }

        let keyToLookFor = 'f'

        const result = keyToLookFor in findInObjectWrapper(obj)

        console.log("***********************************")
        console.log("------FIND IN OBJECT WRAPPER-------")
        console.log("--------  ORIGINAL OBJECT  --------")
        console.log(obj)
        console.log("-----------  SEARCH KEY -----------")
        console.log(keyToLookFor)
        console.log("------------- RESULT  -------------")
        console.log(result)
        console.log("-----------------------------------")
        console.log("***********************************")
    }
}