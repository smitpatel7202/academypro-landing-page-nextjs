'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, Clock, PlayCircle, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface Lesson {
  title: string;
  duration: string;
  type: 'video' | 'reading' | 'exercise';
}

interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

const Curriculum = () => {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: 'Module 1: Web Development Fundamentals',
      description: 'Master the core concepts of HTML, CSS, and JavaScript',
      duration: '4 weeks',
      lessons: [
        { title: 'Introduction to Web Development', duration: '45 min', type: 'video' },
        { title: 'HTML5 Semantic Elements', duration: '60 min', type: 'video' },
        { title: 'CSS3 Layouts and Flexbox', duration: '90 min', type: 'video' },
        { title: 'JavaScript Basics', duration: '75 min', type: 'video' },
        { title: 'DOM Manipulation', duration: '60 min', type: 'exercise' },
        { title: 'Responsive Design Principles', duration: '45 min', type: 'reading' },
      ]
    },
    {
      id: 2,
      title: 'Module 2: Advanced JavaScript & React',
      description: 'Deep dive into modern JavaScript and React ecosystem',
      duration: '6 weeks',
      lessons: [
        { title: 'ES6+ Features', duration: '90 min', type: 'video' },
        { title: 'Async JavaScript & Promises', duration: '75 min', type: 'video' },
        { title: 'React Fundamentals', duration: '120 min', type: 'video' },
        { title: 'Hooks & State Management', duration: '90 min', type: 'video' },
        { title: 'Building Your First React App', duration: '180 min', type: 'exercise' },
        { title: 'React Best Practices', duration: '60 min', type: 'reading' },
      ]
    },
    {
      id: 3,
      title: 'Module 3: Backend Development',
      description: 'Learn server-side programming with Node.js and databases',
      duration: '5 weeks',
      lessons: [
        { title: 'Node.js Fundamentals', duration: '90 min', type: 'video' },
        { title: 'Express.js Framework', duration: '75 min', type: 'video' },
        { title: 'RESTful APIs', duration: '120 min', type: 'video' },
        { title: 'Database Design with MongoDB', duration: '90 min', type: 'video' },
        { title: 'Authentication & Security', duration: '75 min', type: 'exercise' },
        { title: 'Deployment Strategies', duration: '60 min', type: 'reading' },
      ]
    },
    {
      id: 4,
      title: 'Module 4: Full-Stack Project',
      description: 'Build a complete full-stack application from scratch',
      duration: '4 weeks',
      lessons: [
        { title: 'Project Planning & Architecture', duration: '60 min', type: 'video' },
        { title: 'Frontend Development', duration: '180 min', type: 'exercise' },
        { title: 'Backend API Development', duration: '150 min', type: 'exercise' },
        { title: 'Integration & Testing', duration: '120 min', type: 'exercise' },
        { title: 'Performance Optimization', duration: '90 min', type: 'video' },
        { title: 'Project Deployment', duration: '75 min', type: 'exercise' },
      ]
    },
    {
      id: 5,
      title: 'Module 5: Career Development',
      description: 'Prepare for your career as a professional developer',
      duration: '2 weeks',
      lessons: [
        { title: 'Building Your Portfolio', duration: '60 min', type: 'video' },
        { title: 'Resume Writing & LinkedIn', duration: '45 min', type: 'video' },
        { title: 'Technical Interview Preparation', duration: '90 min', type: 'video' },
        { title: 'Mock Interviews', duration: '120 min', type: 'exercise' },
        { title: 'Job Search Strategies', duration: '60 min', type: 'reading' },
      ]
    }
  ];

  const getTypeIcon = (type: Lesson['type']) => {
    switch (type) {
      case 'video':
        return <PlayCircle className="w-4 h-4 text-indigo-600" />;
      case 'reading':
        return <FileText className="w-4 h-4 text-green-600" />;
      case 'exercise':
        return <Clock className="w-4 h-4 text-orange-600" />;
    }
  };

  const toggleModule = (moduleId: number) => {
    setActiveModule(activeModule === moduleId ? null : moduleId);
  };

  return (
    <section id="curriculum" className="py-20 bg-gray-50">
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
            Comprehensive Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master web development through our structured, project-based learning path
          </p>
        </motion.div>

        {/* Modules Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  {/* Module Header */}
                  <button
                    onClick={() => toggleModule(module.id)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                    aria-expanded={activeModule === module.id}
                    aria-controls={`module-${module.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                            {module.duration}
                          </span>
                          <motion.div
                            animate={{ rotate: activeModule === module.id ? 90 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="w-5 h-5 text-gray-400" />
                          </motion.div>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {module.title}
                        </h3>
                        <p className="text-gray-600">
                          {module.description}
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Module Content */}
                  <AnimatePresence>
                    {activeModule === module.id && (
                      <motion.div
                        id={`module-${module.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-200 p-6 bg-gray-50">
                          <h4 className="font-medium text-gray-900 mb-4">
                            Lessons ({module.lessons.length})
                          </h4>
                          <div className="space-y-3">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <motion.div
                                key={lessonIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: lessonIndex * 0.05 }}
                                className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-300 transition-colors duration-200"
                              >
                                <div className="flex items-center space-x-3">
                                  {getTypeIcon(lesson.type)}
                                  <span className="text-gray-900 font-medium">
                                    {lesson.title}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-500">
                                  {lesson.duration}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">21+</div>
            <div className="text-gray-600">Weeks of Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">30+</div>
            <div className="text-gray-600">Hands-on Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-indigo-600 mb-2">100+</div>
            <div className="text-gray-600">Video Lessons</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
