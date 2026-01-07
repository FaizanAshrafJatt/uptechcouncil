export function GovernanceBadges() {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {[
        { label: "Committee", color: "border-accent-teal/30 bg-accent-teal/10" },
        { label: "Ethics", color: "border-accent-pakistan-green/30 bg-accent-pakistan-green/10" },
        { label: "Transparency", color: "border-primary/30 bg-primary/10" },
      ].map((badge) => (
        <div
          key={badge.label}
          className={`px-4 py-2 rounded-full border ${badge.color} text-on-dark text-sm font-medium`}
        >
          {badge.label}
        </div>
      ))}
    </div>
  );
}