import Link from "next/link";

const navButtons = [
  { label: "Admin Dashboard" },
  { label: "Landing Page" },
  { label: "AI Chat Interface" },
  { label: "Auth Provider Client" },
  { label: "Login", href: "/auth/login" },
  { label: "Sign Up", href: "/auth/signup" },
];

const NavRow = () => {
  return (
    <div className="flex gap-2 flex-wrap justify-center max-w-3xl w-full z-10 mb-2">
      {navButtons.map(({ label, href }) =>
        href ? (
          <Link
            key={label}
            href={href}
            className="bg-neutral-900 text-white border border-neutral-800 px-4 py-2 rounded-md text-sm font-semibold font-sans cursor-pointer transition hover:bg-neutral-800 whitespace-nowrap flex-shrink-0 z-10"
          >
            {label}
          </Link>
        ) : (
          <button
            key={label}
            className="bg-neutral-900 text-white border border-neutral-800 px-4 py-2 rounded-md text-sm font-semibold font-sans cursor-pointer transition hover:bg-neutral-800 whitespace-nowrap flex-shrink-0 z-10"
          >
            {label}
          </button>
        ),
      )}
    </div>
  );
};

export default NavRow;
