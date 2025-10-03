import { useState } from 'react';
import { Button } from '@/components/ui/button';
import EventCard from '@/components/EventCard';
import { events, getUpcomingEvents, getPastEvents } from '@/lib/data/events';
import { Calendar, Filter } from 'lucide-react';

type FilterType = 'all' | 'upcoming' | 'past';

export default function Events() {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  
  const getFilteredEvents = () => {
    switch (filter) {
      case 'upcoming':
        return upcomingEvents;
      case 'past':
        return pastEvents;
      default:
        return events;
    }
  };

  const filteredEvents = getFilteredEvents();
  const featuredEvent = upcomingEvents[0]; // First upcoming event as featured

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-primary-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 text-primary">
              <Calendar className="h-8 w-8" />
              <h1 className="text-4xl md:text-6xl font-bold">
                ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳು
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join us in celebrating Kannada culture through various events, workshops, and community gatherings
            </p>
            <p className="text-base text-muted-foreground kannada-text">
              ನಮ್ಮ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">Filter Events:</span>
            </div>
            <div className="flex space-x-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
              >
                All Events ({events.length})
              </Button>
              <Button
                variant={filter === 'upcoming' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('upcoming')}
              >
                Upcoming ({upcomingEvents.length})
              </Button>
              <Button
                variant={filter === 'past' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('past')}
              >
                Past Events ({pastEvents.length})
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && filter !== 'past' && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Featured Event
            </h2>
            <div className="animate-fade-in-up">
              <EventCard event={featuredEvent} featured={true} />
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              {filter === 'upcoming' ? 'Upcoming Events' : 
               filter === 'past' ? 'Past Events' : 'All Events'}
            </h2>
            <div className="text-sm text-muted-foreground">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
              {filteredEvents.map((event) => (
                // Skip featured event in the grid if showing all or upcoming
                (featuredEvent && event.id === featuredEvent.id && filter !== 'past') ? null : (
                  <EventCard key={event.id} event={event} />
                )
              )).filter(Boolean)}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No events found
              </h3>
              <p className="text-muted-foreground">
                {filter === 'upcoming' 
                  ? "We're planning some exciting events. Stay tuned!"
                  : filter === 'past'
                  ? "No past events to display yet."
                  : "No events available at the moment."
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Organize an Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have an idea for a cultural event or workshop? We'd love to hear from you!
          </p>
          <Button className="btn-hero" size="lg" asChild>
            <a href="/contact">Get in Touch</a>
          </Button>
        </div>
      </section>
    </div>
  );
}