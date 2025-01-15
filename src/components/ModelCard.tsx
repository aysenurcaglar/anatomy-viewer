import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { AnatomyModel, useModels } from "../contexts/ModelsContext";

interface ModelCardProps {
  model: AnatomyModel;
}

export function ModelCard({ model }: ModelCardProps) {
  const { setSelectedModel } = useModels();

  const handleClick = () => {
    setSelectedModel(model);
  };

  return (
    <Link
      to={`/model/${model.id}`}
      className="group block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={model.thumbnailUrl}
          alt={model.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {model.title}
        </h3>
        <p className="text-gray-600 line-clamp-2 mb-4">{model.description}</p>
        <div className="flex items-center text-blue-600 font-medium">
          View Model
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
