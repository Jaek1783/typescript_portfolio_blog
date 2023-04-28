import TitleDetail from "../../components/layout/detail-title";
import style from '../../components/layout/detail.module.css';
const PostDetailPage = ()=>{
    // const data = useContext(MyContext);
    const data = {
        id : 1, 
        title : 'web-publishing-project', 
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 
        image : 'hard.png'};

    const imagePath = `/images/posts/${data.title}/${data.image}`;
    return (
        <section>
            {/* <h2>Post Detail Page</h2> */}
            <dl className={style.container}>
                <dt>
                    <TitleDetail title={data.title} image = {imagePath} desc={data.desc}/>
                </dt>
                <dd>{data.desc}</dd>
            </dl>
        </section>
    )
}

export default PostDetailPage;