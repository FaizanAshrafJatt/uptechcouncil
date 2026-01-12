export function EventGallery() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-48 h-32 rounded-lg bg-gradient-to-br from-[#1E40AF]/10 to-[#00B140]/10 border border-[rgba(11,18,32,0.10)] overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="absolute bottom-2 left-2 right-2">
            <div className="bg-white/90 backdrop-blur-sm rounded px-2 py-1">
              <span className="text-xs text-[rgba(11,18,32,0.68)]">Gallery {index + 1}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}