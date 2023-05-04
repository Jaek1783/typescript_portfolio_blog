import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName : any) =>{
    const filePath = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const {data, content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/,'');
    const postData = {
        title : postSlug,
        ...data,
        content
    };
    return postData;
}

export const getAllPosts = ()=>{
    const postFiled = fs.readdirSync(postsDirectory);
    
    const allPosts = postFiled.map((postFile:any)=>{
        return getPostData(postFile);
    });

    return allPosts;
}

export const getFavoritePosts = () => {
    const allPosts = getAllPosts();
    const favoritePosts = allPosts.filter((post:any) => post.isFavorite);
    return favoritePosts;
}