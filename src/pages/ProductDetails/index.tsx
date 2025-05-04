import React from "react";
import { cn } from "@src/lib/utils";
import { Button } from "@src/components/ui/button";
import { StarIcon } from "lucide-react";
import { Separator } from "@src/components/ui/separator";
import { ProductImages } from "./ProductImages";
import { useProductsData } from "../product/useProductsData";
import { ProductCustomerReview } from "./ProductCustomerReview";
import { useNavigate, useParams } from "react-router-dom";

export const ProductDetail: React.FC = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data, isLoading } = useProductsData();
  const productData = React.useMemo(() => {
    return data?.pages[0].data.find(
      (item) => item.id === Number(productId || 0)
    );
  }, [data, productId]);

  return (
    <>
      <Button onClick={() => navigate(-1)}> Back</Button>
      <div className="grid md:grid-cols-2 items-start max-w-6xl gap-6 lg:gap-12 px-4 mx-auto py-6">
        <div className="grid gap-4 md:gap-10 items-start">
          <div className=" items-start">
            <div className="grid gap-4">
              <h1
                className={cn("font-bold text-3xl lg:text-4xl", {
                  " animate-pulse bg-gray-200 h-20": isLoading,
                })}
              >
                {productData?.name}
              </h1>
              {isLoading ? (
                <div className="animate-pulse bg-gray-200 h-20"></div>
              ) : (
                <div className={cn("flex items-center gap-4")}>
                  <div className="flex items-center gap-0.5">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                  (354 reviews)
                </div>
              )}
              <div
                className={cn("text-4xl font-bold", {
                  " animate-pulse bg-gray-200 h-20": isLoading,
                })}
              >
                {productData?.price ? `$${productData?.price}` : ""}
              </div>
            </div>
          </div>
          <Separator />
          <div
            className={cn("grid gap-4 text-sm leading-loose", {
              " animate-pulse bg-gray-200 h-48": isLoading,
            })}
          >
            <p
              dangerouslySetInnerHTML={{
                __html: productData?.description || "",
              }}
            ></p>
          </div>
        </div>
        <div className="grid gap-3 items-start">
          {isLoading ? (
            <div className=" animate-pulse bg-gray-200 h-20 md:h-40"></div>
          ) : (
            <ProductImages key={productId} images={productData?.images || []} />
          )}
        </div>
      </div>
      <ProductCustomerReview />
    </>
  );
};
