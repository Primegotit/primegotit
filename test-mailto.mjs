const CONTACT_EMAIL = 'primevaldigitals@gmail.com';
const name = 'Test User';
const email = 'visitor@example.com';
const subject = 'Test Subject';
const message = 'Hello world';

const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  subject || `Portfolio message from ${name}`
)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

console.log('Generated mailto URL:');
console.log(mailtoLink);
console.log('URL length:', mailtoLink.length);
console.log('\nNote: mailto does NOT send email — it only opens the visitor\'s email app.');
