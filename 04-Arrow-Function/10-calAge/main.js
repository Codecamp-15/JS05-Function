function countDaysFromBirth(birthYear, birthMonth, birthDay) {
    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    const currentDate = new Date(2020, 11, 31);
  
    const timeDifference = currentDate - birthDate;
    const days = timeDifference / (1000 * 60 * 60 * 24); // 1 day in milliseconds
  
    return Math.floor(days); // ปัดเศษทศนิยมทิ้ง
  }
  
  const ageInDays = countDaysFromBirth(1990, 1, 1);
  console.log(`Age in days: ${ageInDays}`);
  