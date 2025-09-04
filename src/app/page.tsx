import { AppTable } from "@/components/table/AppTable";
import { MemberFilter } from "@/components/filters/MemberFilter";
import { EmailFilter } from "@/components/filters/EmailFilter";
import { MobileNumberFilter } from "@/components/filters/MobileNumberFilter";
import { DomainFilter } from "@/components/filters/DomainFilter";
import { DateTimeLastActiveFilter } from "@/components/filters/DateTimeLastActiveFilter";
import { DateTimeCreatedFilter } from "@/components/filters/DateTimeCreatedFilter";
import { VerificationStatusFilter } from "@/components/filters/VerificationStatusFilter";
import { StatusFilter } from "@/components/filters/StatusFilter";
import { COLORS } from "@/constants/colors";

const filters = [
  MemberFilter,
  VerificationStatusFilter,
  EmailFilter,
  MobileNumberFilter,
  DomainFilter,
  DateTimeCreatedFilter,
  StatusFilter,
  DateTimeLastActiveFilter
];

export default function Home() {
  return (
    <div className="min-h-screen text-white p-10" style={{ backgroundColor: COLORS.background }}>
      <header className="mb-8">
        <h1 className="text-3xl font-medium text-white mb-2">Members</h1>
        <p style={{ color: COLORS.subtitle }}>View your members here.</p>
      </header>
      
      <main className="px-6 py-4" style={{ backgroundColor: COLORS.container, borderBottom: `1px solid ${COLORS.border}` }}>
        <section className="flex flex-wrap gap-2 items-center mb-4">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          {filters.map((FilterComponent, index) => (
            <FilterComponent key={index} />
          ))}
        </section>
        
        <AppTable />
      </main>
    </div>
  );
}
