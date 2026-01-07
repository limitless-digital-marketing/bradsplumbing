import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import './EmergencyPlumbingPage.css'

const EmergencyPlumbingPage = () => {
  return (
    <div className="service-page">
      <section className="service-hero">
        <div className="container service-hero-container">
          <div className="service-hero-tag">Services</div>
          <h1 className="service-hero-title">Emergency Plumbing</h1>
          <p className="service-hero-subtitle">
            Fast response, upfront pricing, and expert repairs for urgent plumbing issues across Sydney.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Emergency Help When It Matters Most</h2>
          <p>
            When a pipe bursts or a leak won’t wait, you need a plumber who can respond quickly and fix the problem
            properly. Our emergency team is on call to handle urgent repairs, blocked drains, overflowing toilets,
            and sudden water heater failures. We arrive with the right tools to diagnose the issue and deliver a
            reliable fix the first time.
          </p>
          <p>
            Every emergency job is handled with clear communication and transparent pricing. We’ll explain what’s
            happening, what needs to be done, and how long it will take before any work begins. From apartment
            emergencies to commercial sites, you can expect clean workmanship and minimal disruption.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default EmergencyPlumbingPage
