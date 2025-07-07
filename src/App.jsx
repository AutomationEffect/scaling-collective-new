import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Zap, Target, TrendingUp, Users, CheckCircle, Star, Quote } from 'lucide-react'
import { EnhancedCTA } from './components/EnhancedCTA.jsx'
import { AggressiveStats } from './components/AggressiveStats.jsx'
import { KingKongTestimonials } from './components/KingKongTestimonials.jsx'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="dark-section py-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                The Weekly Implementation Sprint That Installs AI Employees Across Your Entire Business
              </span>
            </div>
            
            <h1 className="hero-headline text-white mb-8">
              LIKE STEROIDS FOR YOUR BUSINESS - 
              <span className="scaling-green block mt-2">BUT LEGAL</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Deploy AI Employees That Work 24/7 While Your Competitors Sleep
            </p>
            
            <p className="body-text text-gray-400 mb-12">
              Every week, Sefy Tofan & Andrew Naegele solve REAL problems in your business by building AI employees that handle sales, marketing, ops, HR, and everything in between—using the exact system that 5X'd revenue to over $250K/mo in under 10 months
            </p>
            
            <Button className="cta-button text-xl px-12 py-6 mb-8">
              STOP F*CKING AROUND - GET YOUR AI EMPIRE
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Endorsed by Anik Singal, Los Silva & Wiz of Ecom</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-green-400" />
                <span>Live Weekly Implementation</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-400" />
                <span>Real Builds, Real Businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="light-section py-20 px-4">
        <div className="container mx-auto">
          <h2 className="section-headline text-center mb-16">
            THE MOST RUTHLESSLY EFFECTIVE AI IMPLEMENTATION DUO ON PLANET EARTH
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Sefy Tofan */}
            <div className="founder-card text-white text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-16 w-16 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 scaling-green">Sefy Tofan</h3>
              <p className="text-xl font-semibold mb-4 text-gray-300">THE CHAOS TERMINATOR</p>
              <p className="text-gray-400 mb-6">
                Multi-7-Figure Entrepreneur Who Turns Business Disasters Into Automated Empires
              </p>
              <p className="text-gray-300 mb-6">
                Sefy doesn't just build systems - he architects business transformations that would make Gordon Gekko jealous.
              </p>
              <blockquote className="text-lg italic scaling-green">
                "I don't teach theory, I install systems that multiply your impact 10X."
              </blockquote>
            </div>

            {/* Andrew Naegele */}
            <div className="founder-card text-white text-center">
              <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-16 w-16 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2 scaling-green">Andrew Naegele</h3>
              <p className="text-xl font-semibold mb-4 text-gray-300">THE AI EMPEROR</p>
              <p className="text-gray-400 mb-6">
                8 and 9-Figure Founders Pay Him $50K Just To Pick His Brain
              </p>
              <p className="text-gray-300 mb-6">
                When industry titans like Anik Singal and Los Silva need AI solutions that actually work, they call Andrew.
              </p>
              <blockquote className="text-lg italic scaling-green">
                "I don't just build AI, I architect AI empires for those ready to scale."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="dark-section py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="section-headline text-white mb-12">
            YOUR BUSINESS IS F*CKING HEMORRHAGING MONEY 
            <span className="alert-orange block mt-2">WHILE YOU PLAY ENTREPRENEUR</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Look, we get it. Running a business is hard as hell. Really f*cking hard.
            </p>
            
            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              You're probably stressed and sleeping like a teething two-year-old, wondering where your next breakthrough will come from. As your hair goes fifty shades of grey from all the uncertainty, your competitors are eating your lunch with half the effort.
            </p>
            
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-red-400 mb-6">The gap between you and automated operators widens daily:</h3>
              
              <div className="space-y-6 text-left">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-green-400 font-semibold">They have AI employees handling sales calls at 2 AM</p>
                    <p className="text-gray-400">You're still manually following up</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-green-400 font-semibold">They have AI running their entire customer success</p>
                    <p className="text-gray-400">You're drowning in support tickets</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-green-400 font-semibold">They turned one VA into an AI-powered operations team</p>
                    <p className="text-gray-400">You're still doing everything yourself</p>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-red-400">
              Every week without AI employees is a week you fall further behind.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="gradient-section py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="section-headline text-white mb-12">
            WHAT IF EVERY WEEK WE SOLVED YOUR BIGGEST PROBLEM WITH AI?
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-xl mb-8 leading-relaxed">
              THE VIBE PROTOCOL™ ISN'T ANOTHER BULLSH*T MASTERMIND WHERE GURUS CIRCLE-JERK ABOUT THEORIES
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              It's a weekly implementation sprint where we identify your biggest bottleneck and BUILD an AI employee to handle it—live, together, deployed before the call ends.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">This Week:</h3>
                <p>Your sales follow-up is broken? We build an AI that handles every lead.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Next Week:</h3>
                <p>Your content creation is inconsistent? We install an AI that publishes daily.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Week After:</h3>
                <p>Your VA is overwhelmed? We give them AI powers that 10X their output.</p>
              </div>
            </div>
            
            <p className="text-xl font-bold">
              Real problems. Real solutions. Real implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <AggressiveStats />

      {/* Guarantee Section */}
      <section className="light-section py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto bg-yellow-50 border-4 border-yellow-400 rounded-xl p-12">
            <h2 className="text-4xl font-black mb-8 text-gray-900">
              THE SCALING COLLECTIVE GUARANTEE
            </h2>
            
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Deploy Your First AI Employee in 30 Days or We Work For Free
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're so confident in The Vibe Protocol™ that we guarantee you'll have at least one AI employee handling real work in your business within 30 days.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              If you don't? We'll keep working with you - for free - until you do.
            </p>
            
            <p className="text-xl font-bold text-gray-900">
              That's how sure we are that this sh*t works.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <KingKongTestimonials />

      {/* Enhanced Final CTA Section */}
      <EnhancedCTA />
    </div>
  )
}

export default App

