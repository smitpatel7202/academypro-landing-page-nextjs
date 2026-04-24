'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Zap, 
  Users, 
  Award, 
  BookOpen, 
  Target,
  Clock,
  Globe
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const Benefits = () => {
  const features = [
    {
      icon: Code,
      title: 'Hands-on Coding',
      description: 'Build real projects from day one with practical, industry-relevant coding exercises.'
    },
    {
      icon: Zap,
      title: 'Fast-track Learning',
      description: 'Accelerated learning path designed to get you job-ready in record time.'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join 10,000+ students in our active community for collaboration and networking.'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Earn a recognized certificate that validates your skills to employers.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Curriculum',
      description: 'Cover everything from basics to advanced concepts with structured learning.'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Get personalized career coaching and interview preparation from experts.'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Learn at your own pace with lifetime access to all course materials.'
    },
    {
      icon: Globe,
      title: 'Global Recognition',
      description: 'Join a worldwide network of successful alumni working at top companies.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section id="features" className="py-20 bg-white">
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
            Why Choose Our Course?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our program the perfect choice for aspiring developers
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful graduates who have landed their dream jobs
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
