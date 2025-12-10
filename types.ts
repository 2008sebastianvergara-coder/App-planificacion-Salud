import React from 'react';

export enum ViewState {
  HOME = 'HOME',
  LEARN = 'LEARN',
  TOOLS = 'TOOLS',
  CHAT = 'CHAT'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  image: string;
  content: React.ReactNode;
  quiz?: QuizQuestion[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum InstitutionType {
  PUBLIC = 'Público',
  PRIVATE = 'Privado'
}