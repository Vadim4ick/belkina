import { cn } from "../lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto h-full w-full max-w-[1375px] px-4", className)}>
      {children}
    </div>
  );
};

export { Container };
