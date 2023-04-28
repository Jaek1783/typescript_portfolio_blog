import TitleDetail from "../../components/layout/detail-title";
import style from '../../components/layout/detail.module.css';

import MyContext from "../../store/context";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

const PostDetailPage = (props:any)=>{
    const router = useRouter();
    const detailData = useContext(MyContext);

    const filteredId = router.query.slug;

const data = detailData?.filter((posts:any)=>posts.title === filteredId);
console.log(data);

    return (
        <section>
            {/* <h2>Post Detail Page</h2> */}
                    {data?.map((posts:any)=><TitleDetail key={posts.title} 
                    title={posts.title} 
                    titleDesc={posts.titleDesc}
                    image = {posts.image} 
                    desc={posts.desc}
                    date={posts.date}
                    />)}
        </section>
    )
}

export default PostDetailPage;