interface RacingForm {
  race_comment: string;
}

interface AdvertisedStart {
  seconds: number;
}

export interface FormattedRacingData {
  race_id: string;
  advertised_start: AdvertisedStart;
  category_id: string;
  meeting_id: string;
  meeting_name: string;
  race_form: RacingForm;
  race_number: number;
  race_name: string;
}

export function orderData(data: FormattedRacingData[]): FormattedRacingData[] {
  return data.sort((a, b) => {
    return a.advertised_start.seconds - b.advertised_start.seconds;
  });
}

export function getTimeDifference(
  startTime: number,
  currentTime: number
): number {
  return startTime - currentTime;
}

export function filterData(
  data: FormattedRacingData[],
  filter: string[]
): FormattedRacingData[] {
  if (!filter?.length) return data;
  return data.filter((item) => filter.includes(item.category_id));
}
