type SubtotalProps = {
  total: number;
};

export const Subtotal: React.FC<SubtotalProps> = ({ total }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">{`$${total.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};
