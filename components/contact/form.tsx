import style from './form-style.module.css';
import btnStlye from '../layout/btn.module.css';
import {useState} from 'react';
const Form = ()=>{
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    console.log(emailValue);
    return <div className={style.formbox}>
        <p>Do you want contact me ?</p>
            <form className={style.form}>
                    <div className={style.controls}>
                        <div className={style.control}>
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" required value = {emailValue} onChange  = {(event : any) => setEmailValue(event.target.value)}/>
                        </div>
                        <div className={style.control}>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" required value = {nameValue} onChange  = {(event : any) => setNameValue(event.target.value)}/>
                        </div>
                        </div>
                        <div className={style.textbox}>
                            <label htmlFor="message">Your Message</label>
                            <textarea  id="message" value = {descValue} onChange  = {(event : any) => setDescValue(event.target.value)}></textarea>
                        </div>
                    <div className={style.action}>
                        <button className={btnStlye.btn}>send</button>
                    </div>
                </form>
            </div>

}

export default Form;