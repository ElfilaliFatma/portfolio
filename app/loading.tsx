export default function Loading() {
  return (
    <div className="section-shell section-padding">
      <div className="glass-card rounded-3xl p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-4 w-32 rounded-full bg-muted" />
          <div className="h-12 max-w-2xl rounded-2xl bg-muted" />
          <div className="h-6 max-w-3xl rounded-2xl bg-muted" />
          <div className="grid gap-4 pt-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-36 rounded-3xl bg-muted" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
