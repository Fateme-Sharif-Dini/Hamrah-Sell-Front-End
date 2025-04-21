"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = {
  label?: string;
  description?: string;
  warning?: string;
  options: string[];
};

const Dropdown = ({ label, description, warning, options }: Props) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const filteredOptions = options.filter((opt) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2 text-right flex flex-col items-end relative">
      {label && <div className="font-bold text-[20px] font-[IRANSans] text-sm">{label}</div>}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="w-[392px] h-[49px] border border-black flex justify-between items-center pt-[15px] pb-[15px] pl-[10px] pr-[10px]"
          > 
            <ChevronDown className="h-[24px] w-[24px] ms-auto ml-[10px]" />
            <span className="text-right text-[16px] text-[#575757] flex-1 font-iran">
            {selected || "انتخاب کنید"}
            </span>
           
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[392px] space-y-1 absolute bg-white text-right" align="start">
          <Input className="border-0 text-right font-iran text-[#575757]"
            placeholder="جست و جو"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredOptions.map((opt, idx) => (
            <DropdownMenuItem
              key={idx}
              onSelect={() => {
                setSelected(opt);
              }}
              className={`cursor-pointer text-right justify-end rounded-md  ${
                selected === opt ? "bg-[#2BA7E0] text-white" : ""
              }`}
            >
              {opt}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {description && (
        <p className="text-xs text-gray-500">{description}</p>
      )}

      {!selected && warning && (
        <p className="text-xs text-[#FF4F00] flex flex-row-reverse">
          <img src="/assets/icons/Subtract.svg"/>
          {warning}</p>
      )}
    </div>
  );
};

export default Dropdown;