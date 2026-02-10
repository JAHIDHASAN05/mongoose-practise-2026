import { TAcademicSemisterCode, TAcademicSemisterName } from "./academicSemister.interface";

export const ALL_MONTHS = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
] as const;

export const AcademicSemisterName: TAcademicSemisterName[] = [
  "autumn",
  "summer",
  "winter",
];

export const AcademicSemisterCode: TAcademicSemisterCode[] = ["01", "02", "03"];