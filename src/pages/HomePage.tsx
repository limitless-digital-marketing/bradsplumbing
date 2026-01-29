import { Link } from 'react-router-dom'
import CurvedCTASection from '../components/CurvedCTASection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import ReviewsSection from '../components/ReviewsSection'
import FAQSection from '../components/FAQSection'
import HeroQuoteForm from '../components/HeroQuoteForm'
import './HomePage.css'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200',
    alt: 'Bathroom renovation'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    alt: 'Kitchen plumbing'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200',
    alt: 'Hot water installation'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200',
    alt: 'Leak repair'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    alt: 'Bathroom fixtures'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=1200',
    alt: 'Drain work'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    alt: 'Modern bathroom'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200',
    alt: 'House plumbing'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200',
    alt: 'Window install'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200',
    alt: 'Outdoor plumbing'
  }
]

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/Images/home-hero-mobile.png"
          alt=""
          className="hero-mobile-image"
          aria-hidden="true"
        />
        <div className="container">
          <div className="hero-grid">
            {/* Left Column - Headline & Value Prop */}
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-stars" aria-label="5 out of 5 stars">
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path fill="currentColor" d="M12 2l2.9 6.1 6.7.9-4.8 4.6 1.2 6.6L12 17.8 6 20.2l1.2-6.6L2.4 9l6.7-.9L12 2z"/>
                  </svg>
                </span>
                <span className="hero-badge-logo" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.6-1.2 3-2.6 3.9v3h4.2c2.5-2.3 3.9-5.6 3.9-9z"/>
                    <path fill="#34A853" d="M12 24c3.3 0 6.1-1.1 8.2-3.1l-4.2-3c-1.2.8-2.7 1.3-4 1.3-3.1 0-5.7-2.1-6.6-4.9H1v3.1C3.1 21.1 7.3 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.4 14.3c-.2-.6-.4-1.3-.4-2s.1-1.4.4-2V7.2H1C.3 8.7 0 10.3 0 12s.3 3.3 1 4.8l4.4-2.5z"/>
                    <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.3 0 3.1 2.9 1 7.2l4.4 3.1C6.3 6.9 8.9 4.8 12 4.8z"/>
                  </svg>
                </span>
                <span className="hero-badge-text">400+ 5 Star Reviews</span>
              </div>
              <h1>
                PROFESSIONAL
                <span className="hero-headline-line hero-headline-nowrap">PLUMBING SERVICES</span>
                <span className="hero-headline-line">IN SYDNEY</span>
              </h1>
              <p className="hero-description">
                Sydney plumbing for homes and businesses with 12+ years’ experience. Emergency repairs, blocked drains, hot water, and leak detection with transparent pricing.
              </p>
              <div className="hero-mobile-cta">
                <a
                  className="hero-cta-button"
                  href="#quote-section"
                  onClick={(event) => {
                    event.preventDefault()
                    document.getElementById('quote-section')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    })
                  }}
                >
                  <span>GET FREE QUOTE</span>
                  <span className="hero-cta-arrow" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 4v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Right Column - Quote Form (Desktop Only) */}
            <div className="hero-form-container hero-form-container-desktop">
              <div className="hero-form-card">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/64a4f0a6f2c81b7f74e2c456/f64df7bc-a0a4-4809-9ce2-3b31929200c2/crossroads-plumbing-logo-black.png?format=1500w"
                  alt="Crossroads Plumbing"
                  className="form-logo"
                />
                <HeroQuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero-quote-section" id="quote-section">
        <div className="container">
          <div className="hero-form-container hero-form-container-quote">
            <div className="hero-form-card">
              <img
                src="https://images.squarespace-cdn.com/content/v1/64a4f0a6f2c81b7f74e2c456/f64df7bc-a0a4-4809-9ce2-3b31929200c2/crossroads-plumbing-logo-black.png?format=1500w"
                alt="Crossroads Plumbing"
                className="form-logo"
              />
              <HeroQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-developer">
        <div className="container about-developer-container">
          <div className="about-main">
            <div className="about-text">
              <div className="about-title-row">
                <h2>ABOUT US</h2>
                <span className="about-accent-line" aria-hidden="true"></span>
              </div>
              <p>
                Crossroads Plumbing is a family-owned business serving Sydney’s North Shore with pride and professionalism. We bring decades of hands-on experience in emergency plumbing, drain cleaning, hot water systems, and leak detection—focusing on quality workmanship and complete customer satisfaction.
              </p>
              <div className="about-social-row">
                <a href="https://www.instagram.com/crossroadsplumbing/" target="_blank" rel="noopener noreferrer" className="about-social instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/crossroadsplumbingaus" target="_blank" rel="noopener noreferrer" className="about-social facebook" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="about-image">
              <img
                src="/Images/about-us.webp"
                alt="Plumbing service van"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="services-grid-section">
        <div className="container services-grid-container">
          <div className="services-grid-header">
            <span className="services-grid-label">WHAT WE ARE BEST AT</span>
            <div className="services-grid-heading-row">
              <h2>OUR SERVICES</h2>
              <span className="services-grid-midline" aria-hidden="true"></span>
              <Link to="/services" className="services-grid-cta-button">
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>

          <div className="services-grid">
            <Link to="/services/emergency-plumbing" className="service-grid-card">
              <img
                src="/Images/emergency-plumbing.png"
                alt="Emergency plumbing"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">EMERGENCY PLUMBING</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">24/7 urgent repairs when you need them.</span>
              </div>
            </Link>
            <Link to="/services/blocked-drains" className="service-grid-card">
              <img
                src="/Images/blocked-drains.png"
                alt="Blocked drains"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">BLOCKED DRAINS</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Clear clogs and restore flow fast.</span>
              </div>
            </Link>
            <Link to="/services/water-heaters" className="service-grid-card">
              <img
                src="/Images/water-heaters.png"
                alt="Water heaters"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">WATER HEATERS</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Installations and repairs for hot water systems.</span>
              </div>
            </Link>
            <Link to="/services/leak-detection" className="service-grid-card">
              <img
                src="/Images/leak-detection.png"
                alt="Leak detection"
                loading="lazy"
              />
              <div className="service-grid-overlay"></div>
              <div className="service-grid-label">
                <div className="service-grid-title-row">
                  <span className="service-grid-title">LEAK DETECTION</span>
                  <span className="service-grid-arrow" aria-hidden="true">→</span>
                </div>
                <span className="service-grid-desc">Pinpoint leaks before they cause damage.</span>
              </div>
            </Link>
          </div>

          <div className="services-grid-cta-mobile">
            <Link to="/services" className="services-grid-cta-button">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* See Our Work Section */}
      <section className="work-gallery-section">
        <div className="container work-gallery-container">
          <div className="work-gallery-header">
            <span className="work-gallery-label">SEE WHY OUR CUSTOMERS LOVE US</span>
            <div className="work-gallery-heading-row">
              <h2>SEE OUR WORK</h2>
              <span className="work-gallery-midline" aria-hidden="true"></span>
              <button className="work-gallery-cta" type="button">
                SEE ALL PHOTOS
              </button>
            </div>
          </div>

          <div className="work-gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="work-gallery-card">
                <img src={image.url} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="work-gallery-cta-mobile">
            <button className="work-gallery-cta" type="button">
              SEE ALL PHOTOS
            </button>
          </div>
        </div>

      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* FAQ Section */}
      <FAQSection />

      <ServiceAreasSection />

      <CurvedCTASection />

    </div>
  )
}

export default HomePage
