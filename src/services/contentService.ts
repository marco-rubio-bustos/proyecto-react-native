export interface LandingSection {
  id: string;
  title: string;
  description: string;
}

const mockSections: LandingSection[] = [
  {
    id: "hero",
    title: "Scala Learning",
    description: "Una plataforma educativa impulsada por alianzas universitarias.",
  },
];

export const fetchLandingSections = async (): Promise<LandingSection[]> => {
  return Promise.resolve(mockSections);
};

