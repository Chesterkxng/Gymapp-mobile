import dayjs from "./dayjs";


type DayFormat = "numeric" | "2-digit" | undefined;
type MonthFormat = "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
type YearFormat = "numeric" | "2-digit" | undefined;
type Locale = string;

/**
 * * Formats a date into a localized, human-readable string.
 *
 * @param date - The date to format. Can be a Date object or an ISO date string.
 * @param options - Formatting options.
 * @param options.locale - Locale used for formatting (e.g. "fr-FR", "en-US"). Defaults to "fr-FR".
 * @param options.day - Day display format ("numeric" | "2-digit").
 * @param options.month - Month display format ("numeric" | "2-digit" | "long" | "short" | "narrow").
 * @param options.year - Year display format ("numeric" | "2-digit").
 *
 * @returns A formatted date string according to the given locale and options.
 *
 * @example
 * formatDate("2026-02-05", { day: "numeric", month: "short" });
 */
export function formatDate(
    date: string | Date,
    {
        locale = "fr-FR",
        day,
        month,
        year,
    }: {
        locale?: Locale;
        day?: DayFormat;
        month?: MonthFormat;
        year?: YearFormat;
    } = {}
): string {
    if (!date) return "";

    const d = typeof date === "string" ? new Date(date) : date;

    return d.toLocaleDateString(locale, {
        day,
        month,
        year,
    });
}

/**
 * Formats a date into a localized relative time string
 * (e.g. "il y a 2 heures", "2 hours ago").
 *
 * Safe for React Native (no Intl dependency).
 *
 * @param date - Date or ISO string
 * @param locale - Language locale ("fr", "en", ...)
 *
 * @returns Localized relative time string
 */
export function formatRelativeTime(
  date: string | Date,
  locale: string = "fr"
): string {
  if (!date) return "";

  return dayjs(date)
    .locale(locale)
    .fromNow();
}