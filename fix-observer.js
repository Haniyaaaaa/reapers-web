const fs = require('fs');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('threshold: 0.1')) {
    content = content.replace(/threshold: 0\.1/g, 'threshold: 0');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed observer threshold in', file);
  }
});
