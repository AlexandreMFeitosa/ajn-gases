type ButtonProps = {
  children:React.ReactNode;
  variant?:"primary" | "secondary";
};

export function Button({
  children,
  variant = "primary",
}: ButtonProps) {
   
  const baseClasses = "rounded-lg px-4 py-2 font-medium transition-colors";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700" ,
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300"
};

return (
  <button className={`${baseClasses} ${variants[variant]}`}>
    {children}
  </button>
);
}


export default Button;
