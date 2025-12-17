// API DTOs for Skul Africa

export interface School {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  isActive: boolean;
  subdomain: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface LoginRequest {
  email: string;
  profileCode: string;
}

export interface AuthResponse {
  token: string;
  school?: School;
  student?: Student;
  teacher?: Teacher;
}

export interface Student {
  id?: string;
  firstname: string;
  lastname: string;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  phone: string;
  classId: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  city: string;
  state: string;
  admissionNumber?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface StudentLoginRequest {
  admissionNumber: string;
  password: string;
  subdomain: string;
}

export interface Teacher {
  id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  subjectIds?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Subject {
  id?: string;
  name: string;
  code: string;
  type: 'core' | 'elective';
  classId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Classroom {
  id?: string;
  name?: string;
  level?: string;
  capacity?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface AcademicYear {
  id: string;
  name: string;
  isActive: boolean;
  terms: AcademicTerm[];
}

export interface AcademicTerm {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface GalleryItem {
  id?: string;
  title: string;
  imageUrl: string;
  createdAt?: string;
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Error response
export interface ApiError {
  message: string;
  status: number;
}