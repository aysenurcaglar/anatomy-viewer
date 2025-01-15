import React, { createContext, useContext, useEffect, useState } from "react";

export interface AnatomyModel {
  id: string;
  title: string;
  description: string;
  modelUrl: string;
  credit: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
}

interface ModelsContextProps {
  models: AnatomyModel[] | null;
  loading: boolean;
  error: string | null;
  selectedModel: AnatomyModel | null;
  setSelectedModel: (model: AnatomyModel | null) => void;
}

const ModelsContext = createContext<ModelsContextProps | undefined>(undefined);

export const ModelsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [models, setModels] = useState<AnatomyModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<AnatomyModel | null>(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(
          "https://67877808c4a42c916106d8be.mockapi.io/api/models"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch models: ${response.status}`);
        }
        const data: AnatomyModel[] = await response.json();
        setModels(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  return (
    <ModelsContext.Provider
      value={{ models, loading, error, selectedModel, setSelectedModel }}
    >
      {children}
    </ModelsContext.Provider>
  );
};

export const useModels = () => {
  const context = useContext(ModelsContext);
  if (!context) {
    throw new Error("useModels must be used within a ModelsProvider");
  }
  return context;
};
