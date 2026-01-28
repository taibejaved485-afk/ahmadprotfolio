
import React from 'react';
import { Video, Film, Scissors, Layers, Sparkles, Youtube, PlayCircle } from 'lucide-react';
import { Skill, Service, Project } from './types';

export const SKILLS: Skill[] = [
  { name: 'Adobe Premiere Pro', level: 98 },
  { name: 'Adobe After Effects', level: 92 },
  { name: 'Cinematic Color Grading', level: 88 },
  { name: 'Motion Graphics Design', level: 85 },
  { name: 'Cinematic Visual Storytelling', level: 95 },
  { name: 'YouTube & Social Media Editing', level: 96 },
];

export const SERVICES: Service[] = [
  {
    title: 'YouTube Video Editing',
    description: 'High-retention editing with optimized pacing, sound design, and creative storytelling.',
    icon: 'Youtube',
    details: [
      'Strategic hook placement for maximum retention',
      'Advanced sound design and SFX integration',
      'Custom B-roll selection and pacing optimization',
      'Subtitles and creative text animations',
      'Expertise in various niches (Vlogs, Gaming, Documentary)'
    ]
  },
  {
    title: 'Wedding & Event Videos',
    description: 'Capturing life-long memories with cinematic transitions and emotional color palettes.',
    icon: 'Film',
    details: [
      'Multi-camera synchronization and editing',
      'Emotional narrative-driven storytelling',
      'Cinematic color grading for timeless visuals',
      'Licensed music selection for mood setting',
      'Highlight reels and full-length feature edits'
    ]
  },
  {
    title: 'Social Media Reels',
    description: 'Punchy, trend-aware vertical content optimized for maximum engagement on TikTok and Instagram.',
    icon: 'Scissors',
    details: [
      'Fast-paced editing for vertical platforms',
      'Trend-syncing and viral audio integration',
      'Dynamic typography and motion overlays',
      'Optimized aspect ratios (9:16)',
      'High-conversion hooks for social ads'
    ]
  },
  {
    title: 'Advanced Motion Graphics',
    description: 'Dynamic typography, logo animations, and complex visual elements for a professional finish.',
    icon: 'Layers',
    details: [
      'Custom 2D/3D logo animations',
      'Explainer video motion design',
      'Lower thirds and brand asset creation',
      'Visual effects (VFX) and compositing',
      'Clean and modern UI/UX animations'
    ]
  },
  {
    title: 'Promotional & Brand Videos',
    description: 'Impactful commercial edits that build trust and drive conversions for your business.',
    icon: 'Sparkles',
    details: [
      'Brand-consistent color and style',
      'Clear Call-To-Action (CTA) integration',
      'Corporate interview and testimonial editing',
      'Product showcase with cinematic flair',
      'Multi-platform export optimization'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Cinematic Travel Narrative',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: 2,
    title: 'High-End Brand Campaign',
    category: 'Commercial',
    thumbnail: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: 3,
    title: 'Urban Music Experience',
    category: 'Music',
    thumbnail: 'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  },
  {
    id: 4,
    title: 'Wedding Highlights 2024',
    category: 'Event',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800',
    videoUrl: '#'
  }
];
