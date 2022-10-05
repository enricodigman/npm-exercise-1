const qrcode = require('qrcode-terminal');
let name = "Enrico Sebastian S. Digman", num = "09477093576", email = "enricosebastian.digman@siteminder.com";

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:"SocialD3$K09F";', {small: true}));
console.log(qrcode.generate(`BEGIN:VCARD VERSION:4.0\nFN:${name}\nTEL;TYPE=cell:${num}\nEMAIL:${email}\nEND:VCARD`, {small: true}));
