import AllPosts from "../../components/All-Posts/all-posts";
const AllPostsPage = (props:any)=>{
    const {product} = props;
    return(
        <section>
            <AllPosts projects = {product}/>
        </section>
    )
}

export default AllPostsPage;

export const getStaticProps = async (props:any)=>{
    
    return {
        props : {
            product:[
                {
                    title:"Web-publishing-project",
                    titleDesc:"첫 프로젝트로 동네 카페 담아...",
                    date:"2022-03-01 ~ 2022-03-27",
                    desc:"본격적으로 개발자가 되기 위해 예전에 배웠던 웹 퍼블리싱에 대해 복습하게 되었습니다.",
                    desc2:"퍼블리셔로 취업하기 위해 만든 포트폴리오로서 기능은 없지만 퍼블리싱이 가능한 인재라는 느낌을 보여주고 싶었습니다.",
                    address : "https://jaek1783.github.io/BbangSsaem/",
                    image:"hard.png",
                    isFeatured:false
                },
                {
                    title:"Javascript-project",
                    titleDesc:"남들과 다른 길, 테트리스 클론코딩",
                    date:"2022.03.15 ~ 2022.03.18",
                    desc:"제가 할 수 있는 자바스크립트 개발은 웹개발이었습니다.",
                    desc2:"단순 웹코딩 외에 어떤 걸 할 수 있을까를 알아보다 유튜브에서 테트리스 코딩을 보고 제작하였습니다.",
                    address : "https://jaek1783.github.io/Tetris-Game",
                    image:"javascript.gif",
                    isFeatured:false
                },
                {
                    title:"React-project",
                    titleDesc:"디자인부터 배포까지! 프로젝트 도전기",
                    date:"2022-06-01 ~ 2022-07-28",
                    desc:"학습한 모든 스킬을 동원하여 만든 리액트 개인 프로젝트",
                    desc2:"평소 즐겨먹는 샐러디의 제품을 가지고 포트폴리오용 리뉴얼 사이트를 제작",
                    address : "https://jaek1783.github.io/salad/",
                    image:"salad.png",
                    isFeatured:true
                }   
                ]
        }
    }
}