import React, { useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

type SearchTypes = {
  setQuery: (value: string) => void;
  className?: string;
};

const Search = ({ className, setQuery }: SearchTypes) => {
  //

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length < 3) {
      return;
    }

    setQuery(e.target.value);
  };

  const debouncedHandleChange = useMemo(() => {
    return debounce(handleSearch, 350);
  }, []);

  useEffect(() => {
    return () => {
      debouncedHandleChange.cancel();
    };
  }, []);

  return (
    <div className={className}>
      <label htmlFor="price" className="block capitalize text-sm font-medium text-gray-700">
        Search for a pokemon
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm"> $ </span>
        </div>
        <input
          type="search"
          name="search"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 h-12 sm:text-sm border-gray-300 rounded-md"
          placeholder="Start Typing Here ..."
          // value={query}
          onChange={debouncedHandleChange}
        />
      </div>
    </div>
  );
};

export default Search;
