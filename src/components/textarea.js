export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-slate-300 dark:border-slate-700 rounded px-3 py-2 w-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 ${className}`}
      {...props}
    />
  );
}