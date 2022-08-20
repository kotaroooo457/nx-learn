import React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  className = 'mx-auto w-3/4',
}) => {
  return <main className={className}>{children}</main>;
};
