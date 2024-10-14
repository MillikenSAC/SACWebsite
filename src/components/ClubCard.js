export default function ClubCard({ name, desc, imgSrc, link }) {
  return (
      <div
          onClick={() => window.open(link, '_blank')}
          className="relative cursor-pointer overflow-hidden rounded-3xl shadow-xl border-indigo-900 border transition-transform hover:scale-105 hover:shadow-2xl duration-200 ease-in-out bg-white p-6 h-80 w-96" // Increased height to h-80 and width to w-96
      >
          <div className="flex items-start h-full">
              <img
                  src={imgSrc}
                  alt={name}
                  className="w-20 h-20 rounded-full border-2 border-indigo-900 mr-4" // Increased size of the circular image
              />
              <div className="flex-1">
                  <div className="text-xl font-bold text-sky-950">{name}</div>
                  <div className="h-1 bg-indigo-900 my-2"></div>
                  <div className="text-gray-700 h-40 overflow-hidden overflow-ellipsis"> {/* Increased height for description */}
                      {desc}
                  </div>
              </div>
          </div>
      </div>
  );
}
