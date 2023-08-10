const ageFromDate = (d, m, y) => {
    let days = 0
    days += d
    days += m*30
    days += y*365
    return days;
}