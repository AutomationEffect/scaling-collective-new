import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, CheckCircle, Star, TrendingUp, Zap, Shield, Target, Users, DollarSign } from 'lucide-react'
import './App.css'
import KingKongScrollingBanner from './components/KingKongScrollingBanner'
import KingKongStats from './components/KingKongStats'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Add fade-in animation to elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    document.querySelectorAll('.kk-fade-in').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote: "These guys are absolutely INSANE. They deployed 12 AI employees in our company and we're now processing 10x more leads with half the staff. Revenue is up 340% in 6 months.",
      author: "Marcus Chen",
      company: "TechFlow Solutions",
      result: "+340% Revenue"
    },
    {
      quote: "I was skeptical about AI employees until Scaling Collective showed me what's possible. Now we have AI handling our entire customer service department. It's like having 50 employees for the price of 2.",
      author: "Sarah Williams", 
      company: "E-commerce Empire",
      result: "+500% Efficiency"
    },
    {
      quote: "HOLY SH*T. These AI employees are better than most humans I've hired. They work 24/7, never complain, and our customers love them. Best investment I've ever made.",
      author: "David Rodriguez",
      company: "Growth Dynamics",
      result: "+280% Profit"
    }
  ]

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI EMPLOYEE DEPLOYMENT",
      description: "We deploy custom AI employees that work 24/7 to handle your most time-consuming tasks. Sales, customer service, lead generation - we've got you covered.",
      features: ["24/7 Operation", "Custom Training", "Human-Level Performance", "Instant Deployment"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "REVENUE OPTIMIZATION",
      description: "Our AI employees don't just work - they OPTIMIZE. Every interaction is designed to maximize revenue and convert more prospects into paying customers.",
      features: ["Revenue Tracking", "Conversion Optimization", "Performance Analytics", "ROI Maximization"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "GUARANTEED RESULTS",
      description: "We're so confident in our AI employees that we guarantee results within 30 days or we work for FREE until you see the ROI you deserve.",
      features: ["30-Day Guarantee", "Performance Metrics", "Success Tracking", "Risk-Free Trial"]
    }
  ]

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="kk-nav">
        <div className="kk-nav-content">
          <a href="#" className="kk-logo">SCALING COLLECTIVE</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="font-semibold hover:text-green-500 transition-colors">SERVICES</a>
            <a href="#results" className="font-semibold hover:text-green-500 transition-colors">RESULTS</a>
            <a href="#testimonials" className="font-semibold hover:text-green-500 transition-colors">PROOF</a>
            <button className="kk-btn-primary">GET YOUR AI EMPIRE</button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-6 right-6"
            onClick={() => setIsMenuOpen(false)}
          >
            <X size={32} color="white" />
          </button>
          <div className="flex flex-col items-center gap-8 text-white">
            <a href="#services" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
            <a href="#results" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>RESULTS</a>
            <a href="#testimonials" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>PROOF</a>
            <button className="kk-btn-primary" onClick={() => setIsMenuOpen(false)}>GET YOUR AI EMPIRE</button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="kk-hero">
        <div className="kk-container">
          <div className="kk-hero-content">
            <div className="kk-fade-in">
              <h1 className="kk-hero-title">
                DEPLOY YOUR FIRST<br />
                <span style={{ color: 'var(--kk-green)' }}>AI EMPLOYEE</span><br />
                IN 48 HOURS
              </h1>
              <p className="kk-subtitle max-w-3xl mx-auto">
                STOP WASTING MONEY ON EXPENSIVE HUMAN EMPLOYEES. OUR AI WORKERS COST 90% LESS, 
                WORK 24/7, AND DELIVER RESULTS THAT WILL MAKE YOUR COMPETITORS CRY.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <button className="kk-btn-primary kk-pulse">
                  GET YOUR AI EMPIRE NOW
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="kk-btn-secondary">
                  WATCH THE PROOF
                </button>
              </div>
              <div className="mt-8">
                <div className="kk-guarantee">
                  🛡️ 30-DAY MONEY-BACK GUARANTEE - NO QUESTIONS ASKED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Proof Banner */}
      <KingKongScrollingBanner />

      {/* Problem Agitation Section */}
      <section className="kk-section-dark">
        <div className="kk-container">
          <div className="text-center">
            <h2 className="kk-section-title text-white mb-8 kk-fade-in">
              YOUR BUSINESS IS<br />
              <span style={{ color: 'var(--kk-accent)' }}>F*CKING HEMORRHAGING</span><br />
              MONEY RIGHT NOW
            </h2>
            <div className="kk-grid-2 gap-8 mt-12">
              <div className="kk-fade-in kk-slide-in-left">
                <div className="kk-card-dark p-8">
                  <h3 className="text-2xl font-bold text-red-400 mb-4">❌ WHAT YOU'RE DOING NOW</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Paying $50,000+ per employee annually</li>
                    <li>• Dealing with sick days, vacations, and drama</li>
                    <li>• Losing leads while your team sleeps</li>
                    <li>• Watching competitors steal your customers</li>
                    <li>• Burning cash on inefficient processes</li>
                  </ul>
                </div>
              </div>
              <div className="kk-fade-in kk-slide-in-right">
                <div className="kk-card p-8" style={{ background: 'var(--kk-green)', color: 'var(--kk-dark)' }}>
                  <h3 className="text-2xl font-bold mb-4">✅ WHAT HAPPENS WITH AI EMPLOYEES</h3>
                  <ul className="space-y-3 font-semibold">
                    <li>• Pay $500/month per AI employee (90% savings)</li>
                    <li>• Zero sick days, zero drama, zero bullsh*t</li>
                    <li>• Capture leads 24/7/365</li>
                    <li>• Dominate your market while you sleep</li>
                    <li>• Scale infinitely without hiring headaches</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <KingKongStats />

      {/* Services Section */}
      <section id="services" className="kk-section-light">
        <div className="kk-container">
          <div className="text-center mb-16">
            <h2 className="kk-section-title mb-6 kk-fade-in">
              HOW WE BUILD YOUR<br />
              <span style={{ color: 'var(--kk-green)' }}>AI EMPIRE</span>
            </h2>
            <p className="kk-subtitle kk-fade-in">
              WE DON'T JUST DEPLOY AI - WE BUILD YOU AN ARMY OF DIGITAL EMPLOYEES
            </p>
          </div>
          
          <div className="kk-grid-3">
            {services.map((service, index) => (
              <div key={index} className="kk-card kk-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-green-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="kk-body mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="kk-section-gray">
        <div className="kk-container">
          <div className="text-center mb-16">
            <h2 className="kk-section-title mb-6 kk-fade-in">
              REAL CLIENTS,<br />
              <span style={{ color: 'var(--kk-green)' }}>REAL RESULTS</span>
            </h2>
            <p className="kk-subtitle kk-fade-in">
              DON'T TAKE OUR WORD FOR IT - HERE'S WHAT HAPPENS WHEN YOU DEPLOY AI EMPLOYEES
            </p>
          </div>
          
          <div className="kk-grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="kk-testimonial kk-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="kk-testimonial-quote">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="kk-testimonial-author">{testimonial.author}</div>
                    <div className="kk-testimonial-company">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="kk-section-green">
        <div className="kk-container text-center">
          <h2 className="kk-section-title mb-6 kk-fade-in">
            STOP F*CKING AROUND<br />
            GET YOUR AI EMPIRE
          </h2>
          <p className="kk-subtitle mb-8 kk-fade-in">
            EVERY DAY YOU WAIT IS MONEY DOWN THE DRAIN.<br />
            YOUR COMPETITORS ARE ALREADY USING AI EMPLOYEES.
          </p>
          
          <div className="bg-white bg-opacity-20 rounded-lg p-8 max-w-2xl mx-auto mb-8 kk-fade-in">
            <h3 className="text-2xl font-bold mb-4">🔥 LIMITED TIME OFFER</h3>
            <p className="text-xl font-semibold mb-4">
              FIRST 10 CLIENTS GET 3 AI EMPLOYEES FOR THE PRICE OF 1
            </p>
            <p className="text-lg">
              <span className="line-through opacity-60">$1,500/month</span>
              <span className="text-3xl font-bold ml-4">$500/month</span>
            </p>
            <p className="text-sm mt-2 opacity-80">
              ⏰ ONLY 3 SPOTS LEFT THIS MONTH
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="kk-btn-white text-xl px-12 py-4 kk-pulse">
              YES, I WANT MY AI EMPIRE
              <ArrowRight className="ml-2 w-6 h-6" />
            </button>
          </div>
          
          <div className="mt-8 kk-fade-in">
            <div className="kk-guarantee">
              🛡️ 30-DAY MONEY-BACK GUARANTEE + FREE SETUP
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="kk-section-dark py-12">
        <div className="kk-container">
          <div className="text-center">
            <div className="kk-logo text-2xl mb-4">SCALING COLLECTIVE</div>
            <p className="text-gray-400 mb-8">
              THE MOST RUTHLESSLY EFFECTIVE AI IMPLEMENTATION DUO ON PLANET EARTH
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-green-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-500 transition-colors">Contact</a>
            </div>
            <p className="text-gray-500 text-sm mt-8">
              © 2024 Scaling Collective. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

