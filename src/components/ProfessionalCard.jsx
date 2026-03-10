"use client";
import React from 'react'
import Card3D from './Card3D'

// Standard Professional Card
export const ProfessionalCard = ({ children, className = '', hover3D = true }) => {
  const CardWrapper = hover3D ? Card3D : 'div'
  
  return (
    <CardWrapper className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 card-3d gradient-overlay h-full ${className}`}>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </CardWrapper>
  )
}

// Gradient Card - For dark sections
export const GradientCard = ({ children, className = '', hover3D = true }) => {
  const CardWrapper = hover3D ? Card3D : 'div'
  
  return (
    <CardWrapper className={`bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950 text-white p-10 rounded-2xl shadow-2xl card-3d gradient-overlay border border-blue-500/30 h-full ${className}`}>
      <div className="flex flex-col h-full">
        {children}
      </div>
    </CardWrapper>
  )
}

// Icon Card - For features/services
export const IconCard = ({ icon: Icon, title, description, className = '' }) => {
  return (
    <Card3D className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 card-3d gradient-overlay h-full ${className}`}>
      <div className="relative flex flex-col h-full">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 layer-3 flex-shrink-0">
          <Icon className="text-3xl text-white" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-4 layer-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed font-medium layer-1 mb-auto">{description}</p>
        <div className="mt-6 h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 shadow-lg"></div>
      </div>
    </Card3D>
  )
}

