export function getCurrentTime(): string {
  const currentDate = new Date()
  const hours = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const AmOrPM = hours >= 12 ? 'PM' : 'AM'

  const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`

  return `${hours}:${formatMinutes} ${AmOrPM}`
}
