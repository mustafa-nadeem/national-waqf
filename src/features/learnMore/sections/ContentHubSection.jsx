import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import ContentCard from './ContentCard';
import './ContentHubSection.css';

const CONTENT_ITEMS = [
  {
    id: 'history-waqf',
    title: 'The History of Waqf in Islamic Civilization',
    excerpt: 'Discover how Waqf funded hospitals, universities, and public services throughout Islamic history.',
    imageLabel: 'History Article',
  },
  {
    id: 'modern-waqf',
    title: 'Modern Waqf: Reviving an Ancient Tradition',
    excerpt: 'Learn how contemporary Muslims are using Waqf to address today\'s community challenges.',
    imageLabel: 'Modern Waqf',
  },
  {
    id: 'impact-stories',
    title: 'Impact Stories: Communities Transformed',
    excerpt: 'Read about the real difference Waqf donations are making in UK Muslim communities.',
    imageLabel: 'Impact Stories',
  },
];

export default function ContentHubSection() {
  return (
    <section className="content-hub-section">
      <Container>
        <SectionHeader
          subtitle="Resources"
          title="Connect to Our Content"
          description="Explore articles, stories, and educational resources about Waqf and Islamic giving."
        />
        <div className="content-hub-section__grid">
          {CONTENT_ITEMS.map((item) => (
            <ContentCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              imageLabel={item.imageLabel}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
