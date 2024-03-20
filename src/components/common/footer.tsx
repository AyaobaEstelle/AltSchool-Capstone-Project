export const Footer = () => {
  return (
    <div>
           <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <img
              className="footer-logo"
              src="resources/svg/logo-dark.svg"
              alt=""
            />
            <img src="resources/svg/twitter.svg" alt="" />
            <img src="resources/svg/instagram.svg" alt="" />
            <img src="resources/svg/linkedin.svg" alt="" />
            <img src="resources/svg/facebook.svg" alt="" />
          </div>

          <div className="footer-links">
            <nav className="footer-links__group">
              <span className="footer-links__title">Why Scissor </span>
              <a href="#">Scissor 101</a>
              <a href="#">Integrations & API</a>
              <a href="#">Pricing</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Solutions</span>
              <a href="#">Social Media</a>
              <a href="#">Digital Marketing</a>
              <a href="#">Customer Service</a>
              <a href="#">For Developers</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Products</span>
              <a href="#">Link Management</a>
              <a href="#">QR Codes</a>
              <a href="#">Link-in-bio</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Company</span>
              <a href="#">About Scissor</a>
              <a href="#">Careers</a>
              <a href="#">Partners</a>
              <a href="#">Press</a>
              <a href="#">Contact</a>
              <a href="#">Reviews</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Resources</span>
              <a href="#">Blog</a>
              <a href="#">Resource Library</a>
              <a href="#">Developers</a>
              <a href="#">App Connections</a>
              <a href="#">Support</a>
              <a href="#">Trust Center</a>
              <a href="#">Browser Extension</a>
              <a href="#">Mobile App</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Features</span>
              <a href="#">Branded Links</a>
              <a href="#">Mobile Links</a>
              <a href="#">Campaign</a>
              <a href="#">Management & Analytics</a>
              <a href="#">QR Code generation</a>
            </nav>

            <nav className="footer-links__group">
              <span className="footer-links__title">Legal</span>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Acceptable Use Policy</a>
              <a href="#">Code of Conduct</a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <a href="#"> Terms of Service </a>
          <span
            className="about-img"
            dangerouslySetInnerHTML={{ __html: "&vert;" }}
          />
          <a href="#">Security</a>
          <span
            className="about-img"
            dangerouslySetInnerHTML={{ __html: "&vert;" }}
          />
          <a href="#">Scissor 2024</a>
        </div>
      </footer>
    </div>
  )
}
