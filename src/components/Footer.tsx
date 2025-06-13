import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigation = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <footer className="bg-white text-gray-600 py-12 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4">UpdateBoard</h3>
          <p className="text-gray-500 text-sm">
          A super simple client update portal for freelancers to share project progress, files, and notes.   </p>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
          <p className="text-gray-500 text-sm">
            Email: sakharesuraj15@gmail.com
          </p>
          <p className="text-gray-500 text-sm">
            Address: Pune,India
          </p>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} UpdateBoard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;