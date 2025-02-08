import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await emailjs.send(
        'service_qee756j',
        'template_c6ety0c',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone
        },
        'rZdSpOcs2R_pzt02M'
      );

      setMessage('Děkujeme za vaši zprávu! Brzy vás budeme kontaktovat.');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error: unknown) {
      console.error('Error sending email:', error);
      setMessage('Omlouváme se, došlo k chybě. Prosím zkuste to znovu později.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">Kontaktujte Nás</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Naše Adresa</h3>
                  <p className="text-gray-600">Dle tel. domluvy</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Otevírací Doba</h3>
                  <p className="text-gray-600">Dle dohody</p>

                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telefon</h3>
                  <a href="tel:+420123456789" className="text-blue-600 hover:text-blue-800">
                    +420 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@autoskolapraha.cz" className="text-blue-600 hover:text-blue-800">
                    zkouskam1@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.2794137147866!2d14.741829177020875!3d49.968618371504306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b89e0e1857615%3A0x1c69beaed0a3ff1a!2sSvojetice%20456%2C%202  51%2062%20Svojetice!5e0!3m2!1scs!2scz!4v1738659529038!5m2!1scs!2scz"
                width="600" height="450"  loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Napište Nám</h3>
          {message && (
              <div
                  className={`mb-6 p-4 rounded ${message.includes('Děkujeme') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Jméno a příjmení
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                'Odesílání...'
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Odeslat Zprávu
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}