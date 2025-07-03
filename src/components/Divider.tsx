type DividerProps = {
    className?: string;
}

function Divider({ className = ''}:DividerProps) {
  return (
    <div className={`h-[10px] w-full ${className}`} />
  );
}

export default Divider;