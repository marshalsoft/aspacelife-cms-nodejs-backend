const AvatarIcon = ({ initials = "AB", size = "48" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="rounded-full bg-blue-500"
      >
        <circle cx="50" cy="50" r="48" fill="#4F46E5" />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="30"
          fontWeight="bold"
          fill="white"
        >
          {initials}
        </text>
      </svg>
    );
  };
  
  export default AvatarIcon;