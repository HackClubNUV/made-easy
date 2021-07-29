import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config();
export const getDiscordResources = async (req,res) => {
    console.log(`Code: ${req.query.code}`);
    const code = req.query.code;
    if(code){
        try {
            const oauthResults = await fetch('https://discord.com/api/oauth2/token', {
                method: 'POST',
                body: new URLSearchParams({
                    client_id: process.env.client_id,
                    client_secret: process.env.client_secret,
                    code,
                    grant_type: 'authorization_code',
                    redirect_uri: `http://a5c22845abd3.ngrok.io/discord`,
                    scope: 'identify',
                }),
                header: {
                    'Content-type': 'application/x-www-form-urlencoded'
                },
            });

            const oauthData = await oauthResults.json();
            console.log(oauthData);
            const userResult = await fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${oauthData.token_type} ${oauthData.access_token}`,
                },
            });

            let {username} = await userResult.json();
            console.log(username);
            return res.json({sucess: username})
        }catch(err){
            console.log(err);
        }
    }
    return res.sendFile('discordOauth.html', {root: './public'});
}