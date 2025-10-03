import { useState } from 'react';
import TeamYearToggle from '@/components/TeamYearToggle';
import TeamCard from '@/components/TeamCard';
import { 
  getAllYears, 
  getCurrentYear, 
  getTeamByYear, 
  getClubHeads, 
  getDomainHeads, 
  getMembers 
} from '@/lib/data/team';
import { Users, Award, Heart } from 'lucide-react';

export default function Team() {
  const availableYears = getAllYears();
  const [selectedYear, setSelectedYear] = useState(getCurrentYear());
  
  const currentTeam = getTeamByYear(selectedYear);
  const clubHeads = getClubHeads(selectedYear);
  const domainHeads = getDomainHeads(selectedYear);
  const members = getMembers(selectedYear);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-accent-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 text-accent">
              <Users className="h-8 w-8" />
              <h1 className="text-4xl md:text-6xl font-bold">
                ನಮ್ಮ ತಂಡ
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals who work tirelessly to preserve and celebrate Kannada culture
            </p>
            <p className="text-base text-muted-foreground kannada-text">
              ನಮ್ಮ ತಂಡದ ಸದಸ್ಯರನ್ನು ಭೇಟಿಯಾಗಿ
            </p>
          </div>
        </div>
      </section>

      {/* Team Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Year Toggle */}
          <TeamYearToggle
            years={availableYears}
            selectedYear={selectedYear}
            onChange={setSelectedYear}
          />

          {currentTeam.length > 0 ? (
            <div className="space-y-12 animate-fade-in-up">
              {/* Club Heads Section */}
              {clubHeads.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Award className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">Club Leadership</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {clubHeads.map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}

              {/* Domain Heads Section */}
              {domainHeads.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Users className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-bold text-foreground">Domain Heads</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {domainHeads.map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}

              {/* Members Section */}
              {members.length > 0 && (
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <Heart className="h-6 w-6 text-success" />
                    <h3 className="text-2xl font-bold text-foreground">Team Members</h3>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {members.map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No team data available
              </h3>
              <p className="text-muted-foreground">
                Team information for {selectedYear} is not available yet.
              </p>
            </div>
          )}

          {/* Join Us CTA */}
          <div className="mt-16 text-center py-12 bg-primary-muted rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ನಮ್ಮ ತಂಡಕ್ಕೆ ಸೇರಲು ಬಯಸುವಿರಾ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who want to contribute to preserving and celebrating Kannada culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-hero inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                ಪ್ರಶ್ನೆಗಳಿದೆಯೆ?
              </a>
              <a
                href="/events"
                className="btn-accent inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}