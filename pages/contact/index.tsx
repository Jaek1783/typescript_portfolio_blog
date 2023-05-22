import { NextPage } from "next";
import Form from "../../components/contact/form";
import style from '../../components/contact/form-style.module.css';

interface ContaxtDataProps{
    email : string;
    name : string;
    desc : string;
}

const Contact = () =>{

    const formData: ContaxtDataProps = {
        email: "",
        name: "",
        desc: ""
      };
    return (
        <section className={style.contact}>
            <h2>Contact Page</h2>
            <Form {...formData}/>
        </section>
    );
}

export default Contact;