import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const education = [
    {
      title: 'Bachelor of Engineering in CS',
      organization: 'Sphoorthy Engineering College, Hyderabad, India',
      period: 'Aug 2019 - Aug 2022',
      details: ['Built a solid foundation in core computer science concepts such as programming, data structures, and algorithms through hands-on coursework and projects.','Gained practical knowledge of operating systems, computer networks, and database management systems, understanding how they function in real-world applications.','Developed hands-on experience in software development using object-oriented programming principles and worked on building web-based applications.','Worked on various academic projects, including website development, data-driven applications, and small-scale software tools that simulated real-world use cases.']
    },
    {
      title: 'Bachelor of Engineering in CS',
      organization: 'Sphoorthy Engineering College, Hyderabad, India',
      period: 'Aug 2017 - July 2021',
      details: ['Built a solid foundation in core computer science concepts such as programming, data structures, and algorithms through hands-on coursework and projects.','Gained practical knowledge of operating systems, computer networks, and database management systems, understanding how they function in real-world applications.','Developed hands-on experience in software development using object-oriented programming principles and worked on building web-based applications.','Worked on various academic projects, including website development, data-driven applications, and small-scale software tools that simulated real-world use cases.'],
    },
  ];

  const experience = [
    {
      title: 'System Engineer | Software Engineer',
      organization: 'Infosys Ltd.Hyderabad,INDIA',
      period: 'Sept 2021 - July 2023',
      details: [' Resolved an average of 20 technical issues per week by applying streamlined support procedures, contributing to high customer satisfaction and aligning solution delivery with evolving stakeholder needs.','Monitored and optimized technical systems to achieve a 15% reduction in system downtime, integrating automated processes and demonstrating principles of scalable framework development.','Collaborated with cross-functional teams to identify process improvements, streamlining workflows and enhancing overall team productivity while adapting solutions to business requirements.','Enhanced user interface experiences with front-end technologies (HTML, CSS, React) to improve user satisfaction and directly support business teams in visualizing solutions.','Ensured smooth deployments through coordinated post-release checkouts, aligning rapid response practices with both immediate and long-term process improvement initiatives.','Identified and escalated system vulnerabilities to improve overall security posture, reflecting an engineering approach to safeguard critical infrastructure.'],
    },
    {
      title: 'Data Analyst Intern',
      organization: 'The SmartBridge',
      period: 'April 2019 - July 2019',
      details: ['Conducted thorough examinations of hospital patient records and integrated diverse healthcare databases using statistical techniques','supporting evidence-based decision-making and resource optimization.','Aggregated and synthesized healthcare datasets to facilitate data-driven decision-making processes that streamlined operational workflows.','Analyzed patient records to identify trends in treatment effectiveness, adapting insights to optimize resource allocation.','Enhanced data validation procedures to improve the accuracy and reliability of medical data, aligning analytical processes with improved healthcare delivery.'],
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-16 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience & Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Education */}
        <div>
          <h3 className="text-3xl font-semibold text-purple-600 mb-6 text-center flex items-center gap-2 justify-center">
            <FaGraduationCap /> Education
          </h3>
          <div className="border-l-4 border-purple-500 ml-4 space-y-10">
            {education.map((item, index) => (
              <div
                key={index}
                className="relative pl-8"
                data-aos="fade-up"
              >
                <div className="absolute -left-4 top-2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white"></div>
                <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-purple-800">{item.title}</h4>
                  <p className="font-medium">{item.organization}</p>
                  <p className="text-gray-500 mb-3">{item.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 mb-6 text-center flex items-center gap-2 justify-center">
            <FaBriefcase /> Experience
          </h3>
          <div className="border-l-4 border-blue-500 ml-4 space-y-10">
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative pl-8"
                data-aos="fade-up"
              >
                <div className="absolute -left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
                <div className="bg-white shadow-md rounded-xl p-6 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold text-blue-800">{item.title}</h4>
                  <p className="font-medium">{item.organization}</p>
                  <p className="text-gray-500 mb-3">{item.period}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
