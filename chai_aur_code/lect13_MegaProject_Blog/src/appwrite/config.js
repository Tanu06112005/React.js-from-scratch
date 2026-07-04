// this file is for configuring the database of apprwite and exporting the configuration to be used in other files

import conf from '../conf/conf.js';
import { Client, Databases, Storage,ID } from 'appwrite';
import { Query } from 'appwrite';


export class DbServices{
    client=new Client(); // created an instance for this class
    databases;  // we will define it in constructor  reason ki jb koi user aaye aur appwrite ke is specific project se connect kre  tb hi account create ho us particular user k
    bucket; // storage bucket for file storage

    constructor(){
        // connecting the client to the appwrite server using the url and project id from conf.js
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        // ab client connect ho gya h 
        // database k instance creat krenge and current client obj pass kr denge 
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    // now deifne all the methods we need for db

    async createPost({title,slug,content,Featuredimage,status,userId}){
        try{
             console.log({
        title,
        slug,
        content,
        Featuredimage,
        status,
        userId
    })
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    Featuredimage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }
// we are using slug as the documentID 
    async updatePost(slug,{title,content,Featuredimage,status,userId}){
        try{
            return await this.databases.updateDocument( 
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    Featuredimage,
                    status,
                    userId
                }
            )
        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try{
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
        }
    }

    // getting a single document by slug
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
        }
    }

    // getting the list of the multiple documents from the collection
    // ab ye methodsari documents(columns dedega vo bhi jiska status active bhi nhi h )
    // for this reason we need to provide the queries to filter the doucuments out 
    async getPosts(queries=[Query.equal("status","active")]){
        
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        }catch(error){
            console.log("Appwrite service :: getPosts :: error", error);
        }
    }


    // file upload services : buscket class ke object se fetch hoti h

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }

}

const dbService = new DbServices();
export default dbService;
