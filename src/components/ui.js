export function Button({ children, ...props }) {
  return (
    <button {...props} className={`rounded px-4 py-2 font-medium ${props.className || ""}`}>
      {children}
    </button>
  );
}