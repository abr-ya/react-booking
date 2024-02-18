import moment from "moment";
import { Range } from "react-date-range";
import { DATE_FORMAT } from "./constants";

export const createRange = (start: string, end: string) => {
  const range: Range = {
    startDate: new Date(moment(start, DATE_FORMAT).toString()),
    endDate: new Date(moment(end, DATE_FORMAT).toString()),
    key: "selection",
  };

  return range;
};
