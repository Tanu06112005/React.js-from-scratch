import React from 'react'
import { Controller } from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

// run time Editor (we are gonna use it for editing our blogs)

// since we are creating a component for the RTE so we need a ref jo parent pass krega 
// for this parent passes a controller(control used by React-hook-form) to the child component 
export default function RTE({name,control,label,defaultvalue=""}){
  return (
    <div className='w-full'>
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
      
      <Controller
      name={name || "content"}
       control={control}  
      // control comes from the parent (like ref)
       render={({field: {onChange}}) => (
        // <Editor
        // initialValue={defaultvalue}
        // init={{
        //     initialValue: defaultvalue,
        //     height: 500,
        //     menubar: true,
        //     plugins: [
        //         "image",
        //         "advlist",
        //         "autolink",
        //         "lists",
        //         "link",
        //         "image",
        //         "charmap",
        //         "preview",
        //         "anchor",
        //         "searchreplace",
        //         "visualblocks",
        //         "code",
        //         "fullscreen",
        //         "insertdatetime",
        //         "media",
        //         "table",
        //         "code",
        //         "help",
        //         "wordcount",
        //         "anchor",
        //     ],
        //     toolbar:
        //     "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
        //     content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        // }}
        // onEditorChange={onChange}
        // />
        <Editor
      apiKey='qdippoeag44bmxtufduyzx6lw61dtwcwa66fwk73o1v9idsr'
      init={{
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Premium features
          'checklist', 'mediaembed', 'casechange', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'advtemplate', 'tinymceai', 'uploadcare', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | tinymceai-chat tinymceai-quickactions tinymceai-review | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        tinymceai_token_provider: async () => {
          await fetch(`https://demo.api.tiny.cloud/1/qdippoeag44bmxtufduyzx6lw61dtwcwa66fwk73o1v9idsr/auth/random`, { method: "POST", credentials: "include" });
          return { token: await fetch(`https://demo.api.tiny.cloud/1/qdippoeag44bmxtufduyzx6lw61dtwcwa66fwk73o1v9idsr/jwt/tinymceai`, { credentials: "include" }).then(r => r.text()) };
        },
        uploadcare_public_key: '9e75defe872c642382f5',
      }}
      initialValue="Welcome to TinyMCE!"
              onEditorChange={onChange}

    />
    )}
    />

     </div>
  )
}