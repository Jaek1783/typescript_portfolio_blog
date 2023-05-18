import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface GetProjectType {
    data : ProjectType[];
}
export interface ProjectType {
    address: string,
    date: string,
    desc: string,
    desc2: string,
    image: string,
    isFavorite: boolean,
    slug: string,
    title: string,
    titleDesc:string
};

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
        address: data.address,
        date: data.date,
        desc: data.desc,
        desc2: data.desc2,
        image: data.image,
        isFavorite: data.isFavorite,
        title: data.title,
        titleDesc:data.titleDesc
    };
    return postData;
}


export const getAllPosts = (): ProjectType[] =>{
   
    const postFiled : string[] = getPostFiles();
    
    const allPosts : ProjectType[] = postFiled.map((postFile:string)=>{
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