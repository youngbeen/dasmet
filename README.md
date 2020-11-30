
[TOC]

## Dasmet

`Dasmet` is a light weight data management(e.g. store, dict) util library

### Features

* Easy API design as first-class rule

if you hate ugly API usage for plain data store management, you may try `dasmet`

|                               | vuex or other state management system | data model | `dasmet`         |
| ----------------------------- | ------------------------------------- | ---------- | ---------------- |
| **data init**                 | ☹️ Complicated                         | 🙂 Simple   | 🙂 Simple         |
| **accessing data**            | 😐 A little complicated                | 🙂 Simple   | 🙂 Simple         |
| **setting by k-v**            | Must via commit(maybe complicated)    | 🙂 Simple   | 🙂 Simple         |
| **setting by object merging** | Must via commit(maybe complicated)    | ❌ No       | ✅ Yes yet simple |
| **data snapshot**             | ✅ Yes                                 | ❌ No       | ❌ No             |
| **weight**                    | ☹️ Heavy                               | 🙂 Light    | 🙂 Light          |

> Tip: Please noted that if you need data snapshot, a state management system is still better solution. But if you are aware of that #YouMayNotNeedStateManagement#, you should abandon state management system in you project from now.

### Install

Install it via npm

```shell
npm i -S @youngbeen/dasmet
```

### Import

```javascript
import { newStore, newDict } from '@youngbeen/dasmet'
```

### Usage

#### Store Usage

```javascript
// generating store instance
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
// setting value by object (merge value)
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

### Documents

n/a
