import React from "react";
import RacesListSingleRow from "./RaceListSingleRow";
import { FormattedRacingData } from "../../utils/formatDataHelper";

interface RaceListProps {
  data: FormattedRacingData[];
}

export default function RacesList({ data }: RaceListProps) {
  return (
    <table className="RaceList">
      <thead>
        <tr>
          <th className="bold">Race Number</th>
          <th className="bold">Meeting Name</th>
          <th className="bold">Time Left</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: FormattedRacingData) => {
          return <RacesListSingleRow key={item.race_id} item={item} />;
        })}
      </tbody>
    </table>
  );
}
