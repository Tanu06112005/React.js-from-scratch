import React from 'react'
import { useState } from 'react'
import authServices from '../appwrite/auth'
import {login as storeLogin } from '../store/authSlice'
import { Link, useNavigate } from 'react-router-dom'
import {Button,Input,Logo} from './index.js' 
import { useDispatch } from 'react-redux'

// we are using react hook form here 
// it gives array of two : handleSubmit function and register
import { useForm } from 'react-router-dom'


const Login = () => {
    const [error,setError]=useState("")
    const [register,handleSubmit]=useForm();
    const dispatch=useDispatch()
    const navigate=useNavigate()

    // ab jaise hi sign in button click hoga to ye hoga 
    // jo bhi data user ne enter kiya hoga vo jayega backend me(appwrite me) loginfunction ke through session create hoga uske baad get user krange jo bhi data get user se ayega vo hm store me dispatch kra denge(store kra denge)
    const login= async (data)=>{
        setError("")
        try{
           const session= authServices.login(data)
           if(session){
            const userData=authServices.getCurrentUser()
            if(userData) dispatch(storeLogin(userData))
                navigate("/")
            // yaha pe hmne link k use kiye bina hi navigate k use use kiya h 
            // purpose : kyuki bina kisi pe click kiye hi programatically navigate krana tha jaise hu user login kr le
           } 
        }catch(error){
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
         {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

         <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>

                <Input 
                    label="Email"
                    placeholder="Enter your Email"
                    type="email"

                    // multiple inputs ho skte h isliye spread krte h register ko taki overrite n ho jaye email ke liye password input ke liye etc ho kte h
                    {...register("email",{
                         required: true,
                         validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                            }
                    })}
                />

                <Input
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required: true,
                    })}
                />

                <Button
                    type="submit"
                    className="w-full"
                    >Sign in
                </Button>

            </div>
        </form>
        </div>
    </div>
  )
}

export default Login

            

/*
Ye **React Hook Form** ka sabse important concept hai. Chalo easy language me samajhte hain.

---

## Pehle `register` kya hai?

Jab tum likhte ho:

```jsx
const { register, handleSubmit } = useForm();
```

to `register` ek **function** hai.

Iska kaam hai:

> **Input field ko React Hook Form ke saath connect/register karna**, taaki form us input ki value aur validation ko track kar sake.

Simple words me:

> **`register` form ko batata hai ki "ye input mera part hai."**

---

## Ye line dekho

```jsx
register("email", {
    required: true,
    validate: {
        ...
    }
})
```

Yahan:

* `"email"` → field ka naam.
* `required: true` → email mandatory hai.
* `validate` → custom validation.

---

## Ab spread (`...`) kyu use kiya?

Ye sabse important part hai.

`register()` **sirf ek value return nahi karta**, balki ek object return karta hai.

Suppose:

```jsx
register("email")
```

return karta hai:

```javascript
{
  name: "email",
  onChange: function(){},
  onBlur: function(){},
  ref: function(){}
}
```

Ab agar tum likho:

```jsx
<Input register("email") />
```

❌ Invalid syntax.

Aur agar likho:

```jsx
<Input register={register("email")} />
```

To `Input` ke andar `register` naam ka ek object aa jayega.

Lekin `<input>` ko ye properties alag-alag chahiye.

Isliye hum spread operator use karte hain:

```jsx
<Input {...register("email")} />
```

Ye automatically ban jata hai:

```jsx
<Input
    name="email"
    onChange={...}
    onBlur={...}
    ref={...}
/>
```

Aur agar tumhara `Input` component aise bana hai:

```jsx
<input {...props} />
```

to finally HTML input ko ye sari properties mil jaati hain.

---

## Flow

```text
register("email")
        │
        ▼
Returns Object
        │
        ▼
{
 name,
 onChange,
 onBlur,
 ref
}
        │
        ▼
... (Spread)
        │
        ▼
<Input />
        │
        ▼
<input />
```

---

## Short Notes 📝

### `register`

> **`register` React Hook Form ka function hai jo input field ko form ke saath connect karta hai aur uski value + validation manage karta hai.**

### `...register()`

> **`register()` ek object return karta hai. Spread operator (`...`) us object ki sari properties (`name`, `onChange`, `onBlur`, `ref`, etc.) ko input me pass kar deta hai.**

---

### Easy Trick 🚀

Socho `register()` ek **ID card** deta hai jisme field ki saari information hoti hai.

`...` ka matlab:

> **"Is ID card ki saari details input ko de do."**

*/