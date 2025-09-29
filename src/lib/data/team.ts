export interface Member {
  id: string;
  name: string;
  role: 'Club Head' | 'Domain Head' | 'Member';
  domain?: string; // for domain heads
  year: number;
  photo: string;
  linkedin?: string;
  instagram?: string;
  github?: string;
  bio?: string;
}

export const teamData: Record<number, Member[]> = {
  2025: [
    {
      id: 'ch-2025-1',
      name: 'Ganesh Hegde / ಗಣೇಶ್ ಹೆಗಡೆ',
      role: 'Club Head',
      year: 2025,
      photo: '/DomainHeads/ganesh.JPG',
    },
    {
      id: 'ch-2025-2', 
      name: 'Achyuth / ಅಚ್ಯುತ',
      role: 'Club Head',
      year: 2025,
      photo: '/DomainHeads/achyuth.JPG',
      linkedin: 'https://www.linkedin.com/in/achyuth-h/',
      instagram: 'https://www.instagram.com/_achyuth___/',
    },
    {
      id: 'dh-2025-1',
      name: 'Sharath Gowda / ಶರತ್ ಗೌಡ',
      role: 'Domain Head',
      domain: 'IT / ಐಟಿ',
      year: 2025,
      photo: '/DomainHeads/sharath.JPG',
      linkedin: 'https://www.linkedin.com/in/sharath-gowda-g-r-372832281/',
      github: 'https://github.com/DiganthGowdaGR',
      instagram: 'https://www.instagram.com/diganth_gr/',
    },
    {
      id: 'dh-2025-2',
      name: 'Kushal / ಕುಶಾಲ್',
      role: 'Domain Head',
      domain: 'Event / ಈವೆಂಟ್',
      year: 2025,
      photo: '/DomainHeads/kushal.JPG',
      linkedin: 'https://www.linkedin.com/in/kushal-toragal',
    },
    {
      id: 'dh-2025-3',
      name: 'Suman / ಸುಮನ್',
      role: 'Domain Head', 
      domain: 'Logistics / ಲಾಜಿಸ್ಟಿಕ್ಸ್',
      year: 2025,
      photo: '/DomainHeads/suman.JPG',
      linkedin: 'https://www.linkedin.com/in/suman-kumar-k-r-0a4837304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/suman_kumar_k_r?igsh=MTJ4czN6ZjFzeWh0aQ==',
    },
    {
      id: 'dh-2025-4',
      name: 'Sumana / ಸುಮನಾ',
      role: 'Domain Head', 
      domain: 'Cultural / ಸಾಂಸ್ಕೃತಿಕ',
      year: 2025,
      photo: '/DomainHeads/sumana.JPG',
      instagram: 'https://www.instagram.com/sumana_ag?igsh=MW5kdXg2N2tkdnE0bg%3D%3D&utm_source=qr',
      linkedin: 'https://www.linkedin.com/in/sumana-a-g-7862ba360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 'dh-2025-5',
      name: 'Rohan / ರೋಹನ್',
      role: 'Domain Head', 
      domain: 'Cultural / ಸಾಂಸ್ಕೃತಿಕ',
      year: 2025,
      photo: '/DomainHeads/rohan.JPG',
      instagram: 'https://www.instagram.com/rohan134v?igsh=MWcxeXdnYzVkbW1tag==',
      linkedin: 'https://www.linkedin.com/in/rohan-a09b11298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      id: 'dh-2025-6',
      name: 'Ananya Satish / ಅನನ್ಯ ಸತೀಶ್',
      role: 'Domain Head', 
      domain: 'Cultural / ಸಾಂಸ್ಕೃತಿಕ',
      year: 2025,
      photo: '/DomainHeads/ananya.JPG',
      instagram: 'https://www.instagram.com/ananya.satish_?igsh=Z3NxMnF5M29hYzh6&utm_source=qr',
      linkedin: 'http://linkedin.com/in/ananya-satish-31b465323',
    },
    {
      id: 'dh-2025-7',
      name: 'Siri Basavaraj / ಸಿರಿ ಬಸವರಾಜ್',
      role: 'Domain Head', 
      domain: 'Hospitality / ಅತಿಥಿ ಸತ್ಕಾರ',
      year: 2025,
      photo: '/DomainHeads/siri.JPG',
      linkedin: 'https://www.linkedin.com/in/siri-basavaraj/',
    },
    {
      id: 'dh-2025-8',
      name: 'Preksha / ಪ್ರೇಕ್ಷಾ',
      role: 'Domain Head', 
      domain: 'Marketing / ಮಾರ್ಕೆಟಿಂಗ್',
      year: 2025,
      photo: '/DomainHeads/preksha.JPG',
      instagram: 'https://www.instagram.com/prekshaa__._?igsh=OTl4eHBhbW5ubzJq',
      linkedin: 'http://www.linkedin.com/in/preksha-prakash-',
    },
    {
      id: 'dh-2025-9',
      name: 'Kavan Reddy / ಕವನ್ ರೆಡ್ಡಿ',
      role: 'Domain Head', 
      domain: 'Media / ಮೀಡಿಯಾ',
      year: 2025,
      photo: '/DomainHeads/kavan.JPG',
      instagram: 'https://www.instagram.com/_kavan_reddy?igsh=MXN3MnRqYW9iMTd5aQ==',
    },
    {
      id: 'dh-2025-10',
      name: 'Vinay Katnur / ವಿನಯ ಕಟ್ಟನೂರು',
      role: 'Domain Head', 
      domain: 'Sponsorship / ಪ್ರಾಯೋಜಕತ್ವ',
      year: 2025,
      photo: '/DomainHeads/vinay.JPG',
    },
    {
      id: 'dh-2025-11',
      name: 'Chitra Madarakhandi / ಚಿತ್ರಾ ಮದರಖಂಡಿ',
      role: 'Domain Head', 
      domain: 'Content Writing / ವಿಷಯ ಬರವಣಿಗೆ',
      year: 2025,
      photo: '/DomainHeads/chitra.JPG',
      linkedin: 'https://www.linkedin.com/in/chitra-madarakhandi-15b8162a0',
      instagram: 'https://www.instagram.com/chitramadarakhandi?igsh=N21kZzlha2Z1eXBv',
    },
    {
      id: 'dh-2025-12',
      name: 'Srujan Kashyap / ಸೃಜನ ಕಾಶ್ಯಪ್',
      role: 'Domain Head', 
      domain: 'Operations / ಕಾರ್ಯಾಚರಣೆಗಳು',
      year: 2025,
      photo: '/DomainHeads/srujan.JPG',
      linkedin: 'https://www.linkedin.com/in/srujan-kashyap-s-610944282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      instagram: 'https://www.instagram.com/srujan.kashyap._?igsh=bnUwZG5xOXgyZnpq',
    },
  ],
  2024: [
    {
      id: 'ch-2024-1',
      name: 'NA',
      role: 'Club Head',
      year: 2024,
      photo: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/anitha-sharma',
    }
  ]
};

// Rest of your functions remain the same...
export const getTeamByYear = (year: number): Member[] => {
  return teamData[year] || [];
};

export const getAllYears = (): number[] => {
  return Object.keys(teamData).map(year => parseInt(year)).sort((a, b) => b - a);
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

export const getClubHeads = (year: number): Member[] => {
  const team = getTeamByYear(year);
  return team.filter(member => member.role === 'Club Head');
};

export const getDomainHeads = (year: number): Member[] => {
  const team = getTeamByYear(year);
  return team.filter(member => member.role === 'Domain Head');
};

export const getMembers = (year: number): Member[] => {
  const team = getTeamByYear(year);
  return team.filter(member => member.role === 'Member');
};
