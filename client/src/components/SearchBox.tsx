"use client";

import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useSearchStore } from "@/lib/store";

interface PropType {
  searchType: string;
}

const SearchBox = (props: PropType) => {
  const { searchType } = props;

  const [value, setValue] = useState<string>("");

  const setSearchValue = useSearchStore((state) => state.setSearchValue);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value === "") setSearchValue("all", searchType);
    else setSearchValue(value, searchType);
  };

  return (
    <form
      className="mx-auto md:mx-0 flex items-center gap-3"
      onSubmit={(e) => {
        handleSearch(e);
      }}
    >
      <Input
        placeholder="Search project..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button type="submit">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </form>
  );
};

export default SearchBox;
