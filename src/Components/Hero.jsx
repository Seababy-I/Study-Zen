import React from 'react';

export default function Hero() {
  return (
    <section style={{ textAlign: 'center', padding: '40px 20px' }}>
      <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>
        Your Daily Study Companion
      </h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
        Stay focused, organize tasks, and achieve your goals.
      </p>
    </section>
  );
}