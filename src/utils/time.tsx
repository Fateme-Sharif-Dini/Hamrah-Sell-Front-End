import { gregorian_to_jalaali } from "@/app/_components/date-picker/date-picker-utils";

export function millisecondsToHHMMSS(milliseconds: number): string {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}${hours > 0 ? ":" + formattedSeconds : ""}`;
}

export function secondsToHHMMSS(totalSeconds: number): string {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  // const formattedSeconds = parseInt(seconds.toString(), 10)
  //   .toString()
  //   .padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}`;
}

export function dateFormatForTable(date: Date | string) {
  const newDate = new Date(date);
  const dateFormat = newDate.toLocaleString("fa-IR", { dateStyle: "short" });
  const timeFormat = newDate.toLocaleString("fa-IR", {
    timeStyle: "medium"
  });
  return `${timeFormat} - ${dateFormat}`;
}

export function isoToPersianDate(date: string): string {
  return new Date(date).toLocaleString("fa-IR", {
    dateStyle: "short"
  });
}
export function isoToLongerPersianDate(date: string): string {
  const isoDate = new Date(date);
  const gy = isoDate.getFullYear();
  const gm = isoDate.getMonth() + 1;
  const gd = isoDate.getDate();
  const hours = isoDate.getHours().toString().padStart(2, "0");
  const minutes = isoDate.getMinutes().toString().padStart(2, "0");

  const jalaaliDate = gregorian_to_jalaali(gy, gm, gd);

  const months = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
  ];

  const formattedDate = `${jalaaliDate.day} ${months[jalaaliDate.month - 1]} ${jalaaliDate.year}`;

  return formattedDate;
}

export function isDateExpired(timeStamp: number) {
  const date = new Date(timeStamp);
  //Now we have expiration date of the token

  if (date > new Date()) {
    return false;
  }

  return true;
}
