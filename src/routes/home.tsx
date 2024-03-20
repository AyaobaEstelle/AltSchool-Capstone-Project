import { Link } from "react-router-dom";
import "../assets/styles/base.css";
import "../assets/styles/about.css";
import "../assets/styles/cta.css";
import "../assets/styles/faq.css";
import "../assets/styles/fonts.css";
import "../assets/styles/hero.css";
import "../assets/styles/make_link.css";
import "../assets/styles/pricing.css";
import "../assets/styles/why.css";
import "../assets/styles/footer.css";


export const Home = () => {
  return (
    <div>
      <section className="hero">
        <header className="hero__header">
          <img src="resources/svg/scissor-logo.svg" title="Scissor Logo" />
          <nav className="hero__nav">
            <a
              href="#make-link"
              className="hero__nav__item hero__nav__item--active"
            >
              My URLs
            </a>
            <div className="hero__nav__item--dropdown">
              <a href="#features"> Features </a>
              <span>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.08649 9L12.0865 15L18.0865 9"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <a href="#pricing" className="hero__nav__item">
              Pricing
            </a>
            <a href="#analytics" className="hero__nav__item">
              Analytics
            </a>
            <a href="#faq" className="hero__nav__item">
              FAQs
            </a>
          </nav>

          <div className="hero__action">
            <Link className="hero__action_link" to="/auth/login">
              Log in
            </Link>
            <Link className="hero__action_button button" to="/auth/sign-up">
              Try for free
            </Link>
          </div>
        </header>

        <div className="hero__text">
          <h1 className="hero__title">
            Optimize Your Online Experience With Our <br />
            Advanced
            <span className="hero__title--highlight"> URL Shortening </span>
            Solution
          </h1>

          <p className="hero__subtitle">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs,
            <br />
            branded links, and domain customization options to reinforce your
            brand presence and <br />
            enhance user engagement.
          </p>
        </div>

        <div className="hero__cta">
          <Link className="hero__cta--button button" to="/auth/sign-up">
            Sign Up
          </Link>
          <a href="#" className="hero__cta--link">
            Learn more
          </a>
        </div>

        <div className="hero__frame">
          <svg
            className="hero__frame__svg"
            width="258"
            height="230"
            viewBox="0 0 247 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M86.6771 41.1107C135.228 -63.1745 174.407 59.5845 198.623 107.021C233.043 174.448 318.301 234.6 115.971 255.011C-86.3584 275.422 25.9891 171.467 86.6771 41.1107Z"
              fill="#E2E9F0"
            />
          </svg>
          <div className="hero__frame__content">
            <img src="resources/svg/links.svg" />
            <p>
              Seamlessly transform your long URLs into
              <strong>concise</strong> and <strong>shareable links</strong>
              with just few clicks.
            </p>
          </div>
        </div>

        <div className="hero__art">
          <img src="resources/svg/ellipse.svg" />
        </div>
      </section>

      <section className="about">
        <div className="about__stats" id="analytics">
          <h3 className="about_description">
            One Stop.
            <br />
            Four{" "}
            <span className="about_description_highlight">Possibilities</span>.
          </h3>

          <div className="about__stats__content">
            <div className="about__stat">
              <span className="about__stat__value">3M</span>
              <span className="about__stat__text">Active users</span>
            </div>

            <div className="about__stat">
              <span className="about__stat__value">60M</span>
              <span className="about__stat__text">
                Links &amp; QR codes created
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat__value">1B</span>
              <span className="about__stat__text">
                Clicked &amp; Scanned connections
              </span>
            </div>

            <div className="about__stat">
              <span className="about__stat__value">300K</span>
              <span className="about__stat__text">App Integrations</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why" id="features">
        <div className="why__description">
          <h3 className="with_decoration">
            Why choose{" "}
            <span className="why__description_highlight">Scissor</span>
          </h3>
          <p>
            Scissors is the hub of everything that has to <br />
            do with your link management. We shorten your URLs,
            <br />
            allow you creating custom ones for your personal, <br />
            business, event usage. Our swift QR code <br />
            creation, management and usage tracking with <br />
            advance analytics for all of these is second to none.
          </p>
        </div>

        <div className="why__features">
          <div className="why__feature">
            <div className="why__icon">
              <img src="resources/svg/link-2.svg" />
            </div>
            <h4>URL Shortening</h4>
            <p>
              Scissor allows you to shorten URLs of your business, events.
              Shorten your URL at scale URL redirects.
            </p>
          </div>

          <div className="why__feature">
            <div className="why__icon">
              <img src="resources/svg/edit.svg" />
            </div>
            <h4>Custom URLs</h4>
            <p>
              With Scissor, you can create custom URLs, with the length you
              want! A solution for socials and businesses.
            </p>
          </div>

          <div className="why__feature">
            <div className="why__icon">
              <img src="resources/svg/grid.svg" />
            </div>
            <h4>QR Codes</h4>
            <p>
              Generate QR codes to your business, events. Bring your audience
              and customers to your doorstep with this scan and go solution.
            </p>
          </div>

          <div className="why__feature">
            <div className="why__icon">
              <img src="resources/svg/activity.svg" />
            </div>
            <h4>Data Analytics</h4>
            <p>
              Receive data on the usage of either your shortened URL, custom
              URLs or generated QR codes. Embedded to monitor progress.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="pricing__title">
          <h3 className="with_decoration">
            A <span className="pricing__title_highlight">price perfect</span>{" "}
            for your needs.
          </h3>
          <p className="pricing__subtitle">
            From catering for your personal, business, event, socials needs, you
            can be rest assured we have you in mind in our pricing.
          </p>
        </div>

        <div className="pricing__cards" id="pricing">
          <div className="pricing__card">
            <h3 className="pricing_card__name">Basic</h3>
            <span className="pricing_card__price">Free</span>
            <span className="pricing_card__description">
              Free plan for all our users
            </span>
            <ul className="pricing_card__features">
              <li>Unlimited URL Shortening</li>
              <li>Basic Link Analytics</li>
              <li>Customizable Short Links</li>
              <li>Standard Support</li>
              <li>Ad-supported</li>
            </ul>
          </div>

          <div className="pricing__card pricing__card--active">
            <h3 className="pricing_card__name">Professional</h3>
            <span className="pricing_card__price">$15/month</span>
            <span className="pricing_card__description">
              Ideal for business creators
            </span>
            <ul className="pricing_card__features">
              <li>Enhanced Link Analytics</li>
              <li>Custom Branded Domains</li>
              <li>Advanced Link Customization</li>
              <li>Priority Support</li>
              <li>Add-free Experience</li>
            </ul>
          </div>

          <div className="pricing__card">
            <h3 className="pricing_card__name">Teams</h3>
            <span className="pricing_card__price">$25/month</span>
            <span className="pricing_card__description">
              Share with up to 10 users
            </span>
            <ul className="pricing_card__features">
              <li>Team collaboration</li>
              <li>User Roles and Permissions</li>
              <li>Enhanced Security</li>
              <li>API Access</li>
              <li>Dedicated Account Manager</li>
            </ul>
          </div>
        </div>

        <div className="pricing__cta">
          <a href="#" className="button--inverted">
            Get Custom Pricing{" "}
          </a>
          <a href="#" className="button">
            Select Pricing
          </a>
        </div>
      </section>

      <section className="make_link" id="make-link">
        <form method="POST" className="make_link__form">
          <input
            type="text"
            placeholder="Paste URL here..."
            className="make_link__input"
            name="url"
          />
          <select name="domain" className="make_link__select">
            <option>Choose Domain</option>
          </select>
          <input
            name="alias"
            type="text"
            placeholder="Type Alias here"
            className="make_link__input"
          />
          <Link className="button make_link_button" to="/auth/sign-up">
            Trim URL
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.45883 8.31606C9.43987 8.54147 9.11187 8.59847 9.00637 8.39468L8.4383 7.29755C8.40156 7.22646 8.3267 7.17895 8.24205 7.1728L6.9348 7.07797C6.69196 7.06037 6.63057 6.75589 6.85011 6.65794L8.03191 6.13061C8.10844 6.09645 8.15973 6.02703 8.16628 5.94842L8.26845 4.73482C8.28741 4.50941 8.61541 4.45241 8.7209 4.6562L9.28897 5.75334C9.32571 5.82443 9.40048 5.87195 9.48523 5.87808L10.7925 5.97291C11.0353 5.99051 11.0967 6.29499 10.8772 6.39294L9.69536 6.92027C9.61874 6.95445 9.56755 7.02385 9.56099 7.10247L9.45883 8.31606Z"
                fill="white"
              />
              <path
                d="M5.70599 9.1442C5.67434 9.25336 5.50749 9.25336 5.47583 9.1442L5.30536 8.55649C5.29435 8.51841 5.26227 8.48867 5.22127 8.47842L4.58821 8.32018C4.4706 8.29079 4.4706 8.13591 4.58821 8.10652L5.22127 7.94828C5.26227 7.93802 5.29435 7.90828 5.30536 7.87021L5.47583 7.28249C5.50749 7.17333 5.67434 7.17333 5.70599 7.28249L5.87646 7.87021C5.88747 7.90828 5.91951 7.93802 5.96055 7.94828L6.59362 8.10652C6.71122 8.13591 6.71122 8.29079 6.59362 8.32018L5.96055 8.47842C5.91951 8.48867 5.88747 8.51841 5.87646 8.55649L5.70599 9.1442Z"
                fill="white"
              />
              <path
                d="M7.88781 12.5199C7.85615 12.6291 7.68931 12.6291 7.65765 12.5199L7.48718 11.9322C7.47617 11.8941 7.44409 11.8644 7.40309 11.8541L6.77002 11.6959C6.65242 11.6665 6.65242 11.5116 6.77002 11.4822L7.40309 11.324C7.44409 11.3138 7.47617 11.284 7.48718 11.2459L7.65765 10.6582C7.68931 10.5491 7.85615 10.5491 7.88781 10.6582L8.05828 11.2459C8.06929 11.284 8.10132 11.3138 8.14237 11.324L8.77544 11.4822C8.89304 11.5116 8.89304 11.6665 8.77544 11.6959L8.14237 11.8541C8.10132 11.8644 8.06929 11.8941 8.05828 11.9322L7.88781 12.5199Z"
                fill="white"
              />
              <path
                d="M6.03127 11.1969C6.01016 11.2697 5.89893 11.2697 5.87783 11.1969L5.76418 10.8051C5.75684 10.7797 5.73545 10.7599 5.70812 10.7531L5.28608 10.6476C5.20767 10.628 5.20767 10.5247 5.28608 10.5052L5.70812 10.3997C5.73545 10.3928 5.75684 10.373 5.76418 10.3476L5.87783 9.9558C5.89893 9.88303 6.01016 9.88303 6.03127 9.9558L6.14491 10.3476C6.15225 10.373 6.17361 10.3928 6.20097 10.3997L6.62302 10.5052C6.70142 10.5247 6.70142 10.628 6.62302 10.6476L6.20097 10.7531C6.17361 10.7599 6.15225 10.7797 6.14491 10.8051L6.03127 11.1969Z"
                fill="white"
              />
              <path
                d="M11.1222 9.84666C11.1011 9.91944 10.9898 9.91944 10.9687 9.84666L10.8551 9.45485C10.8478 9.42947 10.8264 9.40964 10.799 9.40281L10.377 9.29731C10.2986 9.27772 10.2986 9.17447 10.377 9.15487L10.799 9.04938C10.8264 9.04254 10.8478 9.02272 10.8551 8.99733L10.9687 8.60552C10.9898 8.53275 11.1011 8.53275 11.1222 8.60552L11.2358 8.99733C11.2432 9.02272 11.2645 9.04254 11.2919 9.04938L11.7139 9.15487C11.7923 9.17447 11.7923 9.27772 11.7139 9.29731L11.2919 9.40281C11.2645 9.40964 11.2432 9.42947 11.2358 9.45485L11.1222 9.84666Z"
                fill="white"
              />
              <path
                d="M18.3182 18.003L17.5909 18.6782M8.15778 9.04228L19.9624 19.0877C20.2555 19.3371 20.2654 19.7629 19.9843 20.0239V20.0239C19.7043 20.2839 19.2496 20.2777 18.9805 20.008C14.9047 15.9231 7.72842 8.70747 8.15778 9.04228Z"
                stroke="white"
              />
            </svg>
          </Link>
          <footer className="make_link__footer">
            <p>
              By clicking TrimURL, I agree to the
              <a href="#">Terms of Service</a>, <a href="#">Privacy Policy </a>
              and Use of Cookies.
            </p>
          </footer>
        </form>
      </section>

      <section className="faq" id="faq">
        <h3 className="faq__title with_decoration">FAQs</h3>
        <div className="faq__accordions">
          <article className="faq__accordion faq__accordion--active">
            <header>
              <h4>How does URL shortening work?</h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
            <div className="faq__accordion__text">
              URL shortening works by taking a long URL and creating a shorter,
              condensed version that redirects to the original URL. When a user
              clicks on the shortened link, they are redirected to the intended
              destination.
            </div>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>
                Is it necessary to create an account to use the URL shortening
                service?
              </h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>Are the shortened links permanent? will they expire?</h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>
                Are there any limitations on the number of URLS I can shorten?
              </h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>
                Can I customize the shortened URLs to reflect my brand or
                content?
              </h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>Can I track the performance of my shortened URLs?</h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>
                How secure is the URL shortening service? Are the shortened
                links protected against spam or malicious activity?
              </h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>What is a QR code and what can it do?</h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>

          <article className="faq__accordion">
            <header>
              <h4>
                Is there an API available for integrating the URL shortening
                service into my own applications or website?
              </h4>
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#141414"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </header>
          </article>
        </div>
      </section>

      <section className="cta">
        <h3>Revolutionizing Link Optimization</h3>
        <Link className="button" to="/auth/sign-up">
          {" "}
          Get Started
        </Link>
      </section>
    </div>
  );
};
