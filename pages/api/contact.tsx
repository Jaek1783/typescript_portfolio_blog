import axios from "axios";
const handler = (req : any,res : any)=>{
    if(req.method === 'POST'){
        const {email, name, desc} = req.body;
        if(!email || !email.includes('@') || !name || name.trim() === '' || !desc || desc.trim() === '') {
            res.tatus(422).json({message : '모두 채워주세요'});
            return;
        }
        const newMessage = {
            email,
            name,
            desc
        };

    res.status(200).json({message: 'succsess'});

    axios.post('http://localhost:4000', newMessage)
.then((response:any)=>response.data)
    }
}

export default handler;

