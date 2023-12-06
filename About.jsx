const About = () => {
  return (
    <div className="bg-gray-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
          About Me
        </h1>
        <div className="flex items-center justify-center">
          <div className="max-w-3xl">
            <div className="mb-4 md:mb-8">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                Introduction
              </h2>
              <p className="text-sm md:text-lg">
                Hey there, I'm Arya Bhattacharyya, a passionate and driven Full
                Stack Developer based in Rourkela, India. I'm deeply entrenched
                in the world of technology, constantly exploring the
                intersections of code, creativity, and innovation.
              </p>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                My Tech Journey
              </h2>
              <p className="text-sm md:text-lg">
                My journey into the world of technology began with a profound
                fascination for problem-solving and the ever-evolving landscape
                of programming languages. From my roots in Electrical
                Engineering at the esteemed National Institute of Technology,
                Rourkela, to my current endeavors as a Full Stack Developer, my
                love for crafting seamless digital experiences has only grown.
              </p>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                Tech Expertise
              </h2>
              <p className="text-sm md:text-lg">
                Proficient in JavaScript, Next.js, Prisma, and GraphQL, I bring
                forth a robust foundation in modern web technologies. My
                familiarity with frameworks like React, Redux, and Node.js,
                coupled with hands-on experience in MongoDB, Firebase, and a
                suite of development tools, empowers me to navigate complex
                challenges and architect scalable solutions.
              </p>
            </div>
            <div className="mb-4 md:mb-8">
              <h2 className="text-lg md:text-2xl font-semibold mb-2">
                Soft Skills
              </h2>
              <p className="text-sm md:text-lg">
                Beyond the realm of code, I foster essential soft skills crucial
                for collaborative success. Time management, effective
                communication, and the ability to navigate challenges with
                resilience are facets I actively nurture.
              </p>
            </div>
            {/* Add more content about yourself */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
