import { useState } from 'react';
import Container from '../components/layout/Container';
import SectionHeader from '../components/ui/SectionHeader';
import TextField from '../components/forms/TextField';
import SelectField from '../components/forms/SelectField';
import FormGroup from '../components/forms/FormGroup';
import Button from '../components/ui/Button';
import './DonatePage.css';

const frequencies = [
  { value: 'one-time', label: 'One-time' },
  { value: 'monthly', label: 'Monthly' },
  { value: 'quarterly', label: 'Quarterly' },
  { value: 'annually', label: 'Annually' },
];

const amounts = [5, 10, 25, 50, 100, 250];

export default function DonatePage() {
  const [donationData, setDonationData] = useState({
    amount: '',
    customAmount: '',
    frequency: 'one-time',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    giftAid: false,
  });

  const [fundraiserData, setFundraiserData] = useState({
    interested: false,
    name: '',
    email: '',
    goal: '',
  });

  const handleDonationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonationData({ 
      ...donationData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleAmountSelect = (amount) => {
    setDonationData({ ...donationData, amount: amount.toString(), customAmount: '' });
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    const finalAmount = donationData.customAmount || donationData.amount;
    alert(`Thank you for your donation of £${finalAmount}!`);
  };

  const handleFundraiserSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest in fundraising! We will be in touch.');
  };

  return (
    <div className="donate-page">
      {/* Main Donation Form */}
      <section className="donate-section">
        <Container size="narrow">
          <SectionHeader
            title="Make a Donation"
            description="Your generosity creates lasting impact for communities across the UK."
          />
          
          <form onSubmit={handleDonationSubmit} className="donate-form">
            {/* Amount Selection */}
            <FormGroup title="Select Amount">
              <div className="donate-amounts">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`donate-amount-btn ${donationData.amount === amt.toString() ? 'donate-amount-btn--active' : ''}`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    £{amt}
                  </button>
                ))}
              </div>
              <TextField
                label="Or enter custom amount"
                name="customAmount"
                type="number"
                value={donationData.customAmount}
                onChange={handleDonationChange}
                placeholder="Enter amount in £"
              />
            </FormGroup>

            {/* Frequency */}
            <FormGroup title="Donation Frequency">
              <SelectField
                name="frequency"
                value={donationData.frequency}
                onChange={handleDonationChange}
                options={frequencies}
              />
            </FormGroup>

            {/* Personal Details */}
            <FormGroup title="Your Details">
              <div className="donate-row">
                <TextField
                  label="First Name"
                  name="firstName"
                  value={donationData.firstName}
                  onChange={handleDonationChange}
                  required
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  value={donationData.lastName}
                  onChange={handleDonationChange}
                  required
                />
              </div>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={donationData.email}
                onChange={handleDonationChange}
                required
              />
              <TextField
                label="Phone (optional)"
                name="phone"
                type="tel"
                value={donationData.phone}
                onChange={handleDonationChange}
              />
            </FormGroup>

            {/* Gift Aid */}
            <div className="donate-giftaid">
              <label className="donate-checkbox">
                <input
                  type="checkbox"
                  name="giftAid"
                  checked={donationData.giftAid}
                  onChange={handleDonationChange}
                />
                <span className="donate-checkbox__mark"></span>
                <span>
                  I am a UK taxpayer and would like to Gift Aid my donation
                </span>
              </label>
              <p className="donate-giftaid__info">
                Gift Aid increases your donation by 25% at no extra cost to you.
              </p>
            </div>

            {/* Payment Placeholder */}
            <FormGroup title="Payment">
              <div className="donate-payment-placeholder">
                <p>Payment integration placeholder</p>
                <p className="donate-payment-note">Stripe/PayPal would be integrated here</p>
              </div>
            </FormGroup>

            <Button type="submit" size="large" fullWidth>
              Complete Donation
            </Button>
          </form>
        </Container>
      </section>

      {/* Fundraising Section */}
      <section className="donate-section donate-section--alt">
        <Container size="narrow">
          <div className="donate-fundraiser">
            <h2>Start a Fundraiser</h2>
            <p>Multiply your impact by rallying friends and family to support National Waqf.</p>
            
            {!fundraiserData.interested ? (
              <Button 
                variant="secondary"
                onClick={() => setFundraiserData({ ...fundraiserData, interested: true })}
              >
                I'm Interested in Fundraising
              </Button>
            ) : (
              <form onSubmit={handleFundraiserSubmit} className="donate-fundraiser-form">
                <TextField
                  label="Your Name"
                  name="name"
                  value={fundraiserData.name}
                  onChange={(e) => setFundraiserData({ ...fundraiserData, name: e.target.value })}
                  required
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={fundraiserData.email}
                  onChange={(e) => setFundraiserData({ ...fundraiserData, email: e.target.value })}
                  required
                />
                <TextField
                  label="Fundraising Goal"
                  name="goal"
                  value={fundraiserData.goal}
                  onChange={(e) => setFundraiserData({ ...fundraiserData, goal: e.target.value })}
                  placeholder="e.g., £500 for Ramadan"
                />
                <Button type="submit" fullWidth>
                  Submit Interest
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
