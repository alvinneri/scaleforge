"use client";
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useMemberStore } from '@/lib/store';
import { MemberStatus } from '@/graphql/generated/graphql';

export const StatusFilter = () => {
  const { status, setStatus } = useMemberStore();

  const handleValueChange = (value: string) => {
    if (value === 'all') {
      setStatus(undefined);
    } else {
      setStatus(value as MemberStatus);
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
            {status ? `Status: ${status}` : "Status"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
          <DropdownMenuRadioGroup value={status} onValueChange={handleValueChange}>
            <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            {Object.values(MemberStatus).map((status) => (
              <DropdownMenuRadioItem key={status} value={status}>
                {status}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 