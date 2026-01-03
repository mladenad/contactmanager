import React from 'react';

export default function About() {
  return (
    <div className="card" style={{
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      padding: '3rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <i className="fas fa-info-circle" style={{
          fontSize: '4rem',
          color: '#3b82f6',
          marginBottom: '1.5rem'
        }}></i>
        <h1 className="display-4" style={{
          color: '#1e3a8a',
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '1rem'
        }}>
          About Contact Manager
        </h1>
        <p className="lead" style={{
          fontSize: '1.25rem',
          color: '#64748b',
          marginBottom: '2rem'
        }}>
          A professional contact management solution for modern businesses
        </p>
        <div style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          padding: '1.5rem',
          borderRadius: '8px',
          marginTop: '2rem'
        }}>
          <p style={{
            color: '#1e293b',
            fontSize: '1rem',
            margin: 0,
            fontWeight: '500'
          }}>
            <i className="fas fa-code-branch" style={{ color: '#3b82f6', marginRight: '0.5rem' }}></i>
            Version 1.0.0
          </p>
        </div>
      </div>
    </div>
  );
}
