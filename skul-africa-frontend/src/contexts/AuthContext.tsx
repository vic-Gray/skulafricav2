'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { School, Student, Teacher } from '@/types/api';

interface AuthContextType {
  isAuthenticated: boolean;
  user: School | Student | Teacher | null;
  role: 'school' | 'student' | 'teacher' | null;
  login: (userData: School | Student | Teacher, role: 'school' | 'student' | 'teacher') => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<School | Student | Teacher | null>(null);
  const [role, setRole] = useState<'school' | 'student' | 'teacher' | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth data on mount
    const token = localStorage.getItem('authToken');
    const schoolData = localStorage.getItem('schoolData');
    const studentData = localStorage.getItem('studentData');
    const teacherData = localStorage.getItem('teacherData');

    if (token) {
      setIsAuthenticated(true);
      if (schoolData) {
        setUser(JSON.parse(schoolData));
        setRole('school');
      } else if (studentData) {
        setUser(JSON.parse(studentData));
        setRole('student');
      } else if (teacherData) {
        setUser(JSON.parse(teacherData));
        setRole('teacher');
      }
    }
    setLoading(false);
  }, []);

  const login = (userData: School | Student | Teacher, userRole: 'school' | 'student' | 'teacher') => {
    setUser(userData);
    setRole(userRole);
    setIsAuthenticated(true);
    localStorage.setItem(`${userRole}Data`, JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('schoolData');
    localStorage.removeItem('studentData');
    localStorage.removeItem('teacherData');
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    role,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};