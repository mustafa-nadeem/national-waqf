import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ProfileCard from './ProfileCard';
import './TrusteesGrid.css';

const TRUSTEES = [
  {
    id: 'trustee-1',
    name: 'Dr. Ahmad Hassan',
    role: 'Chair of Trustees',
    bio: 'Former professor of Islamic Finance with over 25 years of experience in charitable governance and Waqf management.',
  },
  {
    id: 'trustee-2',
    name: 'Fatima Khan',
    role: 'Vice Chair',
    bio: 'Chartered accountant and community leader with expertise in non-profit financial management.',
  },
  {
    id: 'trustee-3',
    name: 'Ibrahim Patel',
    role: 'Trustee',
    bio: 'Successful entrepreneur and philanthropist dedicated to supporting education initiatives.',
  },
  {
    id: 'trustee-4',
    name: 'Aisha Rahman',
    role: 'Trustee',
    bio: 'Solicitor specializing in charity law with a passion for community development.',
  },
  {
    id: 'trustee-5',
    name: 'Yusuf Ali',
    role: 'Trustee',
    bio: 'Investment professional with deep knowledge of ethical and Sharia-compliant finance.',
  },
  {
    id: 'trustee-6',
    name: 'Maryam Hussain',
    role: 'Trustee',
    bio: 'Healthcare administrator committed to improving access to medical services.',
  },
];

export default function TrusteesGrid() {
  return (
    <section className="trustees-grid">
      <Container>
        <SectionHeader
          subtitle="Leadership"
          title="Meet Our Trustees"
          description="Our board of trustees brings together diverse expertise to guide National Waqf's mission."
        />
        <div className="trustees-grid__grid">
          {TRUSTEES.map((trustee) => (
            <ProfileCard
              key={trustee.id}
              name={trustee.name}
              role={trustee.role}
              bio={trustee.bio}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
