"use client";

export default function PrimaryButton({
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
  console.log("PrimaryButton url", url);
  return (
    <button
      className={`bg-kworange hover:bg-kworangeHover hover:shadow-lg  text-white font-normal py-2 px-4 rounded-lg transition duration-300 ease-in-out ${className} hover:cursor-pointer`}
      onClick={handleRedirection}
    >
      {children}
    </button>
  );
}
