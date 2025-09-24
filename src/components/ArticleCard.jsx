import Image from '../assets/homepage.jpg'

export default function ArticleCard() {
  return (
    <a
      href="#"
      className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden"
    >
      {/* Image */}
      <div className="w-full">
        <img
          className="object-cover w-full h-48"
          src={Image}
          alt="Article"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>

        
      </div>
    </a>
  )
}
