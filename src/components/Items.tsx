const Item: React.FC<{ data: ItemProps; onClick: () => void }> = ({
  data,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="row cursor-pointer my-6">
      <img src={data?.image} alt="seat" className="w-[80px] h-auto" />

      <div className="ml-4">
        <h1 className="text-2xl font-extrabold uppercase">{data?.name}</h1>
        <div className="flex">
          <div className="bg-gold100 rounded-md p-1 text-xs text-black italic text-center  mt-2 mb-6">
            {data?.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;

export type ItemProps = {
  id: number;
  name: string;
  description: string;
  link: string;
  image: any;
};
