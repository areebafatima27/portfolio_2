export function Card({ children, ...props }) {
  return <div className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6 ${props.className || ""}`}>{children}</div>;
}
export function CardHeader({ children }) { return <div className="mb-4">{children}</div>; }
export function CardTitle({ children, className }) { return <h3 className={`text-lg font-bold ${className || ""}`}>{children}</h3>; }
export function CardDescription({ children, className }) { return <p className={`text-sm ${className || ""}`}>{children}</p>; }
export function CardContent({ children, className }) { return <div className={className}>{children}</div>; }