import DetailPage from "../../components/detail/detail-page";
import style from '../../components/detail/detail.module.css';

import { getPostData, getPostFiles } from "../../helper/utill";
import {NextPage,InferGetStaticPropsType, GetStaticPaths } from 'next';

type PostPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const PostDetailPage: NextPage<PostPageProps> = (props : PostPageProps)=>{

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

export const getStaticPaths: GetStaticPaths = async ()=>{
    const postTitleName = await getPostFiles();

    const titles = await postTitleName.map((titleName) => titleName.replace(/\.md$/,''));

    return {
        paths : titles.map((slug)=>({ params : {slug : slug}})),
        fallback : false
    }
}