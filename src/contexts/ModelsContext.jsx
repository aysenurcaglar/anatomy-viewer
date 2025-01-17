import React, { createContext, useContext, useEffect, useState } from "react";

const ModelsContext = createContext();

export const ModelsProvider = ({ children }) => {
  const [models, setModels] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(
          "https://67877808c4a42c916106d8be.mockapi.io/api/models"
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch models: ${response.status}`);
        }
        const data = await response.json();
        setModels(data);
      } catch (err) {
        setError(err.message);
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
