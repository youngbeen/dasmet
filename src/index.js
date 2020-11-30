
// #2 newDict  什么数据结构 => Map? weakMap?
// let myDict = newDict(...)
// myDict.someTypes.get(key)
// myDict.someTypes.filter() map() ... 支持所有的数组方法？
// #3 文档编写，并添加vue3, vue2之类的guide book？

const isString = (val) => {
  return typeof (val) === 'string'
}

const isObject = (val) => {
  return Object.prototype.toString.call(val) === '[object Object]'
}

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

// export default {
//   newStore
// }
