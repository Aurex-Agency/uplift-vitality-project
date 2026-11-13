import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SITE } from "@/components/site/site-data";

// Update this date whenever the policy text changes.
const LAST_UPDATED = "November 13, 2026";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Uplift Medical" },
      {
        name: "description",
        content:
          "How the Uplift Medical website collects, uses and shares information, including online forms, text messages, analytics and Cherry payment plans.",
      },
    ],
  }),
  component: Privacy,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="pt-4 font-display text-3xl leading-tight text-primary">{title}</h2>
      {children}
    </section>
  );
}

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-3 pl-5 marker:text-gold">{children}</ul>;
}

function Privacy() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-display text-5xl leading-tight text-primary">Privacy Policy</h1>
        <span className="gold-rule mt-6" />
        <p className="mt-6 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground">
          <p>
            Uplift Medical LLC (&ldquo;Uplift Medical,&rdquo; &ldquo;we&rdquo; or &ldquo;us&rdquo;)
            runs upliftmedicalms.com. This policy explains what information this website collects,
            how we use it and who we share it with. We do not sell your personal information.
          </p>
          <p>
            This policy covers the website. Information that becomes part of your medical record
            when you receive care is also handled under the laws and patient privacy practices that
            apply to your care. Ask the office if you have questions about your records.
          </p>

          <Section title="Information you give us">
            <p>You choose what to share with us through the website:</p>
            <List>
              <li>
                <strong>Contact form:</strong> your name, email address, phone number and message.
              </li>
              <li>
                <strong>&ldquo;See If You Qualify&rdquo; assessment:</strong> your answers (gender,
                symptoms, how long they have lasted and how much they affect daily life, whether
                your hormones have been checked, your main goal and your age range), plus your name,
                email address, phone number, any notes and your text message choices. Some of these
                answers relate to your health.
              </li>
              <li>
                <strong>Online booking:</strong> the scheduler on our Book page is provided by our
                scheduling platform. The details you enter there, such as your name, contact
                information and appointment choice, go to that platform.
              </li>
              <li>
                <strong>Calls, texts and emails</strong> you send us directly.
              </li>
            </List>
            <p>
              Please do not include detailed medical history in the contact form or assessment
              notes. You can discuss it privately during your consultation.
            </p>
          </Section>

          <Section title="Information collected automatically">
            <List>
              <li>
                <strong>Analytics.</strong> We use Google Analytics on a limited set of general
                pages: the home page, About, the Services overview, the Resources hub, our location
                pages and Payment Plans. It does not collect data on individual treatment pages,
                articles, the assessment, or the booking or contact pages. On the general pages we
                send Google the page address without anything added to it (such as search terms or
                form entries), a generic page title and, if you arrived from a Google or Bing
                search, only the name of the search engine, not what you searched for. We also count
                clicks on our call, booking and Cherry application links. Google Analytics uses
                cookies to tell visits apart. Google&rsquo;s advertising features (Google signals
                and ad personalization) are turned off, and this website does not use advertising
                pixels.
              </li>
              <li>
                <strong>Website hosting.</strong> Our hosting provider, Vercel, processes standard
                technical information, such as your IP address, browser type and the pages you
                request, to deliver the website and keep it secure.
              </li>
              <li>
                <strong>Fonts.</strong> Your browser loads this website&rsquo;s fonts from Google
                Fonts, which receives your IP address and browser information when it does.
              </li>
            </List>
          </Section>

          <Section title="Payment plans with Cherry">
            <p>
              Cherry is our primary financing option. Most pages of this website show Cherry&rsquo;s
              payment plan tools, which load from Cherry&rsquo;s servers. They are not shown on the
              booking or assessment pages. When these tools load, Cherry receives technical
              information such as your IP address and browser details, stores an anonymous
              identifier in your browser, and records basic usage, such as when the payment
              calculator is used, together with our website&rsquo;s address.
            </p>
            <p>
              If you apply for a payment plan, you apply on Cherry&rsquo;s own website. Cherry
              collects and handles your application under its own privacy policy and terms, and
              Cherry and its lending partners make all credit decisions. We may receive information
              from Cherry about your application, such as your approval status and plan, so we can
              apply it to your care. Learn more on our{" "}
              <Link to="/payment-plans" className="underline underline-offset-2 hover:text-gold">
                Payment Plans
              </Link>{" "}
              page.
            </p>
          </Section>

          <Section title="How we use information">
            <List>
              <li>To respond to your messages and questions.</li>
              <li>To schedule and manage appointments.</li>
              <li>To follow up about your assessment and your interest in our services.</li>
              <li>
                To send the text message notifications and alerts you agreed to, and marketing
                messages only if you opted in to them.
              </li>
              <li>To understand, in aggregate, how the website is used and to improve it.</li>
              <li>To operate and secure the website and to meet our legal obligations.</li>
            </List>
          </Section>

          <Section title="Text messages">
            <p>
              If you agree to receive text messages, Uplift Medical LLC may send you SMS
              notifications and alerts. Message frequency varies, and message and data rates may
              apply. Marketing texts are sent only if you separately opt in to them. Reply STOP at
              any time to stop receiving texts.
            </p>
            <p>
              We do not share your mobile phone number or text message consent with third parties or
              affiliates for their marketing or promotional purposes. Text message opt-in data and
              consent are shared only with the service providers that deliver messages for us.
            </p>
          </Section>

          <Section title="Who we share information with">
            <p>We do not sell your personal information. We share it only as described here:</p>
            <List>
              <li>
                <strong>GoHighLevel (LeadConnector)</strong>, our customer communication and
                scheduling platform, receives what you submit through the contact form, the
                assessment and the online scheduler, and helps us manage inquiries, appointments and
                follow-up.
              </li>
              <li>
                <strong>Google</strong> (Analytics and Fonts), <strong>Vercel</strong> (hosting) and{" "}
                <strong>Cherry</strong> (payment plans), as described above.
              </li>
              <li>
                Others when required by law, or when needed to protect the rights, safety or
                property of our patients, our practice or others.
              </li>
            </List>
            <p>Each of these companies also has its own privacy policy.</p>
          </Section>

          <Section title="Cookies and browser storage">
            <p>
              Google Analytics sets cookies on the pages where it collects data. Cherry stores an
              anonymous identifier in your browser, and the embedded scheduler may set its own
              cookies. You can block or delete cookies and site data in your browser settings. The
              website will still work, though embedded tools may not.
            </p>
          </Section>

          <Section title="Links to other websites">
            <p>
              This website links to other sites, such as Cherry and our Facebook page. Their own
              privacy policies apply when you visit them.
            </p>
          </Section>

          <Section title="How we protect and keep information">
            <p>
              The website uses an encrypted (HTTPS) connection, and we take reasonable steps to
              protect the information you send us. No website or online service can guarantee
              complete security. We keep information for as long as we need it for the purposes
              above, including providing care and meeting legal and record-keeping requirements.
            </p>
          </Section>

          <Section title="Your choices">
            <List>
              <li>Reply STOP to any text message to stop receiving texts.</li>
              <li>
                You can ask us to access, correct or delete the information you submitted through
                this website by calling the office or writing to us. Some information may need to be
                kept to meet legal or medical record requirements.
              </li>
              <li>You can block or delete cookies in your browser settings.</li>
            </List>
          </Section>

          <Section title="Children">
            <p>
              This website is intended for adults. We do not knowingly collect personal information
              from children under 13 through it.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as our website or services change. The date at the top of
              this page shows when it was last updated.
            </p>
          </Section>

          <Section title="Contact us">
            <p>
              Uplift Medical LLC
              <br />
              {SITE.address}
              <br />
              Phone:{" "}
              <a href={SITE.phoneHref} className="underline underline-offset-2 hover:text-gold">
                {SITE.phone}
              </a>
            </p>
            <p>
              You can also reach us through our{" "}
              <Link to="/contact" className="underline underline-offset-2 hover:text-gold">
                Contact
              </Link>{" "}
              page.
            </p>
          </Section>
        </div>
      </div>
    </section>
  );
}
