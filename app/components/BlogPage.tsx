import React from 'react';
import Image from 'next/image';
import { blogData } from '../../data/blogData';

interface BlogCardProps {
  blog: {
    id: number;
    title: string;
    category: string;
    description: string;
    author: string;
    date: string;
    image: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">By {blog.author}</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Latest Blog Posts
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest insights on healthcare, home care services, and medical expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog: any) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-600 p-2 rounded-xl mr-3">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold">PureWell Health Clinic</h3>
                  <p className="text-blue-400 text-sm">Your Health, Our Priority</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Providing compassionate, comprehensive healthcare services for you and your family since 2008. Your trusted partner in health and wellness.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">⭐</span>
                  <span>4.9/5 Patient Rating</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-1">🔒</span>
                  <span>HIPAA Compliant</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Our Doctors</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Patient Portal</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Health Resources</a></li>
              </ul>
            </div>

            {/* Emergency Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Emergency Contact</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-300">24/7 Emergency Line</p>
                  <a href="tel:555-911-4357" className="text-red-400 font-bold text-lg hover:text-red-300 transition-colors">
                    (555) 911-HELP
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-400">For life-threatening emergencies, call 108</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Main Office Number</p>
                  <a href="tel:555-123-2273" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                    +91 96503 16607
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-sm text-gray-400">
             © January 2024 | Book Lynk Services. All rights reserved. | 624, tower-1 Assotech business cresterra Sector 135, Noida 201301| 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">Terms of Service</a> | 
              <a href="#" className="hover:text-blue-400 transition-colors ml-1">HIPAA Notice</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;