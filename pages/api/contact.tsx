import {MongoClient} from 'mongodb';

const handler = async (req : any,res : any)=>{
    if(req.method === 'POST'){
        const {_id, email, name, desc} = req.body;
        if(!email ||
           !email.includes('@') || 
           !name || 
           name.trim() === '' || 
           !desc || 
           desc.trim() === ''
           ) {
            res.status(422).json({message : '모두 채워주세요'});
            return;
        }
        const newMessage = {
            _id,
            email,
            name,
            desc
        };
        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.yycrwie.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
        try{
            client = await MongoClient.connect(connectionString);
        }catch(err){
            res.status(500).json({message:'Could not connect to database'});
            return;
        }
        const db = client.db();
       
       try{
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage._id = result.insertedId;
       }catch(err){
        client.close();
        res.status(500).json({message:'Storing message failed'});
       }
    res
    .status(200)
    .json({message: 'succsess'});
    }
}

export default handler;

