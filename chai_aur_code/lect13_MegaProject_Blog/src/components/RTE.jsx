import React from 'react'
import {useform} from 'react-hook-form'
import { Controller } from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

// run time Editor (we are gonna use it for editing our blogs)

// since we are creating a component for the RTE so we need a ref jo parent pass krega 
// for this parent passes a controller(control used by React-hook-form) to the child component 
export default function RTE({name,control,label,defaulvalue=""}){
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      
      <Controller
      name={name || "content"}
       control={control}  
      // control comes from the parent (like ref)
       render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}