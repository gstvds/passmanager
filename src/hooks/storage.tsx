import React, { ReactNode, createContext, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../utils/types';

interface StorageContextData {
  set: (payload: string) => Promise<void>;
  get: () => Promise<string | null>;
}

const StorageContext = createContext<StorageContextData>({} as StorageContextData);

interface StorageProviderProps {
  children: ReactNode;
}

export default function StorageProvider({ children }: StorageProviderProps) {

  async function set(payload: string) {
    await AsyncStorage.setItem(STORAGE_KEYS.logins, payload);
  }

  async function get() {
    const response = await AsyncStorage.getItem(STORAGE_KEYS.logins);
    return response;
  }

  return (
    <StorageContext.Provider value={{ set, get }}>
      {children}
    </StorageContext.Provider>
  );
}

export function useStorageData() {
  const context = useContext(StorageContext);
  return context;
}
