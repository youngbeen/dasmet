
const isString = (val) => {
  return typeof (val) === 'string'
}

const isObject = (val) => {
  return Object.prototype.toString.call(val) === '[object Object]'
}

// const isArray = (val) => {
//   return Object.prototype.toString.call(val) === '[object Array]'
// }

export const newStore = (data) => {
  if (data && isObject(data)) {
    return {
      value: data,
      get: function (key) {
        if (key && isString(key)) {
          if (Object.keys(this.value).includes(key)) {
            return this.value[key]
          } else {
            return undefined
          }
        } else {
          throw new Error('key must be string when invoke "get"')
        }
      },
      set: function (key, value) {
        if (key && isString(key)) {
          // set(key, value)
          this.value[key] = value
        } else if (key && isObject(key)) {
          // set({...})
          this.value = Object.assign(this.value, key)
        } else {
          throw new Error('argument invalid when invoke "set"')
        }
      }
    }
  } else {
    throw new Error('source data must be object')
  }
}

// adding support for Array prototype
Array.prototype.get = function (property, keyName = '') {
  // console.log(property, keyName)
  if (property && isString(property)) {
    if (!this.length) {
      return undefined
    }
    const sampleItem = this[0]
    if (isObject(sampleItem)) {
      // object item
      const keys = Object.keys(sampleItem)
      if (!keyName) {
        // keyName not set, auto detect it
        // NOTE keyName support priority: id > key > value
        if (keys.includes('id')) {
          keyName = 'id'
        } else if (keys.includes('key')) {
          keyName = 'key'
        } else {
          keyName = 'value'
        }
      }
      if (!keys.includes(keyName)) {
        return undefined
      }
      return this.find(item => item[keyName] === property)
    } else {
      // value item
      throw new Error('item must be object when invoke "get"')
    }
  } else {
    throw new Error('key must be string when invoke "get"')
  }
}

// export default {
//   newStore
// }
