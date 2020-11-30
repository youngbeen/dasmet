In vue3, state management system is not recommended. Official recommend is to use `provide/inject`.

I.e. if we need to create a data store to save all system info. We can do it like this:



In `App.vue` root, *provide* data store

```javascript
import { reactive } from 'vue'
import { newStore } from '@youngbeen/dasmet'

...

provide () {
  return {
    system: reactive(newStore({
      ...
    }))
  }
}
```

> Tips:
>
> 1. `reactive` is vue3 standard api of making data reactive in depth
> 2. `newStore` method is from `dasmet` of generating a data store instance



Then *inject* data store in any child component

```javascript
inject: ['system']

...

// using dasmet api to deal with data 
this.system.set(key, value)
this.system.get(key)
```



As well you can bind with template

```html
<template>
  <div>
    <!-- recommend using value in template -->
    {{ system.value.key }}
    <!-- get() is OK too -->
    {{ system.get(key) }}
  </div>
</template>
```

