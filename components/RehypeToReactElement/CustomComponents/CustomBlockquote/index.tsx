type Props = {
  children: React.ReactNode;
};

const CustomBlockquote: React.FC<Props> = ({ children }) => {
  return (
    <blockquote className="my-4 pl-4 italic border-l-4 border-gray-200">
      {children}
    </blockquote>
  );
};

export { CustomBlockquote };
