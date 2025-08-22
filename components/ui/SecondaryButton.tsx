"use client";
export default function SecondaryButton({
  children,
  className,
  url,
}: {
  children: string;
  className?: string;
  url?: string;
}) {
  const handleRedirection = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <button
      className={`bg-transparent hover:bg-kwgreen hover:shadow-lg text-kwgreen border-kwgreen border hover:text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out ${className} `}
      onClick={handleRedirection}
    >
      {children}
    </button>
  );
}
