import { aboutContent } from '../data/treks';

export default function About() {
  const teamMembers = [
    { name: 'Rajeev Singh', role: 'Founder & Lead Guide', experience: '15+ years' },
    { name: 'Priya Sharma', role: 'Trek Coordinator', experience: '10+ years' },
    { name: 'Amit Kumar', role: 'Safety Officer', experience: '12+ years' },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="hero-title">About Garhwal Hikes</h1>
          <p className="hero-subtitle">Your trusted partner in Himalayan adventures</p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-py px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-primary to-primary-dark h-96 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white text-8xl">🏔️</div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line text-lg">{aboutContent.content}</p>
            </div>
          </div>

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">{aboutContent.mission}</p>
            </div>
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="space-y-3">
                {aboutContent.values.map((value, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="text-primary text-2xl">✓</span>
                    <span className="text-gray-700 font-semibold">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="card p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-white text-3xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.experience} of experience</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-primary via-primary-dark to-primary text-secondary p-8 md:p-12 rounded-xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Choose Garhwal Hikes?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <span className="text-4xl flex-shrink-0">🎯</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Expert Guides</h4>
                  <p className="text-gray-100">Experienced guides who know every trail intimately</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl flex-shrink-0">🛡️</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Safety First</h4>
                  <p className="text-gray-100">Comprehensive safety measures and emergency protocols</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl flex-shrink-0">🌱</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Eco-Friendly</h4>
                  <p className="text-gray-100">Committed to environmental sustainability</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-4xl flex-shrink-0">⭐</span>
                <div>
                  <h4 className="font-bold mb-2 text-lg">Unforgettable</h4>
                  <p className="text-gray-100">Memories that last a lifetime with world-class service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
