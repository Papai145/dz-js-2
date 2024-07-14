function searchAge(date) {
  const dateBirth = new Date(date);
  const nowTime = new Date();
  if (
    nowTime.getFullYear() - dateBirth.getFullYear() >= 14 &&
    dateBirth.getMonth() <= nowTime.getMonth() &&
    dateBirth.getDate() <= nowTime.getDate()
  ) {
    return true;
  }
  return false;
}
console.log(searchAge("08-07-2010"));
