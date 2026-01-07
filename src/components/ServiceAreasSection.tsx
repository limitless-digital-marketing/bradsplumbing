import { serviceAreas } from '../data/serviceAreas'
import './ServiceAreasSection.css'

const ServiceAreasSection = () => {
  return (
    <section id="service-areas" className="service-areas-section">
      <div className="container service-areas-container">
        <div className="service-areas-layout">
          <div className="service-areas-map-card">
            <iframe
              title="Service area map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.853098893!2d151.0122295!3d-33.847927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a450!2sSydney%20NSW!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="service-areas-content">
            <h2>
              PROUDLY SERVING
              <span>THESE AREAS</span>
            </h2>
            <div className="service-areas-list">
              {serviceAreas.map((area) => (
                <div key={area.slug} className="service-area-item">
                  <svg
                    className="service-area-pin"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S5 14.2 5 9c0-3.9 3.1-7 7-7zm0 9.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4z" fill="currentColor"/>
                  </svg>
                  <span>{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreasSection
