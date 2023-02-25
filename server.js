/**
</> Original base BochilGaming 
</> Recode simple by @NeKosmic
**/

import express from"express";import path from"path";import{createServer}from"http";import{Server}from"socket.io";import{toBuffer}from"qrcode";import fetch from"node-fetch";import Helper from"./lib/helper.js";function connect(e,t){let n=global.app=express(),o=global.server=createServer(n),r="invalid";e.ev.on("connection.update",(function({qr:e}){e&&(r=e)})),n.use((async(e,t)=>{t.setHeader("content-type","image/png"),t.end(await toBuffer(r))})),n.use(express.static(path.join(Helper.__dirname(import.meta.url),"views"))),new Server(o).on("connection",(t=>{let{unpipeEmit:n}=pipeEmit(e,t,"conn-");t.once("disconnect",n)})),o.listen(t,(()=>{console.log(`ES - Aplicación escuchada en el puerto: ${t}\nEN - Application listened on port: ${t}\nID - Aplikasi didengarkan di port: ${t}\nPT - Aplicação escutada na porta: ${t}`),opts.keepalive&&keepAlive()}))}function pipeEmit(e,t,n=""){let o=e.emit;return e.emit=function(e,...r){o.emit(e,...r),t.emit(n+e,...r)},{unpipeEmit(){e.emit=o}}}function keepAlive(){const e=`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;/(\/\/|\.)undefined\./.test(e)||setInterval((()=>{fetch(e).catch(console.error)}),3e5)}export default connect;

/**
[_>] https://github.com/NeKosmic/
[_>] https://gitlab.com/NeKosmic/
**/