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
    mainSubject: 'English Expert',
    secondarySubject: 'Classes IX-XII',
    bio: '20+ years of teaching excellence with 6500+ successful students and 200+ board toppers. Renowned for motivational teaching style and transforming English proficiency through innovative methods.',
    quote: "Education is not preparation for life; education is life itself.",
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'akshay-sir',
    name: 'Akshay Kumar',
    title: 'Mathematics & Science Faculty',
    mainSubject: 'Mathematics & Science',
    secondarySubject: 'Classes IX-X',
    bio: 'Expert in simplifying complex mathematical and scientific concepts with practical applications. Known for making students fall in love with numbers and scientific reasoning.',
    quote: "Mathematics is not about numbers, equations, or algorithms: it is about understanding.",
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  },
  {
    id: 'vikash-sir',
    name: 'Vikash Sharma',
    title: 'Economics & Political Science Faculty',
    mainSubject: 'Economics & Political Science',
    secondarySubject: 'Classes XI-XII',
    bio: 'Transforms abstract economic theories into relatable real-world scenarios. Specializes in making board exams easier with strategic learning and comprehensive case study analysis.',
    quote: "Economics is everywhere and understanding economics can help you make better decisions.",
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'pradeep-sir',
    name: 'Pradeep Singh',
    title: 'Social Science Faculty',
    mainSubject: 'History & Civics',
    secondarySubject: 'Classes IX-X',
    bio: 'Master storyteller who brings history alive through engaging narratives and memorable mnemonics. Students remember concepts long after exams through his unique teaching methodology.',
    quote: "History is not a burden on the memory but an illumination of the soul.",
    image: 'https://images.pexels.com/photos/3824771/pexels-photo-3824771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'jhankar-maam',
    name: 'Jhankar Gupta',
    title: 'Business Studies Faculty',
    mainSubject: 'Business Studies & Accountancy',
    secondarySubject: 'Classes XI-XII',
    bio: 'Brings commerce subjects to life with practical business examples and industry insights. Excellent track record of helping students score 95+ in board exams through strategic preparation.',
    quote: "Business is not just about profit, it is about creating value for society.",
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  },
  {
    id: 'jaskeerat-maam',
    name: 'Jaskeerat Kaur',
    title: 'Psychology Faculty',
    mainSubject: 'Psychology',
    secondarySubject: 'Classes XI-XII',
    bio: 'Passionate about making psychology relatable through real-life applications and case studies. Creates an engaging classroom environment where students explore the fascinating world of human behavior.',
    quote: "Psychology is the study of the mind, but teaching it is the art of touching hearts.",
    image: 'https://images.pexels.com/photos/3756165/pexels-photo-3756165.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  }
];
