function deepCopyWrapper(target) {

    const deepCopyHandler = {
        get: (target) =>  {
            return JSON.parse(JSON.stringify(target))
        }
    }

    return new Proxy(target, deepCopyHandler)
}

module.exports = {
    deepCopyWrapper
}