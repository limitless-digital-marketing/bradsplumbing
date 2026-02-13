import { Link } from 'react-router-dom'
import { serviceAreas } from '../data/serviceAreas'
import { services } from '../data/services'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3>Brads Plumbing &amp; Gasfitting</h3>
            </div>
            <p className="footer-tagline">Domestic plumbing and gasfitting maintenance for all types of dwellings.</p>
            <p className="footer-contact-item">
              <a href="tel:0438792102">0438 792 102</a>
            </p>
            <p className="footer-contact-item">
              <a href="mailto:bmplumb@bigpond.com">bmplumb@bigpond.com</a>
            </p>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h4>OUR SERVICES</h4>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="footer-section">
            <h4>SERVICE AREAS</h4>
            <ul className="footer-service-areas-list">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/service-areas/${area.slug}`}>{area.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="footer-section">
            <h4>OPERATING HOURS</h4>
            <ul className="hours-list">
              <li>
                <span>Mon - Fri:</span>
                <span>7:00am - 5:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} Brads Plumbing &amp; Gasfitting. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
