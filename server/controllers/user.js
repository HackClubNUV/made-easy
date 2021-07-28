export const getUserProgres = async (req,res) => {
    const authHeader = await req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        console.log('token not found');
        return res.status('401').json({status: "no token available"})
    }
    let discordID = await req.body.discordID;
    if(!discordID){
        console.log('No discord id found');
        return res.status('401').json({status: "no discord id available"})
    }
    console.log(token);
    return res.send('200');
}