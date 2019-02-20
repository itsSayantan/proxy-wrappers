function __findInObject(target, key) {
    for (entry in target) {
        if (entry === key) {
            return true
        } else if (typeof target[entry] === 'object') {
            const res = __findInObject(target[entry], key)
            if (!res) {
                continue
            } else {
                return res
            }
        }
    }
    return false
}

function findInObjectWrapper(target) {
    const findInObjectHandler = {
        has: (target, key) => {
            return __findInObject(target, key)
        }
    }
    return new Proxy(target, findInObjectHandler)
}

module.exports = {
    findInObjectWrapper
}