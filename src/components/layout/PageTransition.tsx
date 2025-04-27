
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div 
      className="min-h-screen pt-20 animate-fade-in"
    >
      {children}
    </div>
  );
};

export default PageTransition;
