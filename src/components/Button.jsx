/** @format */

export default function Button({
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types, no-unused-vars
  type = 'button',
  // eslint-disable-next-line react/prop-types
  bgColor = 'bg-blue-600',
  // eslint-disable-next-line react/prop-types
  textColor = 'text-white',
  // eslint-disable-next-line react/prop-types
  className = '',
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
      {/* {children} as a text used */}
    </button>
  );
}
