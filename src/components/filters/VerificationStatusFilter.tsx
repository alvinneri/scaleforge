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
import { MemberVerificationStatus } from '@/graphql/generated/graphql';

export const VerificationStatusFilter = () => {
  const { verificationStatus, setVerificationStatus } = useMemberStore();

  const handleValueChange = (value: string) => {
    if (value === 'all') {
      setVerificationStatus(undefined);
    } else {
      setVerificationStatus(value as MemberVerificationStatus);
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
            {verificationStatus ? `Status: ${verificationStatus}` : "Verification Status"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
          <DropdownMenuRadioGroup value={verificationStatus} onValueChange={handleValueChange}>
            <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
            <DropdownMenuSeparator />
            {Object.values(MemberVerificationStatus).map((status) => (
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