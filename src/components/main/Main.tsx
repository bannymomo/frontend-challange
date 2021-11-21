import React from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

import RacesList from "./RacesList";
import RaceDetail from "./RaceDetail";
import EmptyPage from "../EmptyPage";
import { useDataContext } from "../../DataContext";
import { filterData } from "../../utils/formatDataHelper";
import { LIST_LIMIT } from "../../utils/constant";

export default function Main() {
  const { formattedData, filter, setSelectedRaceId } = useDataContext();
  const data = filterData(formattedData, filter);

  useDeepCompareEffect(() => {
    if (data.length) setSelectedRaceId(data[0].race_id);
  }, [data, setSelectedRaceId]);

  if (data.length)
    return (
      <div className="Main">
        <RacesList data={data.slice(0, LIST_LIMIT)} />
        <RaceDetail />
      </div>
    );
  return <EmptyPage />;
}
