/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import*as e from"fs";let handler=async(a,{conn:r,text:t,command:s,args:l})=>{if(!l[0])return a.reply(`Cual es su b\xfasqueda?`);let p=await r.getName(a.sender),i=encodeURIComponent(t),n=a.reply(MultiNK.Bsqd(p));await n;try{var d=await fetchJson(`https://latam-api.vercel.app/api/wpp?apikey=${MyApiKey}&q=${i}`);if(!d.imagen)return a.reply("[ ! ] Sin resultados");r.sendMessage(a.chat,{image:{url:d.imagen},caption:`┏━⊱ Wallpaper : ${t}
┗⊱  Solicitada por : @${a.sender.replace(/@.+/,"")}`,mentions:[a.sender]},{quoted:{key:{fromMe:!1,participant:"0@s.whatsapp.net",remoteJid:"51995386439-1604595598@g.us"},message:{orderMessage:{itemCount:737,status:200,thumbnail:e.readFileSync("./multimedia/imagenes/mylogo.jpg"),surface:200,message:`${p} => ${t}`,orderTitle:"Matt_M",sellerJid:"0@s.whatsapp.net"}}}})}catch(m){a.reply(MultiNK.Error0())}};handler.help=["wallpaper"].map(e=>e+" <busqueda>"),handler.tags=["busqueda"],handler.command=/^(wallpaper|wpp|fondo)$/i,handler.limit=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/