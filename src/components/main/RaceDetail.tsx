import React from "react";
import { DateTime } from "luxon";
import { START_TIME_FORMAT } from "../../utils/constant";
import { useDataContext } from "../../DataContext";
import { FormattedRacingData } from "../../utils/formatDataHelper";

export default function RacesDetail() {
  const { selectedRaceId, formattedData } = useDataContext();
  const target = formattedData.find(
    (item) => item.race_id === selectedRaceId
  ) as FormattedRacingData;
  const { race_number, race_name, meeting_name, advertised_start, race_form } =
    target;
  return (
    <div className="RacesDetail" title="RacesDetail">
      <h3>Races Detail</h3>
      <ul>
        <li>
          <span className="bold">Race Number:</span>
          <span>{race_number}</span>
        </li>
        <li>
          <span className="bold">Race Name:</span>
          <span>{race_name}</span>
        </li>
        <li>
          <span className="bold">Meeting Name:</span>
          <span>{meeting_name}</span>
        </li>
        <li>
          <span className="bold">Start Time:</span>
          <span>
            {advertised_start.seconds &&
              DateTime.fromMillis(advertised_start.seconds).toFormat(
                START_TIME_FORMAT
              )}
          </span>
        </li>
        <li>
          <span className="bold">Comment: </span>
          <span>{race_form.race_comment || "null"}</span>
        </li>
      </ul>
      <p></p>
    </div>
  );
}
