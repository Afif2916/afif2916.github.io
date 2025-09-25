export default function ProjectCard({ name, description, icon: Icon, link, color }) {
  const isReactIcon = typeof Icon === "function"; // react-icons = function

  return (
    <div className="w-full h-full max-w-sm flex flex-col justify-between p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:shadow-md transition">
      {/* Header */}
      <div>
        <div className="mb-5 flex flex-row gap-5 items-center">
          <span className="text-4xl">
            {isReactIcon ? (
              <Icon className={color} />
            ) : (
              <img src={Icon} alt={name} className="w-30 h-16" />
            )}
          </span>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
          </a>
        </div>

        <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>

      {/* Footer button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center w-40 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Check On Github
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
