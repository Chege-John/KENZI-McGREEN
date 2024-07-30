// AboutSection.tsx

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-6">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <div className="relative w-96 h-64 md:h-80 lg:h-96">
          <Image
            src="/fl.jpg" // Path relative to the public directory
            alt="Flower"
            fill // Automatically fills the parent container
            style={{ objectFit: "cover" }} // Inline style for objectFit
            className="rounded-lg shadow-lg"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" // Adjust sizes for different viewport widths
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 z-[1000]">
          About Us
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-white">
          We are a leading company in our industry, dedicated to providing
          exceptional service and innovative solutions. Our team of experts is
          committed to exceeding customer expectations and driving positive
          change through our products and services.innovative solutions. Our
          team of experts is committed to exceeding customer expectations and
          driving positive change through our products and services.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
