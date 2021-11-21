import React, { useCallback, useEffect } from "react";
import "./css/App.scss";
import { Skeleton, Alert } from "antd";
import "antd/dist/antd.css";
import { DateTime } from "luxon";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/main/Main";
import Footer from "./components/Footer";
import { useDataContext } from "./DataContext";
import getRacingData from "./utils/axios";
import {
  APP_NAME,
  COMPANY_NAME,
  ERROR_MESSAGE,
  LIST_LIMIT,
  LOADING_STATE_TEST_ID,
} from "./utils/constant";
import { orderData } from "./utils/formatDataHelper";

function App() {
  const {
    loading,
    error,
    setLoading,
    setFormattedData,
    setError,
    setSelectedRaceId,
    formattedData,
    setCurrentTime,
  } = useDataContext();

  const loadData = useCallback(() => {
    setLoading(true);
    getRacingData()
      .then(({ data }) => {
        const racingData = data?.data;
        if (racingData) {
          const { race_summaries, next_to_go_ids } = racingData;
          const dataWithMilliSecond = next_to_go_ids.map((item: string) => {
            race_summaries[item].advertised_start.seconds *= 1000; // change seconds to milliseconds
            return race_summaries[item];
          });
          const orderedData = orderData(dataWithMilliSecond);
          setFormattedData(orderedData);
          setSelectedRaceId(orderedData[0]?.race_id);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, [setLoading, setError, setFormattedData, setSelectedRaceId]);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(DateTime.now().toMillis());
    }, 1000);
  }, [setCurrentTime]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    if (formattedData.length < LIST_LIMIT) loadData();
  }, [formattedData, loadData]);

  return (
    <div className="App">
      <div className="App-container">
        <Header title={APP_NAME} />
        <Nav />
        {loading && (
          <div className="loading" data-testid={LOADING_STATE_TEST_ID}>
            <Skeleton />
          </div>
        )}
        {error && (
          <div className="error">
            <Alert
              message="Error"
              description={ERROR_MESSAGE}
              type="error"
              showIcon
            />
          </div>
        )}
        {!loading && !error && <Main />}
        <Footer company={COMPANY_NAME} />
      </div>
    </div>
  );
}

export default App;
