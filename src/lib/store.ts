import { create } from "zustand";
import { Range } from "react-date-range";
import {
  MemberStatus,
  MemberVerificationStatus,
} from "@/graphql/generated/graphql";

export type Member = {
  id: string;
  name: string;
};

export type MemberStore = {
  selectedMembers: Member[];
  addMember: (member: Member) => void;
  removeMember: (memberId: string) => void;
  isMemberSelected: (memberId: string) => boolean;
  dateRange: Range;
  setDateRange: (dateRange: Range) => void;
  dateRangeCreated: Range;
  setDateRangeCreated: (dateRange: Range) => void;
  createdDate: Date | undefined;
  setCreatedDate: (date: Date | undefined) => void;
  verificationStatus: MemberVerificationStatus | undefined;
  setVerificationStatus: (status: MemberVerificationStatus | undefined) => void;
  status: MemberStatus | undefined;
  setStatus: (status: MemberStatus | undefined) => void;
};

export const useMemberStore = create<MemberStore>((set, get) => ({
  selectedMembers: [],
  addMember: (member) =>
    set((state) => ({
      selectedMembers: [...state.selectedMembers, member],
    })),
  removeMember: (memberId) =>
    set((state) => ({
      selectedMembers: state.selectedMembers.filter(
        (member) => member.id !== memberId
      ),
    })),
  isMemberSelected: (memberId) => {
    return get().selectedMembers.some((member) => member.id === memberId);
  },
  dateRange: {
    startDate: new Date(0),
    endDate: new Date(),
    key: "selection",
  },
  dateRangeCreated: {
    startDate: new Date(0),
    endDate: new Date(),
    key: "selection",
  },
  setDateRange: (dateRange) => set({ dateRange }),
  setDateRangeCreated: (dateRangeCreated) => set({ dateRangeCreated }),
  createdDate: undefined,
  setCreatedDate: (date) => set({ createdDate: date }),
  verificationStatus: undefined,
  setVerificationStatus: (status) => set({ verificationStatus: status }),
  status: undefined,
  setStatus: (status) => set({ status: status }),
}));
