"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGenres } from "@/hooks/useGenres";
import { UseSearch } from "@/hooks/useSearch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { easeInOut, motion } from "framer-motion";
import { ChevronDown, SearchIcon, X } from "lucide-react";

function Header() {
  const { genre, loading, error } = useGenres();
  const { searchMovie, setQuery } = UseSearch();
  const [headerComponent, setHeaderComponent] = useState(true);

  const ChangeHeaderComponent = () => {
    setHeaderComponent(false);
  };
  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <>
      {headerComponent && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeInOut }}
          className="bg-[var(--foreground-color)] text-[var(--on-foreground-text-color)] h-[80px] fixed top-0 left-0 right-0 flex items-center justify-around  p-[10px]"
        >
          <h1 className="text-xl font-bold">Кино сайт</h1>
          <div className="flex gap-8 mt-[2px]">
            {" "}
            {!loading && (
              <div>
                {" "}
                <Popover>
                  <PopoverTrigger className="flex items-center justify-center">
                    <ChevronDown className="w-[16px] mt-[4px]"></ChevronDown>
                    <h1>Төрөл</h1>
                  </PopoverTrigger>
                  <PopoverContent className=" text-[var(--on-background-text-color)] mt-[24px]">
                    <div>
                      {genre.map((dedail) => (
                        <Button
                          className="h-[18px] bg-[var(--foreground-color)] text-[var(--on-foreground-text-color)] m-[4px] text-[10px]"
                          key={dedail.id}
                        >
                          {dedail.name}
                        </Button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
            <div className="mt-[2px]" onClick={ChangeHeaderComponent}>
              <div className="bg-[var(--background-color)] w-[26px] rounded-md flex items-center justify-center h-[24px]">
                {" "}
                <SearchIcon className="w-[16px] mt-[4px] text-[var(--foreground-color)] pb-[5px]" />
              </div>
            </div>
            <div>Dark</div>
          </div>
        </motion.div>
      )}
      {!headerComponent && (
        <motion.div className="bg-[var(--foreground-color)] text-[var(--on-foreground-text-color)] h-[80px] fixed top-0 left-0 right-0 flex items-center justify-around  p-[10px]">
          <div>
            {" "}
            {!loading && (
              <motion.div
                initial={{ opacity: 0.5, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: easeInOut }}
              >
                {" "}
                <Popover>
                  <PopoverTrigger className="flex items-center justify-center mt-[8px]">
                    <ChevronDown className="w-[16px] mt-[4px]"></ChevronDown>
                    <h1>Төрөл</h1>
                  </PopoverTrigger>
                  <PopoverContent className=" text-[var(--on-background-text-color)] mt-[24px] ml-[30px]">
                    <div>
                      {genre.map((detail) => (
                        <Button
                          className="h-[18px] bg-[var(--foreground-color)] text-[var(--on-foreground-text-color)] m-[4px] text-[10px]"
                          key={detail.id}
                        >
                          {detail.name}
                        </Button>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: easeInOut }}
            className="flex items-center border px-2 rounded-md h-[34px] w-[220px] mt-[6px]"
          >
            <SearchIcon />
            <Input
              className="border-0 bg-transparent focus-visible:ring-0"
              onChange={HandleChange}
            />
            <div
              onClick={() => {
                setHeaderComponent(true);
              }}
            >
              <X />
            </div>
          </motion.div>
          <div className="absolute top-20">
            {searchMovie.slice(0, 5).map((detail) => (
              <div className="text-black">{detail.title}</div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0.5, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: easeInOut }}
          >
            Dark
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Header;
