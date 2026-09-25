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
        <span>Reapers Policy</span>
        <span class="dot-purple">■</span>
      </div>
      <h1 class="legal-title">Child Safety</h1>
      <p class="legal-subtitle">
        Our commitment to keeping our community safe for everyone, especially younger users.
      </p>
    </section>

    <!-- Main Content -->
    <div class="legal-content-container reveal-on-scroll is-visible">
      <article class="legal-card">
        
        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">01.</span> Minimum Age Requirement</h2>
          <p class="legal-p">
            The Reapers platform is strictly intended for users who are at least <strong>16 years of age</strong>. We do not knowingly permit children under this age to create accounts, and we do not knowingly collect personal information from children under 16.
          </p>
          <div class="legal-alert">
            <span class="legal-alert-icon">⚠️</span>
            <span class="legal-alert-text">If we discover that an account has been created by someone under the age of 16, the account and all associated data will be immediately suspended and permanently deleted.</span>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">02.</span> Reporting Underage Accounts</h2>
          <p class="legal-p">
            Community safety relies on all of us. If you believe a user on Reapers is under the age of 16, please report the account using the in-app reporting tool or contact our support team directly. We take these reports very seriously and will investigate them promptly.
          </p>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">03.</span> Safe Community Guidelines</h2>
          <div class="item-grid">
            <div class="item-card item-card--cyan">
              <div class="item-card-title">🛡️ Zero Tolerance</div>
              <p class="item-card-desc">We have zero tolerance for any content or behavior that exploits, harms, or endangers minors in any way.</p>
            </div>
            <div class="item-card item-card--magenta">
              <div class="item-card-title">🚫 Content Moderation</div>
              <p class="item-card-desc">Our platform uses a mix of automated tools and human moderation to identify and remove inappropriate content.</p>
            </div>
            <div class="item-card">
              <div class="item-card-title">🛑 Blocking & Reporting</div>
              <p class="item-card-desc">Users have robust tools to block unwanted contact and report violations directly to our Trust & Safety team.</p>
            </div>
          </div>
        </section>

        <section class="legal-section">
          <h2 class="legal-heading"><span class="legal-num">04.</span> Contact & Support</h2>
          <p class="legal-p">
            If you are a parent or guardian and have concerns about your child's data or activity on Reapers, please contact us immediately.
          </p>
          <div class="contact-card">
            <div class="contact-row">
              <span>Trust & Safety Team:</span>
              <a href="mailto:reapers.support@gmail.com" style="color: var(--cyan-neon); text-decoration: underline;">reapers.support@gmail.com</a>
            </div>
          </div>
        </section>

      </article>
    </div>
`;

const newPage = header + mainContent + footer;

let finalHtml = newPage.replace(
  '<a href="privacy.html" class="footer-link active">PRIVACY POLICY</a>',
  '<a href="privacy.html" class="footer-link">PRIVACY POLICY</a>'
);
// We will add the CHILD SAFETY link in the next step across all files, so we don't need to active it here if it doesn't exist yet, but we will add it shortly.
finalHtml = finalHtml.replace(
  '<title>Privacy Policy · Reapers Gaming Arena</title>',
  '<title>Child Safety · Reapers Gaming Arena</title>'
);

fs.writeFileSync('child-safety.html', finalHtml, 'utf8');
console.log('Successfully created child-safety.html');
