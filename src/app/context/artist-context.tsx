import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ArtistData, initialArtistData } from '../data/artist-data';

interface ArtistContextType {
  artistData: ArtistData;
  updateArtistData: (data: Partial<ArtistData>) => void;
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined);

export function ArtistProvider({ children }: { children: ReactNode }) {
  const [artistData, setArtistData] = useState<ArtistData>(initialArtistData);

  const updateArtistData = (data: Partial<ArtistData>) => {
    setArtistData(prev => ({ ...prev, ...data }));
  };

  return (
    <ArtistContext.Provider value={{ artistData, updateArtistData }}>
      {children}
    </ArtistContext.Provider>
  );
}

export function useArtist() {
  const context = useContext(ArtistContext);
  if (!context) {
    throw new Error('useArtist must be used within ArtistProvider');
  }
  return context;
}
