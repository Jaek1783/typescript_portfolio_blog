import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = ()=>{
    return fs.readdirSync(postsDirectory);
}

export const getPostData = (projectTitle : string) =>{
    
    const postSlug = projectTitle.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postData = {
        slug : postSlug,
        ...data,
        // content:content
    };
    return postData;
}


export const getAllPosts = ()=>{
   
    const postFiled = getPostFiles();
    
    const allPosts = postFiled.map((postFile:any)=>{
        return getPostData(postFile);
    });
    // const sortData = allPosts.sort((postA:any, postB:any)=> postA.date > postB.date ? -1 : 1);
    return allPosts;
}

export const getFavoritePosts = () => {
    const allPosts = getAllPosts();
    const favoritePosts = allPosts.filter((post:any) => post.isFavorite);
    return favoritePosts;
}