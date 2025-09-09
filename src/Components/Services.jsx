import React from "react";

function Services() {
  const services = [
    {
      title: "Weddings",
      description:
        "Create unforgettable memories with elegant setups, breathtaking gardens,  that make your big day magical.",
      icon: "💍",
    },
    {
      title: "Birthdays",
      description:
        "Celebrate milestones surrounded by nature, laughter, and joy — whether it’s an intimate gathering or a grand party.",
      icon: "🎉",
    },
    {
      title: "Corporate Events",
      description:
        "Host productive retreats, team-building activities, or conferences in a serene and inspiring environment.",
      icon: "🏢",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      {/* Section Heading */}
     

      {/* Grid of Service Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 text-center hover:shadow-lg transition duration-300"
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
