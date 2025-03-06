'use client';
import Image from 'next/image';
import Button from '../common/Button';

export default function Hero() {
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-gray-900">Unlock the Wealth</span>
              <br />
              <span className="text-gray-900">Secrets of India's</span>
              <br />
              <span className="text-green-600">Top Crorepatis</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform Your Financial Future with India's Leading
              <br />
              Finance Educator: <span className="font-semibold">Neeraj Arora</span>
            </p>
            <Button 
              variant="primary"
              size="lg"
              onClick={() => {}}
              className="px-8 py-4 text-lg"
            >
              Join Now
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] w-full bg-gray-200 rounded-lg">
              {/* Placeholder for mentor image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 