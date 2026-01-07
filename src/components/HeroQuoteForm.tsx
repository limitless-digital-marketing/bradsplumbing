import { useState } from 'react'

const HeroQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Hero form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', service: '', message: '' })
    }, 3000)
  }

  if (submitted) {
    return (
      <div className="hero-form-success">
        <p>✓ Thanks! We'll contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="hero-form">
      <div className="hero-form-row">
        <div className="hero-form-group">
          <label className="hero-form-label" htmlFor="hero-full-name">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="hero-full-name"
            placeholder="John Doe *"
            required
            value={formData.name}
            onChange={handleChange}
            className="hero-form-input"
          />
        </div>

        <div className="hero-form-group">
          <label className="hero-form-label" htmlFor="hero-phone">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="hero-phone"
            placeholder="+61 123 456 789 *"
            required
            value={formData.phone}
            onChange={handleChange}
            className="hero-form-input"
          />
        </div>
      </div>

      <div className="hero-form-group">
        <label className="hero-form-label" htmlFor="hero-service">
          What service do you need?
        </label>
        <select
          name="service"
          required
          id="hero-service"
          value={formData.service}
          onChange={handleChange}
          className="hero-form-input"
        >
          <option value="">What do you need? *</option>
          <option value="emergency">Emergency Plumbing</option>
          <option value="blocked-drains">Blocked Drains</option>
          <option value="hot-water">Hot Water System</option>
          <option value="leak">Leak Detection</option>
          <option value="general">General Plumbing</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="hero-form-group">
        <label className="hero-form-label" htmlFor="hero-message">
          Short message about your needs
        </label>
        <textarea
          name="message"
          id="hero-message"
          placeholder="Your message goes straight to my phone. I'll get back to you as soon as I'm available."
          value={formData.message}
          onChange={handleChange}
          className="hero-form-input"
          rows={3}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        GET FREE QUOTE
      </button>
    </form>
  )
}

export default HeroQuoteForm
