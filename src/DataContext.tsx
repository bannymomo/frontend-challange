import React, { useState } from "react";
import { DateTime } from "luxon";
import { FormattedRacingData } from "./utils/formatDataHelper";

type SetFormattedDataFunction = (
  value: FormattedRacingData[]
) => FormattedRacingData[];
export interface DataContextValue {
  loading: boolean;
  setLoading: (value: boolean) => void;
  error: boolean;
  setError: (value: boolean) => void;
  formattedData: FormattedRacingData[];
  setFormattedData: (
    value: FormattedRacingData[] | SetFormattedDataFunction
  ) => void;
  selectedRaceId: string;
  setSelectedRaceId: (id: string) => void;
  filter: string[];
  setFilter: (ids: string[]) => void;
  currentTime: number;
  setCurrentTime: (time: number) => void;
}

export const DataContext = React.createContext({} as DataContextValue);

interface DataContentProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataContentProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formattedData, setFormattedData] = useState<FormattedRacingData[]>([]); // use array here can easy do map function then return TSX
  const [selectedRaceId, setSelectedRaceId] = useState("");
  const [filter, setFilter] = useState<string[]>([] as string[]);
  const [currentTime, setCurrentTime] = useState(DateTime.now().toMillis());

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        error,
        setError,
        formattedData,
        setFormattedData,
        selectedRaceId,
        setSelectedRaceId,
        filter,
        setFilter,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => React.useContext(DataContext);
