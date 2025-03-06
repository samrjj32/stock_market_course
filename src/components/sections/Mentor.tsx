export default function Mentor() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Meet Your Mentor</h2>
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-green-600 mb-6">Neeraj Arora</h3>
          <ul className="space-y-4 text-gray-600 mb-8">
            <li className="flex items-start">
              • Founder of Edu 91 and learnn.club
            </li>
            <li className="flex items-start">
              • Successfully Cleared CA Final Exams in 2011
            </li>
            <li className="flex items-start">
              • 15+ years of expertise in Accounting and Finance Education
            </li>
            <li className="flex items-start">
              • Built a ₹20 crore investment portfolio with 18% XIRR
            </li>
          </ul>

          <div className="bg-green-50 p-6 rounded-lg">
            <p className="text-gray-700 italic">
              "I've been where you are. I've felt the frustration of financial struggle and the fear of uncertain future. But I've also experienced the joy and freedom that comes with financial mastery. My mission is to guide you on this transformative journey."
              <span className="block mt-2 font-semibold">- Neeraj Arora</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 