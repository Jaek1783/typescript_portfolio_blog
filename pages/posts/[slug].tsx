import DetailPage from "../../components/detail/detail-page";
import style from '../../components/detail/detail.module.css';

import { getPostData, getPostFiles } from "../../helper/utill";

const PostDetailPage = (props:any)=>{

const {data} = props;

    return (
        <section>
            <h2 className={style.pageName}>Post Detail Page</h2>
            <DetailPage postData = {data}/>
        </section>
    )
}

export default PostDetailPage;

export const getStaticProps = (context : any) => {
    const {params} = context;
    const {slug} = params;
    const postData = getPostData(slug);

    return {
        props : {
            data : postData
        },
        revalidate : 600
    };
}

export const getStaticPaths = ()=>{
    const postTitleName = getPostFiles();

    const titles = postTitleName.map((titleName:any) => titleName.replace(/\.md$/,''));

    return {
        paths : titles.map((slug:any)=>({ params : {slug : slug}})),
        fallback : false
    }
}