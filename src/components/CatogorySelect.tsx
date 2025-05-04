import React from "react";
import { useQuery } from "@tanstack/react-query";
import { AllCatogeryQuery } from "@src/api/services/Catogrey";
import { useSearchParams } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { cn } from "@src/lib/utils";

export const CatogorySelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = React.useMemo(
    () => searchParams.get("cat") ?? "-1",
    [searchParams]
  );

  const onValueChange = (value: string) => {
    if (value === "-1") {
      searchParams.delete("cat");
    } else {
      searchParams.set("cat", value);
    }
    setSearchParams(searchParams);
  };

  const { data } = useQuery(AllCatogeryQuery());

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Filter By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {[
            {
              id: -1,
              name: "All Cataogries",
              products_count: -1,
            },
            ...(data || []),
          ].map(({ products_count, id, name }) => (
            <SelectItem
              disabled={products_count === -1 ? false : !products_count}
              key={id}
              value={id.toString()}
            >
              {name}
              <span
                className={cn("ml-1", {
                  "opacity-0": products_count === -1,
                })}
              >{`(${products_count})`}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
