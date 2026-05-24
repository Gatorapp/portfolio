// Edit these placeholder fields to customize your portfolio.
// All data is consumed by components in /app and /components.

export const profile = {
  name: 'Amit Patel',
  role: 'Frontend Developer',
  location: 'Biloxi, MS',
  email: 'amit.p.patel79@gmail.com',
  phone: '(228) 424-3167',
  tagline:
    'I build responsive, performant, and accessible UIs with React, Next.js, and TypeScript — and I love teaching what I learn.',
  summary:
    'Web developer with hands-on experience building React/Next.js applications and mentoring other developers through Frontend Simplified. I integrate third-party APIs (OpenAI, Stripe, Firebase, Supabase) to solve real user problems and am actively growing toward full-stack and cloud-based roles.',
  resumeUrl: '/resume.pdf', // Drop your PDF resume at /public/resume.pdf
  available: true,
  heroImage: '/images/hero-portrait.webp',
  backgroundImage: '/images/code-bg.webp'
};

export const socials = [
  {
    label: 'GitHub',
    handle: '@Gatorapp',
    href: 'https://github.com/Gatorapp',
    icon: 'github'
  },
  {
    label: 'LinkedIn',
    handle: 'Amit Patel',
    href: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
    icon: 'linkedin'
  },
  {
    label: 'Email',
    handle: 'amit.p.patel79@gmail.com',
    href: 'mailto:amit.p.patel79@gmail.com',
    icon: 'mail'
  }
];

export const skills = {
  Languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python'],
  Frontend: [
    'React',
    'Next.js 14',
    'TailwindCSS',
    'Redux',
    'React Query',
    'React Hook Form',
    'Zustand'
  ],
  'Backend & Services': [
    'Firebase',
    'Supabase',
    'REST APIs',
    'Serverless Functions',
    'OpenAI Vision'
  ],
  'Tools & Platforms': [
    'Git',
    'GitHub',
    'Vite',
    'Vercel',
    'Netlify',
    'Figma',
    'Stripe',
    'Jest',
    'React Testing Library'
  ],
  Practices: [
    'Responsive Design',
    'Accessibility (WCAG)',
    'Performance Optimization',
    'CI/CD',
    'Testing'
  ]
};

export const experience = [
  {
    company: 'Nissan Hood',
    role: 'Frontend Developer (Freelance)',
    period: 'May 2026',
    description:
      'Built a real-time car dealership website with Next.js 14 and OpenAI Vision API. Responsive UI for vehicle pricing and appointment scheduling.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Lucide Icons']
  },
  {
    company: 'Skinstric AI',
    role: 'Frontend Engineer (Remote)',
    period: 'Sep 2024 — Present',
    description:
      'Built a real-time skin analysis web app using Next.js 14 and OpenAI Vision API. Designed reusable components, optimized rendering for sub-second responses, and collaborated through Git/GitHub pull requests.',
    stack: ['Next.js 14', 'TailwindCSS', 'OpenAI Vision', 'TypeScript']
  },
  {
    company: 'Frontend Simplified',
    role: 'Frontend Developer & Peer Mentor (Remote)',
    period: 'Mar 2024 — Present',
    description:
      'Selected as a peer mentor after ranking at the top of the cohort. Led workshops on code splitting, image optimization, and accessibility for 20+ students. Helped students deploy projects to Vercel/Netlify with automated pipelines.',
    stack: ['React', 'Next.js', 'TypeScript', 'GitHub', 'Vercel']
  }
];

export const projects = [
  {
    title: 'CarePulse',
    blurb: 'Hospital management web app with patient/admin views.',
    description:
      'Modern hospital interface that streamlines appointment scheduling and management. Implements role-based navigation, validation for overlapping bookings, and responsive layouts.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Tailwind'],
    image: '/images/cover-carepulse.webp',
    repo: 'https://github.com/Gatorapp/carepulse',
    demo: '#',
    featured: true
  },
  {
    title: 'Finance Tracker',
    blurb: 'SaaS dashboard for income, expenses, and categories.',
    description:
      'Tracks income/expenses, categorizes transactions, and visualizes financial health. Persistence with Supabase and clean filters with empty-state design.',
    tags: ['React', 'TypeScript', 'Supabase', 'Tailwind'],
    image: '/images/cover-finance.webp',
    repo: 'https://github.com/Gatorapp/finance',
    demo: '#',
    featured: true
  },
  {
    title: 'Skinstric AI',
    blurb: 'Real-time skin analysis with OpenAI Vision.',
    description:
      'Image upload, analysis pipeline, and recommendation cards. Optimized for sub-second perceived performance with smooth Framer Motion transitions.',
    tags: ['Next.js 14', 'OpenAI Vision', 'Framer Motion'],
    image: '/images/cover-skinstric.webp',
    repo: 'https://github.com/Gatorapp/skinstricai',
    demo: '#',
    featured: true
  },
  {
    title: 'Nissan B-Hood',
    blurb: 'Real-time dealership site with vehicle pricing and bookings.',
    description:
      'Built with Next.js 14 and OpenAI Vision API. Responsive UI for vehicle pricing, appointments, and dealership inventory.',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/images/cover-nissan.webp',
    repo: 'https://github.com/Gatorapp/NissanBHood',
    demo: '#',
    featured: false
  },
  {
    title: 'Workout Fitness',
    blurb: 'Fitness tracking app with exercise library and progress views.',
    description:
      'TypeScript fitness application with exercise tracking, progress visualizations, and responsive layouts.',
    tags: ['TypeScript', 'React', 'Tailwind'],
    image: '/images/cover-workout.webp',
    repo: 'https://github.com/Gatorapp/workout-fitness',
    demo: '#',
    featured: false
  },
  {
    title: 'Indian Store',
    blurb: 'E-commerce storefront with product catalog and cart.',
    description:
      'TypeScript e-commerce build with product browsing, cart management, and a responsive grid system.',
    tags: ['TypeScript', 'Next.js', 'Stripe'],
    image: '/images/cover-store.webp',
    repo: 'https://github.com/Gatorapp/Indian-Store',
    demo: '#',
    featured: false
  },
  {
    title: 'Spotified Clone',
    blurb: 'Spotify-inspired music UI clone.',
    description:
      'A music streaming interface clone built with TypeScript and React. Practice in component architecture and state-driven UIs.',
    tags: ['TypeScript', 'React', 'CSS'],
    image: '/images/cover-music.webp',
    repo: 'https://github.com/Gatorapp/Spotified-Clone',
    demo: '#',
    featured: false
  },
  {
    title: 'E-Commerce App',
    blurb: 'JavaScript storefront with product listing and cart.',
    description:
      'Self-directed e-commerce learning project covering listings, cart state, and checkout flow.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    image: '/images/cover-ecommerce.webp',
    repo: 'https://github.com/Gatorapp/E-Commerce-App',
    demo: '#',
    featured: false
  }
];

export const education = [
  {
    title: 'Frontend Simplified — Frontend Development Certificate',
    period: '2023 — Present',
    detail:
      'HTML/CSS, JavaScript, React, Next.js, UI/UX, responsive design, deployment, and real-world project work.'
  },
  {
    title: 'Coursera — Python for Everybody Specialization',
    period: 'Completed',
    detail:
      'University of Michigan. Python basics, data structures, web data, databases, and a visualization capstone.'
  },
  {
    title: 'Coursera — Python for Data Science, AI & Development',
    period: 'In progress',
    detail: 'Data science, AI fundamentals, databases, and accessing web data with Python.'
  }
];
