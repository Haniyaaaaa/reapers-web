const fs = require('fs');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('DELETE ACCOUNT') && !content.includes('CHILD SAFETY')) {
    content = content.replace(
      '<a href="/delete-account" class="footer-link">DELETE ACCOUNT</a>',
      '<a href="/delete-account" class="footer-link">DELETE ACCOUNT</a>\n      <a href="/child-safety" class="footer-link">CHILD SAFETY</a>'
    );
    // Handle the case where DELETE ACCOUNT is active
    content = content.replace(
      '<a href="/delete-account" class="footer-link active">DELETE ACCOUNT</a>',
      '<a href="/delete-account" class="footer-link active">DELETE ACCOUNT</a>\n      <a href="/child-safety" class="footer-link">CHILD SAFETY</a>'
    );
    
    // For child-safety.html, set the class to active
    if (file === 'child-safety.html') {
      content = content.replace(
        '<a href="/child-safety" class="footer-link">CHILD SAFETY</a>',
        '<a href="/child-safety" class="footer-link active">CHILD SAFETY</a>'
      );
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});
