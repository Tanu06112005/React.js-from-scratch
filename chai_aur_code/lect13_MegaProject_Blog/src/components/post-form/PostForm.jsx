import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index.js";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.authreducers.userData);



    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };


// why did we used useCallback here 
// Every keystroke in the form can trigger a re-render, so a new slugTransform function would be created each time.
   const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

     React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);
// This is similar to removing an event listener:

// window.addEventListener(...)

// Later:

// window.removeEventListener(...)

// unsubscribe() serves the same purpose for watch.

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className='w-2/3 px-2'>
        <Input 
            label="Title"
            placeholder="Title"
            className='mb-4'
            {...register("title",{required:true})}
        />
        <Input 
            label="slug"
            placeholder="slug"
            className='mb-4'
            {...register("slug",{required:true})}
            onInput={(e)=>{
                setValue("slug",slugTransform(e.currentTarget.value),{shouldValidate:true})
            }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />

        </div>
         <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>



    </form>
  )
}



// why callback is used::::?
// Great question. This code is from a common React Hook Form + Appwrite project, and `useCallback` is used for a specific React optimization.

// I'm assuming the code you're referring to looks something like this:

// ```jsx
// const slugTransform = useCallback((value) => {
//     if (value && typeof value === "string") {
//         return value
//             .trim()
//             .toLowerCase()
//             .replace(/[^a-zA-Z\d\s]+/g, "-")
//             .replace(/\s/g, "-");
//     }

//     return "";
// }, []);
// ```

// Let's understand **why `useCallback` is used here.**

// ---

// # First, what is `useCallback`?

// `useCallback` memoizes (remembers) a function.

// Normally, every time a component re-renders, React creates a **new function**.

// Example:

// ```jsx
// function App() {

//     const sayHello = () => {
//         console.log("Hello");
//     };

//     return <Child fn={sayHello} />;
// }
// ```

// Suppose `App` renders 10 times.

// Then React creates

// ```
// Render 1
// sayHello -> Function A

// Render 2
// sayHello -> Function B

// Render 3
// sayHello -> Function C
// ```

// Even though the code is the same, each render creates a **new function object**.

// ---

// # What does `useCallback` do?

// ```jsx
// const sayHello = useCallback(() => {
//     console.log("Hello");
// }, []);
// ```

// Now

// ```
// Render 1
// sayHello -> Function A

// Render 2
// sayHello -> Function A

// Render 3
// sayHello -> Function A
// ```

// The same function reference is reused as long as the dependencies don't change.

// ---

// # Now look at `slugTransform`

// ```jsx
// const slugTransform = useCallback((value) => {
//     return value
//         .trim()
//         .toLowerCase()
//         .replace(/\s+/g, "-");
// }, []);
// ```

// If `useCallback` were **not** used:

// ```
// Render 1
// slugTransform -> Function A

// Render 2
// slugTransform -> Function B

// Render 3
// slugTransform -> Function C
// ```

// Every keystroke in the form can trigger a re-render, so a new `slugTransform` function would be created each time.

// ---

// # Why is that a problem here?

// Later in the code, you'll usually see something like:

// ```jsx
// React.useEffect(() => {
//     const subscription = watch((value, { name }) => {
//         if (name === "title") {
//             setValue("slug", slugTransform(value.title));
//         }
//     });

//     return () => subscription.unsubscribe();
// }, [watch, slugTransform, setValue]);
// ```

// Notice this dependency array:

// ```jsx
// [watch, slugTransform, setValue]
// ```

// If `slugTransform` changes on every render:

// ```
// Render 1
// slugTransform = Function A

// ↓

// useEffect runs

// ↓

// Render 2
// slugTransform = Function B

// ↓

// Dependency changed

// ↓

// useEffect runs again

// ↓

// New subscription

// ↓

// Cleanup

// ↓

// Again...
// ```

// The effect keeps re-running unnecessarily because React compares function references, not their code.

// With `useCallback`, the function reference stays the same, so the effect only reruns if one of its real dependencies changes.

// ---

// # Why are the dependencies `[]`?

// ```jsx
// const slugTransform = useCallback((value) => {
//     ...
// }, []);
// ```

// The function only depends on its `value` parameter. It doesn't use any variables from the component like `post`, `userData`, or state.

// So it can safely be created once and reused for the lifetime of the component.

// ---

// # Could the code work without `useCallback`?

// Yes, it would still produce the correct slug.

// However:

// * A new function would be created on every render.
// * Any `useEffect` or memoized child component depending on `slugTransform` would see it as "changed" every time.
// * That can lead to unnecessary effect executions or re-renders.

// ---

// # Visual flow

// Without `useCallback`:

// ```
// User types

// ↓

// Component renders

// ↓

// New slugTransform function

// ↓

// Dependency changed

// ↓

// useEffect runs again

// ↓

// Extra work
// ```

// With `useCallback`:

// ```
// User types

// ↓

// Component renders

// ↓

// Same slugTransform function

// ↓

// Dependencies unchanged

// ↓

// useEffect does not rerun unnecessarily
// ```

// ### In this specific `PostForm` example, the main reason for `useCallback` is **not** that generating the slug is expensive. The real benefit is keeping the **function reference stable**, especially because `slugTransform` is used inside a `useEffect` (or could be passed to child components). This prevents unnecessary effect re-executions and keeps the component more efficient.




// Component mounts
//         │
//         ▼
// useEffect runs
//         │
//         ▼
// watch() starts listening to all form fields
//         │
//         ▼
// User types "React Hook Form" in Title
//         │
//         ▼
// watch callback is called
//         │
//         ▼
// name === "title" ?  ✔ Yes
//         │
//         ▼
// slugTransform("React Hook Form")
//         │
//         ▼
// "react-hook-form"
//         │
//         ▼
// setValue("slug", "react-hook-form")
//         │
//         ▼
// Slug field updates automatically
//         │
//         ▼
// User navigates away / component unmounts
//         │
//         ▼
// unsubscribe()
//         │
//         ▼
// Listener removed