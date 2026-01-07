import { Link } from 'react-router-dom'
import ReviewsSection from '../components/ReviewsSection'
import ServiceAreasSection from '../components/ServiceAreasSection'
import CurvedCTASection from '../components/CurvedCTASection'
import './BlogPage.css'

export const posts = [
  {
    slug: 'blocked-drains-maintenance',
    title: 'Blocked Drains: Why Proper Drain Maintenance Matters',
    date: 'April 2, 2025',
    excerpt:
      'Learn the warning signs of blockages, how professionals clear drains, and easy ways to prevent costly damage.',
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Clear, Well-Maintained Drains',
        body:
          'Blocked drains are one of the most common plumbing issues in Australian homes. From kitchens to bathrooms, properly functioning drains are essential for hygiene, convenience, and preventing water damage.'
      },
      {
        heading: 'Common Issues with Blocked Drains',
        body:
          'Blocked drains are often caused by grease build-up, hair, food scraps, tree roots, or foreign objects. Early signs include slow drainage, gurgling noises, and unpleasant odours. If ignored, blockages can worsen, leading to pipe damage, overflows, and costly repairs.'
      },
      {
        heading: 'The Process of Blocked Drain Repair',
        body:
          'Professional plumbers begin with an inspection, often using drain cameras to locate the blockage. Depending on the cause, they may use high-pressure water jetting or specialised tools to clear the obstruction safely and effectively. This approach ensures the blockage is fully removed, not just pushed further down the pipe.'
      },
      {
        heading: 'Benefits of Professional Drain Services',
        body:
          'Professional drain repairs ensure blockages are cleared properly without damaging pipes. Experienced plumbers can also identify underlying issues, such as tree root intrusion, preventing recurring problems and saving homeowners money long-term.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Avoid pouring grease down sinks, use drain strainers, and flush drains regularly with hot water. Scheduling routine inspections can also help catch issues early.'
      },
      {
        heading: 'Conclusion: Choosing the Right Plumbing Service',
        body:
          'When dealing with blocked drains, choose a licensed plumber with modern equipment and transparent pricing. Professional service ensures long-lasting results and peace of mind.'
      }
    ]
  },
  {
    slug: 'hot-water-systems-comfort',
    title: 'Hot Water Systems: Keeping Your Home Comfortable Year-Round',
    date: 'March 26, 2025',
    excerpt:
      'Understand common hot water issues, repair steps, and how to keep your system running efficiently.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of a Reliable Hot Water System',
        body:
          'A functioning hot water system is essential for everyday comfort, from showers to washing dishes. When it fails, it can disrupt the entire household.'
      },
      {
        heading: 'Common Hot Water System Issues',
        body:
          'Common problems include inconsistent water temperature, strange noises, leaks, or complete system failure. These issues may stem from faulty thermostats, heating elements, or sediment build-up.'
      },
      {
        heading: 'The Process of Hot Water System Repair',
        body:
          'Plumbers start by assessing the system type—electric, gas, or solar—and identifying the fault. Repairs may involve replacing components or recommending system upgrades when repairs are no longer cost-effective.'
      },
      {
        heading: 'Benefits of Professional Hot Water Repairs',
        body:
          'Professional repairs ensure safety, efficiency, and compliance with Australian standards. Technicians can also advise on energy-efficient solutions that reduce running costs.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Regular servicing, flushing the tank, and monitoring temperature settings can extend the lifespan of a hot water system.'
      },
      {
        heading: 'Conclusion: Choosing the Right Hot Water Specialist',
        body:
          'Select a plumber experienced with your system type and offering clear advice on repairs versus replacement.'
      }
    ]
  },
  {
    slug: 'leaking-taps-small-drips',
    title: 'Leaking Taps: Small Drips, Big Problems',
    date: 'March 18, 2025',
    excerpt:
      'Find out what causes tap leaks, how repairs work, and why quick fixes save water and money.',
    image:
      'https://images.unsplash.com/photo-1502005097973-6a7082348e28?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Fixing Leaking Taps',
        body:
          'A leaking tap may seem minor, but it can waste thousands of litres of water each year and increase water bills unnecessarily.'
      },
      {
        heading: 'Common Causes of Leaking Taps',
        body:
          'Leaks are often caused by worn washers, damaged O-rings, or corroded valve seats. Over time, constant dripping can also damage fixtures.'
      },
      {
        heading: 'The Process of Tap Repair',
        body:
          'A plumber inspects the tap assembly, replaces faulty components, and tests water pressure to ensure the repair is effective and long-lasting.'
      },
      {
        heading: 'Benefits of Professional Tap Repairs',
        body:
          'Professional repairs prevent repeat leaks, protect fixtures, and help reduce water waste. Plumbers can also upgrade old fittings to modern, water-efficient options.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Address drips early, avoid overtightening taps, and have older fixtures inspected regularly.'
      },
      {
        heading: 'Conclusion: Choosing a Reliable Plumbing Professional',
        body:
          'A qualified plumber ensures the leak is fixed correctly the first time, saving water and money.'
      }
    ]
  },
  {
    slug: 'burst-pipes-fast-response',
    title: 'Burst Pipes: Acting Fast to Prevent Major Damage',
    date: 'March 8, 2025',
    excerpt:
      'Learn what causes burst pipes and why fast, professional repairs protect your property.',
    image:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Immediate Pipe Repairs',
        body:
          'Burst pipes can cause serious water damage within minutes, making fast action critical.'
      },
      {
        heading: 'Common Causes of Burst Pipes',
        body:
          'Pipes may burst due to corrosion, high water pressure, tree roots, or temperature changes. Older plumbing systems are particularly vulnerable.'
      },
      {
        heading: 'The Process of Burst Pipe Repair',
        body:
          'Plumbers isolate the water supply, locate the damaged pipe, and perform repairs or replacements using durable materials.'
      },
      {
        heading: 'Benefits of Professional Pipe Repairs',
        body:
          'Professionals minimise damage, ensure safe repairs, and restore water supply efficiently. They also identify underlying causes to prevent future bursts.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Monitor water pressure, insulate exposed pipes, and address leaks promptly.'
      },
      {
        heading: 'Conclusion: Choosing an Emergency Plumbing Service',
        body:
          'Always choose a licensed plumber offering rapid response and emergency support.'
      }
    ]
  },
  {
    slug: 'toilet-repairs-functional',
    title: 'Toilet Repairs: Keeping Your Bathroom Functional',
    date: 'February 27, 2025',
    excerpt:
      'From running toilets to weak flushes, learn how repairs restore performance and save water.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of a Properly Working Toilet',
        body:
          'A faulty toilet can disrupt daily life and waste significant amounts of water.'
      },
      {
        heading: 'Common Toilet Issues',
        body:
          'Running toilets, weak flushes, blockages, and leaks are common problems often caused by worn internal components.'
      },
      {
        heading: 'The Process of Toilet Repair',
        body:
          'Plumbers inspect the cistern and pan, replace faulty parts, and test flushing performance.'
      },
      {
        heading: 'Benefits of Professional Toilet Repairs',
        body:
          'Professional repairs improve efficiency, prevent leaks, and reduce water bills.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Avoid flushing foreign objects and have components checked periodically.'
      },
      {
        heading: 'Conclusion: Choosing the Right Plumber',
        body:
          'A professional ensures reliable repairs and long-term performance.'
      }
    ]
  },
  {
    slug: 'gas-plumbing-safety',
    title: 'Gas Plumbing: Safety Comes First',
    date: 'February 14, 2025',
    excerpt:
      'Understand common gas issues, how licensed plumbers handle repairs, and why safety matters.',
    image:
      'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Safe Gas Plumbing',
        body:
          'Gas systems are essential but potentially dangerous if not properly maintained.'
      },
      {
        heading: 'Common Gas Plumbing Issues',
        body:
          'Gas leaks, faulty appliances, and low pressure are common issues that require immediate attention.'
      },
      {
        heading: 'The Process of Gas Plumbing Repairs',
        body:
          'Licensed gas plumbers conduct safety checks, locate leaks, and repair or replace faulty components.'
      },
      {
        heading: 'Benefits of Professional Gas Services',
        body:
          'Professional work ensures safety, compliance, and peace of mind.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Schedule regular inspections and never attempt DIY gas repairs.'
      },
      {
        heading: 'Conclusion: Choosing a Licensed Gas Plumber',
        body:
          'Always select a certified professional for gas work.'
      }
    ]
  },
  {
    slug: 'sewer-line-repairs',
    title: 'Sewer Line Repairs: Protecting Your Property',
    date: 'February 3, 2025',
    excerpt:
      'Learn the warning signs of sewer issues and how modern repairs protect your home.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Healthy Sewer Lines',
        body:
          'Sewer line issues can cause major health and property risks if left untreated.'
      },
      {
        heading: 'Common Sewer Line Problems',
        body:
          'Blockages, tree root intrusion, and pipe collapse are common issues.'
      },
      {
        heading: 'The Process of Sewer Line Repair',
        body:
          'Plumbers use camera inspections and trenchless repair methods where possible to minimise disruption.'
      },
      {
        heading: 'Benefits of Professional Sewer Repairs',
        body:
          'Professional services ensure long-term solutions and reduced property damage.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Avoid flushing inappropriate items and schedule routine inspections.'
      },
      {
        heading: 'Conclusion: Choosing a Trusted Plumbing Expert',
        body:
          'Experience and modern equipment are key when handling sewer repairs.'
      }
    ]
  },
  {
    slug: 'roof-plumbing-prevention',
    title: 'Roof Plumbing: Preventing Water Damage',
    date: 'January 22, 2025',
    excerpt:
      'Protect your home with regular roof plumbing maintenance and timely repairs.',
    image:
      'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Proper Roof Plumbing',
        body:
          'Roof plumbing directs rainwater away from your home, protecting its structure.'
      },
      {
        heading: 'Common Roof Plumbing Issues',
        body:
          'Blocked gutters, damaged downpipes, and leaks can lead to water damage.'
      },
      {
        heading: 'The Process of Roof Plumbing Repairs',
        body:
          'Plumbers inspect drainage systems, clear blockages, and repair or replace damaged components.'
      },
      {
        heading: 'Benefits of Professional Roof Plumbing Services',
        body:
          'Professional repairs prevent leaks and extend the lifespan of roofing systems.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Clean gutters regularly and inspect after heavy storms.'
      },
      {
        heading: 'Conclusion: Choosing the Right Roof Plumber',
        body:
          'Select professionals with experience in roof drainage systems.'
      }
    ]
  },
  {
    slug: 'preventative-plumbing-maintenance',
    title: 'Preventative Plumbing Maintenance: Saving Money Long-Term',
    date: 'January 10, 2025',
    excerpt:
      'Routine checks reduce emergencies, extend system life, and keep repair costs down.',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200',
    sections: [
      {
        heading: 'Introduction: The Importance of Preventative Maintenance',
        body:
          'Regular plumbing maintenance helps avoid unexpected breakdowns and costly repairs.'
      },
      {
        heading: 'Common Plumbing Issues Prevented by Maintenance',
        body:
          'Leaks, blockages, and system failures can often be detected early with routine checks.'
      },
      {
        heading: 'The Process of Preventative Plumbing Inspections',
        body:
          'Plumbers assess pipes, fixtures, and appliances, identifying issues before they escalate.'
      },
      {
        heading: 'Benefits of Professional Maintenance Services',
        body:
          'Preventative maintenance extends system lifespan, improves efficiency, and reduces emergency call-outs.'
      },
      {
        heading: 'Maintenance Tips for Homeowners',
        body:
          'Schedule annual inspections and address minor issues promptly.'
      },
      {
        heading: 'Conclusion: Investing in Long-Term Plumbing Care',
        body:
          'Choosing a reliable plumber for regular maintenance protects your home and your budget.'
      }
    ]
  }
]

const BlogPage = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container blog-hero-container">
          <div className="blog-hero-tag">Blog</div>
          <h1 className="blog-hero-title">Plumbing Tips & Updates</h1>
          <p className="blog-hero-subtitle">
            Practical advice from the Crossroads Plumbing team to help Sydney homes stay safe, efficient, and leak
            free.
          </p>
          <a
            className="blog-hero-cta"
            href="#blog-listing"
            onClick={(event) => {
              event.preventDefault()
              document.getElementById('blog-listing')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }}
          >
            <span>Read Blogs</span>
            <span className="blog-hero-cta-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 4v14m0 0l-6-6m6 6l6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </div>
      </section>

      <section className="blog-listing" id="blog-listing">
        <div className="container blog-listing-container">
          <div className="blog-listing-header">
            <div className="blog-listing-heading-row">
              <h2 className="blog-listing-title">Latest Articles</h2>
              <span className="blog-listing-midline" aria-hidden="true"></span>
            </div>
          </div>

          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-body">
                  <span className="blog-card-date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <Link className="blog-card-link" to={`/blog/${post.slug}`}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ServiceAreasSection />
      <CurvedCTASection />
    </div>
  )
}

export default BlogPage
