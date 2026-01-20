import { useState } from 'react';
import Container from '../../../components/layout/Container';
import SectionHeader from '../../../components/ui/SectionHeader';
import './FAQSection.css';

const FAQ_CATEGORIES = [
  {
    id: 'donations',
    title: 'Donations',
    questions: [
      {
        id: 'd1',
        question: 'What is the minimum donation amount?',
        answer: 'You can donate as little as £5 to our general Waqf fund. For named or family Waqf endowments, minimum contributions start at £1,000.',
      },
      {
        id: 'd2',
        question: 'Is my donation tax-deductible?',
        answer: 'Yes, National Waqf is a registered charity. UK taxpayers can increase their donation by 25% through Gift Aid at no extra cost.',
      },
      {
        id: 'd3',
        question: 'Can I set up a recurring donation?',
        answer: 'Yes, you can set up monthly, quarterly, or annual recurring donations through our secure payment system.',
      },
    ],
  },
  {
    id: 'governance',
    title: 'Governance',
    questions: [
      {
        id: 'g1',
        question: 'Who manages National Waqf?',
        answer: 'National Waqf is governed by a board of trustees with diverse expertise in Islamic finance, charity law, and community development.',
      },
      {
        id: 'g2',
        question: 'How are investment decisions made?',
        answer: 'All investments are reviewed by our Sharia board to ensure compliance with Islamic principles. Our investment committee then assesses risk and return profiles.',
      },
    ],
  },
  {
    id: 'transparency',
    title: 'Transparency',
    questions: [
      {
        id: 't1',
        question: 'How can I track how my donation is used?',
        answer: 'Registered donors receive quarterly updates on funded projects. Our annual report details all expenditures and impact metrics.',
      },
      {
        id: 't2',
        question: 'What percentage goes to administrative costs?',
        answer: 'We maintain administrative costs below 5% of total funds. The vast majority of your donation directly supports charitable activities.',
      },
      {
        id: 't3',
        question: 'Are your accounts independently audited?',
        answer: 'Yes, our financial statements are audited annually by an independent firm. Audited accounts are published on our website.',
      },
    ],
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={onToggle}>
        <span>{question}</span>
        <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
      </button>
      <div className="faq-item__answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}

function FAQCategory({ category, openItems, onToggleItem }) {
  return (
    <div className="faq-category">
      <h3 className="faq-category__title">{category.title}</h3>
      <div className="faq-category__items">
        {category.questions.map((q) => (
          <FAQItem
            key={q.id}
            question={q.question}
            answer={q.answer}
            isOpen={openItems.includes(q.id)}
            onToggle={() => onToggleItem(q.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState([]);

  const handleToggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="faq-section">
      <Container>
        <SectionHeader
          subtitle="Got Questions?"
          title="Frequently Asked Questions"
          description="Find answers to common questions about Waqf, donations, and how we operate."
        />
        <div className="faq-section__categories">
          {FAQ_CATEGORIES.map((category) => (
            <FAQCategory
              key={category.id}
              category={category}
              openItems={openItems}
              onToggleItem={handleToggleItem}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
