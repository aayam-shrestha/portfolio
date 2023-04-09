import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return (
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900">
      {children}
    </h1>
  );
};

export default Title;
