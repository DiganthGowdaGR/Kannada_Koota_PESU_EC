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
      name: 'Ganesh Hegde',
      role: 'Club Head',
      year: 2025,
      photo: '/DomainHeads/ganesh.JPG',
      linkedin: 'https://linkedin.com/in/priya-kumari',
      instagram: 'https://instagram.com/priya_k',
      // bio: 'Passionate about preserving and promoting Kannada culture. Leading the club with vision to connect students with their roots.'
    },
    {
      id: 'ch-2025-2', // Fixed: Changed from 'ch-2025-1' to 'ch-2025-2'
      name: 'Achyuth',
      role: 'Club Head',
      year: 2025,
      photo: '/DomainHeads/achyuth.JPG',
      linkedin: 'https://linkedin.com/in/priya-kumari',
      instagram: 'https://instagram.com/priya_k',
      // bio: 'Passionate about preserving and promoting Kannada culture. Leading the club with vision to connect students with their roots.'
    },
    {
      id: 'dh-2025-1',
      name: 'Sharath Gowda',
      role: 'Domain Head',
      domain: 'IT ',
      year: 2025,
      photo: '/DomainHeads/sharath.JPG',
      linkedin: 'https://linkedin.com/in/suresh-gowda',
      github: 'https://github.com/suresh-gowda',
      // bio: 'Organizing cultural events and workshops to showcase the rich heritage of Karnataka.'
    },
    {
      id: 'dh-2025-2',
      name: 'Kushal',
      role: 'Domain Head',
      domain: 'Evet',
      year: 2025,
      photo: '/DomainHeads/kushal.JPG',
      instagram: 'https://instagram.com/meera_rao',
      linkedin: 'https://linkedin.com/in/meera-rao',
      // bio: 'Managing our digital presence and creating engaging content to reach more students.'
    },
    {
      id: 'dh-2025-3',
      name: 'Suman',
      role: 'Domain Head', 
      domain: 'Logistic',
      year: 2025,
      photo: '/DomainHeads/suman.JPG',
      linkedin: 'https://linkedin.com/in/rajesh-naik',
      // bio: 'Ensuring transparent financial management and fundraising for club activities.'
    }
  ],
  2024: [
    {
      id: 'ch-2024-1',
      name: 'NA',
      role: 'Club Head',
      year: 2024,
      photo: '/api/placeholder/200/200',
      linkedin: 'https://linkedin.com/in/anitha-sharma',
      // bio: 'Former Club Head who established many successful cultural programs and increased club membership by 150%.'
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