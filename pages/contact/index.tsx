import Form from "../../components/contact/form";
import style from '../../components/contact/form-style.module.css';

import { useEffect } from "react";
const Contact = () =>{

    return (
        <section className={style.contact}>
            <h2>Contact Page</h2>
            <Form/>
        </section>
    );
}

export default Contact;