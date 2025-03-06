import Image from 'next/image';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "SHIVAM BANSAL",
    text: "This is the first time in my 29 years of age that I have taken any workshop for learning, and I learned a lot. Thank you, Bro."
  },
  {
    name: "SIDDHESH SHINDE",
    text: "This course was just ₹299, and I really learned a lot. The payment was from my salary and I haven't. I was scared to pay, but it had! Thank you for your guidance. Please make more YouTube videos and podcasts. I also saw your podcast with Ankur Warikoo and really loved it. Thank you so much! ❤️"
  },
  {
    name: "MOHAN RAO",
    text: "Thank you very much. I have been following you for the last 3 years. I have already invested ₹100 Lakhs in mutual funds and also purchased the Inner Circle program."
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-green-600 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 