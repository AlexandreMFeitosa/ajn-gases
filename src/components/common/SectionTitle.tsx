

type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
return (
  <h2 className="mb-8 text-center text-3xl font-bold">
    {children}
  </h2>
)
}

export default SectionTitle