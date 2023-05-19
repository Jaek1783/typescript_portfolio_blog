import { Fragment } from "react";
import Header from '../header/header';
import { NextPage } from "next";

interface LayoutProps {
    scrollValue : number;
    children : any;
}
const Layout: NextPage<LayoutProps> = ({scrollValue, children})=>{
    return(
        <Fragment>
            <Header scrollValue = {scrollValue}/>
            <main>{children}</main>
        </Fragment>
    )
}
export default Layout;