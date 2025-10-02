export interface Faculty {
  id: string;
  name: string;
  title: string;
  mainSubject: string;
  secondarySubject: string;
  bio: string;
  quote: string;
  image: string;
}

export const facultyData: Faculty[] = [
  {
    id: 'yogesh-kochar',
    name: 'Yogesh Kochar',
    title: 'Founder & English Faculty',
    mainSubject: 'Yogesh Kochar Sir',
    secondarySubject: 'English (IX-XII)',
    bio: '20+ years experience, 6500+ students, 200+ toppers. Known for motivational teaching and transforming English proficiency.',
    quote: "Education is not preparation for life; education is life itself.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=600&fit=crop',
  },
  {
    id: 'akshay-sir',
    name: 'Akshay Sir',
    title: 'Mathematics & Science Faculty',
    mainSubject: 'Akshay Sir',
    secondarySubject: 'Mathematics & Science (IX-X)',
    bio: 'Simplifies complex Math & Science concepts with practical clarity and innovative teaching methods.',
    quote: "Mathematics is not about numbers, equations, or algorithms: it is about understanding.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  {
    id: 'vikash-sir',
    name: 'Vikash Sir',
    title: 'Economics & Political Science Faculty',
    mainSubject: 'Vikash Sir',
    secondarySubject: 'Economics & Political Science (XI-XII)',
    bio: 'Makes economic theories relatable and exam-ready with real-world examples and case studies.',
    quote: "Economics is everywhere and understanding economics can help you make better decisions.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
  },
  {
    id: 'pradeep-sir',
    name: 'Pradeep Sir',
    title: 'Social Science Faculty',
    mainSubject: 'Pradeep Sir',
    secondarySubject: 'Social Science (IX-X)',
    bio: 'Transforms history & civics into engaging stories that students remember and understand deeply.',
    quote: "History is not a burden on the memory but an illumination of the soul.",
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=600&fit=crop',
  },
  {
    id: 'jhankar-maam',
    name: 'Jhankar Ma\'am',
    title: 'Business Studies Faculty',
    mainSubject: 'Jhankar Ma\'am',
    secondarySubject: 'Business Studies (XI-XII)',
    bio: 'Teaches business concepts with real-world examples, making commerce subjects practical and interesting.',
    quote: "Business is not just about profit, it's about creating value for society.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
  },
  {
    id: 'jaskeerat-maam',
    name: 'Jaskeerat Ma\'am',
    title: 'Psychology Faculty',
    mainSubject: 'Jaskeerat Ma\'am',
    secondarySubject: 'Psychology (XI-XII)',
    bio: 'Blends psychology theories with real-life understanding, making the subject fascinating and applicable.',
    quote: "Psychology is the study of the mind, but teaching it is the art of touching hearts.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=600&fit=crop',
  }
];
