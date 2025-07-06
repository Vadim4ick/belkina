"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/shared/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "border-stroke hover:bg-light-grey [&[data-state=open]]:bg-light-grey text-dark-grey flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-[8px] border p-[20px] text-left font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]]:rounded-b-none [&[data-state=open]]:text-gray-900 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:text-gray-900",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-dark-grey pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "border-stroke overflow-hidden rounded-b-[8px] border-r border-b border-l p-[20px] transition-all",
        "origin-top will-change-transform",
        className,
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
