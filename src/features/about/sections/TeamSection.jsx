import React from 'react';
import './TeamSection.css';

const TRUSTEES = [
  {
    id: 1,
    name: 'Mawlana Tahir Talati',
    role: 'Trustee',
    bio: 'Tahir Talati pursued a journey in Islamic Education from a young age by completing his memorisation of the Holy Quran at the age of 14. Thereafter he enrolled onto a 7 year Alimiyyah programme at Imam Zakariya Academy (IZA) London graduating with an equivalent to Bachelor\'s degree. He currently pursues his passion of teaching the Quran and Hadith in the Alimiyyah programme at IZA and is a visiting Khateeb and Imam when he isn\'t busy at his day job in accounting.',
    image: null,
  },
  {
    id: 2,
    name: 'Umer Suleman',
    role: 'Co-Founder',
    bio: 'Umer Suleman studied Economics at the Royal Holloway University of London, and is further qualified from Manchester Business School as well as Harvard University. Umer is a regular khateeb in the city and has been actively involved in Islamic Finance for the last decade. He currently is Global Head of Risk, Compliance & Shariah for Wahed, sits on the board of the UKIFC, is an advisor for the finance arm of the Islamic Council of Europe and is co-Founder of the National Waqf Fund.',
    image: null,
  },
  {
    id: 3,
    name: 'Wahid Azizi',
    role: 'Trustee',
    bio: 'Wahid Aziz is a qualified financial adviser and a professional engineer. He has over a decade of experience in the technical safety aspects of chemical plants, as well as investment in public equities. He has completed several training and development programmes in Islamic studies, and has been an instructor delivering the Sabeel Development Programme. He is also a part-time Khateeb in Southampton.',
    image: null,
  },
  {
    id: 4,
    name: 'Muhammed Anas Khan',
    role: 'Trustee',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    image: null,
  },
];

const SHARIA_BOARD = [
  {
    id: 1,
    name: 'Dr Mufti Abdur Rahman Mangera',
    role: 'Sharia Advisor',
    bio: 'Shaykh Abdur-Rahman ibn Yusuf Mangera is a British Muslim scholar educated in both the Islamic and Western traditions. He memorized the Qur\'an by heart and graduated from the Darul Uloom seminary Bury, UK, and later earned a specialized license to issue the fatwa at Mazahir \'Ulum Saharanpur, India. He earned his BA from the University of Johannesburg and completed his MA and Ph.D. in Islamic Studies from SOAS in London. He is the founder of Whitethread Institute.',
    image: null,
  },
  {
    id: 2,
    name: 'Dr Shaykh Sajid Umar',
    role: 'Sharia Advisor',
    bio: 'Sheikh Dr. Sajid Umar is a qualified Mufti and Judge with expertise in Islamic Finance. Dr. Sajid is the first British, English speaking graduate of the faculty of Shariah and also the first from the Higher Institute of Judiciary at Al-Imam Muhammad bin Saud Islamic University in Riyadh. He is an international lecturer and teacher, well known for sharing Islamic knowledge at every level.',
    image: null,
  },
  {
    id: 3,
    name: 'Mufti Muhammad Nurullah Shikder',
    role: 'Sharia Advisor',
    bio: 'Imam Muhammad Nurullah Shikder is a Barrister-at-law and Imam at Tunbridge Wells Mosque. He received an LLB degree from the London Guildhall University and is pursuing an LLM degree from University College London. He has been involved in advising individuals and businesses on Islamic finance and mortgages and has also delivered speeches at the International Islamic Annual conferences.',
    image: null,
  },
  {
    id: 4,
    name: 'Dr Shaykh Haitham al Haddad',
    role: 'Sharia Advisor',
    bio: 'Shaykh Dr Haitham al-Haddad is a jurist and UK based Scholar who currently serves as the Chair of the Fatwa Committee for The Islamic Council of Europe. He has studied Islamic sciences for over 20 years under the tutelage of renowned scholars. He obtained his doctorate on the jurisprudence of Muslim Minorities from SOAS. He specialises in many of the Islamic sciences and has an ocean of experience in helping people use Islamic principles as solutions for their everyday lives.',
    image: null,
  },
];

function TeamMemberCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-card__image-container">
        <div className="team-card__image-placeholder" />
      </div>
      <div className="team-card__bio">
        <p>{member.bio}</p>
      </div>
      <div className="team-card__info">
        <h3 className="team-card__name">{member.name}</h3>
        <span className="team-card__role">{member.role}</span>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <>
      <section className="team-section">
        <div className="team-section__container">
          <h2 className="team-section__title">Meet our trustees</h2>
          <div className="team-section__grid">
            {TRUSTEES.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="team-section team-section--sharia">
        <div className="team-section__container">
          <h2 className="team-section__title">Meet our Sharia board</h2>
          <div className="team-section__grid">
            {SHARIA_BOARD.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
