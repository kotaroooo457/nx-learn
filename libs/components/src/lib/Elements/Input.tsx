import { ComponentPropsWithoutRef, forwardRef } from 'react';

type InputProps = {
  className: string;
};

type Props = InputProps & ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return <input {...props} ref={ref} />;
});

Input.displayName = 'Input';
