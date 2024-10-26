"use client";
import Link from "next/link";
import React from "react";
import { ChartColumnBig, ArrowUpRight } from 'lucide-react';

const cardData = [
  {
    href: "/visualizer/bubblesort",
    title: "Bubble Sort",
    description: "Algorithm",
    icon: <ChartColumnBig className="text-3xl" />,
  },
  {
    href: "/visualizer/insertionsort",
    title: "Insertion Sort",
    description: "Algorithm",
    icon: <ChartColumnBig className="text-3xl" />,
  },
  {
    href: "/visualizer/mergesort",
    title: "Merge Sort",
    description: "Algorithm",
    icon: <ChartColumnBig className="text-3xl" />,
  },
];

const QuestionsCard = () => {
  return (
    <div className="pt-8">
      <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="rounded-3xl bg-[#F8F8F8] p-2 w-full flex gap-2 "
          >
            <div className="group bg-white rounded-2xl flex-1 h-28 hover:scale-[1.015] transition-all cursor-pointer">
              <Link href={card.href} className="flex-1">
                <div className="p-4 h-full flex flex-col justify-between">
                  <div className="flex gap-2 items-start ">
                    {card.icon}
                    <p className="text-sm font-medium leading-4">
                      <span>{card.title}</span> <br />
                      {card.description}
                    </p>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <ArrowUpRight className="group-hover:text-lg" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsCard;
