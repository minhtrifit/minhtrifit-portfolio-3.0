"use client";

import { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { useCategoryStore } from "@/lib/store";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface PropType {
  categories: string[];
}

export const CateComboBox = (props: PropType) => {
  const { categories } = props;

  const setCategory = useCategoryStore((state) => state.setCategory);

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    if (categories) {
      const data = categories?.map((cate) => {
        return {
          value: cate.toLocaleLowerCase(),
          label: cate,
        };
      });

      setItems(data);
    }
  }, [categories]);

  useEffect(() => {
    if (value) setCategory(value);
    else setCategory("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      {!categories ? (
        <p>No category found</p>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size={"sm"}
              role="combobox"
              aria-expanded={open}
              aria-label="Select Department"
              className="w-[200px] justify-between dark:text-white"
            >
              {value
                ? items.find((cate) => cate.value === value)?.label
                : "Select category..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 hidden lg:block" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search category..." />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {items.map((cate) => (
                    <CommandItem
                      key={cate.value}
                      value={cate.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === cate.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                      {cate.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  );
};
