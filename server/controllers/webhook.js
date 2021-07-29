import User from '../database/schema/schema.js'
export const getAnswer = async(req,res) => {
    let body = await req.body;
    if(!body){
        console.log('data not found');
        return res.status('401').json({status: "no data found"})
    }
    let ans = [];
    const {form_response: {landed_at, answers} }= await body;
    await answers.forEach(async (answer, i) => {
        if(i<3)
        ans[i] = await answer.text || answer.email;
    })
    console.log(landed_at, ans);
    let [fullname, email, DiscordID] = await ans;
    const user = await User.findOne({DiscordID});
    if(user){
        console.log(`${user.username} was found`);
        const user2 = await User.findOneAndUpdate({DiscordID}, {fullname, email, A1: true},{
            new: true,
        });
        console.log(user2);
        return res.send('200');
    }else {
        console.log('DiscordID not found, saving all details');
        const user2 = await User.create({DiscordID, email, fullname});
        console.log(user2);
        console.log('user created');
    }
    return res.status('200');
}