import { Link, useParams } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import { serviceAreas } from '../data/serviceAreas'
import './EmergencyPlumbingPage.css'

const heroImage =
  'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474916-Sydney-Opera-House.jpg'

const ServiceAreaPage = () => {
  const { areaSlug } = useParams()
  const area = serviceAreas.find((entry) => entry.slug === areaSlug)
  const areaName = area?.name ?? 'Service Area'

  return (
    <div className="service-page">
      <section
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.75)), url("${heroImage}")`
        }}
      >
        <div className="container service-hero-container">
          <div className="service-hero-tag">Service Areas</div>
          <h1 className="service-hero-title">Plumbing in {areaName}</h1>
          <p className="service-hero-subtitle">
            Local, licensed plumbing support for homes and businesses across {areaName} and the surrounding North
            Shore suburbs.
          </p>
          <Link className="service-hero-cta" to="/get-quote">
            GET FREE QUOTE
          </Link>
        </div>
      </section>

      <section className="service-content">
        <div className="container service-content-container">
          <h2>Trusted Plumbing Services in {areaName}</h2>
          <p>
            At Crossroads Plumbing, our service in {areaName} focuses on restoring the safety, comfort, and performance
            of your plumbing system. Whether you are dealing with a stubborn blockage, leaking pipe, burst line, or
            faulty hot water system, our experienced team delivers efficient, reliable solutions.
          </p>
          <p>
            Our technicians handle everything from drain clearing and pipe repairs to hot water replacements, leak
            detection, and gas fitting. We use quality parts and proven techniques to ensure lasting results, and we
            keep you informed with clear options and upfront pricing before any work begins.
          </p>
          <p>
            We also offer preventive maintenance to keep your plumbing running smoothly and to help avoid emergencies.
            Choose Crossroads Plumbing in {areaName} for dependable service, tidy workmanship, and long-term peace of
            mind.
          </p>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default ServiceAreaPage
