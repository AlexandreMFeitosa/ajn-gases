type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  
  const variantStyles = {
    primary: "bg-[#123b63] hover:bg-[#0b2947] text-white",
    secondary: "bg-transparent border border-[#123b63] text-[#123b63] hover:bg-[#123b63] hover:text-white",
  };

  const baseStyles = "px-6 py-3 rounded font-medium transition-colors cursor-pointer inline-flex items-center justify-center";

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}