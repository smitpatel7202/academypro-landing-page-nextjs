'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Shield, CreditCard, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'payment' | 'course' | 'support';
  icon: React.ComponentType<{ className?: string }>;
}

const FAQ = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'Do I get a certificate upon completion?',
      answer: 'Yes! Upon successful completion of all modules and projects, you\'ll receive an industry-recognized certificate that you can add to your LinkedIn profile and resume. Our certificates are valued by employers and can help you stand out in the job market.',
      category: 'course',
      icon: Award
    },
    {
      id: 2,
      question: 'Is there a refund policy?',
      answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the course within the first 30 days, you can request a full refund, no questions asked. We\'re confident in the quality of our education and want you to learn risk-free.',
      category: 'payment',
      icon: Shield
    },
    {
      id: 3,
      question: 'How long do I have access to the course?',
      answer: 'You get lifetime access to all course materials, including video lessons, downloadable resources, and future updates. This means you can learn at your own pace and revisit the content whenever you need a refresher.',
      category: 'general',
      icon: Clock
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, debit cards, PayPal, and various digital payment methods. All payments are processed securely through our encrypted payment gateway. We also offer installment plans for the Pro membership.',
      category: 'payment',
      icon: CreditCard
    },
    {
      id: 5,
      question: 'Do I need prior coding experience?',
      answer: 'No prior experience is required! Our course is designed for beginners and starts with the fundamentals. We\'ll guide you step-by-step from basic concepts to advanced topics. However, if you do have some experience, you can move through the earlier modules more quickly.',
      category: 'course',
      icon: HelpCircle
    },
    {
      id: 6,
      question: 'How much time should I dedicate per week?',
      answer: 'We recommend dedicating 10-15 hours per week for optimal learning. However, the course is self-paced, so you can adjust your schedule based on your availability. Many students successfully complete the course while working full-time.',
      category: 'general',
      icon: Clock
    },
    {
      id: 7,
      question: 'Is there instructor support available?',
      answer: 'Yes! Pro members get access to weekly live Q&A sessions, 1-on-1 mentorship, and priority email support. Basic members have access to our community forum where you can ask questions and get help from fellow students.',
      category: 'support',
      icon: MessageCircle
    },
    {
      id: 8,
      question: 'Can I switch between plans?',
      answer: 'Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you\'ll be charged the prorated difference. When downgrading, the change will take effect at the next billing cycle.',
      category: 'payment',
      icon: CreditCard
    },
    {
      id: 9,
      question: 'Are there any prerequisites for the course?',
      answer: 'The only prerequisites are a computer with internet access and a willingness to learn. We\'ll guide you through setting up all necessary tools and software. No specific hardware requirements beyond a standard modern computer.',
      category: 'course',
      icon: HelpCircle
    },
    {
      id: 10,
      question: 'How large is the student community?',
      answer: 'Our community includes over 10,000 students from around the world. You\'ll have access to our private Discord community, forums, and networking events. Many students form study groups and continue collaborating even after completing the course.',
      category: 'support',
      icon: Users
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'general', label: 'General', icon: Clock },
    { id: 'course', label: 'Course', icon: HelpCircle },
    { id: 'payment', label: 'Payment', icon: CreditCard },
    { id: 'support', label: 'Support', icon: MessageCircle }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  const toggleItem = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our course.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              custom={index}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                    aria-expanded={activeItem === item.id}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-indigo-600" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.question}
                          </h3>
                          <span className="text-sm text-gray-500 capitalize">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: activeItem === item.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {activeItem === item.id && (
                      <motion.div
                        id={`faq-answer-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-20">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you with any questions about the course, pricing, or enrollment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 border border-indigo-200"
                >
                  Live Chat
                </motion.button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
