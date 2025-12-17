
import React from 'react';

export enum ViewState {
  WELCOME = 'WELCOME',
  HOME = 'HOME',
  LEARN = 'LEARN',
  TOOLS = 'TOOLS',
  CHAT = 'CHAT',
  CREDITS = 'CREDITS'
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index
  explanation: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  image: string;
  content: React.ReactNode;     // The interactive/visual content
  fullContent?: React.ReactNode; // The dense, verbatim manual text
  glossary?: GlossaryItem[];    // Terms specific to the detailed view
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
