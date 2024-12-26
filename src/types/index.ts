export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'plants' | 'seeds' | 'pots' | 'accessories';
  imageUrl: string;
  inStock: boolean;
  careLevel: 'beginner' | 'intermediate' | 'expert';
}

export interface Subscription {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  interval: 'monthly' | 'quarterly' | 'yearly';
}

export interface Class {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  price: number;
  instructor: string;
  maxParticipants: number;
  currentParticipants: number;
  level: 'beginner' | 'intermediate' | 'expert';
}