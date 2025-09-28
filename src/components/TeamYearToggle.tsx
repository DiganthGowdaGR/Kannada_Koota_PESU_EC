import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect } from 'react';

interface TeamYearToggleProps {
  years: number[];
  selectedYear: number;
  onChange: (year: number) => void;
}

export default function TeamYearToggle({ years, selectedYear, onChange }: TeamYearToggleProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Scroll to selected year on mount or when selectedYear changes
    const selectedButton = document.querySelector(`[data-year="${selectedYear}"]`);
    if (selectedButton && scrollContainerRef.current) {
      selectedButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedYear]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-8">
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-bold text-foreground">Team</h2>
        <span className="text-muted-foreground">Year:</span>
      </div>

      <div className="flex items-center space-x-2 flex-1 min-w-0">
        {/* Left Scroll Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex w-8 h-8 p-0 rounded-full flex-shrink-0"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        {/* Year Buttons Container */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto scrollbar-thin flex-1 py-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {years.map((year) => (
            <Button
              key={year}
              data-year={year}
              variant={selectedYear === year ? 'default' : 'outline'}
              size="sm"
              onClick={() => onChange(year)}
              className={`relative whitespace-nowrap flex-shrink-0 ${
                selectedYear === year 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'hover:bg-surface'
              }`}
            >
              {year}
              {year === currentYear && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  •
                </span>
              )}
            </Button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <Button
          variant="outline"
          size="sm"
          className="hidden sm:flex w-8 h-8 p-0 rounded-full flex-shrink-0"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Year Info */}
      <div className="hidden lg:block text-sm text-muted-foreground">
        {selectedYear === currentYear && (
          <span className="flex items-center space-x-1">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            <span>Current Year</span>
          </span>
        )}
      </div>
    </div>
  );
}