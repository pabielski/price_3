"use client";
export default function SecondaryButton({
  children,
  className,
  disabled,
  url,
}: {
  children: string;
  className?: string;
  url?: string;
  disabled?: boolean;
}) {
  const handleRedirection = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <button
      className={`bg-transparent hover:bg-kwgreen hover:shadow-md text-kwgreen border-kwgreen border hover:text-white hover:cursor-pointer font-normal py-2 px-4 rounded-lg transition duration-300 ease-in-out ${className} ${
        disabled
          ? "bg-zinc-200 text-zinc-400 border-zinc-300 pointer-events-none"
          : ""
      }`}
      onClick={handleRedirection}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
