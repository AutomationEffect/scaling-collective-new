import { TrendingUp, DollarSign, Users, Award } from 'lucide-react'

export function AggressiveStats() {
  return (
    <section className="dark-section py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="section-headline text-white mb-8">
          WE DON'T JUST TALK THE TALK - 
          <span className="scaling-green block mt-2">WE WALK THE F*CKING WALK</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-16 max-w-3xl mx-auto">
          While other "gurus" are selling dreams, we're delivering nightmares to your competition.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-400 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-white" />
            </div>
            <div className="stats-number mb-2">200+</div>
            <p className="text-gray-400 text-lg font-semibold">AI Employees Deployed</p>
            <p className="text-sm text-gray-500 mt-2">Across 47 industries</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-10 w-10 text-white" />
            </div>
            <div className="stats-number mb-2">$50M+</div>
            <p className="text-gray-400 text-lg font-semibold">Client Revenue Generated</p>
            <p className="text-sm text-gray-500 mt-2">In the last 18 months</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <div className="stats-number mb-2">340%</div>
            <p className="text-gray-400 text-lg font-semibold">Average Revenue Increase</p>
            <p className="text-sm text-gray-500 mt-2">Within 6 months</p>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-10 w-10 text-white" />
            </div>
            <div className="stats-number mb-2">98%</div>
            <p className="text-gray-400 text-lg font-semibold">Client Retention Rate</p>
            <p className="text-sm text-gray-500 mt-2">They don't leave because it works</p>
          </div>
        </div>
        
        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6">
            THE BRUTAL TRUTH ABOUT AI IMPLEMENTATION
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-lg font-bold text-red-400 mb-4">❌ WHAT DOESN'T WORK:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Buying another course and hoping for the best</li>
                <li>• Trying to figure it out yourself (you'll waste months)</li>
                <li>• Hiring "AI consultants" who've never built anything</li>
                <li>• Waiting for the "perfect time" to start</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-green-400 mb-4">✅ WHAT ACTUALLY WORKS:</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Weekly implementation with proven operators</li>
                <li>• Building AI employees that solve real problems</li>
                <li>• Having experts who've done it 200+ times before</li>
                <li>• Starting NOW and iterating as you go</li>
              </ul>
            </div>
          </div>
        </div>
        
        <p className="text-xl text-gray-300 mt-12">
          We literally wrote the playbook on AI business automation. 
          <span className="scaling-green font-bold">Now we're giving it to you.</span>
        </p>
      </div>
    </section>
  )
}

