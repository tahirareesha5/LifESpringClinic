const Logo = ({ variant = 'default', className = '' }) => {
  const isWhite = variant === 'white';
  
  return (
    <div className={`logo flex items-center ${className}`}>
      <svg 
        width="180" 
        height="48" 
        viewBox="0 0 180 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg transition-transform duration-300 hover:scale-[1.02] md:w-[150px] md:h-10"
      >
        <g className="logo-icon">
          <path 
            d="M24 4C24 4 8 12 8 28C8 36.8366 15.1634 44 24 44C32.8366 44 40 36.8366 40 28C40 12 24 4 24 4Z" 
            fill={isWhite ? '#FFFFFF' : '#2E8B7D'}
            fillOpacity="0.15"
          />
          <path 
            d="M24 8C24 8 12 14 12 28C12 34.6274 17.3726 40 24 40C30.6274 40 36 34.6274 36 28C36 14 24 8 24 8Z" 
            fill={isWhite ? '#FFFFFF' : '#2E8B7D'}
            fillOpacity="0.3"
          />
          <path d="M24 12V36" stroke={isWhite ? '#FFFFFF' : '#2E8B7D'} strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 20C20 22 17 26 17 30" stroke={isWhite ? '#FFFFFF' : '#2E8B7D'} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 20C28 22 31 26 31 30" stroke={isWhite ? '#FFFFFF' : '#2E8B7D'} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 26C21 27 19 29 18 32" stroke={isWhite ? '#FFFFFF' : '#2E8B7D'} strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 26C27 27 29 29 30 32" stroke={isWhite ? '#FFFFFF' : '#2E8B7D'} strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="24" cy="10" r="3" fill={isWhite ? '#FFFFFF' : '#4BA89A'}/>
          <path 
            d="M24 16C22.5 14.5 20 14.5 19 16C18 17.5 18 19.5 24 24C30 19.5 30 17.5 29 16C28 14.5 25.5 14.5 24 16Z" 
            fill={isWhite ? '#FFFFFF' : '#F4A460'}
          />
        </g>
        <g className="logo-text">
          <text x="50" y="26" fontFamily="'Playfair Display', Georgia, serif" fontSize="18" fontWeight="600" fill={isWhite ? '#FFFFFF' : '#2D3748'}>
            Life<tspan fill={isWhite ? '#FFFFFF' : '#2E8B7D'}>Spring</tspan>
          </text>
          <text x="50" y="40" fontFamily="'Inter', sans-serif" fontSize="10" fontWeight="500" fill={isWhite ? 'rgba(255,255,255,0.85)' : '#718096'} letterSpacing="0.1em">
            HEALTH CLINIC
          </text>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
