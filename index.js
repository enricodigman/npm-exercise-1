const qrcode = require('qrcode-terminal');
let name = 'Enrico Sebastian S. Digman';
let num = '09477093576';
let email = 'enricosebastian.digman@siteminder.com';

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:"SocialD3$K09F";', {small: true}));
console.log(qrcode.generate(`BEGIN:VCARD VERSION:4.0
FN:${name}
TEL;TYPE=cell:${num}
EMAIL:${email}
END:VCARD`, {small: true}));
