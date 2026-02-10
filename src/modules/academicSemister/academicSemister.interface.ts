export type TMonth =
  | "january"
  | "february"
  | "march"
  | "april"
  | "may"
  | "june"
  | "july"
  | "august"
  | "september"
  | "october"
  | "november"
  | "december";

export type TAcademicSemisterName = "summer" | "autumn" | "winter";
export type TAcademicSemisterCode = "01" | "02" | "03";


export type TAcademicSemisterNameCodeMapper = {
    [key: string]: string;
  }; 
export type TAcademicSemister = {
  name: TAcademicSemisterName;
  code: TAcademicSemisterCode;
  year: string;
  startMonth: TMonth;
  endMonth: TMonth;
};
