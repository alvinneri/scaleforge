import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Member, useMemberStore } from "@/lib/store";

type FilterListItemProps = {
  member: Member;
  displayValue: string;
};

export const FilterListItem = ({ member, displayValue }: FilterListItemProps) => {
  const { addMember, removeMember, isMemberSelected } = useMemberStore();
  const isSelected = isMemberSelected(member.id);

  const handleCheckedChange = () => {
    if (isSelected) {
      removeMember(member.id);
    } else {
      addMember(member);
    }
  };
  return (
    <div
      key={member.id}
      className="flex items-center space-x-2 p-2 rounded-md"
    >
      <Checkbox
        id={member.id}
        checked={isSelected}
        onCheckedChange={handleCheckedChange}
      />
      <label
        htmlFor={member.id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        style={{ color: '#FBBD2C' }}
      >
        {displayValue}
      </label>
    </div>
  );
}; 