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

export const anatomyModels: AnatomyModel[] = [
  {
    id: "human-heart",
    title: "Human Heart",
    description:
      "Detailed 3D model of the human heart showing all four chambers, major vessels, and valves. Perfect for medical education and understanding cardiac anatomy.",
    modelUrl:
      "https://res.cloudinary.com/dzv2jji5x/image/upload/v1736771017/heart_ivln52.glb",
    credit:
      "https://sketchfab.com/3d-models/cardiac-anatomy-external-view-e8e8c6685e82474d8393693fd0646dc7",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530026341218-8e3d0b803ca6?auto=format&fit=crop&q=80&w=800",
    category: "Cardiovascular",
    tags: ["heart", "cardiac", "circulation"],
  },
  {
    id: "human-kidney",
    title: "Human Kidney",
    description:
      "Detailed 3D model of the human kidney showing internal and external structures. Features include renal cortex, medulla, nephrons, collecting ducts, and blood vessels. Complete with ureter and renal pelvis visualization. Perfect for studying renal anatomy and understanding kidney function.",
    modelUrl:
      "https://res.cloudinary.com/dzv2jji5x/image/upload/v1736771021/kidney_wlka7i.glb",
    credit:
      "https://sketchfab.com/3d-models/kidney-3aef2741ea754fb486451292b87e159a",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1559757175-053139280de2?auto=format&fit=crop&q=80&w=800",
    category: "Urinary",
    tags: ["kidney", "renal", "nephron", "urinary system", "organs"],
  },
  {
    id: "human-skin",
    title: "Human Skin",
    description:
      "High-resolution 3D model showcasing the three main layers of human skin: epidermis, dermis, and hypodermis. Includes detailed visualization of skin structures like hair follicles, sweat glands, and blood vessels.",
    modelUrl:
      "https://res.cloudinary.com/dzv2jji5x/image/upload/v1736771446/human_skin_cross_section_pyf0c2.glb",
    credit:
      "https://sketchfab.com/3d-models/human-skin-cross-section-083a3040efda422ba9e1d033f46c5e50",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?auto=format&fit=crop&q=80&w=800",
    category: "Integumentary",
    tags: ["skin", "dermis", "epidermis", "hypodermis", "integumentary system"],
  },
  {
    id: "female-body",
    title: "Complete Female Anatomy",
    description:
      "Comprehensive 3D model of the female human body with all major organ systems, muscles, and skeletal structure. Ideal for medical education and anatomical studies.",
    modelUrl:
      "https://res.cloudinary.com/dzv2jji5x/image/upload/v1736771019/female_anatomy_2_gv0qxk.glb",
    credit:
      "https://sketchfab.com/3d-models/female-anatomy-2-423ab35b97f14f3ba179e3625e9e6945",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?auto=format&fit=crop&q=80&w=800",
    category: "Full Body",
    tags: ["female", "anatomy", "complete", "organ systems"],
  },
  {
    id: "human-skeleton",
    title: "Complete Human Skeleton",
    description:
      "Highly detailed 3D model of the complete human skeletal system featuring all 206 bones. Includes articulated joints, vertebral column, and detailed views of the skull. Perfect for studying osteology, joint mechanics, and skeletal anatomy.",
    modelUrl:
      "https://res.cloudinary.com/dzv2jji5x/image/upload/v1736771022/human_skeleton_cqz3dk.glb",
    credit:
      "https://sketchfab.com/3d-models/skeleton-4de7b96a351a4a35b1b6e5415277ff07",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&q=80&w=800",
    category: "Skeletal",
    tags: ["skeleton", "bones", "joints", "skull", "vertebrae", "osteology"],
  },
  // Add more models
];
