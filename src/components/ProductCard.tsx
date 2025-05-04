import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { Product } from "@src/models/Product";
import { useNavigate } from "react-router-dom";
import { useCartState } from "@src/state/CartState";
import { useWisheslistState } from "@src/state/WishlistState";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";

type ProductCardProps = Product & {
  lastElement: boolean;
  innerRef: React.Ref<HTMLParagraphElement>;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  lastElement,
  innerRef,
  ...product
}) => {
  const [, addToCart] = useCartState();
  const [, addToWishlist] = useWisheslistState();
  const navigate = useNavigate();

  const handelAction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    callback: (p: Product) => void
  ) => {
    e.preventDefault();
    e.stopPropagation();
    callback(product);
  };

  return (
    <Card
      onClick={() => navigate(`/${product.id}`)}
      className="relative cursor-pointer shadow-md grid overflow-hidden grid-rows-[250px] grid-cols-1 gap-4"
    >
      <CardHeader className="grid grid-rows-[250px] grid-cols-1 overflow-hidden p-0 relative">
        <img
          className="w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-125"
          src={product.image}
          alt=""
        />
      </CardHeader>
      <CardContent className=" flex flex-col space-y-4 mb-auto h-full">
        <div className="flex justify-between items-center flex-wrap gap-4 flex-1">
          <p className="text-gray-500 font-medium  ">{product.store.name}</p>
          <div className="flex items-center">
            <EyeIcon className=" w-5 h-5 text-gray-500" />
            <p className="text-gray-600 font-bold text-sm ml-1">
              {product.views} views
            </p>
          </div>
          <Badge className=" bg-green-500 px-3 py-1">
            {product.stock_status.label}
          </Badge>
        </div>
        <h3 className=" font-bold text-gray-800 md:text-xl text-xl line-clamp-1 flex-1">
          {product.name}
        </h3>
        <CardDescription
          className=" line-clamp-3"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></CardDescription>
        <p className="text-xl font-bold text-gray-800 flex-1">
          {"$" + product.price.toString()}
        </p>
        <div
          ref={lastElement ? innerRef : undefined}
          className=" flex justify-center gap-2 mt-auto"
        >
          <Button onClick={(e) => handelAction(e, addToCart)} size="sm">
            Add to cart
          </Button>
          <Button onClick={(e) => handelAction(e, addToWishlist)} size="sm">
            Add to Whilst
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
