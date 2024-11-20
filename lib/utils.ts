import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatterDate = (value: string | number | Date) => {
  let date: Date

  // Convert the input value to a Date object
  if (typeof value === 'string' || typeof value === 'number') {
    date = new Date(value)

    // Check if the date is invalid
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid date value: ${value}`)
    }
  } else if (value instanceof Date) {
    date = value

    // Check if the provided Date object is valid
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid Date object`)
    }
  } else {
    throw new Error(`Unsupported value type: ${typeof value}`)
  }

  // Format the valid date
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date)
}
