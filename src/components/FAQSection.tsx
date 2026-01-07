import { useState } from 'react'
import './FAQSection.css'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What areas do you service?',
      answer: 'We provide plumbing services throughout Sydney\'s North Shore and surrounding areas, including Killara, Lindfield, Roseville, Gordon, Pymble, Turramurra, Wahroonga, Hornsby, Chatswood, Willoughby, Ryde, and Gladesville. If you\'re unsure whether we service your area, please give us a call and we\'ll be happy to help.'
    },
    {
      id: 2,
      question: 'Do you offer emergency plumbing services?',
      answer: 'Yes! We offer 24/7 emergency plumbing services for urgent issues like burst pipes, gas leaks, blocked sewers, and no hot water. Our team responds quickly to minimize damage and get your plumbing system back to normal as soon as possible.'
    },
    {
      id: 3,
      question: 'Are you licensed and insured?',
      answer: 'Absolutely. We are fully licensed (Licence No. 397372C) and insured plumbing professionals. All our work complies with Australian plumbing standards and regulations, giving you complete peace of mind.'
    },
    {
      id: 4,
      question: 'How much do your services cost?',
      answer: 'We believe in transparent, upfront pricing. The cost depends on the specific job, but we always provide a clear quote before starting any work. There are no hidden fees or surprise charges. Contact us for a free, no-obligation quote.'
    },
    {
      id: 5,
      question: 'How quickly can you get to me?',
      answer: 'For emergency situations, we aim to arrive as quickly as possible, often within an hour of your call. For scheduled appointments, we offer same-day or next-day service in most cases. We understand that plumbing issues need prompt attention.'
    },
    {
      id: 6,
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, we stand behind all our work with comprehensive warranties. The specific warranty depends on the type of work performed, but we always ensure you\'re protected and satisfied with the results. We also provide ongoing support if you have any concerns.'
    }
  ]

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <span className="faq-eyebrow">GOT QUESTIONS?</span>
          <div className="faq-heading-row">
            <h2 className="faq-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>
        </div>

        <div className="faq-grid">
          <div className="faq-list">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className={`faq-item ${openId === faq.id ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <svg 
                    className="faq-icon"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <span>{faq.question}</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-image-container">
            <img 
              src="/Images/faqs.png" 
              alt="Professional plumber at work"
              className="faq-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
