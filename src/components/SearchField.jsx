import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

export const SearchField = ({ setSearchedValue, SearchedValue }) => {
  const inputRef = useRef();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchedValue(inputRef.current.value);
      }}
      onClick={() => inputRef.current.focus()}
      className="max-w-3xl bg-white px-3 items-center gap-2 mx-auto w-[95%] flex justify-between border rounded-full shadow-md"
    >
      <input
        ref={inputRef}
        name="search"
        type="text"
        className=" w-full outline-none rounded-full text-[#330000] py-3 sm:py-4 px-1"
        placeholder="Idly"
      />
      <FaSearch size={24} />
    </form>
  );
};
