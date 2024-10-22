"use client";
import Link from "next/link";
import React from "react";
import { FileSearch,FileCode2,ArrowUpRight } from 'lucide-react';


const QuestionsCard = () => {
 
  return (
    <div className="pt-8  ">
      <div className="rounded-3xl bg-[#F8F8F8] p-2 w-full flex gap-2 ">
        <div className="group bg-white rounded-2xl flex-1 h-28  hover:scale-[1.015] transition-all cursor-pointer">
          <Link href={"/docs"} className="flex-1">
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex gap-2 items-start ">
                <FileSearch className="text-3xl" />
                <p className="text-sm font-medium leading-4">
                  <span>Docs</span> <br></br> Algorithms
                </p>
              </div>
              <div className="flex gap-2 justify-end">
                <ArrowUpRight className="group-hover:text-lg" />
              </div>
            </div>
          </Link>
        </div>

        <div className="group bg-white rounded-2xl h-28 flex-1 hover:scale-[1.015]  transition-all cursor-pointer">
          <Link href={"/practice"} className="flex-1">
            <div className="p-4 h-full flex flex-col justify-between">
              <div className="flex gap-2 items-start ">
                <FileCode2 className="text-3xl" />
                <p className="text-sm font-medium leading-4">
                  <span>Practice</span> <br></br> Questions
                </p>
              </div>
              <div className="flex gap-2 justify-end">
                <ArrowUpRight className="group-hover:text-lg" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;