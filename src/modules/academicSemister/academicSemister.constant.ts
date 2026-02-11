import { TAcademicSemisterCode, TAcademicSemisterName, TAcademicSemisterNameCodeMapper, TMonth } from "./academicSemister.interface";

export const ALL_MONTHS:TMonth[] = [
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

 export const academicSemisterNameCodeMapper: TAcademicSemisterNameCodeMapper = {
    autumn: "01",
    summer: "02",
    winter: "03",
  };