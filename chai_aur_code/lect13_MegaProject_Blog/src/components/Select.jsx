import React, {useId} from 'react'

function Select({
    options,
    label,
    className = "",
    ...props
}, ref){

    const id=useId()
  return (
    <div className='w-full'>
        {label && <label className='' htmlFor={id}></label>}
        
        <select 
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>
                {option}
                </option>
            ))}

        </select>
    </div>
  )
}

export default React.forwardRef(Select)



// forwardRef, we need to wrap the component with React.forwardRef and pass the ref as a second argument to the component function. 
// This allows the parent component to access the ref of the Select component.

/*
**forwardRef (Casual Notes):**

> **`forwardRef` tab use hota hai jab parent component ko child component ke andar wale actual HTML element (jaise `<input>`) ko access ya control karna ho.**
> **Simple words me, ye `ref` ko child component ke through andar wale DOM element tak pahucha deta hai.** 🚀




`forwardRef` is one of those React concepts that sounds difficult, but it's actually solving a very simple problem.

---

# First understand what `ref` is

A `ref` is used when you want to directly access a DOM element.

Example:

```jsx
import { useRef } from "react";

function App() {
    const inputRef = useRef();

    return (
        <>
            <input ref={inputRef} />
            <button onClick={() => inputRef.current.focus()}>
                Focus Input
            </button>
        </>
    );
}
```

When the button is clicked, the cursor comes inside the input.

So,

```
ref → gives direct access to a DOM element
```

---

# Now the problem

Suppose you make your own Input component.

```jsx
function Input() {
    return <input />;
}
```

Now in App:

```jsx
function App() {
    const inputRef = useRef();

    return <Input ref={inputRef} />;
}
```

❌ This **doesn't work**.

Why?

Because `ref` only works on:

* HTML elements (`input`, `button`, `div`)
* Class components (old React)

It **does not automatically work on function components**.

---

# So how do we fix it?

We tell React:

> "If someone gives a ref to my component, pass it to the actual input inside."

This is exactly what `forwardRef` does.

---

# Without forwardRef

```
App
 │
 │ ref
 ▼
<Input />   ❌ Stops here
     │
     ▼
   <input>
```

The ref never reaches the actual `<input>`.

---

# With forwardRef

```jsx
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    return <input ref={ref} />;
});
```

Now:

```jsx
function App() {
    const inputRef = useRef();

    return <Input ref={inputRef} />;
}
```

React automatically forwards the ref.

```
App
 │
 │ ref
 ▼
<Input />
 │
 │ forwards ref
 ▼
<input>
```

Now

```jsx
inputRef.current.focus();
```

works perfectly.

---

# Real-life analogy 📦

Imagine:

You want to give a letter to your friend.

Without `forwardRef`:

```
You
 ↓
Receptionist
 ↓
Friend
```

The receptionist keeps the letter.

Friend never receives it.

---

With `forwardRef`:

```
You
 ↓
Receptionist
 ↓
(forwards letter)
 ↓
Friend
```

The receptionist simply passes it on.

`forwardRef` is like that receptionist.

---

# Syntax

```jsx
const MyComponent = forwardRef((props, ref) => {
    return (
        <input ref={ref} />
    );
});
```

Notice it receives **two parameters**:

```jsx
(props, ref)
```

Normally components only receive:

```jsx
(props)
```

`forwardRef` enables React to provide the second `ref` parameter.

---

# Why is it used?

Mostly for reusable UI components.

For example, if you build your own:

* `<Input />`
* `<Button />`
* `<Textarea />`
* `<Modal />`

You still want the parent to be able to:

* focus the input
* select text
* scroll to an element
* measure its size

`forwardRef` makes that possible.

---

## One-line definition (Notes)

> **`forwardRef` is a React function that allows a parent component's `ref` to be passed ("forwarded") to a child component's actual DOM element, so the parent can directly access or control that element.**

### Easy way to remember:

> **`ref` cannot enter a function component by default. `forwardRef` opens the door and passes the `ref` to the real DOM element inside the component.**
*/