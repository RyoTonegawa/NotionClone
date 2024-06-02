import React, { ReactNode } from 'react';
import Navbar from './_components/navbar';

const marketingLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-full">
        <Navbar/>
      <main className="h-full pt-40">
        {children}
      </main>
    </div>
  );
};

export default marketingLayout;
