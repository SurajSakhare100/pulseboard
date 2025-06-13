'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, ChatBubbleLeftRightIcon, DocumentTextIcon, ShieldCheckIcon, SparklesIcon, LinkIcon, CheckCircleIcon, RocketLaunchIcon, DevicePhoneMobileIcon, EyeIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import WaitlistForm from '@/components/WaitlistForm';
import HeroWaitlistForm from '@/components/HeroWaitlistForm';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-white opacity-70" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,white_60%)]" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center px-4 max-w-5xl mx-auto py-20 md:py-24"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-10"
            >
              <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-purple-100 text-purple-700 border border-purple-200 shadow-sm transition-all duration-300 hover:scale-105">
                <RocketLaunchIcon className="w-5 h-5 mr-2" />
                Client Update Portal
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-none mb-8">
              What if clients never asked <span className="text-purple-600">for updates again?</span>
            </h1>
           
            <p className="text-lg md:text-xl text-gray-600 mb-16 max-w-xl mx-auto ">
            A super simple client update portal for freelancers to share project progress, files, and notes.
            </p>
            <HeroWaitlistForm />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-sm font-semibold text-purple-600 mb-3 block">Features</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Everything You Need to Manage Clients</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Streamline your client communication and project updates with these powerful features.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {[
                {
                  icon: LinkIcon,
                  title: "Branded Client Boards",
                  description: "Share a unique link per client/project. Customize with logo, colors, and project name."
                },
                {
                  icon: CheckCircleIcon,
                  title: "Live Project Updates",
                  description: "Add quick updates (text, status, files). Timeline view — no messy threads or replies."
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Secure Communication",
                  description: "Clients just click and view — no passwords, no setup. Optional password protection for privacy."
                },
                {
                  icon: DocumentTextIcon,
                  title: "Smart File Sharing",
                  description: "Upload files (PDFs, mockups, deliverables). Clients can preview or download instantly."
                },
                {
                  icon: ChatBubbleLeftRightIcon,
                  title: "Weekly Summary Emails",
                  description: "Auto-sends clients a digest of updates. Optional check-in reminders for freelancers."
                },
                {
                  icon: EyeIcon,
                  title: "Activity Tracking",
                  description: "See when a client viewed the board."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <feature.icon className="w-14 h-14 text-purple-600 mb-5" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-sm font-semibold text-purple-600 mb-3 block">How It Works</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Efficient, Professional</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                That's how we keep your client relationships strong and productive.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-5">For Freelancers</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Create a branded portal for each client</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Share updates and files in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Reduce communication overhead</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-5">For Clients</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Access project updates anytime</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>View shared files securely</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRightIcon className="w-6 h-6 mr-3 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Stay informed without constant follow-ups</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <section id="testimonials" className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-purple-600 mb-2 block">Testimonials</span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of freelancers and small studios who trust PulseBoard for their client communications.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "PulseBoard has transformed how I communicate with clients. No more scattered emails!",
                  author: "Sarah Johnson",
                  role: "Freelance Designer"
                },
                {
                  quote: "Our clients love the transparency and we love the reduced communication overhead.",
                  author: "Mike Chen",
                  role: "Studio Owner"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md"
                >
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section id="pricing" className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-purple-600 text-white p-16 rounded-2xl shadow-lg"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Client Communication?</h2>
              <p className="text-purple-100 mb-10 max-w-xl mx-auto">
              A super simple client update portal for freelancers to share project progress, files, and notes.
              </p>
              <div className="max-w-md mx-auto">
                <WaitlistForm />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
