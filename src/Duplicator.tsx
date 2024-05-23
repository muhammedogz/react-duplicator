import { Fragment, type ReactNode } from 'react';

type DuplicatorProps = {
  /**
   * Number of times to duplicate the children
   * Default: 1
   */
  count?: number;
  /**
   * The children to duplicate
   */
  children: ReactNode;
};

export const Duplicator = ({ count = 1, children, ...rest }: DuplicatorProps) => {
  if (count < 1) {
    console.error('Duplicator: count must be a positive integer');
    return null;
  }

  return (
    <Fragment {...rest}>
      {[...Array(count)].map((_, index) => (
        <Fragment key={index}>{children}</Fragment>
      ))}
    </Fragment>
  );
};
