import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) => {
  return (
    <div className="form-group" style={{ marginBottom: '1.5rem' }}>
      <label
        htmlFor={name}
        style={{
          fontWeight: '500',
          color: '#1e293b',
          marginBottom: '0.5rem',
          display: 'block',
          fontSize: '0.875rem',
          letterSpacing: '0.025em'
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        style={{
          padding: '0.75rem 1rem',
          border: error ? '1px solid #ef4444' : '1px solid #e2e8f0',
          borderRadius: '8px',
          fontSize: '0.9375rem',
          transition: 'all 0.2s ease',
          background: '#ffffff',
          color: '#1e293b'
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={(e) => {
          if (!error) {
            e.currentTarget.style.borderColor = '#1e3a8a';
            e.currentTarget.style.boxShadow = '0 0 0 3px rgba(30, 58, 138, 0.1)';
          }
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? '#ef4444' : '#e2e8f0';
          e.currentTarget.style.boxShadow = 'none';
        }}
      />
      {error && (
        <div
          className="invalid-feedback"
          style={{
            display: 'block',
            color: '#ef4444',
            fontSize: '0.875rem',
            marginTop: '0.5rem',
            fontWeight: '500'
          }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

TextInputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

TextInputGroup.defaultProps = {
  type: 'text'
};

export default TextInputGroup;
