export function EventGallery() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-48 h-32 rounded-lg bg-gradient-to-br from-primary/10 to-accent-teal/10 border border-light overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-surface-light/90 backdrop-blur-sm rounded px-2 py-1">
              <span className="text-xs text-muted-on-light">Gallery {index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}