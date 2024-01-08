let ampm=document.getElementById('ampm')

function displayTime(){
    let dateTime= new Date()
    let hr=dateTime.getHours()
    let mins=dateTime.getMinutes()
    let sec= dateTime.getSeconds()
    
    if(hr>12){
        hr=hr-12 
        ampm.innerHTML='PM'
    }
    document.getElementById('hours').innerHTML=padZero(hr)
    document.getElementById('minutes').innerHTML=padZero(mins)
    document.getElementById('seconds').innerHTML=padZero(sec)

}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,1000)