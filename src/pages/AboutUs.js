// src/pages/AboutUs.js
import React from 'react';
//import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>
        Authors: The content in the website and the documentation has been
        authored in the Department of Computer Science and Engineering,
        National Institute of Technology Calicut under the guidance of{' '}
        <a
          href="https://nitc.ac.in/department/computer-science-amp-engineering/faculty-and-staff/faculty/f6ebabe0-ef35-4efd-964a-59325844b7c5"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Vinod Pathari
        </a>
        . The project's activity started in the year 2023.
      </p>
      <p>
        First version of this assignment was released as a part assignment
        for Foundations of Information Security for M23 batch in 2023.
      </p>
      <p>First web version was released in 2024.</p>
      <p>First course assignment and web versions were prepared by <a
          href="https://www.linkedin.com/in/yugam-parashar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yugam Parashar
        </a>.</p>
    </div>
  );
};

export default AboutUs;
