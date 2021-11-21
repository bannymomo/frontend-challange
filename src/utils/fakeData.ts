import { DEADLINE } from "./constant";

import { FormattedRacingData } from "./formatDataHelper";

import { DateTime } from "luxon";

const currentTime = DateTime.now().toMillis();
const difference = Math.abs(DEADLINE);

export const data_1: FormattedRacingData = {
  advertised_start: { seconds: currentTime + difference },
  category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
  meeting_id: "529c35d3-0585-459c-b79a-4bef5bb409be",
  meeting_name: "Melton",
  race_id: "1ccb0949-f35a-408b-8678-481464b231b6",
  race_name:
    "All In One Property Breeders Crown Graduate Trotters Free For All (Group 2)",
  race_number: 6,
  race_form: {
    race_comment: "nice",
  },
};

export const data_2: FormattedRacingData = {
  advertised_start: { seconds: currentTime - difference },
  category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
  meeting_id: "c622ed7a-1a9f-4899-a4ed-d2d614f900b1",
  meeting_name: "Albion Park",
  race_id: "5fb93631-74dc-4ab5-b6fc-e7549e687105",
  race_name: "Air And Gas Industries Pace",
  race_number: 5,
  race_form: {
    race_comment: "nice",
  },
};

export const data_3: FormattedRacingData[] = [
  {
    advertised_start: { seconds: currentTime - difference },
    category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
    meeting_id: "c622ed7a-1a9f-4899-a4ed-d2d614f900b1",
    meeting_name: "Albion Park",
    race_id: "5fb93631-74dc-4ab5-b6fc-e7549e687105",
    race_name: "Air And Gas Industries Pace",
    race_number: 5,
    race_form: {
      race_comment: "nice",
    },
  },
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
    meeting_id: "529c35d3-0585-459c-b79a-4bef5bb409be",
    meeting_name: "Melton",
    race_id: "1ccb0949-f35a-408b-8678-481464b231b6",
    race_name:
      "All In One Property Breeders Crown Graduate Trotters Free For All (Group 2)",
    race_number: 6,
    race_form: {
      race_comment: "nice",
    },
  },
];

export const data_4: FormattedRacingData[] = [
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
    meeting_id: "529c35d3-0585-459c-b79a-4bef5bb409be",
    meeting_name: "Melton",
    race_id: "1ccb0949-f35a-408b-8678-481464b231b6",
    race_name:
      "All In One Property Breeders Crown Graduate Trotters Free For All (Group 2)",
    race_number: 6,
    race_form: {
      race_comment: "nice",
    },
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "dd614d5a-758a-499b-a0de-6b01ba0335a3",
    meeting_name: "Hove Bags",
    race_id: "34d6d955-de57-4ddd-a8f1-6f24217635e5",
    race_name: "500Mtrs (A5)",
    race_number: 3,
    race_form: {
      race_comment: "nice",
    },
  },
];

export const data_5: FormattedRacingData[] = [
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "161d9be2-e909-4326-8c2c-35ed71fb460b",
    meeting_id: "529c35d3-0585-459c-b79a-4bef5bb409be",
    meeting_name: "Melton",
    race_id: "1ccb0949-f35a-408b-8678-481464b231b6",
    race_name:
      "All In One Property Breeders Crown Graduate Trotters Free For All (Group 2)",
    race_number: 6,
    race_form: {
      race_comment: "nice",
    },
  },
];

export const data_6: FormattedRacingData[] = [
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "d234d1b3-9c25-4ee5-aa20-05050699c7d0",
    meeting_name: "Southland",
    race_form: {
      race_comment: "nice",
    },
    race_id: "06c1ce34-6a4e-4d97-903e-9429540d2641",
    race_name: "Race 1",
    race_number: 1,
  },
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
    meeting_id: "9e456169-87db-4d8b-9c32-70a776b15f82",
    meeting_name: "Woodbine",
    race_form: {
      race_comment: "nice",
    },
    race_id: "20b9babc-a623-4fa7-8ba3-fe72ea1bca4f",
    race_name: "Race 7 - Allowance",
    race_number: 7,
  },
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "7cd4bbdf-212a-45c9-8c60-fb40a26f788c",
    meeting_name: "Monmore",
    race_form: {
      race_comment: "nice",
    },
    race_id: "37ba3c6b-8c4f-4233-917f-9e22851a72e6",
    race_name: "630Mtrs (Or)",
    race_number: 10,
  },
  {
    advertised_start: { seconds: currentTime + difference },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "f4e70e18-d632-4f86-ae26-9eb8e59abc45",
    meeting_name: "Crayford",
    race_form: {
      race_comment: "nice",
    },
    race_id: "52d3bfce-9ad0-435a-8c2b-d14a1e7a764c",
    race_name: "380Mtrs (A6)",
    race_number: 10,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
    meeting_id: "6225a349-d73a-415d-8527-dc2223de7250",
    meeting_name: "Del Mar",
    race_form: {
      race_comment: "nice",
    },
    race_id: "584cb69f-5e3f-43a1-856c-824c7aeaebd1",
    race_name: "Race 2 - Claiming",
    race_number: 2,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
    meeting_id: "2e46dba2-97f3-40af-8eb5-ef54c180df45",
    meeting_name: "Hipodromo Chile",
    race_form: {
      race_comment: "nice",
    },
    race_id: "ca9b56da-ebfa-4951-ad64-221e24d74f39",
    race_name: "6F Hcap",
    race_number: 14,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "caf63293-e018-44d8-8d31-2bb96bf383ea",
    meeting_name: "Romford",
    race_form: {
      race_comment: "nice",
    },
    race_id: "cb2c9e62-8774-4f3d-90d3-e23bcf0a75ec",
    race_name: "400Mtrs (A9)",
    race_number: 10,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "9daef0d7-bf3c-4f50-921d-8e818c60fe61",
    meeting_id: "080917f9-c523-4159-a240-5ef4b9e2c0e2",
    meeting_name: "Sheffield Bags",
    race_form: {
      race_comment: "nice",
    },
    race_id: "e57ec427-43c3-4d06-9023-d8bdae15bbe9",
    race_name: "Fourpenny Rebel 100 Club Race",
    race_number: 11,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
    meeting_id: "8c6099e6-5981-486a-ba71-e493d6d7a464",
    meeting_name: "Las Americas",
    race_form: {
      race_comment: "nice",
    },
    race_id: "f3cc8769-747e-42c3-bf5b-b2550bc77400",
    race_name: "6 1/2F Stakes",
    race_number: 4,
  },
  {
    advertised_start: { seconds: currentTime + difference * 2 },
    category_id: "4a2788f8-e825-4d36-9894-efd4baf1cfae",
    meeting_id: "e4db1a79-2906-421f-9114-3b8bcd683d32",
    meeting_name: "Maronas",
    race_form: {
      race_comment: "nice",
    },
    race_id: "fd9793aa-d80c-466f-8bdd-cd42e2231c6f",
    race_name: "5F Stakes",
    race_number: 7,
  },
];
