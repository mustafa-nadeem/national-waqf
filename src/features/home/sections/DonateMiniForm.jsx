import { useState } from 'react';
import Button from '../../../components/ui/Button';
import './DonateMiniForm.css';

const PRESET_AMOUNTS = [5, 10, 25, 50, 100, 250];

export default function DonateMiniForm() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setError('');
  };

  const handleCustomChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(null);
    }
    setError('');
  };

  const getFinalAmount = () => {
    if (customAmount) {
      return parseFloat(customAmount);
    }
    return selectedAmount;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const amount = getFinalAmount();
    
    if (!amount || amount < 1) {
      setError('Please select or enter a valid amount');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Mock API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Donation submitted:', { amount: `£${amount}` });
      setIsSuccess(true);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="donate-mini-form donate-mini-form--success">
        <span className="donate-mini-form__success-icon">✓</span>
        <h3 className="donate-mini-form__success-title">Thank You!</h3>
        <p className="donate-mini-form__success-text">
          Your generous contribution of £{getFinalAmount()} will help build a sustainable future.
        </p>
      </div>
    );
  }

  return (
    <form className="donate-mini-form" onSubmit={handleSubmit}>
      <h3 className="donate-mini-form__title">Make a Donation</h3>
      <p className="donate-mini-form__subtitle">Choose an amount to give</p>
      
      {/* Preset Amounts */}
      <div className="donate-mini-form__amounts">
        {PRESET_AMOUNTS.map((amount) => (
          <button
            key={amount}
            type="button"
            className={`donate-mini-form__amount-btn ${
              selectedAmount === amount ? 'donate-mini-form__amount-btn--active' : ''
            }`}
            onClick={() => handlePresetClick(amount)}
          >
            £{amount}
          </button>
        ))}
      </div>

      {/* Custom Amount */}
      <div className="donate-mini-form__custom">
        <input
          type="number"
          placeholder="Other amount (£)"
          value={customAmount}
          onChange={handleCustomChange}
          min="1"
          step="1"
          className="donate-mini-form__custom-input"
        />
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        variant="donate" 
        fullWidth 
        disabled={isSubmitting}
        className="donate-mini-form__submit"
      >
        {isSubmitting ? 'Processing...' : `Donate £${getFinalAmount() || '0'}`}
      </Button>

      {error && <p className="donate-mini-form__error">{error}</p>}
    </form>
  );
}
