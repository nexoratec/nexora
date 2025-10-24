const ScrollingBanner = () => {
  const items = [
    "FIBER DECORATOR",
    "CABLE TAMER",
    "APPLE AFICIONADO",
    "RECTANGLE ARTIST",
    "DIGITAL CRAFTSMAN",
    "SPEED INNOVATOR",
    "CONNECTION MASTER",
    "NETWORK ARCHITECT",
  ];

  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-8 sm:py-12 md:py-16">
      {/* Black banner positioned behind to create cross effect */}
      <div 
        className="overflow-hidden absolute top-1/2 left-0 right-0"
        style={{
          background: '#1a1a1a',
          transform: 'rotate(5deg) translateY(-50%)',
          transformOrigin: 'center',
          width: '140%',
          marginLeft: '-20%',
          padding: '24px 0',
          zIndex: 1
        }}
      ></div>
      
      {/* Tilted banner container */}
      <div 
        className="overflow-hidden relative"
        style={{
          background: '#FF4500',
          transform: 'rotate(-3.5deg)',
          transformOrigin: 'center',
          width: '140%',
          marginLeft: '-20%',
          padding: '12px 0',
          zIndex: 2
        }}
      >
        {/* Inner content rotated back to be straight */}
        <div 
          className="flex animate-scroll-left whitespace-nowrap"
          style={{ transform: 'rotate(3.5deg)' }}
        >
          {duplicatedItems.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-4 sm:mx-6 md:mx-8 text-white font-bebas text-base sm:text-xl md:text-2xl lg:text-3xl tracking-widest"
            >
              {item}
              <span className="mx-4 sm:mx-6 md:mx-8 text-xl sm:text-2xl md:text-3xl opacity-70">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;
