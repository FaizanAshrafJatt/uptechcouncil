export function GovernanceBadges() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {[
        { label: "Committee", color: "border-[#00B140]/30 bg-[#00B140]/10" },
        { label: "Ethics", color: "border-[#00B140]/30 bg-[#00B140]/10" },
        { label: "Transparency", color: "border-[#1E40AF]/30 bg-[#1E40AF]/10" },
      ].map((badge) => (
        <div
          key={badge.label}
          className={`px-4 py-2 rounded-full border ${badge.color} text-[#EAF2FF] text-sm font-medium`}
        >
          {badge.label}
        </div>
      ))}
    </div>
  );
}