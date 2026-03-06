interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
}

export default function ReviewCard({ name, location, rating, review }: ReviewCardProps) {
  return (
    <div className="card p-6 flex flex-col">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-secondary font-bold text-lg shadow-md">
          {name.charAt(0)}
        </div>
        <div className="flex-grow">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed flex-grow italic">"{review}"</p>
    </div>
  );
}
