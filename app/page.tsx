"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Shield, Lock, CheckCircle, Mail, Phone, Linkedin, Github, Award, Send } from 'lucide-react';


export default function MasadaSystems() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState<false | 'sending' | 'success' | 'error'>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormSubmitted('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setFormSubmitted('error');
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormSubmitted('error');
      setTimeout(() => setFormSubmitted(false), 5000);
    }
  };

  const pricingTiers = [
    {
      name: "Basic Security Scan",
      price: "$200",
      description: "Essential vulnerability assessment for small businesses",
      serviceValue: "basic",
      features: [
        "Free 30-minute consultation",
        "Nessus vulnerability scan",
        "Network security review",
        "Executive summary report",
        "Prioritized findings list",
        "Basic remediation guidance",
        "1-week email support"
      ]
    },
    {
      name: "Security Assessment",
      price: "$500",
      description: "Comprehensive security evaluation and architecture review",
      serviceValue: "assessment",
      features: [
        "Free 30-minute consultation",
        "Full vulnerability assessment",
        "Cloud/network architecture review",
        "OWASP Top 10 compliance check",
        "Detailed remediation roadmap",
        "Security best practices report",
        "90-minute findings review session",
        "30-day email & phone support",
        "One follow-up scan after remediation"
      ],
      popular: true
    },
    {
      name: "Comprehensive Audit",
      price: "$1,000",
      description: "Complete security audit with compliance framework review",
      serviceValue: "audit",
      features: [
        "Free 30-minute consultation",
        "Full security assessment",
        "Compliance gap analysis (NIST/OWASP)",
        "Application security code review",
        "Custom security policy templates",
        "Executive presentation deck",
        "Detailed remediation plan with timeline",
        "2-hour findings review & strategy session",
        "90-day phone & email support",
        "Two follow-up scans (30 & 60 days)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div>
                <h1 className="text-2xl font-bold">Masada Systems</h1>
                <p className="text-sm text-slate-400">Cybersecurity Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
                <Lock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400 font-medium">Trusted Security Partner</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Professional Security Assessments for Your Business
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Expert vulnerability assessments and compliance reviews. 
                Identify security gaps and get actionable remediation guidance.
              </p>
              <div className="flex flex-col gap-3 text-sm text-slate-400 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>CompTIA Security+ Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>Cloud Security Alliance CCSK & CCZT</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span>15 Years Government and Military Experience</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const pricingSection = document.getElementById('pricing');
                  pricingSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-cyan-500/25"
              >
                View Pricing Plans
              </button>
            </div>

            <div className="relative">
              {/* Decorative background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
              
              {/* Hero image placeholder */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
                <div className="aspect-square bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated security shield illustration */}
                  <div className="relative z-10">
                    <Shield className="w-48 h-48 text-cyan-400/80" strokeWidth={1.5} />
                  </div>
                  
                  {/* Decorative grid overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                      {[...Array(64)].map((_, i) => (
                        <div key={i} className="border border-cyan-400/20"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Cloud Security Alliance Certified Expert
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Security Assessment Services</h3>
            <p className="text-slate-400 text-lg">Professional assessments tailored to your security needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-slate-900 rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
                  tier.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-slate-400 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">About Masada Systems</h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Founded and led by Sam Villa-Smith, Masada Systems brings enterprise-level 
                cybersecurity expertise to businesses in the Texas Panhandle and beyond. With 
                15 years of combined government and military experience, including supporting 
                critical U.S. Air Force systems, we provide professional security 
                assessments you can trust.
              </p>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Our approach combines hands-on technical expertise with deep knowledge 
                of compliance frameworks including NIST, OWASP, and MITRE ATLAS. We use 
                industry-standard tools like Nessus for vulnerability scanning and provide 
                clear, actionable reports that help you understand and fix security issues.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 rounded-lg p-4">
                  <Award className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white">15</div>
                  <div className="text-sm text-slate-400">Years Government and Military Experience</div>
                </div>
                <div className="bg-slate-800 rounded-lg p-4">
                  <Shield className="w-8 h-8 text-cyan-400 mb-2" />
                  <div className="text-2xl font-bold text-white">10</div>
                  <div className="text-sm text-slate-400">Years in Business</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="flex items-center space-x-6 mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-cyan-500">
                  <Image
                    src="/profile-photo.jpg"
                    alt="Sam Villa-Smith"
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Sam Villa-Smith, MBA</h4>
                  <p className="text-cyan-400 font-medium">Founder & Security Solutions Architect</p>
                </div>
              </div>
              
              <div className="space-y-3 text-slate-300">
                <p className="text-sm">
                  <strong className="text-white">Education:</strong> PhD Candidate in IT (ABD), MBA, 
                  BS in Business Administration & Criminal Justice
                </p>
                <p className="text-sm">
                  <strong className="text-white">Certifications:</strong> CompTIA Security+, 
                  CSA CCSK, CSA CCZT
                </p>
                <p className="text-sm">
                  <strong className="text-white">Background:</strong> Former USAF contractor (Oasis/Astrion), 
                  US Army Veteran (Honorable Discharge)
                </p>
                <p className="text-sm">
                  <strong className="text-white">Specializations:</strong> Application Security, Cloud Security, 
                  SIEM Operations, AI/ML Security, DevSecOps
                </p>
              </div>

              <div className="flex space-x-4 mt-6 pt-6 border-t border-slate-700">
                <a 
                  href="https://www.linkedin.com/in/samuel-villa-smith-mba-phd-candidate-a803a0109/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/samvillasmith" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Schedule Your Assessment</h3>
            <p className="text-slate-400 text-lg">
              Ready to improve your security posture? Contact us to discuss your needs.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a href="mailto:sam@masada.systems" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      sam@masada.systems
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <a href="tel:+18064402215" className="text-slate-300 hover:text-cyan-400 transition-colors">
                      (806) 440-2215
                    </a>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="text-lg font-bold mb-4">Assessment Process</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Free 30-minute consultation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Vulnerability scanning & analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Detailed report with findings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300">Remediation guidance & support</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Request a Consultation</h4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-300 mb-1">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="basic">Basic Security Scan ($200)</option>
                      <option value="assessment">Security Assessment ($500)</option>
                      <option value="audit">Comprehensive Audit ($1,000)</option>
                      <option value="custom">Custom Requirements</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your security needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitted === 'sending'}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    <span>{formSubmitted === 'sending' ? 'Submitting...' : 'Request Consultation'}</span>
                  </button>
                </form>

                {formSubmitted === 'success' && (
                  <div className="mt-4 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg text-sm">
                    <p className="font-semibold">Thank you for your inquiry.</p>
                    <p>We will respond within 24 business hours.</p>
                  </div>
                )}

                {formSubmitted === 'error' && (
                  <div className="mt-4 bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg text-sm">
                    <p className="font-semibold">Unable to submit request.</p>
                    <p>Please contact us directly at sam@masada.systems</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-cyan-400" />
            <span className="font-semibold text-white">Masada Systems</span>
          </div>
          <p className="text-sm">
            © 2025 Masada Systems. Professional Cybersecurity Assessments.
          </p>
          <p className="text-xs mt-2">
            CompTIA Security+ • CSA CCSK • CSA CCZT Certified
          </p>
        </div>
      </footer>

      {/* Selected Plan Notification */}
      {selectedPlan && (
        <div className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-4 rounded-lg shadow-2xl z-50">
          <p className="font-semibold">{selectedPlan} selected</p>
          <p className="text-sm">Complete the form below to get started</p>
          <button 
            onClick={() => setSelectedPlan(null)}
            className="absolute top-2 right-2 text-white hover:text-slate-200 text-xl leading-none"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}