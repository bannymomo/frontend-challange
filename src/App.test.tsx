import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { DataContext, DataContextValue } from "./DataContext";
import { data_6 } from "./utils/fakeData";
import {
  RACING_LIST_TITLE_ID,
  LIST_LIMIT,
  LOADING_STATE_TEST_ID,
} from "./utils/constant";

describe("App component", () => {
  const setup = (contextValueOverrides: Partial<DataContextValue> = {}) => {
    const contextValue = {
      loading: false,
      setLoading: jest.fn(),
      error: false,
      setError: jest.fn(),
      formattedData: jest.fn(),
      setFormattedData: jest.fn(),
      selectedRaceId: data_6[0].race_id,
      setSelectedRaceId: jest.fn(),
      filter: [],
      setFilter: jest.fn(),
      currentTime: 0,
      ...contextValueOverrides,
    } as unknown as DataContextValue;

    return render(
      <DataContext.Provider value={contextValue}>
        <App />
      </DataContext.Provider>
    );
  };

  it("Should display a loading state if the data is still being loaded", async () => {
    setup({ loading: true });
    const loadingSkeleton = screen.getByTestId(LOADING_STATE_TEST_ID);
    expect(loadingSkeleton).toBeVisible();
  });

  it("Should display error message if an error happened", async () => {
    setup({ error: true });
    const errorMessage = screen.getByText("Data Loading Error.");
    expect(errorMessage).toBeVisible();
  });

  it("Should display an empty page if there's no data", async () => {
    setup({ formattedData: [] });
    const emptyPage = screen.getByText("No Data");
    expect(emptyPage).toBeVisible();
  });

  it("Should display a list of races when the data is loaded", async () => {
    setup({ formattedData: data_6 });
    const racingLists = screen.getAllByTitle(RACING_LIST_TITLE_ID);
    expect(racingLists).toHaveLength(LIST_LIMIT);
  });
});
