interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`animate-spin rounded-full border-3 border-slate-200 border-t-cyan-500 ${sizeClasses[size]}`}></div>
      {text && (
        <span className="text-slate-600 font-medium text-sm animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}