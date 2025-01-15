import { useModels } from "../contexts/ModelsContext"; // Access models from the context
import { ModelCard } from "../components/ModelCard";
import { Brain } from "lucide-react";

export function HomePage() {
  const { models: anatomyModels, loading, error } = useModels();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600 text-xl">Loading models...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-red-500 text-xl">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-rose-300" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            3D Anatomy Models
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore detailed 3D models of human anatomy for medical education
            and research
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {anatomyModels?.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
}
