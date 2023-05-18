import DetailPage from "../../components/detail/detail-page";
import style from '../../components/detail/detail.module.css';

import { getPostData, getPostFiles, GetProjectType, ProjectType } from "../../helper/utill";
import {NextPage,InferGetStaticPropsType, GetStaticPaths, GetStaticProps, GetStaticPathsContext, GetStaticPropsContext } from 'next';

const PostDetailPage: NextPage<GetProjectType> = (props)=>{

const {data} = props;

    return (
        <section>
            <h2 className={style.pageName}>Post Detail Page</h2>
            <DetailPage postData = {data}/>
        </section>
    )
}

export default PostDetailPage;

interface Props {
    data : ProjectType;
}

export const getStaticProps:GetStaticProps<Props> = (context : GetStaticPropsContext) => {
    const {params} = context;
    const slug = params?.slug as string | undefined;
    // Ensure slug is of type string or undefined
  
    if (!slug) {
      return {
        notFound: true
      };
    }
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