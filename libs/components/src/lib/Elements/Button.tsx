import { FC, ReactNode } from 'react';

type ButtonProps = {
  className: string;
  children: ReactNode;
};

type Props = ButtonProps & JSX.IntrinsicElements['button'];

export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
