export interface Event {
  id: string;
  title: string;
  date: string; // ISO date
  status: 'upcoming' | 'past';
  teaser: string; // short explanation
  image: string;
  // fullDescription: string;
  location?: string;
  gallery?: string[];
}

export const events: Event[] = [
  {
    id: '1',
    title: 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ Celebration 2024',
    date: '2025-05-15',
    status: 'upcoming',
    teaser: 'Join us for a grand celebration of Karnataka Formation Day with cultural performances, traditional food, and community gathering.',
    image: 'Events/202k 1.png',
    // fullDescription: 'Kannada Rajyotsava is one of our most cherished celebrations. This year, we are organizing a magnificent event featuring:\n\n• Traditional Kannada folk dances and music performances\n• Classical dance recitals by club members\n• Poetry recitation in Kannada\n• Traditional Karnataka cuisine\n• Games and activities for all age groups\n• Cultural quiz competition\n\nCome dressed in traditional attire and be part of this wonderful celebration of our heritage and culture.',
    location: 'PES University EC MRD',
    gallery: [
     "Events/BK1.png",
     "Events/BK2.png",
     "Events/BK3.png",
    ]
  },
  {
    id: '2',
    title: 'Kannada Koota X Rotaract',
    date: '2025-09-03',
    status: 'past',
    teaser: 'Learn Kannada with us in a fun and engaging way through games, drama, and interactive activities. It’s all about enjoying the language while building connections and culture.',
    image: '/Events/KKEC X RT 1.JPG',
    location: 'Seminar Hall 2',
    gallery: [
      '/Events/KKEC X RT 4.JPG',
      '/Events/KKEC X RT 3.JPG',
      '/Events/KKEC X RT 2.JPG'
    ]
  },
  {
    id: '3',
    title: 'Quadrangle Dance',
    date: '2025-09-10',
    status: 'past',
    teaser: 'We performed a lively dance in the quadrangle to welcome the new students and showcase our rich Kannada culture. It was a joyful way to bring our community together and share the spirit of unity.',
    image: '/Events/KKEC DC 1.jpg',
    location: 'Quadrangle PES EC',
    gallery: [
      '/Events/KKEC DC 2.jpg',
      '/Events/KKEC DC 3.png',
      '/Events/KKEC DC 5.png',
        ]
  },
];

export const getUpcomingEvents = () => events.filter(event => event.status === 'upcoming');
export const getPastEvents = () => events.filter(event => event.status === 'past');
export const getEventById = (id: string) => events.find(event => event.id === id);