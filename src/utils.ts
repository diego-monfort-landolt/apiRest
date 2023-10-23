import { newDiaryEntry } from "./types";

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error('incorect missing Date')
  }
  return dateFromRequest
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const isDate = (date: string) : boolean => {
  return Boolean(Date.parse(date))
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(object.comment)
    // ...
  }

  return newEntry

}

export default toNewDiaryEntry