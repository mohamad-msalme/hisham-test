import * as React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { FILTER_BY_BRANDS, FILTER_BY_CATEGORIES } from "@src/constants/Filter";

const accordionArray = [
  {
    label: "Filter By Brand",
    value: FILTER_BY_BRANDS,
  },
  {
    label: "Filter By Categories",
    value: FILTER_BY_CATEGORIES,
  },
];
export const FilterProduct: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Product</DrawerTitle>
            <DrawerDescription>Advance filter product</DrawerDescription>
          </DrawerHeader>
          <Accordion type="single" collapsible className="w-full mb-8">
            {accordionArray.map(({ label, value }) => (
              <AccordionItem value={label} key={label}>
                <AccordionTrigger>{label}</AccordionTrigger>
                <AccordionContent className=" p-4 flex flex-wrap  gap-4">
                  {value.map((item: string) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={item} />
                      <label
                        htmlFor={item}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
