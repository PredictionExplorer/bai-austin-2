// ─── Brand Colors ───────────────────────────────────────────────
export const colors = {
  navy: '#0f1b2d',
  gold: '#c8a555',
  teal: '#1a9aaa',
  offWhite: '#fafafa',
  charcoal: '#1a1a1a',
  slate: '#64748b',
} as const;

// ─── Navigation ─────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/history' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Team', href: '/team' },
];

// ─── Hero Slides ────────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  title: string;
  gradient: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: 'Theater & Auditorium Acoustics',
    gradient: 'from-[#0f1b2d] via-[#1a3a5c] to-[#1a9aaa]',
  },
  {
    id: 2,
    title: 'Performance Hall Design',
    gradient: 'from-[#1a2744] via-[#0f1b2d] to-[#c8a555]',
  },
  {
    id: 3,
    title: 'Transportation Facilities',
    gradient: 'from-[#0f1b2d] via-[#1a9aaa] to-[#0f1b2d]',
  },
  {
    id: 4,
    title: 'Government Architecture',
    gradient: 'from-[#1a3a5c] via-[#0f1b2d] to-[#1a9aaa]',
  },
  {
    id: 5,
    title: 'Luxury Hospitality Spaces',
    gradient: 'from-[#0f1b2d] via-[#c8a555] to-[#1a2744]',
  },
  {
    id: 6,
    title: 'Educational Commons',
    gradient: 'from-[#1a9aaa] via-[#0f1b2d] to-[#1a3a5c]',
  },
];

// ─── Stats ──────────────────────────────────────────────────────
export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 85, suffix: '+', label: 'Years of Excellence' },
  { value: 6000, suffix: '+', label: 'Projects Completed' },
  { value: 3, suffix: '', label: 'Texas Offices' },
];

// ─── Services ───────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: 'room-acoustics',
    title: 'Room Acoustics',
    icon: 'volume-2',
    items: [
      'Reverberation time',
      'Configuration and geometry of surfaces',
      'Interior acoustical finishes',
      'Construction details',
    ],
  },
  {
    id: 'sound-isolation',
    title: 'Sound Isolation',
    icon: 'shield',
    items: [
      'Field sound isolation measurements',
      'Acoustical isolation — exterior and interior',
      'Construction details',
    ],
  },
  {
    id: 'noise-control',
    title: 'Noise Control',
    icon: 'volume-x',
    items: [
      'Sound level measurements (Outdoor - Indoor, Room-to-Room)',
      'Mechanical and Electrical Systems',
      'Environmental Noise for Buildings',
      'Construction Details',
    ],
  },
  {
    id: 'sound-reinforcement',
    title: 'Sound Reinforcement System',
    icon: 'speaker',
    items: [
      'Full-service Designs',
      'Sound amplification systems',
      'Communications and paging systems',
      'Audio recording systems',
      'Sound masking systems',
      'On-site testing and commissioning',
    ],
  },
  {
    id: 'audio-visual',
    title: 'Audio Visual Systems',
    icon: 'monitor',
    items: [
      'Audiovisual Programmatic Services (Planning, Budgeting, Client education)',
      'Comprehensive Design Services',
      'Video Production Studio Design Services',
      'Videoconferencing and Distance Education Facilities Design',
      'Historic Preservation Architecture services',
      'Architectural, Mechanical and Electrical Support Infrastructure Design',
      'Construction Administration Including: AV system testing, Commissioning, Reporting',
    ],
  },
];

// ─── Project Categories ─────────────────────────────────────────
export interface ProjectCategory {
  id: string;
  title: string;
  gradient: string;
}

export const projectCategories: ProjectCategory[] = [
  { id: 'sports', title: 'Sports, Leisure & Recreation', gradient: 'from-[#0f1b2d] to-[#1a9aaa]' },
  { id: 'collegiate', title: 'Collegiate', gradient: 'from-[#1a3a5c] to-[#0f1b2d]' },
  { id: 'k12', title: 'K-12', gradient: 'from-[#0f1b2d] to-[#c8a555]' },
  { id: 'religious', title: 'Religious', gradient: 'from-[#1a9aaa] to-[#0f1b2d]' },
  { id: 'performing-arts', title: 'Performing Arts', gradient: 'from-[#0f1b2d] via-[#1a3a5c] to-[#c8a555]' },
  { id: 'convention', title: 'Convention Facilities', gradient: 'from-[#c8a555] to-[#0f1b2d]' },
  { id: 'corporate-gov', title: 'Corporate & Government', gradient: 'from-[#0f1b2d] to-[#1a3a5c]' },
  { id: 'healthcare', title: 'Healthcare', gradient: 'from-[#1a9aaa] to-[#1a3a5c]' },
  { id: 'museums', title: 'Museums', gradient: 'from-[#0f1b2d] via-[#c8a555] to-[#1a3a5c]' },
  { id: 'studios', title: 'Studios', gradient: 'from-[#1a3a5c] to-[#1a9aaa]' },
];

// ─── Team ───────────────────────────────────────────────────────
export interface TeamMemberData {
  id: string;
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export const teamMembers: TeamMemberData[] = [
  {
    id: 'richard-boner',
    name: 'Richard Boner',
    title: 'President',
    bio: 'Joined the firm in 1968 following studies in physics at the University of Texas. Attained distinction of Phi Beta Kappa honors and served a tour of duty with U.S. Naval Intelligence. Brings over 62 years of experience in acoustical consulting.',
    initials: 'RB',
  },
  {
    id: 'andy-miller',
    name: 'Andy Miller',
    title: 'Director, Austin Office & Acoustician',
    bio: 'Leads the Austin headquarters office, providing expert acoustical consulting services for projects across Texas and beyond.',
    initials: 'AM',
  },
  {
    id: 'bill-hammon',
    name: 'Bill Hammon',
    title: 'Director, Houston Office & AV Consultant',
    bio: 'Directs the Houston office and specializes in audiovisual system design, bringing comprehensive AV expertise to every project.',
    initials: 'BH',
  },
  {
    id: 'rob-lee',
    name: 'Rob Lee',
    title: 'Director, Dallas Office & Acoustician',
    bio: 'Leads the Dallas office, providing acoustical consulting and sound system design services throughout the North Texas region.',
    initials: 'RL',
  },
  {
    id: 'anthony-hardey',
    name: 'Anthony Hardey',
    title: 'Acoustician',
    bio: 'Provides expert acoustical consulting services, specializing in room acoustics, noise control, and sound system design.',
    initials: 'AH',
  },
];

// ─── Offices (Footer) ──────────────────────────────────────────
export interface Office {
  city: string;
  isHQ?: boolean;
  address: string;
  phone: string;
  email: string;
}

export const offices: Office[] = [
  {
    city: 'Austin',
    isHQ: true,
    address: '4006 Speedway, Austin, Texas 78751',
    phone: '512.476.3464',
    email: 'info@baiaustin.com',
  },
  {
    city: 'Dallas',
    address: '4099 McEwen Rd. Suite 560, Dallas, Texas 75244',
    phone: '214.584.6124',
    email: 'robert@baiaustin.com',
  },
  {
    city: 'Houston',
    address: '4726 Rainbow Run, Sugarland, Texas 77479',
    phone: '281.813.8518',
    email: 'bill@baiaustin.com',
  },
];

// ─── Social Links ───────────────────────────────────────────────
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { platform: 'Facebook', url: 'https://www.facebook.com/BAiAcousticsAV/?ref=settings', icon: 'facebook' },
  { platform: 'Instagram', url: 'https://www.instagram.com/bai_acousticsav/', icon: 'instagram' },
  { platform: 'Twitter', url: 'https://twitter.com/BAiAcousticsAV', icon: 'twitter' },
];

// ─── History Page Content ───────────────────────────────────────
export const historyContent = {
  openingQuote:
    'One of the world\'s leading experts on underwater sound defense and was twice recognized by the United States Government...',
  founding:
    'The firm of Boner Associates was founded by Dr. C.P. Boner in 1935. Active consultation in acoustics, noise control, and sound systems for buildings.',
  specialties: [
    'Building acoustics',
    'Building noise control',
    'Sound reinforcement system design',
    'Site testing and equalization',
    'Audio and Video systems design',
  ],
  drBoner: {
    career: [
      'Maintained active consulting alongside duties at University of Texas at Austin',
      'Professor of Physics',
      'Adjunct Professor for the College of Architecture',
      'Chairman of the College of Arts and Sciences',
      'Vice President for Academic Affairs',
      'Founded and served as Director of Applied Research Laboratories and Defense Research Laboratories',
      'Established Office of Sponsored Projects, serving as executive director',
      'World-leading expert on underwater sound defense',
      'Twice recognized by US Government for work on anti-submarine weapons and special torpedoes',
      'Contributions to naval ordinance development',
      'Served as president of the Acoustical Society of America',
    ],
    succession:
      'Following his retirement as Professor Emeritus in 1970, Dr. C.P. Boner continued acoustical consulting and trained his sons, Charles Boner and Richard Boner (current Owners and Principal Consultants), until his death in 1979.',
  },
  charlesBoner: {
    bio: 'Joined the firm in 1961 in conjunction with studies in music at the University of Texas. French horn performance with Austin and San Antonio Symphony Orchestras.',
    research:
      'During the 1960s, the firm undertook comprehensive research into the behavior of sound systems in rooms, with focus on the feedback phenomenon. This research resulted in several patents. Most audio equalizers in use today are either direct or indirect outgrowths of the technology in those patents.',
  },
  richardBoner: {
    bio: 'Joined the firm in 1968, following studies in physics at the University of Texas. Attained distinction of Phi Beta Kappa honors. Served a tour of duty with U.S. Naval Intelligence.',
    interests:
      'Research continued in the area of electroacoustics. An avid opera enthusiast who has toured major European concert halls and opera houses.',
  },
  memberships: [
    'National Council of Acoustical Consultants',
    'Acoustical Society of America',
    'Audio Engineering Society',
    'Institute of Noise Control Engineering',
    'American Society of Heating, Refrigeration and Air Conditioning Engineers',
    'United States Institute of Theatre Technology',
    'Society of Motion Picture and Television Engineers',
  ],
};
