// Define the context
import {createContext} from 'react';

export type projectType = {
    title : string, 
    titleDesc:string,
    date:string
    desc : string, 
    image : string,
    isFeatured: boolean
}

type ProjectList = projectType[];

const MyContext = createContext<ProjectList | null >(null);

export default MyContext;

export const Projects : projectType[] = [
    {
        title:"web-publishing-project",
        titleDesc:"첫 프로젝트로 동네 카페 담아...",
        date:"2022-03-01 ~ 2022-03-27",
        desc:"본격적으로 개발자가 되기 위해 예전에 배웠던 웹 퍼블리싱에 대해 복습하게 되었습니다. 자주 다니던 카페에 자사 홈페이지가 있어, 메인페이지를 원페이지 형식으로 카피하여 코딩하였습니다.",
        image:"hard.png",
        isFeatured:false
    },
    {
        title:"javascript-project",
        titleDesc:"create first project HTML,CSS,Javascript hard coding",
        date:"2022-03-01 ~ 2022-03-27",
        desc:"본격적으로 개발자가 되기 위해 예전에 배웠던 웹 퍼블리싱에 대해 복습하게 되었습니다. 자주 다니던 카페에 자사 홈페이지가 있어, 메인페이지를 원페이지 형식으로 카피하여 코딩하였습니다.",
        image:"javascript.gif",
        isFeatured:false
    },
    {
        title:"react-project",
        titleDesc:"create first project HTML,CSS,Javascript hard coding",
        date:"2022-03-01 ~ 2022-03-27",
        desc:"본격적으로 개발자가 되기 위해 예전에 배웠던 웹 퍼블리싱에 대해 복습하게 되었습니다. 자주 다니던 카페에 자사 홈페이지가 있어, 메인페이지를 원페이지 형식으로 카피하여 코딩하였습니다.",
        image:"salad.png",
        isFeatured:false
    },
        
    ];
