import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Event } from '@/lib/data/events';

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export default function EventCard({ event, featured = false }: EventCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // hour: '2-digit',
      // minute: '2-digit'
    });
  };

  const getStatusStyles = () => {
    if (event.status === 'upcoming') {
      return 'bg-success text-success-foreground';
    }
    return 'bg-muted text-muted-foreground';
  };

  const cardClasses = featured 
    ? 'card-elevated lg:col-span-2 bg-gradient-to-br from-card to-primary-muted' 
    : 'card-elevated card-hover';

  return (
    <div className={cardClasses}>
      <div className={`p-6 ${featured ? 'lg:flex lg:space-x-6' : ''}`}>
        {/* Image */}
        <div className={`relative overflow-hidden rounded-lg ${featured ? 'lg:w-1/2' : ''}`}>
          <img
            src={event.image}
            alt={event.title}
            className={`w-full object-cover transition-transform duration-300 group-hover:scale-105 ${featured ? 'h-64 lg:h-80' : 'h-48'}`}
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/api/placeholder/600/400';
            }}
          />
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
              {event.status === 'upcoming' ? 'Upcoming' : 'Past Event'}
            </span>
          </div>
          {featured && (
            <div className="absolute top-3 left-3">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                Featured Event
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={`${featured ? 'lg:w-1/2 mt-4 lg:mt-0' : 'mt-4'} space-y-4`}>
          <div>
            <h3 className={`font-bold text-foreground leading-tight ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
              {event.title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(event.date)}</span>
              </div>
              {event.location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              )}
            </div>
          </div>

          <p className={`text-muted-foreground leading-relaxed ${featured ? 'text-lg' : ''}`}>
            {event.teaser}
          </p>

          {/* Expandable Details */}
          <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-4 border-t border-border space-y-4">
              {/* <div>
                <h4 className="font-semibold text-foreground mb-2">Event Details</h4>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {event.fullDescription.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-2 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div> */}

              {/* Gallery Preview */}
              {event.gallery && event.gallery.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Gallery</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {event.gallery.slice(0, 6).map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-20 object-cover rounded border hover:opacity-80 transition-opacity cursor-pointer"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/api/placeholder/200/150';
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              size="sm"
              className="flex items-center space-x-1"
            >
              <span>{isExpanded ? 'Show Less' : 'Read More'}</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
            
            {/* {event.status === 'upcoming' && (
              <Button size="sm" className="btn-accent flex items-center space-x-1">
                <span>Register</span>
                <ExternalLink className="h-3 w-3" />
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}