import React, { useState } from 'react';
import './achievement.css'; 

const Achievement = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const achievements = [
    {
      title: 'National Level Hackathon',
      description: 'Participated in a prestigious national level hackathon, showcasing skills in coding and innovation.',
      certificateUrl: '/certificates/hack.jpg'  
    },
    {
      title: 'Esports Tournament Organizer',
      description: 'Organized an esports tournament, demonstrating leadership and organizational skills.',
      certificateUrl: '/certificates/esports.jpg' 
    },
    {
      title: 'Graphic Designer for School',
      description: 'Handled multiple social media accounts for the school as a graphic designer, creating engaging visual content.',
      certificateUrl: '#' 
    },
  ];

  const handleViewCertificate = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="achievements-container">
      <h2>Notable Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            <div className="achievement-header">
              <h3>{achievement.title}</h3>
            </div>
            <p>{achievement.description}</p>
            <button onClick={() => handleViewCertificate(index)} className="view-certificate-btn">
              <i className="uil-eye"></i> View Credential
            </button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="certificate-modal">
          <div className="certificate-content">
            <button onClick={handleCloseModal} className="close-modal-btn">X</button>
            <iframe 
              src={achievements[selectedIndex].certificateUrl} 
              title="Certificate" 
              className="certificate-iframe">
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Achievement;
