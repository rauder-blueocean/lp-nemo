interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const Button = ({ 
  type = 'button', 
  children, 
  onClick, 
  className = '',
  disabled = false 
}: ButtonProps) => {
  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-primary text-white h-[45px] rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

