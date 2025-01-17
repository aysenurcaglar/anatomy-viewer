import { useParams, Navigate, Link } from "react-router-dom";
import { useModels } from "../contexts/ModelsContext";
import { ModelViewer } from "../components/ModelViewer";
import { ArrowLeft, Tag } from "lucide-react";

export function ModelLayout() {
  const { modelId } = useParams();
  const { models, loading, error } = useModels();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const model = models?.find((m) => m.id === modelId);

  if (!model) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Models
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {model.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">{model.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {model.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Model Information</h2>
              <dl className="grid grid-cols-1 gap-4">
                <div>
                  <dt className="text-sm font-medium text-gray-500">
                    Category
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {model.category}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ModelViewer modelUrl={model.modelUrl} />
            <span className="block text-sm text-gray-500 mt-2 place-self-center">
              Credit:
              <a
                href={model.credit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline ml-1"
              >
                {model.credit}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
