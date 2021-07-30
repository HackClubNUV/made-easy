import User from '../database/schema/schema.js'
export const getUserProgres = async (req,res) => {
    const authHeader = await req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        console.log('token not found');
        return res.status('401').json({status: "no token available"})
    }
    let {DiscordID, username} = await req.body;
    if(!DiscordID){
        console.log('No discord id found');
        return res.status('401').json({status: "no discord id available"})
    }
    console.log(DiscordID, username);
    const user1 = await User.findOne({DiscordID});
    if(!user1){ 
        const user = await User.create({DiscordID, username})
        console.log(await user, ' created');
        if(user.err) console.log(user.err);
        return res.status('200').json({status: 'success', data: user});
    }
    else if(user1){
        console.log(await user1);
        return res.status('200').json({status: 'success', data: user1})
    }
}

export const getAllUsers = async (req,res) => {
    const users = await User.find();
    console.log(users);
    return res.status(200).json({status: 'success', data: users})
}