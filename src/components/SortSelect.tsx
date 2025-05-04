import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useSearchParams } from "react-router-dom";

const SelectOptions = [
  {
    label: "Default",
    value: "DEFF",
  },
  {
    label: "Oldest",
    value: "date_asc",
  },
  {
    label: "Newest",
    value: "date_desc",
  },
  {
    label: "Name: A-Z",
    value: "name_asc",
  },
  {
    label: "Name: Z-Z",
    value: "name_desc",
  },
];


export const SortSelect: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = React.useMemo(() => {
    const sortBy = searchParams.get("sort-by");
    return !sortBy || sortBy === "DEFF" ? "DEFF" : sortBy;
  }, [searchParams]);

  const onValueChange = (value: string) => {
    if (value === "DEFF") {
      searchParams.delete("sort-by");
    }
    searchParams.set("sort-by", value);
    setSearchParams(searchParams);
  };

  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {SelectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
