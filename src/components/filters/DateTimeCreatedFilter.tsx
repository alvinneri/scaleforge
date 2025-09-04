"use client";
import React, { useState, useEffect } from "react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  format,
  subDays,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";
import { useMemberStore } from "@/lib/store";

export const DateTimeCreatedFilter = () => {
  const {
    dateRangeCreated: globalDateRange,
    setDateRangeCreated: setGlobalDateRange,
  } = useMemberStore();
  const [dateRange, setDateRange] = useState<Range[]>([globalDateRange]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDateRange([globalDateRange]);
  }, [globalDateRange, isOpen]);

  const handleSelect = (ranges: RangeKeyDict) => {
    const { selection } = ranges;
    if (selection.startDate && selection.endDate) {
      setDateRange([selection]);
    }
  };

  const handleApply = () => {
    setGlobalDateRange(dateRange[0]);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const presets = [
    { label: "Today", range: { startDate: new Date(), endDate: new Date() } },
    {
      label: "Yesterday",
      range: {
        startDate: subDays(new Date(), 1),
        endDate: subDays(new Date(), 1),
      },
    },
    {
      label: "This week",
      range: {
        startDate: startOfWeek(new Date()),
        endDate: endOfWeek(new Date()),
      },
    },
    {
      label: "Last week",
      range: {
        startDate: startOfWeek(subDays(new Date(), 7)),
        endDate: endOfWeek(subDays(new Date(), 7)),
      },
    },
    {
      label: "This month",
      range: {
        startDate: startOfMonth(new Date()),
        endDate: endOfMonth(new Date()),
      },
    },
    {
      label: "Last month",
      range: {
        startDate: startOfMonth(subDays(new Date(), 30)),
        endDate: endOfMonth(subDays(new Date(), 30)),
      },
    },
    {
      label: "This year",
      range: {
        startDate: startOfYear(new Date()),
        endDate: endOfYear(new Date()),
      },
    },
    {
      label: "Last year",
      range: {
        startDate: startOfYear(subDays(new Date(), 365)),
        endDate: endOfYear(subDays(new Date(), 365)),
      },
    },
    {
      label: "All time",
      range: { startDate: new Date(0), endDate: new Date() },
    },
  ];

  const getButtonLabel = () => {
    const { startDate, endDate } = globalDateRange;
    if (startDate && endDate) {
      if (
        format(startDate, "yyyy-MM-dd") !== format(new Date(0), "yyyy-MM-dd")
      ) {
        const formattedStartDate = format(startDate, "LLL dd, y");
        const formattedEndDate = format(endDate, "LLL dd, y");
        if (formattedStartDate === formattedEndDate) return formattedStartDate;
        return `${formattedStartDate} - ${formattedEndDate}`;
      }
    }
    return "Date Registered";
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            style={{
              backgroundColor: "#0A1117",
              border: "1px solid #2E2E2E",
              color: "#C2C2C2",
            }}
          >
            {getButtonLabel()}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-auto p-0 flex"
          align="start"
          style={{
            backgroundColor: "#0A1117",
            border: "1px solid #2E2E2E",
            color: "#C2C2C2",
          }}
        >
          <div
            className="flex flex-col space-y-2 p-2 border-r"
            style={{ borderColor: "#2E2E2E" }}
          >
            {presets.map(({ label, range }) => (
              <Button
                key={label}
                variant="ghost"
                className="justify-start hover:bg-[#FBBD2D] hover:text-[#0A1117]"
                style={{ color: "#525252" }}
                onClick={() => setDateRange([{ ...range, key: "selection" }])}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="flex flex-col">
            <style jsx>{`
              :global(.rdrCalendarWrapper) {
                background-color: #0a1117 !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrMonth) {
                background-color: #0a1117 !important;
              }
              :global(.rdrMonthAndYearWrapper) {
                background-color: #0a1117 !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrMonthAndYearPickers select) {
                background-color: #0a1117 !important;
                color: #c2c2c2 !important;
                border: 1px solid #2e2e2e !important;
              }
              :global(.rdrWeekDays) {
                background-color: #0a1117 !important;
              }
              :global(.rdrWeekDay) {
                color: #c2c2c2 !important;
              }
              :global(.rdrDays) {
                background-color: #0a1117 !important;
              }
              :global(.rdrDay) {
                background-color: #0a1117 !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrDayNumber) {
                color: #c2c2c2 !important;
              }
              :global(.rdrNextPrevButton) {
                background-color: #0a1117 !important;
                color: #c2c2c2 !important;
                border: 1px solid #2e2e2e !important;
              }
              :global(.rdrSelected) {
                background-color: #98712b !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrInRange) {
                background-color: #98712b !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrStartEdge) {
                background-color: #98712b !important;
                color: #c2c2c2 !important;
              }
              :global(.rdrEndEdge) {
                background-color: #98712b !important;
                color: #c2c2c2 !important;
              }
            `}</style>
            <DateRange
              ranges={dateRange}
              onChange={handleSelect}
              months={2}
              direction="horizontal"
              showDateDisplay={false}
            />
            <div className="flex justify-end space-x-2 p-2">
              <Button
                variant="ghost"
                style={{ color: "#C2C2C2" }}
                onClick={handleCancel}
              >
                Cancel
              </Button>
              <Button
                style={{
                  backgroundColor: "#0A1117",
                  border: "1px solid #2E2E2E",
                  color: "#C2C2C2",
                }}
                onClick={handleApply}
              >
                Apply
              </Button>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
