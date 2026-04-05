export const Grid3DBackground = () => {
  return (
    <>
      {/* CSS Grid Background */}
      <div className="absolute inset-0 h-full w-full opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />

        {/* Animated scan lines */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, transparent 0%, rgba(0, 255, 65, 0.1) 50%, transparent 100%)',
            animation: 'scanline 8s linear infinite',
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary-500 opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};
