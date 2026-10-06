export default function Loading() {
  return (
    <div
      className="bg-background flex h-svh w-full items-center justify-center"
      role="status"
      aria-label="Carregando"
    >
      <div className="flex h-8 items-end gap-1">
        {[0, 0.15, 0.3, 0.45, 0.6].map((delay) => (
          <span
            key={delay}
            className="bg-primary animate-eq h-full w-1 origin-bottom rounded-full"
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </div>
    </div>
  );
}
