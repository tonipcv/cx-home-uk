'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ChevronRightIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white text-black font-satoshi tracking-[-0.02em]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="h-6" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4 rotate-180 mr-2" />
              Return to Insights
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em] leading-tight">
                Maximizing Patient Retention: The Digital Revolution in Healthcare Relationships
              </h1>

              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Healthcare Innovation</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span>10 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-16 font-light">
              In today's digital age, healthcare providers face a unique challenge: maintaining meaningful patient relationships 
              in an increasingly virtual world. The most successful practices have discovered that patient retention isn't just 
              about medical excellence—it's about creating a seamless, engaging digital experience that keeps patients connected 
              between visits.
            </div>

            <div className="space-y-16">
              <section>
                <h2 className="text-2xl font-light text-black mb-8">The Evolution of Patient Engagement</h2>
                <div className="space-y-6 text-gray-600">
                  <p>
                    Traditional patient engagement relied heavily on periodic check-ups and manual follow-ups. 
                    Today's leading healthcare providers leverage digital platforms to maintain continuous, meaningful 
                    connections with their patients, resulting in improved outcomes and stronger loyalty.
                  </p>
                  <p>
                    Digital transformation in healthcare isn't just about convenience—it's about creating a comprehensive 
                    ecosystem that supports patients throughout their entire healthcare journey.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">Key Elements of Modern Patient Retention</h2>
                <div className="space-y-12">
                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">Digital Patient Experience</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Modern healthcare providers are implementing comprehensive digital platforms that offer personalized 
                        patient portals, easy appointment scheduling, and secure communication channels.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "83% of patients prefer healthcare providers who offer comprehensive digital services."
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Healthcare Digital Transformation Report, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">Automated Care Coordination</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Smart automation systems ensure no patient falls through the cracks. From appointment reminders 
                        to treatment plan updates, every touchpoint is optimized for engagement and retention.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900">
                          Practices using automated care coordination see a 35% increase in follow-up appointment attendance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 sm:p-8 rounded-xl">
                    <h3 className="text-xl font-light text-black mb-4">Personalized Communication Strategy</h3>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        AI-driven communication systems adapt to patient preferences and behaviors, delivering the right 
                        message at the right time through the right channel.
                      </p>
                      <div className="pl-4 border-l-2 border-blue-100">
                        <p className="text-gray-900 italic">
                          "Personalized patient communication increases engagement rates by 62% compared to generic outreach."
                        </p>
                        <p className="text-sm text-gray-500 mt-2">Patient Engagement Metrics Study, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light text-black mb-8">Impact on Practice Performance</h2>
                <div className="overflow-x-auto bg-blue-50 rounded-xl">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-100">
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Metric</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Traditional Practice</th>
                        <th className="py-4 px-4 sm:px-6 text-left text-sm font-normal text-gray-600">Digitally Optimized</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Patient Retention Rate</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">65%</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">89%</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Patient Satisfaction Score</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">3.8/5.0</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">4.7/5.0</td>
                      </tr>
                      <tr className="border-b border-blue-100">
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Care Plan Completion</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">72%</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">94%</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 sm:px-6 text-gray-900">Revenue per Patient</td>
                        <td className="py-4 px-4 sm:px-6 text-gray-600">Base</td>
                        <td className="py-4 px-4 sm:px-6 text-blue-600 font-medium">+85%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 bg-blue-50">
        <div className="container mx-auto max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <h2 className="text-2xl font-light text-black">Elevate Your Patient Experience</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Learn how CXLUS can help you implement these proven strategies and transform your practice with our 
              comprehensive digital patient engagement platform.
            </p>
            <div className="pt-2">
              <Button 
                onClick={() => window.location.href = '/demo'}
                className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 px-8 py-3 text-sm tracking-wide rounded-lg"
              >
                Schedule a Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-gray-100 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4 sm:mb-0" />
            <p className="text-gray-500 text-sm">
              © 2024 CXLUS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 