import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Work Experience</h2>
      <ul>
        <li>
          <strong>IT Specialist & Photographer - RADVER Kamil Kraciuk (02.2014-present)</strong>
          <p>Building websites using WordPress platform and conducting family and lifestyle photography sessions.</p>
        </li>
        <li>
          <strong>IT Specialist - P.W. Vikking KTS Sp. z o.o. (11.2010-09.2015)</strong>
          <p>Provided IT support for over 30 users and managed company website.</p>
        </li>
        <li>
          <strong>IT Specialist - Orange Computers S.C. (04.2010-09.2010)</strong>
          <p>Resolved technical issues related to hardware, software, and network infrastructure.</p>
        </li>
      </ul>
    </section>
  );
}

export default Experience;
