function alarmCheck(alarmTime,wakeTime) {
    const [alarmHH,alarmMM] = alarmTime.split(":").map(Number)
    const [wakeHH,wakeMM] = wakeTime.split(":").map(Number)
    // since same day
    const alarmTimeInMinutes = alarmHH*60+alarmMM;
    const wakeTimeInMinutes = wakeHH*60+wakeMM;
    const timeDiffInMinutes = wakeTimeInMinutes-alarmTimeInMinutes;
    if(timeDiffInMinutes <0)return "early"
    if(timeDiffInMinutes >=0 && timeDiffInMinutes <=10)return "on time"
    return "late"    
}

console.log(alarmCheck("07:00","06:45"))
console.log(alarmCheck("06:30","06:30"))
console.log(alarmCheck("09:30","09:45"))