import { useEffect, useRef, useState, useMemo } from 'react';
import './ImpactStatBlock.css';

/**
 * ImpactStatBlock - Editorial stat display with Air-style digit reel animation
 * 
 * Features:
 * - Digit reel roll animation on scroll enter
 * - Fade out on scroll exit
 * - Replayable when scrolling back
 * - Respects prefers-reduced-motion
 */
export default function ImpactStatBlock({ value, label, className = '' }) {
  const blockRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Parse the value into static chars and animated digits
  const parsedValue = useMemo(() => {
    const chars = value.split('');
    return chars.map((char, index) => {
      const isDigit = /\d/.test(char);
      return {
        char,
        isDigit,
        index,
        // Stagger delay for digit reel effect
        delay: isDigit ? index * 0.08 : 0,
      };
    });
  }, [value]);

  // Check for reduced motion preference
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    const block = blockRef.current;
    if (!block) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Trigger animation after a brief delay for fade-in to start
            setTimeout(() => {
              setShouldAnimate(true);
              setHasAnimated(true);
            }, 100);
          } else {
            setIsVisible(false);
            setShouldAnimate(false);
            // Reset for replay on next entry
            setHasAnimated(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px',
      }
    );

    observer.observe(block);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={blockRef}
      className={`impact-stat-block ${className} ${isVisible ? 'impact-stat-block--visible' : ''}`}
    >
      <div className="impact-stat-block__value">
        {parsedValue.map((item, idx) => (
          item.isDigit ? (
            <DigitReel
              key={idx}
              digit={item.char}
              delay={item.delay}
              animate={shouldAnimate && !prefersReducedMotion}
              reducedMotion={prefersReducedMotion}
            />
          ) : (
            <span key={idx} className="impact-stat-block__static-char">
              {item.char}
            </span>
          )
        ))}
      </div>
      <div className="impact-stat-block__label">{label}</div>
    </div>
  );
}

/**
 * DigitReel - Single digit with vertical reel animation
 * Creates the "slot machine" roll effect
 */
function DigitReel({ digit, delay, animate, reducedMotion }) {
  const targetDigit = parseInt(digit, 10);
  const reelRef = useRef(null);
  const [digitHeight, setDigitHeight] = useState(0);

  // Build the reel: cycle through 0-9 multiple times, ending on target
  const reelDigits = useMemo(() => {
    const cycles = 2; // Number of full 0-9 cycles before landing
    const digits = [];
    
    // Add cycles of 0-9
    for (let c = 0; c < cycles; c++) {
      for (let d = 0; d <= 9; d++) {
        digits.push(d);
      }
    }
    
    // Add digits from 0 to target to land on the right number
    for (let d = 0; d <= targetDigit; d++) {
      digits.push(d);
    }
    
    return digits;
  }, [targetDigit]);

  // Calculate the final position (land on last digit in array)
  const finalPosition = reelDigits.length - 1;

  // Measure actual digit height after mount
  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;
    
    const firstDigit = reel.querySelector('.impact-stat-block__digit');
    if (firstDigit) {
      setDigitHeight(firstDigit.offsetHeight);
    }
  }, []);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel || digitHeight === 0) return;

    if (reducedMotion) {
      // Skip animation, show final digit immediately
      reel.style.transform = `translateY(-${finalPosition * digitHeight}px)`;
      return;
    }

    if (animate) {
      // Animate to final position using pixel values
      reel.style.transition = `transform 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s`;
      reel.style.transform = `translateY(-${finalPosition * digitHeight}px)`;
    } else {
      // Reset to start position (no transition)
      reel.style.transition = 'none';
      reel.style.transform = 'translateY(0)';
    }
  }, [animate, finalPosition, delay, reducedMotion, digitHeight]);

  return (
    <span className="impact-stat-block__digit-wrapper" style={{ height: digitHeight || 'auto' }}>
      <span ref={reelRef} className="impact-stat-block__digit-reel">
        {reelDigits.map((d, idx) => (
          <span key={idx} className="impact-stat-block__digit">
            {d}
          </span>
        ))}
      </span>
    </span>
  );
}
