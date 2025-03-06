'use client';
import Button from '../common/Button';

interface CourseCard {
  title: string;
  price: number;
  originalPrice: number;
  link: string;
}

const courses: CourseCard[] = [
  {
    title: "Investors Notes & Wisdom By Neeraj Arora",
    price: 4000,
    originalPrice: 16000,
    link: "#"
  },
  {
    title: "Personal Finance & Mutual Funds Masterclass",
    price: 6000,
    originalPrice: 10000,
    link: "#"
  },
  {
    title: "3-Hour Personal Finance & Mutual Funds (Trial Class)",
    price: 299,
    originalPrice: 1000,
    link: "#"
  },
  {
    title: "Basics Of Stock Market",
    price: 2999,
    originalPrice: 5000,
    link: "#"
  }
];

export default function Courses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Unlock Your</h2>
          <p className="text-3xl font-bold text-green-600">Path to Financial Freedom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold">₹{course.price}</span>
                  <span className="text-gray-500 line-through">₹{course.originalPrice}</span>
                </div>
                <Button variant="primary" className="w-full">
                  BUY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 