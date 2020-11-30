
[TOC]

## Dasmet

`Dasmet` is a light weight data management(e.g. store, dict) util library

if you hate ugly API usage for plain data store management, you may try `dasmet`

|                                     | vuex or other state management system | data model | `dasmet`         |
| ----------------------------------- | ------------------------------------- | ---------- | ---------------- |
| **data init**                       | ☹️ Complicated                         | 🙂 Simple   | 🙂 Simple         |
| **accessing data**                  | 😐 A little complicated                | 🙂 Simple   | 🙂 Simple         |
| **setting by k-v**                  | Must via commit(maybe complicated)    | 🙂 Simple   | 🙂 Simple         |
| **setting by object merging**       | Must via commit(maybe complicated)    | ❌ No       | ✅ Yes yet simple |
| **data snapshot**                   | ✅ Yes                                 | ❌ No       | ❌ No             |
| **weight**                          | ☹️ Heavy                               | 🙂 Light    | 🙂 Light          |
| **native Array bonus util support** | ❌ No                                  | ❌ No       | ✅ Yes            |

> Tip: Please note that if you need data snapshot, a state management system is still better solution. But if you are aware of that #YouMayNotNeedStateManagement#, you should avoid using state management system in you project from now.



### Features

* Easy API design as first-class rule
* `Array.get()` like map

### Install

Install it via npm

```shell
npm i -S @youngbeen/dasmet
```

### Import

```javascript
import { newStore } from '@youngbeen/dasmet'
```

### Usage

#### Store Usage

```javascript
// generating data store instance
let userStore = newStore({
  userName: '',
  userId: ''
})

// setting value by k-v
userStore.set('userName', 'you')
userStore.set('newKey', 1)
/* -> {
  userName: 'you',
  userId: '',
  newKey: 1
} 
*/
// setting value by object merging (merge value)
userStore.set({
  userName: 'youngbeen',
  userId: '21'
})
/* -> {
  userName: 'youngbeen',
  userId: '21',
  newKey: 1
} 
*/

// accessing value
userStore.get('userName') // -> 'youngbeen'
// or
userStore.value.userId // -> '21'
```



#### Dict Usage

New ES6+ `Array` has many amazing features like `filter`,` map` etc. In a dict model we ofter want to *get* an item directly, however it is not convenient using `dict.someDictTypes.find(item => item.key === targetKey)`

`Dasmet` brings a native support(via `Array.prototype`) of `Array.get` method

```javascript
Array.get(value, [keyName])
```

e.g.

```javascript
// finding item by specific value
dict.someDictTypes.get(targetKey)
```

Meanwhile, you can choose which key to *get*

```javascript
dict.someDictTypes.get(targetKey, myKeyName)
```

> Tip: if `keyName` not set, default *get* priority is `id > key > value`

### Documents

* [Example of using with vue3](./docs/using-with-vue3.md)