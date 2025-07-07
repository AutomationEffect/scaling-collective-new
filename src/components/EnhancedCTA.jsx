import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'

export function EnhancedCTA() {
  return (
    <section className="gradient-section py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-headline text-white mb-8">
            STOP BEING A SLAVE TO YOUR BUSINESS
          </h2>
          
          <p className="text-xl mb-12 leading-relaxed">
            While you're reading this, your competitors are deploying AI employees. 
            Every second you wait is money walking out the door.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">
              WHAT YOU GET WHEN YOU JOIN TODAY:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Week 1</h4>
                <p className="text-sm">Your first AI employee deployed and working</p>
              </div>
              
              <div className="text-center">
                <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Week 2-4</h4>
                <p className="text-sm">3-5 additional AI employees across departments</p>
              </div>
              
              <div className="text-center">
                <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h4 className="font-bold mb-2">30-Day Guarantee</h4>
                <p className="text-sm">Results or we work for free until you get them</p>
              </div>
            </div>
            
            <div className="bg-red-900/30 border border-red-400 rounded-lg p-6 mb-8">
              <p className="text-red-300 font-bold text-lg mb-2">
                ⚠️ WARNING: LIMITED SPOTS AVAILABLE
              </p>
              <p className="text-red-200">
                We only take 10 new clients per month to ensure quality. 
                This month we have 3 spots left.
              </p>
            </div>
          </div>
          
          <Button className="cta-button text-2xl px-16 py-8 mb-8 animate-pulse">
            CLAIM YOUR AUTOMATION EMPIRE NOW
            <ArrowRight className="ml-3 h-8 w-8" />
          </Button>
          
          <p className="text-sm text-white/80 mb-4">
            No bullsh*t. No fluff. Just results.
          </p>
          
          <p className="text-xs text-white/60">
            Serious operators only. If you're looking for another course to collect digital dust, this isn't for you.
          </p>
        </div>
      </div>
    </section>
  )
}

