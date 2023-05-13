export type ChildrenType = { children: React.ReactNode };

export type CommonProps = ChildrenType & {
  onClick?: () => void;
};
