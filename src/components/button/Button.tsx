import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return <button>{children}</button>;
}
