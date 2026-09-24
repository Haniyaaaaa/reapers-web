const fs = require('fs');

const privacy = fs.readFileSync('privacy.html', 'utf8');
const headerMatch = privacy.match(/([\s\S]*?)<main>/);
const footerMatch = privacy.match(/(<\/main>[\s\S]*)/);

if (!headerMatch || !footerMatch) {
  console.error('Could not parse privacy.html');
  process.exit(1);
}

const header = headerMatch[1];
const footer = footerMatch[1];

const mainContent = `
  <main>
    <div class="chat-glow-orb"></div>

    <!-- Legal Hero Section -->
    <section class="legal-hero reveal-on-scroll is-visible">
      <div class="entry-kicker">
        <span class="dot-cyan">■</span>
        <span>Account Management</span>
        <span class="dot-purple">■</span>
      </div>
      <h1 class="legal-title">Delete Account</h1>
      <p class="legal-subtitle">
        Instructions for deleting your account and data for the Reapers app.
      </p>
    </section>

    <!-- Main Content -->
    <div class="legal-content-container reveal-on-scroll is-visible">
      <article class="legal-card">
        
        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">01.</span> Delete it in the app</h2>
          <p class="legal-p" style="padding-left: 1.5rem;">
            1. Open the Reapers app and sign in.<br>
            2. Go to your <strong>Profile</strong>, then open <strong>Settings</strong>.<br>
            3. Tap <strong>Delete account</strong>.<br>
            4. Confirm when asked. Your account is deleted straight away.
          </p>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">02.</span> Can't open the app?</h2>
          <p class="legal-p">
            Email <a href="mailto:reapers.support@gmail.com" style="color: var(--cyan-neon); text-decoration: underline;">reapers.support@gmail.com</a> from the address you signed up with and ask us to delete your account. We will reply and complete the deletion.
          </p>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">03.</span> What is deleted</h2>
          <div class="item-grid">
            <div class="item-card item-card--cyan">
              <div class="item-card-title">👤 Profile</div>
              <p class="item-card-desc">Your account and profile (name, username, email, phone, avatar, skills and roles)</p>
            </div>
            <div class="item-card item-card--magenta">
              <div class="item-card-title">💬 Interactions</div>
              <p class="item-card-desc">Your posts, comments, reactions and messages</p>
            </div>
            <div class="item-card">
              <div class="item-card-title">🤝 Network</div>
              <p class="item-card-desc">Your connections, team requests and applications</p>
            </div>
            <div class="item-card">
              <div class="item-card-title">📅 Activity</div>
              <p class="item-card-desc">Your demos, event RSVPs and expert bookings or reviews tied to your account</p>
            </div>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">04.</span> What may be kept</h2>
          <p class="legal-p">
            • Backups may keep copies for a short period (up to 30 days) before they are removed.<br>
            • We may keep limited records if the law requires it, or to prevent abuse and fraud.
          </p>
          <div class="contact-card">
            <div class="contact-row">
              <span>Questions?</span>
              <a href="mailto:reapers.support@gmail.com">reapers.support@gmail.com</a>
            </div>
          </div>
        </section>

      </article>
    </div>
`;

const newDeleteAccount = header + mainContent + footer;

let finalHtml = newDeleteAccount.replace(
  '<a href="privacy.html" class="footer-link active">PRIVACY POLICY</a>',
  '<a href="privacy.html" class="footer-link">PRIVACY POLICY</a>'
);
finalHtml = finalHtml.replace(
  '<a href="/delete-account" class="footer-link">DELETE ACCOUNT</a>',
  '<a href="/delete-account" class="footer-link active">DELETE ACCOUNT</a>'
);
finalHtml = finalHtml.replace(
  '<title>Privacy Policy · Reapers Gaming Arena</title>',
  '<title>Delete Account · Reapers Gaming Arena</title>'
);

fs.writeFileSync('delete-account.html', finalHtml, 'utf8');
console.log('Successfully styled delete-account.html');
