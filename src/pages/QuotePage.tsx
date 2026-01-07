import HeroQuoteForm from '../components/HeroQuoteForm'
import './QuotePage.css'

const QuotePage = () => {
  return (
    <div className="quote-page">
      <div className="quote-page-card hero-form-card">
        <img
          src="https://images.squarespace-cdn.com/content/v1/64a4f0a6f2c81b7f74e2c456/f64df7bc-a0a4-4809-9ce2-3b31929200c2/crossroads-plumbing-logo-black.png?format=1500w"
          alt="Crossroads Plumbing"
          className="form-logo"
        />
        <h3 className="hero-form-title">Get A Free Quote</h3>
        <HeroQuoteForm />
      </div>
    </div>
  )
}

export default QuotePage
