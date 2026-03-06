import type { Trek } from '../../data/treks';
import { Link } from 'react-router-dom';

interface TrekCardProps {
  trek: Trek;
}

export default function TrekCard({ trek }: TrekCardProps) {
  return (
    <Link to={`/trek/${trek.id}`}>
      <div className="card card-hover h-full flex flex-col">
        <div className="bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center overflow-hidden w-full" style={{aspectRatio: '400 / 250'}}>
          {trek.image ? (
            <img src={trek.image} alt={trek.name} className="w-full h-full object-cover" width="400" height="250" loading="lazy" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white text-5xl">🏔️</div>
          )}
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-primary mb-2">{trek.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed flex-grow">{trek.description}</p>
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Duration:</span>
              <span className="font-semibold text-gray-900">{trek.duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Difficulty:</span>
              <span className={`px-3 py-1 rounded-md font-semibold text-white ${
                trek.difficulty === 'Easy' ? 'bg-green-500' : 
                trek.difficulty === 'Moderate' ? 'bg-yellow-500' : 
                'bg-red-500'
              }`}>
                {trek.difficulty}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Altitude:</span>
              <span className="font-semibold text-gray-900">{trek.altitude}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Best Time:</span>
              <span className="font-semibold text-gray-900">{trek.bestTime}</span>
            </div>
          </div>
          <button className="btn-primary w-full">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
