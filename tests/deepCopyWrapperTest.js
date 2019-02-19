const { deepCopyWrapper } = require('..')

module.exports = {
    deepCopyWrapperTest: () => {
        let obj = {
            a: 10,
            b: [1, 2, 3],
            c: {
                c1: 100,
                c2: 200
            }
        }

        let copy = deepCopyWrapper(obj)

        console.log("-----------------------------------")
        console.log("--------  ORIGINAL OBJECT  --------")
        console.log(obj)
        console.log("-------- DUPLICATE  OBJECT  -------")
        console.log(copy)
        console.log("-----------------------------------")
    }
}