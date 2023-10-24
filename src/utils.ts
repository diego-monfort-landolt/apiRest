import { newDiaryEntry, Weather, Visibility } from "./types";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('incorect missing Date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorect or missing Weather')
  }
return weatherFromRequest
}
const isWeather = (string: string): Weather => {
  return ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(string)
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isDate = (date: string) : boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.comment),
    // ...
  }

  return newEntry

}

export default toNewDiaryEntry