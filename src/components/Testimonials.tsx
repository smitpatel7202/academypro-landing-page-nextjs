'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  featured?: boolean;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'Tech Corp',
      avatar: 'SJ',
      rating: 5,
      content: 'This course completely transformed my career! The hands-on projects and expert guidance helped me land my dream job at a leading tech company. I went from zero coding experience to a confident developer in just 6 months.',
      featured: true
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Full-Stack Engineer',
      company: 'StartupXYZ',
      avatar: 'MC',
      rating: 5,
      content: 'The curriculum is comprehensive and up-to-date with industry standards. The instructors are knowledgeable and always available to help. I especially loved the real-world projects that built my portfolio.',
      featured: false
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'UX Developer',
      company: 'Design Studio',
      avatar: 'ER',
      rating: 5,
      content: 'Best investment I made in my career! The community support is amazing, and the job placement assistance really helped me stand out in interviews. Highly recommend to anyone serious about web development.',
      featured: false
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'React Developer',
      company: 'FinTech Inc',
      avatar: 'DK',
      rating: 5,
      content: 'The course structure is perfect for beginners and experienced developers alike. The React module was particularly well-taught, and I now feel confident building complex applications.',
      featured: false
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Web Developer',
      company: 'E-commerce Plus',
      avatar: 'LT',
      rating: 5,
      content: 'I\'ve tried other online courses, but this one stands out. The practical approach and real-world projects made all the difference. I was able to start freelancing while still completing the course!',
      featured: false
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [[direction, page], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
    setPage([newDirection, page + newDirection]);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
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
            Student Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our graduates who have transformed their careers
          </p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <Card className={`${
                  testimonials[currentIndex].featured 
                    ? 'border-2 border-indigo-500 shadow-xl' 
                    : 'shadow-lg'
                }`}>
                  <CardContent className="p-8">
                    {testimonials[currentIndex].featured && (
                      <div className="flex justify-center mb-4">
                        <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                          Featured Review
                        </span>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-center mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>

                    <div className="flex justify-center mb-6">
                      <Quote className="w-12 h-12 text-indigo-200" />
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
                      "{testimonials[currentIndex].content}"
                    </p>

                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].avatar}
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-gray-900">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-gray-600">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="text-sm text-gray-500">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${
                  currentIndex === index
                    ? 'bg-indigo-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Grid of Additional Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials
            .filter((_, index) => index !== currentIndex)
            .slice(0, 6)
            .map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="cursor-pointer"
                onClick={() => goToTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Job Placement Rate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
