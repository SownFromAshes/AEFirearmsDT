import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Flag } from 'lucide-react';
// Removed: import { supabase } from '../supabaseClient'; // Import the Supabase client

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false); // New state for disclaimer
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | React.TextareaHTMLAttributes<HTMLTextAreaElement> | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDisclaimerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisclaimerAccepted(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    if (!disclaimerAccepted) {
      alert('Please accept the legal disclaimer to send your message.');
      setIsSubmitting(false);
      return;
    }

    const web3formsData = {
      access_key: "36d3f3c6-42f9-4e5d-9ae4-654a538d578a", // Your Web3Forms access key
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(web3formsData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmissionStatus('success');
        alert('Message sent successfully! Dennis will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setDisclaimerAccepted(false);
      } else {
        setSubmissionStatus('error');
        console.error('Web3Forms submission error:', result);
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Network or Web3Forms submission error:', error);
      alert('There was an error sending your message. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: "url('/dtamerica.webp')" }}
    >
      {/* Overlay for text readability - Reduced opacity to make background image more visible */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Flag className="h-10 w-10 text-red-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white font-serif">Contact Dennis</h2>
            <Flag className="h-10 w-10 text-blue-600" />
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss your firearms project? Dennis is here to provide personal, professional service 
            with the attention to detail you deserve. Every inquiry receives a prompt, honest response.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                <Phone className="h-8 w-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Phone</h3>
                  <p className="text-2xl font-semibold text-slate-700">(816) 800-2939</p>
                  <p className="text-slate-600">Monday - Friday, 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                <Mail className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Email</h3>
                  <p className="text-xl font-semibold text-slate-700">dnnthomps4@aol.com</p>
                  <p className="text-slate-600">Response within 24 hours guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                <MapPin className="h-8 w-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Workshop Location</h3>
                  <p className="text-slate-700 text-lg">10890 NE 264Th Street<br />Lathrop, Missouri 64465</p>
                  <p className="text-slate-600">By appointment only</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-lg border-2 border-slate-200">
                <Clock className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Business Hours</h3>
                  <div className="text-slate-700">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-red-600 to-blue-600 text-white p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 font-serif">Why Choose Personal Service?</h3>
              <ul className="space-y-2 text-lg">
                <li>• Direct communication with Dennis Thompson</li>
                <li>• Honest estimates and transparent pricing</li>
                <li>• Personal attention to every project</li>
                <li>• Nationwide shipping available</li>
                <li>• Full insurance and compliance guaranteed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-slate-200">
            <h3 className="text-3xl font-bold text-slate-800 mb-6 font-serif text-center">Start Your Project</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none text-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-build">Custom Firearm Build</option>
                    <option value="repair">Repair & Restoration</option>
                    <option value="ffl-transfer">FFL Transfer</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-red-500 focus:outline-none text-lg resize-none"
                  placeholder="Please describe your project, timeline, and any specific requirements..."
                />
              </div>

              {/* Legal Disclaimer */}
              <div className="flex items-start space-x-3 mt-4">
                <input
                  type="checkbox"
                  id="disclaimer"
                  name="disclaimer"
                  checked={disclaimerAccepted}
                  onChange={handleDisclaimerChange}
                  className="mt-1 h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="disclaimer" className="text-sm text-slate-600 cursor-pointer">
                  All inquiries and arrangements for firearm sales or services will be handled in compliance with federal and state law. No firearms are sold directly through this website.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center space-x-2"
                disabled={isSubmitting}
              >
                <Send className="h-6 w-6" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message to Dennis'}</span>
              </button>
            </form>

            {submissionStatus === 'success' && (
              <p className="text-green-600 text-center mt-4 font-semibold">Message sent successfully!</p>
            )}
            {submissionStatus === 'error' && (
              <p className="text-red-600 text-center mt-4 font-semibold">Error sending message. Please try again.</p>
            )}

            <p className="text-sm text-slate-600 text-center mt-4">
              * All inquiries receive a personal response within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
