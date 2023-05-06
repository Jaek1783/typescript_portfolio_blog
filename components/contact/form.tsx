import style from './form-style.module.css';
import btnStlye from '../layout/btn.module.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Notification from '../layout/ui/notification';
const Form = ()=>{
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [requestStatus, setRequestStatus] = useState('');
    const [errMsg, setErrMsg] = useState('');
    
    const sendContactData = async (contactDetails : any)=>{
        const body = contactDetails
        
        const response = await axios.post('/api/contact',body);
        const data = await response.data;

        if(!response){
            throw new Error(data.message || 'Something went wrong!')
        }
    }

    useEffect(()=>{
        if(requestStatus === 'success' || requestStatus === 'error'){
            const timer = setTimeout(()=>{
                setRequestStatus('');
                setErrMsg('');
            },3000);
            return ()=> clearTimeout(timer);
        }
    },[requestStatus]);

    const sendMessageHandler = async (event : any)=>{
        event.preventDefault();

        setRequestStatus('pending');

        try{
            await sendContactData({
                email : emailValue,
                name : nameValue,
                desc : descValue
            });
            setRequestStatus('success');
        }catch(error:any){
            setErrMsg(error.message);
            setRequestStatus('error');
        }
        setEmailValue('');
        setNameValue('');
        setDescValue('');
    }

let notification;
if(requestStatus === 'pending'){
    notification = {
        status : 'pending',
        title : 'Sending message...',
        message : 'Your message is on its way!' 
    }
}

if(requestStatus === 'success'){
    notification = {
        status : 'success',
        title : 'Success',
        message : 'Message sent successfully' 
    }
}
if(requestStatus === 'error'){
    notification = {
        status : 'Error',
        title : 'Error',
        message : errMsg 
    }
}

    return <div className={style.formbox}>
        <p>Do you want contact me ?</p>
            <form className={style.form} onSubmit={sendMessageHandler}>
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
                {notification && 
                <Notification
                status = {notification.status}
                message = {notification.message}
                title = {notification.title}
                />}
            </div>

}

export default Form;