const qrcode = require('qrcode-terminal');

console.log(qrcode.generate('WIFI:S:SOCIALDESK - 9th Floor;T:WPA;P:"SocialD3$K09F";'));
console.log(qrcode.generate('BEGIN:VCARD VERSION:4.0\r\nFN:Enrico Sebastian S. Digman\r\nTEL;TYPE=cell:09477093576\r\nEMAIL:enricosebastian.digman@siteminder.com\r\nEND:VCARD', {small: true}));
