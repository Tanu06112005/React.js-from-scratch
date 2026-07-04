import React, { useEffect } from 'react'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

const EditPost = () => {
    const navigate=useNavigate();
    const {slug}=useParams()
    const [posts,setPosts]=useState();

    useEffect( ()=> {
        if(slug){
            appwriteService.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    })
    
  return post? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
      
    </div>
      ) : null
}

export default EditPost
