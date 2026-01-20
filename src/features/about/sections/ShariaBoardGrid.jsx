import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ProfileCard from './ProfileCard';
import './ShariaBoardGrid.css';

const SHARIA_BOARD = [
  {
    id: 'scholar-1',
    name: 'Sheikh Dr. Abdul Qadir',
    role: 'Chairman, Sharia Board',
    bio: 'Renowned Islamic scholar with a PhD in Islamic Jurisprudence. Formerly served on the Sharia boards of major Islamic financial institutions.',
  },
  {
    id: 'scholar-2',
    name: 'Mufti Tariq Mahmood',
    role: 'Sharia Advisor',
    bio: 'Graduate of Al-Azhar University with 20 years of experience advising on Waqf and Islamic endowments.',
  },
  {
    id: 'scholar-3',
    name: 'Dr. Amina Siddiqui',
    role: 'Sharia Advisor',
    bio: 'Scholar specializing in contemporary applications of Islamic finance and charitable giving.',
  },
];

export default function ShariaBoardGrid() {
  return (
    <section className="sharia-board-grid">
      <Container>
        <SectionHeader
          subtitle="Religious Guidance"
          title="Meet Our Sharia Board"
          description="Our Sharia board ensures all operations comply with Islamic principles and authentic scholarship."
        />
        <div className="sharia-board-grid__grid">
          {SHARIA_BOARD.map((member) => (
            <ProfileCard
              key={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
