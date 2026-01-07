import { useState, useEffect } from 'react'
import './ReviewsSection.css'

interface Review {
  id: number
  name: string
  date: string
  rating: number
  text: string
  avatar?: string
}

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  // Template Google reviews
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      date: '2 weeks ago',
      rating: 5,
      text: 'Tom and his team did an excellent job fixing our burst pipe emergency. They arrived within an hour of my call and had everything sorted quickly. Professional service and fair pricing. Highly recommend!'
    },
    {
      id: 2,
      name: 'David Chen',
      date: '1 month ago',
      rating: 5,
      text: 'Outstanding service from start to finish. Crossroads Plumbing installed our new hot water system and the work was completed to a very high standard. The team was punctual, clean, and respectful of our home.'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      date: '3 weeks ago',
      rating: 5,
      text: 'Called them for a blocked drain issue and they came out the same day. The plumber was friendly, explained everything clearly, and fixed the problem efficiently. Great value for money.'
    },
    {
      id: 4,
      name: 'Michael Roberts',
      date: '2 months ago',
      rating: 5,
      text: 'We\'ve used Crossroads Plumbing several times now for various jobs around our property. Always reliable, always professional, and they stand behind their work. They\'re now our go-to plumber.'
    },
    {
      id: 5,
      name: 'Jessica Park',
      date: '3 weeks ago',
      rating: 5,
      text: 'Fantastic experience with Crossroads Plumbing. They helped us with a complicated leak detection issue and found the problem quickly using their advanced equipment. Saved us thousands in potential damage.'
    },
    {
      id: 6,
      name: 'Andrew Wilson',
      date: '1 week ago',
      rating: 5,
      text: 'Top-notch service! Tom was professional, knowledgeable, and went above and beyond to ensure we were happy with the work. Definitely recommend to anyone needing plumbing services in Sydney.'
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={index < rating ? '#FBBC04' : '#E8EAED'}
        stroke="none"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  // Update slides per view based on screen size
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const totalSlides = Math.ceil(reviews.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Handle touch events for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide()
    }
    if (touchStart - touchEnd < -50) {
      prevSlide()
    }
  }

  // Auto-play carousel disabled
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides)
  //   }, 5000) // Change slide every 5 seconds

  //   return () => clearInterval(interval)
  // }, [totalSlides])

  return (
    <section className="reviews-section">
      <div className="container">
        {/* Header */}
        <div className="reviews-header">
          <div className="reviews-eyebrow">
            SEE WHAT OUR CUSTOMERS SAY
          </div>
          <div className="reviews-heading-row">
            <h2 className="reviews-title">CUSTOMER REVIEWS</h2>
            <span className="reviews-midline" aria-hidden="true"></span>
            <a
              href="https://www.google.com/search?q=cross+roads+plumbing&oq=cross+ro&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MhIIARAAGAoYgwEYsQMYyQMYgAQyBggCEEUYOTINCAMQABiSAxiABBiKBTIHCAQQLhiABDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDI3MDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8#lrd=0xa263822490dcf841:0x6916f708015accbc,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-cta-button"
            >
              LEAVE US A REVIEW
            </a>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="reviews-carousel-container">
          <button 
            className="carousel-nav-btn carousel-prev" 
            onClick={prevSlide}
            aria-label="Previous reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div 
            className="reviews-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="reviews-track"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="reviews-slide">
                  {reviews
                    .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                    .map((review) => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <div className="review-avatar">
                            {getInitials(review.name)}
                          </div>
                          <div className="review-info">
                            <div className="review-author">{review.name}</div>
                            <div className="review-date">{review.date}</div>
                          </div>
                        </div>
                        <div className="review-rating">{renderStars(review.rating)}</div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-source">
                          <svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                          </svg>
                          <span>Google Review</span>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button 
            className="carousel-nav-btn carousel-next" 
            onClick={nextSlide}
            aria-label="Next reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Carousel Pagination */}
        <div className="carousel-pagination">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`carousel-page ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentSlide === index ? 'true' : undefined}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="reviews-cta-mobile">
          <a
            href="https://g.page/r/YOUR_GOOGLE_PLACE_ID/review"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-cta-button"
          >
            LEAVE US A REVIEW
          </a>
        </div>

      </div>
    </section>
  )
}

export default ReviewsSection
