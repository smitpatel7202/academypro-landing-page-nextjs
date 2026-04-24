'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  BookOpen, 
  Users,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const Instructor = () => {
  const instructor = {
    name: 'Dr. Alexander Mitchell',
    title: 'Senior Web Development Instructor',
    bio: 'With over 15 years of experience in web development and software engineering, Dr. Mitchell has worked with Fortune 500 companies and innovative startups. He specializes in modern JavaScript frameworks, cloud architecture, and building scalable web applications. Passionate about education, he has helped over 10,000 students launch successful careers in tech.',
    expertise: [
      'Full-Stack Development',
      'React & Next.js',
      'Node.js & Express',
      'Cloud Architecture',
      'DevOps & CI/CD',
      'System Design'
    ],
    achievements: [
      '15+ Years Industry Experience',
      'Former Senior Engineer at Google',
      'Published Author of 3 Tech Books',
      'Speaker at 20+ International Conferences',
      'M.S. in Computer Science from MIT'
    ],
    stats: {
      students: '10,000+',
      courses: '12',
      rating: '4.9',
      years: '15+'
    }
  };

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
    <section className="py-20 bg-gray-50">
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
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your instructor brings real-world experience and proven teaching methods
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Instructor Image and Basic Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Placeholder for instructor image */}
                  <div className="aspect-square bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <GraduationCap className="w-16 h-16 text-white" />
                      </div>
                      <div className="text-2xl font-bold">{instructor.name}</div>
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
                      aria-label="LinkedIn profile"
                    >
                      <Users className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
                      aria-label="Twitter profile"
                    >
                      <BookOpen className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
                      aria-label="GitHub profile"
                    >
                      <Award className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Students', value: instructor.stats.students },
                { icon: BookOpen, label: 'Courses', value: instructor.stats.courses },
                { icon: Award, label: 'Rating', value: instructor.stats.rating },
                { icon: Briefcase, label: 'Experience', value: instructor.stats.years }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Detailed Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {instructor.name}
              </h3>
              <p className="text-lg text-indigo-600 font-medium mb-4">
                {instructor.title}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {instructor.bio}
              </p>
            </div>

            {/* Expertise */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                  Areas of Expertise
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {instructor.expertise.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-indigo-600" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {instructor.achievements.map((achievement, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 text-center"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Ready to Learn from the Best?
              </h4>
              <p className="text-gray-600 mb-4">
                Join thousands of successful students who have transformed their careers
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Start Learning Today
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Instructor;
