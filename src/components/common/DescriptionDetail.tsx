interface PropType {
  text: string;
}

const DescriptionDetail = ({ text }: PropType) => {
  return (
    <p className="text-lg text-zinc-400 leading-8 max-w-xl">
      {text}
    </p>
  );
};

export default DescriptionDetail;
