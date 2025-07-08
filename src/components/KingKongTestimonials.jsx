import { Star, Quote, TrendingUp, Clock } from 'lucide-react'

export function KingKongTestimonials() {
  return (
    <section className="dark-section py-20 px-4">
      <div className="container mx-auto">
        <h2 className="section-headline text-white text-center mb-8">
          WHAT OUR CLIENTS SAY 
          <span className="scaling-green block mt-2">(WHEN THEY'RE NOT TOO BUSY COUNTING MONEY)</span>
        </h2>
        
        <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          Don't take our word for it. Here's what happens when you stop f*cking around and start implementing systems that actually work.
        </p>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Testimonial 1 */}
          <div className="testimonial-card relative">
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "I was skeptical as hell. Another 'AI expert' promising the moon? But these guys delivered. 
              <span className="text-green-400 font-semibold"> My sales team went from manually following up on 200+ leads to having AI handle everything.</span> 
              Revenue jumped 340% in 6 months. I'm not even kidding."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <div className="text-green-400 font-semibold">Marcus Johnson</div>
                <div className="text-gray-400 text-sm">CEO, TechFlow Solutions</div>
                <div className="text-yellow-400 text-sm font-semibold">+340% Revenue in 6 months</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="testimonial-card relative">
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "I was drowning in operations, working 80-hour weeks like an idiot. 
              <span className="text-green-400 font-semibold">Now I have 5 AI employees handling everything from customer service to content creation.</span> 
              I work 4 days a week and we're scaling to 8-figures. This sh*t is life-changing."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <div className="text-green-400 font-semibold">Sarah Chen</div>
                <div className="text-gray-400 text-sm">Founder, ConsultCorp</div>
                <div className="text-blue-400 text-sm font-semibold">80hrs → 32hrs per week</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="testimonial-card relative">
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "I've tried every automation tool, hired expensive consultants, bought countless courses. Nothing worked. 
              <span className="text-green-400 font-semibold">These guys built and deployed 3 AI employees in our first month.</span> 
              My team actually has time to think strategically now instead of putting out fires."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <div className="text-green-400 font-semibold">David Rodriguez</div>
                <div className="text-gray-400 text-sm">VP Operations, ScaleUp Inc</div>
                <div className="text-purple-400 text-sm font-semibold">3 AI employees in 30 days</div>
              </div>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="testimonial-card relative">
            <Quote className="h-8 w-8 text-green-400 mb-4" />
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-lg text-gray-300 mb-6 leading-relaxed">
              "ROI was immediate. Week 1: AI handling lead qualification. Week 2: AI managing customer onboarding. Week 3: AI creating content. 
              <span className="text-green-400 font-semibold">We've saved $180K in labor costs this year alone.</span> 
              Best investment I've ever made."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-green-400 font-bold text-lg">$</span>
              </div>
              <div>
                <div className="text-green-400 font-semibold">Jennifer Walsh</div>
                <div className="text-gray-400 text-sm">CEO, Growth Dynamics</div>
                <div className="text-green-400 text-sm font-semibold">$180K saved in year 1</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="bg-gray-800 border border-green-500 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              THE PATTERN IS CLEAR
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Every single client follows the same trajectory: Skeptical → Impressed → Obsessed → Scaling
            </p>
            <p className="text-xl font-bold text-green-400">
              This isn't luck. This is what happens when you stop f*cking around and start implementing systems that actually work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

