/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import fs from"fs";let handler=async(e,{conn:a,usedPrefix:t})=>{const n=await a.getName(e.sender),r=global.owner.filter((([e,a])=>e&&a));for(let[t,o]of r){const r="BEGIN:VCARD\nVERSION:3.0\nFN:"+Propietario+"\nORG:Kuaker;\nitem1.TEL;waid=5215591478197:+52 1 55 9147 8197\nitem1.CRXS OFC\nitem2.TEL;waid="+t.replace(/[^0-9]/g,"")+":+"+t.replace(/[^0-9]/g,"")+"\nitem2.CRXS OFC Dueño actual\nitem3.EMAIL;type=INTERNET:Web:https://github.com/cagthegame/\nitem4.ADR:;;🇵🇪 MEXICO;;;;\nitem5.X-ABLabel:How Sexy You Are "+n+"! 7w7r\nEND:VCARD";a.sendMessage(e.chat,{contacts:{displayName:"CRXS OFC",contacts:[{vcard:r}]}},{quoted:{key:{participant:"0@s.whatsapp.net"},message:{contactMessage:{displayName:NombreDelBot}}}})}};handler.help=["creador","owner"],handler.tags=["informacion"],handler.command=/^(creador|owner)$/i;export default handler;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/
