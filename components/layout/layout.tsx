import { Fragment } from "react";
import Header from '../header/header';
const Layout = (props : any)=>{
    return(
        <Fragment>
            <Header/>
            <main>{props.children}</main>
        </Fragment>
    )
}
export default Layout;