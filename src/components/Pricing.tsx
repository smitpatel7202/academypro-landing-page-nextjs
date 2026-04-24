'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: string;
}

const Pricing = () => {
  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      price: '$99',
      period: '/month',
      description: 'Perfect for getting started with web development',
      features: [
        'Access to all video lessons',
        'Downloadable resources',
        'Community forum access',
        'Certificate of completion',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      description: 'Most popular choice for serious learners',
      features: [
        'Everything in Basic',
        'Live weekly Q&A sessions',
        '1-on-1 mentorship sessions',
        'Personalized feedback',
        'Priority support',
        'Advanced project portfolio',
        'Interview preparation',
        'Job placement assistance'
      ],
      highlighted: true,
      badge: 'Most Popular',
      cta: 'Enroll Now'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-white">
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
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select the plan that best fits your learning goals and budget
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.2 }}
              className={`${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              <Card className={`h-full relative overflow-hidden ${
                plan.highlighted 
                  ? 'border-2 border-indigo-500 shadow-2xl' 
                  : 'shadow-lg hover:shadow-xl'
              }`}>
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium px-4 py-1 rounded-bl-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                <CardContent className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center space-x-1 mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="flex-shrink-0">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                        </div>
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                        : ''
                    }`}
                    size="lg"
                    variant={plan.highlighted ? 'primary' : 'outline'}
                  >
                    {plan.cta}
                  </Button>

                  {/* Additional Info for Pro Plan */}
                  {plan.highlighted && (
                    <div className="mt-6 text-center">
                      <div className="flex items-center justify-center space-x-2 text-sm text-indigo-600">
                        <Zap className="w-4 h-4" />
                        <span className="font-medium">
                          30-day money-back guarantee
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out our FAQ section for answers to common questions about pricing, payment options, and more.
            </p>
            <motion.a
              href="#faq"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200"
            >
              View FAQ
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">14-day</div>
            <div className="text-gray-600">Free Trial</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Cancel anytime</div>
            <div className="text-gray-600">No commitments</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Secure payment</div>
            <div className="text-gray-600">SSL encrypted</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
