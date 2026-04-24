'use client';

import React from 'react';
import { Play, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Web Development
              <span className="block text-indigo-600">Build Your Future</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your career with our comprehensive online course. 
              Learn modern web development from industry experts and build 
              real-world projects that showcase your skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning Now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto group">
                <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-indigo-600" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Industry Certified</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video Mockup */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-orange-500 rounded-2xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-indigo-50 to-orange-50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Course Preview
                    </h3>
                    <p className="text-gray-600">
                      See what you'll learn in this comprehensive program
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Live Class</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 hidden sm:block">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
