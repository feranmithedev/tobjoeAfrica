import {
  Camera,
  Clapperboard,
  Film,
  Mail,
  MessageCircle,
  PenTool,
  Send,
  Sparkles,
  Video,
} from 'lucide-react'

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    title: 'Filmmaking',
    icon: Film,
    description:
      'Concept-led films, ministry stories, brand documentaries, campaign visuals, and short-form cinematic narratives.',
  },
  {
    title: 'Videography',
    icon: Video,
    description:
      'Event coverage, product showcases, worship nights, interviews, and social-first video built with editorial discipline.',
  },
  {
    title: 'Photography',
    icon: Camera,
    description:
      'Portraits, events, lifestyle campaigns, and brand imagery with intentional lighting and premium retouching.',
  },
  {
    title: 'Video Editing',
    icon: Clapperboard,
    description:
      'Story-focused edits, color treatment, sound polish, reels, recaps, teasers, and delivery-ready cutdowns.',
  },
]

export const projects = [
  {
    title: 'The Builders Conference Recap',
    category: 'Events',
    format: 'Event Film',
    description: 'A high-energy conference story shaped around worship, teaching, and behind-the-scenes atmosphere.',
  },
  {
    title: 'Made for More',
    category: 'Films',
    format: 'Brand Documentary',
    description: 'A founder-led story for a growing creative business, captured with quiet interviews and warm visuals.',
  },
  {
    title: 'Grace Portrait Series',
    category: 'Photography',
    format: 'Editorial Portraits',
    description: 'Studio portraits for a personal brand campaign with rich contrast, gold accents, and refined retouching.',
  },
  {
    title: 'Impact Launch Teaser',
    category: 'Editing',
    format: 'Social Campaign',
    description: 'A fast-moving launch package with rhythm-led cuts, titles, sound design, and vertical deliverables.',
  },
  {
    title: 'Table for Kings',
    category: 'Films',
    format: 'Short Film',
    description: 'A poetic short exploring identity, legacy, and faith through intimate framing and cinematic pacing.',
  },
  {
    title: 'Traditional Union Highlights',
    category: 'Events',
    format: 'Celebration Film',
    description: 'A polished memory film blending cultural details, family moments, ceremony coverage, and dance energy.',
  },
]

export const filters = ['All', 'Films', 'Photography', 'Events', 'Editing']

export const testimonials = [
  {
    name: 'Daniel A.',
    role: 'Creative Director, Lagos',
    quote:
      'Tobjoe Africa understood the story before the cameras came out. The final film felt premium, emotional, and exactly aligned with our campaign.',
  },
  {
    name: 'Pastor Miriam O.',
    role: 'Ministry Lead',
    quote:
      'Our event recap carried the atmosphere of the room beautifully. The editing, color, and pacing helped people experience the night again.',
  },
  {
    name: 'Ifeoluwa B.',
    role: 'Founder, Lifestyle Brand',
    quote:
      'The photos and social videos gave our brand a stronger visual identity. Every frame felt intentional and ready for launch.',
  },
]

export const bookingSteps = [
  {
    title: 'Contact Us',
    description: 'Reach out with your date, location, and the kind of story you want to tell.',
  },
  {
    title: 'Share Project Details',
    description: 'We clarify goals, deliverables, audience, references, timeline, and production needs.',
  },
  {
    title: 'Review',
    description: 'The scope is refined into a clear creative direction with realistic production expectations.',
  },
  {
    title: 'Quote',
    description: 'You receive a tailored estimate covering shoot, edit, delivery, and optional add-ons.',
  },
  {
    title: 'Confirmation',
    description: 'Once approved, the date is locked and the production plan moves into motion.',
  },
]

export const contactLinks = [
  {
    label: 'WhatsApp',
    value: '+2349130460914',
    href: 'https://wa.me/2349130460914',
    icon: MessageCircle,
  },
  {
    label: 'Email',
    value: 'tobjoeafrica@gmail.com',
    href: 'mailto:tobjoeafrica@gmail.com',
    icon: Mail,
  },
  {
    label: 'Instagram',
    value: '@tobilobaogunkolaa',
    href: 'https://www.instagram.com/tobilobaogunkolaa',
    icon: Camera,
  },
  {
    label: 'TikTok',
    value: '@tobjoeafrica1',
    href: 'https://tiktok.com/@tobjoeafrica1',
    icon: Send,
  },
]

export const studioHighlights = [
  { value: '4K+', label: 'delivery-ready film packages' },
  { value: '48h', label: 'fast recap options available' },
  { value: '360', label: 'story, shoot, edit, and delivery' },
]

export const processIcons = [MessageCircle, PenTool, Sparkles, Mail, Clapperboard]
