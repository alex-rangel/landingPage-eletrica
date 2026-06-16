const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '../assets/rj-map-raw.svg');
const output = path.join(__dirname, '../assets/rj-map.svg');

const dark = ['3304557'];
const medium = [
  '3301702', '3300456', '3303500', '3301009', '3302502', '3304904',
  '3302270', '3303302', '3301850', '3300456', '3304144', '3305109',
];
const light = [
  '3302007', '3303906', '3303401', '3302403', '3304524', '3300704',
  '3305208', '3305802',
];

const svg = fs.readFileSync(input, 'utf8');

const out = svg.replace(/<path id="(\d+)"/g, (match, id) => {
  let fill = '#d5d9e0';
  if (dark.includes(id)) fill = '#1a4a8a';
  else if (medium.includes(id)) fill = '#3b7fd4';
  else if (light.includes(id)) fill = '#7eb8ea';
  return `<path fill="${fill}" stroke="#ffffff" stroke-width="6" id="${id}"`;
});

fs.writeFileSync(output, out);
console.log('Map saved:', output, out.length, 'bytes');
