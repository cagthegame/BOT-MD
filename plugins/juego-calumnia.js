/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

let handler=async(e,{conn:a,text:n,command:t})=>{if(!n)return e.reply(`*[ ! ] Use bien el comando :*
${Prefijo+t} @tag|mensaje|respuesta`);if(!n.includes("|"))return e.reply(`*[ ! ] Agrege barras entre cada palabra todo junto*

_Ejemplo de uso_ : 
${Prefijo+t} @usuarioetiquetado|bendiceme|bendecido
~No olvide usar esta barra~ : " | "`);let r=e.mentionedJid&&e.mentionedJid[0]?e.mentionedJid[0]:e.fromMe?a.user.jid:e.sender,s;await a.sendMessage(e.chat,{text:n.split("|")[2]?n.split("|")[2]:"@"+e.sender.split("@")[0]+" use 2 barras\n@tag|mensaje|respuesta ✓"},{quoted:{key:{fromMe:!1,participant:r,...e.chat?{remoteJid:e.chat}:{}},message:{conversation:n.split("|")[1]?n.split("|")[1]:"No hay texto :v"}}}),reacMoji(e.chat,a,"\uD83E\uDD2B",e)};handler.help=["calumnia"],handler.tags=["games"],handler.command=/^(calumnia)$/i,handler.group=!0;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/