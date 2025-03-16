import { Children, ElementType, isValidElement, ReactNode } from 'react';

interface GetChildrenElementProps {
  children: ReactNode;
  targetType: ElementType;
}

const getChildrenElement = ({ children, targetType }: GetChildrenElementProps) => {
  const childrenArray = Children.toArray(children);
  return childrenArray
    .filter((child) => isValidElement(child) && child.type === targetType)
    .slice(0, 2);
};

export default getChildrenElement;
