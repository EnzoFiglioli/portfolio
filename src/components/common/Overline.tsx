interface OverlineType{
  name:String
}

export const Overline = ({name}:OverlineType)=> {
  return (
    <p
      className="
          text-sm
          uppercase
          tracking-[0.25em]
          text-blue-400
          font-semibold
        "
    >
      {name}
    </p>
  );
};
