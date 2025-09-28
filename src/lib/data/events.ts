export interface Event {
  id: string;
  title: string;
  date: string; // ISO date
  status: 'upcoming' | 'past';
  teaser: string; // short explanation
  image: string;
  fullDescription: string;
  location?: string;
  gallery?: string[];
}

export const events: Event[] = [
  {
    id: '1',
    title: 'ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ Celebration 2025',
    date: '2025-01-15T18:00:00Z',
    status: 'upcoming',
    teaser: 'Join us for a grand celebration of Karnataka Formation Day with cultural performances, traditional food, and community gathering.',
    image: '/Events/E1.jpg',
    fullDescription: 'Kannada Rajyotsava is one of our most cherished celebrations. This year, we are organizing a magnificent event featuring:\n\n• Traditional Kannada folk dances and music performances\n• Classical dance recitals by club members\n• Poetry recitation in Kannada\n• Traditional Karnataka cuisine\n• Games and activities for all age groups\n• Cultural quiz competition\n\nCome dressed in traditional attire and be part of this wonderful celebration of our heritage and culture.',
    location: 'PES University Main Auditorium',
    gallery: [
      '/Events/E1.jpg',
      '/Events/E1.jpg',
      '/Events/E1.jpg'
    ]
  },
  {
    id: '2',
    title: 'Kannada Poetry Workshop',
    date: '2025-02-20T16:00:00Z',
    status: 'upcoming',
    teaser: 'Learn the art of Kannada poetry writing with renowned poet Shri Chandrashekar Patil.',
    image: '/Events/E1.jpg',
    fullDescription: 'An exclusive workshop on Kannada poetry writing and recitation. Participants will learn:\n\n• Basics of Kannada meter and rhythm\n• Traditional forms like Vachana and Ragale\n• Modern Kannada poetry techniques\n• Performance and recitation skills\n\nAll skill levels welcome. Workshop materials will be provided.',
    location: 'Library Seminar Hall',
  },
  {
    id: '3',
    title: 'Mysore Dasara Cultural Program',
    date: '2024-10-15T19:00:00Z',
    status: 'past',
    teaser: 'Successfully celebrated Mysore Dasara with traditional dances, music, and delicious Karnataka cuisine.',
    image: '/Events/E1.jpg',
    fullDescription: 'Our Mysore Dasara celebration was a grand success with over 200 participants. The event featured:\n\n• Bharatanatyam and Kuchipudi performances\n• Traditional Dollu Kunitha drum dance\n• Mysore style classical music concert\n• Exhibition of Karnataka handicrafts\n• Traditional feast with Mysore Pak and other delicacies\n\nThanks to all volunteers and participants who made this event memorable.',
    location: 'University Central Lawn',
    gallery: [
      '/Events/E1.jpg',
      '/Events/E1.jpg',
      '/Events/E1.jpg',
      '/Events/E1.jpg'
    ]
  },
  {
    id: '4',
    title: 'Kannada Film Screening - "Kantara"',
    date: '2024-09-28T18:30:00Z',
    status: 'past',
    teaser: 'Special screening of the acclaimed Kannada film followed by discussion with film critics.',
    image: '/Events/E1.jpg',
    fullDescription: 'We organized a special screening of the critically acclaimed Kannada film "Kantara" followed by an engaging discussion session. The event included:\n\n• Film screening in the main auditorium\n• Post-screening discussion with local film critic\n• Insights into Kannada cinema industry\n• Cultural significance of the film\n• Interactive Q&A session\n\nThe event was attended by 150+ students and faculty members.',
    location: 'Main Auditorium'
  },
  {
    id: '5',
    title: 'Traditional Cooking Workshop',
    date: '2024-08-20T14:00:00Z',
    status: 'past',
    teaser: 'Learn to cook authentic Karnataka dishes with our expert home chefs.',
    image: '/Events/E1.jpg',
    fullDescription: 'A hands-on cooking workshop where participants learned to prepare traditional Karnataka dishes:\n\n• Bisi Bele Bath preparation\n• Making perfect Mysore Masala Dosa\n• Traditional Payasam varieties\n• Spice grinding techniques\n• Food presentation and serving\n\nAll participants received recipe cards and ingredient lists to recreate dishes at home.',
    location: 'Home Science Department Kitchen'
  }
];

export const getUpcomingEvents = () => events.filter(event => event.status === 'upcoming');
export const getPastEvents = () => events.filter(event => event.status === 'past');
export const getEventById = (id: string) => events.find(event => event.id === id);