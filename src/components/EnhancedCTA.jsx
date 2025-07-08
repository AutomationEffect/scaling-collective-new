import { Button } from '@/components/ui/button.jsx'
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react'

export function EnhancedCTA() {
  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 uppercase tracking-tight">
            STOP BEING A SLAVE TO YOUR BUSINESS
          </h2>
          
          <p className="text-xl text-white mb-12 leading-relaxed">
            While you're reading this, your competitors are deploying AI employees. 
            Every second you wait is money walking out the door.
          </p>
          
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-green-400 uppercase">
              WHAT YOU GET WHEN YOU JOIN TODAY:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-12 w-12 text-black" />
                </div>
                <h4 className="font-bold mb-2 text-white">Week 1</h4>
                <p className="text-sm text-gray-300">Your first AI employee deployed and working</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-12 w-12 text-black" />
                </div>
                <h4 className="font-bold mb-2 text-white">Week 2-4</h4>
                <p className="text-sm text-gray-300">3-5 additional AI employees across departments</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-12 w-12 text-white" />
                </div>
                <h4 className="font-bold mb-2 text-white">30-Day Guarantee</h4>
                <p className="text-sm text-gray-300">Results or we work for free until you get them</p>
              </div>
            </div>
            
            <div className="bg-red-900 border border-red-500 rounded-lg p-6 mb-8">
              <p className="text-red-300 font-bold text-lg mb-2">
                ⚠️ WARNING: LIMITED SPOTS AVAILABLE
              </p>
              <p className="text-red-200">
                We only take 10 new clients per month to ensure quality. 
                This month we have 3 spots left.
              </p>
            </div>
          </div>
          
          <button className="bg-green-500 hover:bg-green-600 text-black font-black text-2xl px-16 py-8 mb-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
            CLAIM YOUR AUTOMATION EMPIRE NOW
            <ArrowRight className="ml-3 h-8 w-8 inline" />
          </button>
          
          <p className="text-sm text-white mb-4">
            No bullsh*t. No fluff. Just results.
          </p>
          
          <p className="text-xs text-gray-400">
            Serious operators only. If you're looking for another course to collect digital dust, this isn't for you.
          </p>
        </div>
      </div>
    </section>
  )
}

