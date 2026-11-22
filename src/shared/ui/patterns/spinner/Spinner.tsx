export function Spinner({ label }: { readonly label: string }) {
  return (
    <span role="status" className="inline-flex items-center gap-2 text-sm text-slate-700">
      <span
        aria-hidden="true"
        className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600 motion-reduce:animate-none"
      />
      {label}
    </span>
  );
}
