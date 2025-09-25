export default function ArticleCard({ title, description, image, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden"
    >
      {/* Image */}
      <div className="w-full">
        <img
          className="object-cover w-full h-48"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {description}
        </p>
      </div>
    </a>
  )
}
