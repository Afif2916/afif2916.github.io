import experiences from '../data/workExperience';

export default function WorkExperience() {

    return (
    <div className="w-full max-w-3xl min-h-xl mx-auto px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-left mb-10">Work Experience</h2>
      <div className="ml-4 relative border-l border-gray-300 dark:border-gray-600">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Bullet point */}
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full mt-2.5 -left-1.5 border border-white"></div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {exp.year}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {exp.title} @ {exp.company}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>

    )
}