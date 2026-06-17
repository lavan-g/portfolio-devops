import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle,
} from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const ownerNotificationSubject = `${formData.name} has reached out to you from your contact form`;
      const ownerNotificationText = [
        `${formData.name} has reached out to you from your contact form.`,
        '',
        `Client Name: ${formData.name}`,
        `Client Email: ${formData.email}`,
        `Subject: ${formData.subject}`,
        '',
        'Message:',
        formData.message,
      ].join('\n');

      const response = await fetch('https://eo82k4zs4dqpfy0.m.pipedream.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          ownerNotification: {
            to: CONTACT.email,
            subject: ownerNotificationSubject,
            text: ownerNotificationText,
          },
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Show popup confirmation
        alert('Message sent successfully!');

        // Reset form and hide success state after a short delay
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: CONTACT.phoneNo,
      href: `tel:${CONTACT.phoneNo}`,
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: CONTACT.address,
      href: '#',
      color: 'text-purple-500',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Twitter',
      url: CONTACT.social.twitter,
      icon: Twitter,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Terminal Header */}
      <TerminalHeader
        command="ping contact.server"
        description="Establishing connection to communication endpoint"
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
              <div className="rounded-xl border border-neutral-700 bg-bg-surface p-8 shadow-card">
                <div className="mb-8">
                  <h2 className="mb-4 font-mono text-2xl font-bold text-primary-500">
                    Send Message
                  </h2>
                  <div className="font-mono text-sm text-accent-500">
                    <span>$</span>
                    <span className="ml-2 text-primary-500">
                      cat message_template.txt
                    </span>
                  </div>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center"
                  >
                    <CheckCircle
                      size={64}
                      className="mx-auto mb-4 text-primary-500"
                    />
                    <h3 className="mb-2 font-mono text-xl font-semibold text-primary-500">
                      Message Sent Successfully!
                    </h3>
                    <Typewriter
                      text="> Message delivered. Expect response within 24 hours."
                      delay={50}
                      className="text-sm text-neutral-400"
                    />
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <label className="mb-2 block font-mono text-sm text-accent-500">
                        <span className="mr-2 text-primary-500">&gt;</span>
                        name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full border bg-bg-elevated ${
                          errors.name ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 font-mono text-neutral-200 placeholder-neutral-600 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="mb-2 block font-mono text-sm text-accent-500">
                        <span className="mr-2 text-primary-500">&gt;</span>
                        email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border bg-bg-elevated ${
                          errors.email ? 'border-red-500' : 'border-neutral-700'
                        } rounded-md px-4 py-3 font-mono text-neutral-200 placeholder-neutral-600 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label className="mb-2 block font-mono text-sm text-accent-500">
                        <span className="mr-2 text-primary-500">&gt;</span>
                        subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full border bg-bg-elevated ${
                          errors.subject
                            ? 'border-red-500'
                            : 'border-neutral-700'
                        } rounded-md px-4 py-3 font-mono text-neutral-200 placeholder-neutral-600 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="mb-2 block font-mono text-sm text-accent-500">
                        <span className="mr-2 text-primary-500">&gt;</span>
                        message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full border bg-bg-elevated ${
                          errors.message
                            ? 'border-red-500'
                            : 'border-neutral-700'
                        } resize-none rounded-md px-4 py-3 font-mono text-neutral-200 placeholder-neutral-600 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500`}
                        placeholder="Tell me about your project or inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-500">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full rounded-lg px-6 py-4 font-mono text-lg font-bold transition-all duration-200 ${
                        isSubmitting
                          ? 'cursor-not-allowed bg-neutral-700 text-neutral-400'
                          : 'bg-primary-500 text-bg-surface shadow-glow hover:bg-primary-700 hover:shadow-card-hover'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-400 border-t-transparent" />
                          <span>SENDING...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center space-x-2">
                          <Send size={20} />
                          <span>[ SEND MESSAGE ]</span>
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-5"
            >
              {/* Contact Methods */}
              <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
                <h3 className="mb-6 font-mono text-lg font-semibold text-primary-500">
                  Contact Methods
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div
                        key={method.label}
                        className="flex items-center space-x-4"
                      >
                        <div
                          className={`rounded-lg bg-bg-surface p-3 ${method.color}`}
                        >
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-neutral-200">
                            {method.label}
                          </div>
                          <div className="text-sm text-neutral-400">
                            {method.value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Availability Status */}
              <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
                <h3 className="mb-6 font-mono text-lg font-semibold text-primary-500">
                  Availability Status
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-3 w-3 animate-pulse rounded-full bg-primary-500" />
                    <span className="font-mono text-sm text-neutral-200">
                      Available for new projects
                    </span>
                  </div>
                  <div className="text-sm text-neutral-400">
                    <div className="mb-2">Response time: Within 24 hours</div>
                    <div>Time zone: IST (UTC+5:30)</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-xl border border-neutral-700 bg-bg-elevated p-6">
                <h3 className="mb-6 font-mono text-lg font-semibold text-primary-500">
                  Connect With Me
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col items-center rounded-lg bg-bg-surface p-4 text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card`}
                      >
                        <IconComponent size={24} className="mb-2" />
                        <span className="font-mono text-xs">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal-style footer message */}
      <section className="bg-bg-elevated py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl border border-neutral-700 bg-bg-surface p-8 font-mono"
          >
            <div className="mb-4 text-accent-500">
              $ echo "Thank you for visiting!"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>
                I'm always interested in discussing new opportunities and
                challenging projects.
              </p>
              <p className="text-primary-500">
                Let's build something amazing together.
              </p>
            </div>
            <div className="mt-6 border-t border-neutral-700 pt-4 text-sm text-neutral-400">
              <div className="flex items-center justify-center space-x-2">
                <ExternalLink size={16} />
                <span>Connection established. Awaiting your message...</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
