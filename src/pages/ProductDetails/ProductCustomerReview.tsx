import React from "react";
import { StarIcon, UserIcon } from "lucide-react";
const Reviews = [
  {
    name: "John Doe",
    comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
              facilis dolores tempore nam, accusamus nisi illum sit provident
              aperiam maxime perferendis corrupti aliquid atque vel deleniti eius.
              Expedita, quod quibusdam.`,
  },
  {
    name: "Alice Smith",
    comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
              facilis dolores tempore nam, accusamus nisi illum sit provident
              aperiam maxime perferendis corrupti aliquid atque vel deleniti eius.
              Expedita, quod quibusdam.`,
  },
  {
    name: "Mary Johnson",
    comment: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
              facilis dolores tempore nam, accusamus nisi illum sit provident
              aperiam maxime perferendis corrupti aliquid atque vel deleniti eius.
              Expedita, quod quibusdam.`,
  },
];

/**
 * The ProductCustomerReview component displays customer reviews with names, ratings, and comments in a
 * styled grid layout.
 * @returns The `ProductCustomerReview` component is being returned. It displays a section for customer
 * reviews with each review showing the reviewer's name, a star rating, and their comment. The reviews
 * are mapped from a `Reviews` array and displayed in a grid layout with appropriate styling.
 */
export const ProductCustomerReview: React.FC = () => {
  return (
    <div className="border-t border-b grid gap-4 py-6 items-start max-w-6xl px-4 mx-auto dark:border-gray-800">
      <h2 className="font-semibold text-2xl md:text-3xl leading-tight">
        Customer Review
      </h2>
      <div className="grid gap-4">
        {Reviews.map(({ name, comment }) => (
          <div
            key={name + comment}
            className="border-t border-gray-200 w-full py-4 grid gap-4 items-start dark:border-gray-800"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <UserIcon className="w-6 h-6" />
                <span className="font-semibold">{name}</span>
              </div>
              <div className="flex items-center gap-0.5 ml-auto">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
