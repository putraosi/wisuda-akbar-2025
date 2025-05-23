interface ContainerProps {
  id?: string;
  children: any;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ id, children, className }) => {
  return (
    <section id={id} className={`background-1 flex flex-col  ${className}`}>
      {children}
    </section>
  );
};

export default Container;
