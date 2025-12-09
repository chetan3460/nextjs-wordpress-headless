import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <section className="breadcrumbs pt-[83px] pb-5 lg:pb-7">
      <nav className="container-fluid" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-medium tracking-[0.14px]">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="6"
                  viewBox="0 0 6 6"
                  fill="none"
                  className="inline-block align-middle"
                  aria-hidden="true"
                >
                  <circle cx="2.5957" cy="3" r="2.5957" fill="#FFB6B0" />
                </svg>
              )}
              {item.link ? (
                <Link
                  href={item.link}
                  className="text-grey-1 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-primary">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
