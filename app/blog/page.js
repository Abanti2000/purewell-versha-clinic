import React from 'react';
import Image from 'next/image';
import { blogData } from '../data/blogData'; // Adjust path based on your folder structure

const BlogCard = ({ blog }) => {
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

const BlogPage = () => {
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
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;