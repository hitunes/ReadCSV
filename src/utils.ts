export const dateStringToDate = (dateString: string): Date => {
  // 22/12/2000
  const dateParts = dateString
    .split('/')
    .map((date:string):number =>
    Number(date));
  return new Date(dateParts[2], dateParts[1] -1, dateParts[0]);
}