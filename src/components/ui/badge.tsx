import { useState } from 'react';

export default function BadgeContainer() {
  // Removed setIsVisible since it's not used
  const isVisible = true;
  
  const badges = [
    "Customer Support Intelligence",
    "Rec Engine",
    "AI Automations",
    "Cloud Solutions",
    "Data Engineering",
    "Product Analytics",
  ];

return (
    <div
        className={`flex flex-wrap mt-6 justify-items-center gap-4 transition-all duration-1000 delay-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
        {badges.map((badge, index) => (
            <BadgeWithFixedContainer key={index} text={badge} />
        ))}
    </div>
);
  
}

// This component uses a fixed-size container to prevent layout shifts
function BadgeWithFixedContainer({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center">
      {/* This container has fixed dimensions and doesn't change on hover */}
      <div className="w-full h-12 flex items-center justify-center">
        <BadgeContent text={text} />
      </div>
    </div>
  );
}

function BadgeContent({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span
      className={`
        inline-block
        px-4 py-2
        text-sm text-gray-300
        rounded-full 
        ${isHovered ? 'border-2 border-cyan-400' : 'border border-gray-700'}
        bg-white/20
        transition-all duration-150 ease-out
        ${isHovered ? 'shadow-lg shadow-cyan-500/20 z-10' : ''}
      `}
      style={{
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transformOrigin: 'center',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}