import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

// Primary Button - Blue gradient
export const PrimaryButton = ({ to, href, children, className = '', icon = true, onClick }) => {
  const buttonClasses = `group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-10 py-5 font-bold text-sm uppercase tracking-wider hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 gradient-overlay ${className}`
  
  const content = (
    <>
      <span>{children}</span>
      {icon && <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />}
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {content}
      </button>
    )
  }

  return (
    <Link to={to} className={buttonClasses}>
      {content}
    </Link>
  )
}

// Secondary Button - White with border
export const SecondaryButton = ({ to, href, children, className = '', onClick }) => {
  const buttonClasses = `inline-flex items-center justify-center gap-3 border-2 border-blue-300 bg-white text-blue-700 px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`
  
  const content = <span>{children}</span>

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {content}
      </button>
    )
  }

  return (
    <Link to={to} className={buttonClasses}>
      {content}
    </Link>
  )
}

// Outline Button - For dark backgrounds
export const OutlineButton = ({ to, href, children, className = '', onClick }) => {
  const buttonClasses = `inline-flex items-center justify-center gap-3 border-2 border-white/40 text-white px-10 py-5 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-blue-900 transition-all duration-300 rounded-xl backdrop-blur-md shadow-xl hover:shadow-2xl transform hover:scale-105 ${className}`
  
  const content = <span>{children}</span>

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={buttonClasses}>
        {content}
      </button>
    )
  }

  return (
    <Link to={to} className={buttonClasses}>
      {content}
    </Link>
  )
}

// Submit Button - For forms
export const SubmitButton = ({ children, className = '', disabled = false }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-10 py-5 text-sm tracking-wider uppercase font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 flex items-center justify-center gap-3 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 gradient-overlay disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span>{children}</span>
      <FaArrowRight className="text-sm" />
    </button>
  )
}

