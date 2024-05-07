type DetailBoxProps = {
  value: string;
};

export const DetailBox = ({ value }: DetailBoxProps) => {
  return (
    <li className="w-full list-none">
      <div className="bg-amber-500 rounded-md capitalize text-center text-white font-bold p-1">{value}</div>
    </li>
  );
};
