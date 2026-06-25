// hooks are nothing but a function  that return an array with two variabes....
// so we nned to design a function that suits our own purpose

/*. useEffect
useEffect(()=>{
Kyu use kiya?

API call ek side effect hai.

React ka flow:

Component render hota hai
UI screen par aati hai
useEffect run hota hai
API call hoti hai

Isi liye API calls ko generally useEffect me likhte hain.

*/


import { useState, useEffect } from "react"

// updated url:
 // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json

function useCurrencyInfo(currency){
    // now i want koi jb koi is hook ko use kre tbhi ye dta load ho uske liye we will use useEffect hook taki phle baki kaam ho jye fir data load ho
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]) )
    },[currency])  //currency: change hogi tabhi API dubara chalegi.
    return data    // given currency ke regarding jo data aaya h use return krna h
}

export default useCurrencyInfo // export nhi to components me import nhii kr paoge


/*
Bahut accha question hai. 👍

Tum puch rahe ho:

```js
return data
```

aur

```js
export default useCurrencyInfo
```

**yehi values kyu use hui hain?**

---

# 1. `return data` kyu?

Custom hook ka purpose kya hai?

```js
function useCurrencyInfo(currency){
   ...
}
```

Ye API se currency data la raha hai.

To jo cheez hook ne fetch ki hai, wahi to bahar deni padegi.

```js
const [data,setData]=useState({})
```

Yahi state me API ka data store hai.

Isliye:

```js
return data
```

---

### Agar return na kare to?

```js
function useCurrencyInfo(currency){
   const [data,setData]=useState({})
}
```

Component me:

```js
const data = useCurrencyInfo("usd")
```

Output:

```js
undefined
```

kyuki hook ne kuch return hi nahi kiya.

---

### Return data karne par

```js
const data = useCurrencyInfo("usd")
```

maan lo data hai:

```js
{
  inr:85.7,
  eur:0.86
}
```

to ye object component me mil jayega.

---

# 2. `export default useCurrencyInfo` kyu?

Ye hook dusre files me use karna hai.

Agar export nahi karoge:

```js
function useCurrencyInfo(){
}
```

to dusri file ise dekh hi nahi payegi.

---

### Export karne par

```js
export default useCurrencyInfo
```

Ab kisi bhi component me:

```js
import useCurrencyInfo from "./hooks/useCurrencyInfo"
```

likh sakte ho.

---
*/