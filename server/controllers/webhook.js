export const getAnswer = async(req,res,next) => {
    let body = await req.body;
    if(!body){
        console.log('data not found');
        return res.status('401').json({status: "no data found"})
    }
    console.log(body);
    return res.send('200');
}