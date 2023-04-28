import fs from 'fs';
import path from 'path';

const pathDirectory = path.join(process.cwd(), 'posts');

const getPostsData = (fileName:any)=>{
    const filePath = path.join(pathDirectory, fileName );
    const fileContent = fs.readFileSync(filePath, 'utf-8');
}


const getAllPosts = ()=>{
    const postsFiles = fs.readdirSync(pathDirectory);
}