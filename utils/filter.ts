type Period = 'weekly' | 'monthly' | 'yearly'

type DatePoint = {
  date: string | Date
  value: number
}

/**
 * Filters data based on a given time period relative to now.
 *
 * @param data Array of objects containing a date and a value
 * @param period Period to filter by (weekly, monthly, yearly)
 * @returns Filtered array of DatePoint
 */
export function filterByPeriod(
  data: DatePoint[],
  period: Period
): DatePoint[] {
  const now = new Date()

  switch (period) {
    case 'weekly':
      return data.filter(d => {
        const date = new Date(d.date)
        const diff = now.getTime() - date.getTime()
        return diff >= 0 && diff <= 7 * 24 * 60 * 60 * 1000
      })

    case 'monthly':
      return data.filter(d => {
        const date = new Date(d.date)
        return (
          date.getMonth() === now.getMonth() &&
          date.getFullYear() === now.getFullYear()
        )
      })

    case 'yearly':
      return getLastMonthlyValues(data, now.getFullYear())

    default:
      const _exhaustive: never = period
      return data
  }
}



function getLastMonthlyValues(
  data: DatePoint[],
  year: number
): DatePoint[] {
  const byMonth = new Map<number, DatePoint>()

  for (const d of data) {
    const date = new Date(d.date)
    if (date.getFullYear() !== year) continue

    const month = date.getMonth() // 0 → Jan, 11 → Dec

    const existing = byMonth.get(month)
    if (!existing || date > new Date(existing.date)) {
      byMonth.set(month, { ...d, date })
    }
  }

  return Array.from(byMonth.entries())
    .sort(([a], [b]) => a - b)
    .map(([, value]) => value)
}
