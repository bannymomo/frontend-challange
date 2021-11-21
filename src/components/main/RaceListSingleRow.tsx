import React, { useEffect } from "react";
import classnames from "classnames";
import { Duration } from "luxon";
import { MdChevronRight } from "react-icons/md";
import { FormattedRacingData } from "../../utils/formatDataHelper";
import {
  DEADLINE,
  COUNTDOWN_TIME_FORMAT,
  START_TEXT,
  RACING_LIST_TITLE_ID,
} from "../../utils/constant";
import { useDataContext } from "../../DataContext";

interface RacesListSingleRowProps {
  item: FormattedRacingData;
}

export default function RacesListSingleRow({
  item: { race_id, race_number, meeting_name, advertised_start },
}: RacesListSingleRowProps) {
  const { currentTime, selectedRaceId, setSelectedRaceId, setFormattedData } =
    useDataContext();
  const isHighlight = race_id === selectedRaceId;
  const { seconds } = advertised_start;
  const timeLeft = seconds - currentTime;
  const time = Duration.fromMillis(timeLeft).toFormat(COUNTDOWN_TIME_FORMAT);

  useEffect(() => {
    function removeOutOfDateData(id: string) {
      setFormattedData((formattedData: FormattedRacingData[]) => {
        const newData = [...formattedData];
        const index = newData.findIndex((item) => item.race_id === id);
        newData.splice(index, 1);
        setSelectedRaceId(newData[0]?.race_id);
        return newData as FormattedRacingData[];
      });
    }
    if (timeLeft < DEADLINE) removeOutOfDateData(race_id);
  }, [timeLeft, setFormattedData, setSelectedRaceId, race_id]);

  return (
    <tr
      title={RACING_LIST_TITLE_ID}
      className={classnames({
        highlight: isHighlight,
      })}
      onClick={() => setSelectedRaceId(race_id)}
    >
      <td>{race_number}</td>
      <td>{meeting_name}</td>
      <td>{timeLeft < 0 ? START_TEXT : time}</td>
      <td>{isHighlight && <MdChevronRight />}</td>
    </tr>
  );
}
