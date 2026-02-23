import { useState } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { CiGlobe } from "react-icons/ci";
import { TiSocialPinterest } from "react-icons/ti";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import captchaImg from "./assets/captcha.png";
import "./App.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const testimonials = [
  {
    name: "Harriet Mitchell",
    role: "Director of Inbrew",
    text: "Lorem ipsum is simply dummy text of the printing & Typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, an unknown printer took a gallery.",
    avatar: "HM",
    color: "#e8f0fe",
  },
  {
    name: "James Rodriguez",
    role: "CEO of TechFlow",
    text: "Working with Kushel Digi was an exceptional experience. Their team delivered our e-commerce platform on time and exceeded all our expectations. Highly recommended for any digital project.",
    avatar: "JR",
    color: "#fce8e6",
  },
  {
    name: "Priya Sharma",
    role: "Founder of StyleHub",
    text: "The UI/UX design team at Kushel Digi transformed our brand completely. Our user engagement increased by 40% within the first month after launch. Outstanding work and great communication.",
    avatar: "PS",
    color: "#e6f4ea",
  },
  {
    name: "Michael Chen",
    role: "CTO of DataSync",
    text: "Kushel Digi built our web app from scratch with clean, scalable code. The attention to detail and professionalism throughout the project was impressive. We continue to work with them.",
    avatar: "MC",
    color: "#fef7e0",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeVideo, setActiveVideo] = useState(0);

  const prevTestimonial = () =>
    setActiveTestimonial((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  const nextTestimonial = () =>
    setActiveTestimonial((p) => (p === testimonials.length - 1 ? 0 : p + 1));

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo" onClick={() => scrollTo("hero")} style={{ cursor: "pointer" }}>
          <div className="logo-icon">KDS</div>
          <div className="logo-text">
            <h2>Kushel Digi</h2>
            <span>Solutions</span>
          </div>
        </div>

        <ul className="nav-links">
          <li><a onClick={() => handleNav("hero")}>About Us</a></li>
          <li><a onClick={() => handleNav("services")}>Services</a></li>
          <li><a onClick={() => handleNav("portfolio")}>Our Portfolio</a></li>
          <li><a onClick={() => handleNav("testimonials")}>Testimonials</a></li>
          <li><a onClick={() => handleNav("contact")}>Contact Us</a></li>
        </ul>

        <button className="call-btn" onClick={() => window.location.href = "tel:9045301702"}>
          CALL NOW : 9045301702
        </button>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? "bar bar-top open" : "bar bar-top"}></span>
          <span className={menuOpen ? "bar bar-mid open" : "bar bar-mid"}></span>
          <span className={menuOpen ? "bar bar-bot open" : "bar bar-bot"}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a onClick={() => handleNav("hero")}>About Us</a>
          <a onClick={() => handleNav("services")}>Services</a>
          <a onClick={() => handleNav("portfolio")}>Our Portfolio</a>
          <a onClick={() => handleNav("testimonials")}>Testimonials</a>
          <a onClick={() => handleNav("contact")}>Contact Us</a>
          <a href="tel:9045301702" className="mobile-call">📞 9045301702</a>
        </div>
      )}

      {/* HERO */}
      <section className="hero" id="hero">
        <div className="hero-left">
          <p className="welcome">Welcome to Kushel Digi</p>
          <h1>Revolutionising your business<br />through <span>Technology.</span></h1>
          <p>We are a leading company, which has been offering technology solutions across the globe for almost 5 years.</p>

          <div className="hero-btns">
            <button className="btn-enquiry" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              QUICK ENQUIRY
            </button>
            <button className="btn-phone" onClick={() => window.location.href = 'tel:9045301702'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
              9045301702
            </button>
          </div>

          <div className="services-tags">
            <span>UI/UX DESIGN</span>
            <span>WEBSITE &amp; APP DEVELOPMENT</span>
            <span>E-COMMERCE DEVELOPMENT</span>
          </div>
        </div>

        {/* Hero Form */}
        <div className="hero-form">
          <div className="form-header">
            <h3>Hire A Top Global Talent To Grow Your Business!</h3>
            <p>Get Free Quote</p>
          </div>
          <div className="form-body">
            <div className="form-row">
              <div className="form-field">
                <input type="text" placeholder="Your Name*" />
              </div>
              <div className="form-field">
                <input type="text" placeholder="Phone Number*" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-field">
                <input type="text" placeholder="Email Address" />
              </div>
              <div className="form-field">
                <select defaultValue="">
                  <option value="" disabled>Services</option>
                  <option>UI/UX Design</option>
                  <option>Website Development</option>
                  <option>App Development</option>
                  <option>E-Commerce Development</option>
                </select>
              </div>
            </div>
            <span className="form-label">Additional Details</span>
            <div className="form-row">
              <div className="form-field">
                <input type="text" placeholder="Select Budget" />
              </div>
              <div className="form-field">
                <input type="text" placeholder="Best Start Date" />
              </div>
            </div>
          </div>
          <div className="form-footer">
            <button className="submit-btn">Send a Message</button>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="services-section" id="services">
        <div className="services-header">
          <h2>OUR SERVICES</h2>
          <p>We are expert in</p>
        </div>

        <div className="services-grid">

          {/* Card 1 - UI/UX */}
          <div className="service-card">
            <div className="service-icon-wrap">
              <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                <rect x="6" y="10" width="52" height="38" rx="4" fill="#dbeafe" stroke="#2a82e8" strokeWidth="2"/>
                <rect x="10" y="14" width="44" height="30" rx="2" fill="white"/>
                <rect x="14" y="18" width="24" height="4" rx="2" fill="#2a82e8"/>
                <rect x="14" y="25" width="18" height="2.5" rx="1" fill="#cbd5e1"/>
                <rect x="14" y="30" width="20" height="2.5" rx="1" fill="#cbd5e1"/>
                <rect x="14" y="35" width="15" height="2.5" rx="1" fill="#cbd5e1"/>
                <rect x="40" y="14" width="14" height="18" rx="2" fill="#f97316"/>
                <line x1="43" y1="19" x2="51" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="43" y1="23" x2="51" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="43" y1="27" x2="48" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="32" y1="48" x2="32" y2="56" stroke="#2a82e8" strokeWidth="2"/>
                <rect x="22" y="56" width="20" height="4" rx="2" fill="#2a82e8"/>
              </svg>
            </div>
            <h3>UI/UX DESIGN</h3>
            <p>An ordinary solution can dominate the industry with significant design which is why, We at Kushel Digi make sure to provide you with innovative and user-friendly designs. User interface and User Experience design is an integral part of any digital marketing strategy and online enterprise.</p>
            <button className="learn-more-btn">
              <span className="learn-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </span>
              LEARN MORE
            </button>
          </div>

          {/* Card 2 - E-Commerce */}
          <div className="service-card">
            <div className="service-icon-wrap">
              <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                {/* Awning */}
                <rect x="12" y="8" width="56" height="16" rx="2" fill="#f97316"/>
                <path d="M12 8 Q20 22 28 8" fill="#ef4444"/>
                <path d="M28 8 Q36 22 44 8" fill="#f97316"/>
                <path d="M44 8 Q52 22 60 8" fill="#ef4444"/>
                <path d="M60 8 Q68 22 68 8" fill="#f97316"/>
                {/* Store base */}
                <rect x="16" y="24" width="48" height="28" rx="2" fill="#fef3c7" stroke="#f97316" strokeWidth="1.5"/>
                {/* Cart */}
                <circle cx="40" cy="62" r="10" fill="none" stroke="#2a82e8" strokeWidth="2"/>
                <path d="M25 48 L28 36 L52 36 L49 48" fill="none" stroke="#2a82e8" strokeWidth="2" strokeLinejoin="round"/>
                <line x1="22" y1="32" x2="28" y2="32" stroke="#2a82e8" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="33" cy="52" r="2.5" fill="#2a82e8"/>
                <circle cx="47" cy="52" r="2.5" fill="#2a82e8"/>
              </svg>
            </div>
            <h3>E-COMMERCE DEVELOPMENT</h3>
            <p>The growth of any business requires the use of e-commerce as a channel and instrument. Everything is now easy to reach and merely a click away. E-commerce solutions have made the relationship between the client and the consumer more effective and user-friendly. This is why integrating E-commerce Solutions in a business has become a necessity and is effective.</p>
            <button className="learn-more-btn">
              <span className="learn-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </span>
              LEARN MORE
            </button>
          </div>

          {/* Card 3 - Web & App */}
          <div className="service-card">
            <div className="service-icon-wrap">
              <svg width="70" height="70" viewBox="0 0 80 80" fill="none">
                <rect x="6" y="10" width="52" height="38" rx="4" fill="#dbeafe" stroke="#2a82e8" strokeWidth="2"/>
                <rect x="10" y="14" width="44" height="30" rx="2" fill="white"/>
                {/* Code tag */}
                <text x="32" y="33" textAnchor="middle" fontSize="16" fill="#2a82e8" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
                {/* Lines below */}
                <rect x="14" y="36" width="14" height="2.5" rx="1" fill="#cbd5e1"/>
                <rect x="14" y="40" width="22" height="2.5" rx="1" fill="#cbd5e1"/>
                <line x1="32" y1="48" x2="32" y2="56" stroke="#2a82e8" strokeWidth="2"/>
                <rect x="22" y="56" width="20" height="4" rx="2" fill="#2a82e8"/>
                {/* Small phone */}
                <rect x="56" y="22" width="16" height="26" rx="3" fill="#1a2340" stroke="#2a82e8" strokeWidth="1.5"/>
                <rect x="59" y="26" width="10" height="16" rx="1" fill="#2a82e8" opacity="0.3"/>
                <circle cx="64" cy="45" r="1.5" fill="#2a82e8"/>
              </svg>
            </div>
            <h3>WEBSITE &amp; APP DEVELOPMENT</h3>
            <p>Our team of experts strives to develop the ideal website in accordance with your needs and expectations. Having a website for your business increases your credibility and awareness among the audiences. We have an excellent team dedicated to design and develop a SEO-friendly and E-commerce website. It will help your clients to understand you and your services better.</p>
            <button className="learn-more-btn">
              <span className="learn-circle">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
              </span>
              LEARN MORE
            </button>
          </div>

        </div>

        <div className="services-cta">
          <button className="get-started-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get Started →
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials" id="testimonials">
        <div className="testi-header">
          <b><h2 className="testi-label">TESTIMONIALS</h2></b>
          <p className="testi-sub">OUR HAPPY CLIENT SAY</p>
        </div>

        <div className="testi-body">
          {/* Left: quote */}
          <div className="testi-left">
            <div className="testi-top">
              <div
                className="testi-avatar"
                style={{ background: testimonials[activeTestimonial].color }}
              >
                {testimonials[activeTestimonial].avatar}
              </div>
              <div className="testi-arrows">
                <button className="arrow-btn prev" onClick={prevTestimonial}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <button className="arrow-btn next" onClick={nextTestimonial}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
              </div>
            </div>

            <p className="testi-quote">{testimonials[activeTestimonial].text}</p>

            <div className="testi-person">
              <h4>{testimonials[activeTestimonial].name}</h4>
              <span>{testimonials[activeTestimonial].role}</span>
            </div>

            <div className="testi-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeTestimonial ? "dot-active" : ""}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>

          {/* Right: video thumbnails */}
          <div className="testi-right">
            <div className="video-grid">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`video-thumb ${i === activeVideo ? "video-active" : ""}`}
                  onClick={() => { setActiveVideo(i); setActiveTestimonial(i); }}
                >
                  <div className="video-avatar" style={{ background: t.color }}>
                    {t.avatar}
                  </div>
                  <div className="play-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <div className="video-info">
                    <span>{t.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="video-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeVideo ? "dot-active" : ""}`}
                  onClick={() => { setActiveVideo(i); setActiveTestimonial(i); }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="contact" id="contact">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p className="contact-sub">Please Complete The Below Form, We Will Get In Touch With You</p>

          <div className="contact-form">
            <div className="contact-row">
              <input type="text" placeholder="Name*" />
              <input type="text" placeholder="Phone Number*" />
            </div>
            <div className="contact-row">
              <input type="text" placeholder="Email Address*" />
              <input type="text" placeholder="Location" />
            </div>
            <input type="text" placeholder="Business Name" className="contact-full" />
            <textarea placeholder="Message" rows="4" className="contact-full"></textarea>

            <div className="captcha-box">
              <input type="checkbox" id="robot" />
              <label htmlFor="robot">I'm Not A Robot</label>
              <div className="captcha-logo">
                <img src={captchaImg} alt="reCAPTCHA" height={50 }width={50} />
                <span>reCAPTCHA</span>
                <small>Privacy - Terms</small>
              </div>
            </div>

            <button className="submit-contact">Submit →</button>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-tabs">
            <button className="tab active">Address</button>
            <button className="tab">Google Maps</button>
          </div>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                </svg>
              </div>
              <div>
                <strong>OUR LOCATION</strong>
                <p>G-9, First Floor, Sector 63, Noida</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <strong>SEND US MAIL</strong>
                <p>Info@Kusheldigi.Com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="info-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
              <div>
                <strong>CALL US</strong>
                <p>+91 9045301702</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-logo">
            <div className="logo-icon">KDS</div>
            <div className="logo-text">
              <h2>Kushel Digi</h2>
              <span>Solutions</span>
            </div>
          </div>

          <div className="footer-contact-item">
            <div className="footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
            </div>
            <span>G-9, First Floor, Sector 63, Noida</span>
          </div>

          <div className="footer-contact-item">
            <div className="footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <span>Shubham@Kusheldigi.Com</span>
          </div>

          <div className="footer-contact-item">
            <div className="footer-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            <span>9045301702</span>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>© 2023 Kusheldigi. All Rights Reserved.</p>
            <div className="footer-links">
              <a href="#hero">About Us</a><span>|</span>
              <a href="#services">Insights</a><span>|</span>
              <a href="#">Blog</a><span>|</span>
              <a href="#">Privacy Policy</a><span>|</span>
              <a href="#">Sitemap</a>
            </div>
          </div>

          <div className="footer-social">
            <p>Follow Us On</p>
            <div className="social-icons">
              <a href="#" aria-label="Website"><CiGlobe className="social-icon" /></a>
              <a href="#" aria-label="Facebook"><AiFillFacebook className="social-icon" /></a>
              <a href="#" aria-label="Instagram"><AiFillInstagram className="social-icon" /></a>
              <a href="#" aria-label="LinkedIn"><AiFillLinkedin className="social-icon" /></a>
              <a href="#" aria-label="X"><FaXTwitter className="social-icon" /></a>
              <a href="#" aria-label="YouTube"><FaYoutube className="social-icon" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;