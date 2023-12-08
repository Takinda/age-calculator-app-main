function Getbirth(){
    var D = document.getElementById("Day").value;
    var M = document.getElementById("Month").value;
    var Y = document.getElementById("Year").value;
    
    const dayEmptyMessage = document.getElementById('dayEmptyMessage');
    const dayInvalidMessage = document.getElementById('dayInvalidMessage');
    const monthEmptyMessage = document.getElementById('monthEmptyMessage');
    const monthInvalidMessage = document.getElementById('monthInvalidMessage');
    const yearEmptyMessage = document.getElementById('yearEmptyMessage');
    const yearInvalidMessage = document.getElementById('yearInvalidMessage');

    


    console.log("D:"+D+" M:"+M+" Y:"+Y);

    var dat = new Date();
    var TD = dat.getDate();
    var TM = dat.getMonth()+1;
    var TY = dat.getFullYear();
    console.log("TD:"+TD+" TM:"+TM+" TY:"+TY);
    let nowyearage= TY-Y;
            let nowmonthage= TM-M;
            let nowdayage= TD-D;
            if (nowdayage < 0)
            {
                nowmonthage-=1;
                TD+=30;
                nowdayage = TD-D;
                if(nowmonthage <0){
                    nowyearage-=1;
                    nowmonthage=12;
                }
            }
            

            if (D==='')
            {
                dayEmptyMessage.style.display = 'block';
            }
            if (M==='')
            {
                monthEmptyMessage.style.display = 'block';
            }
            if (Y==='')
            {
                yearEmptyMessage.style.display = 'block';
            }
            if (Y<=0){

            }
    if ((M==1 || M==3||M==5||M==7||M==8||M==10||M==12 )&&Y<=TY) { 
        console.log("Nice");
           if(D>0 && D<=31){
            console.log("Nice");
            
            document.getElementById("year").textContent = `${nowyearage}`;
            document.getElementById("month").textContent = `${nowmonthage}`;
            document.getElementById("day").textContent = `${nowdayage}`;

            dayEmptyMessage.style.display = 'none';
            dayInvalidMessage.style.display= 'none';
            monthEmptyMessage.style.display = 'none';
            monthInvalidMessage.style.display = 'none';
            yearEmptyMessage.style.display = 'none';
            yearInvalidMessage.style.display = 'none';


        }
        else {
            console.log("Not Nice Day");
            dayInvalidMessage.style.display = "block";
    }
}
    else if ((M==4||M==6||M==9||M==11)&&Y<=TY)
    {
        if(D>0 && D<31){
            console.log("Nice");
            
            document.getElementById("year").textContent = `${nowyearage}`;
            document.getElementById("month").textContent = `${nowmonthage}`;
            document.getElementById("day").textContent = `${nowdayage}`;
            dayEmptyMessage.style.display = 'none';
            dayInvalidMessage.style.display= 'none';
            monthEmptyMessage.style.display = 'none';
            monthInvalidMessage.style.display = 'none';
            yearEmptyMessage.style.display = 'none';
            yearInvalidMessage.style.display = 'none';


        }
        else {
            console.log("Not Nice Day");
            dayInvalidMessage.style.display = "block";
        }
    }
    else if ((M==2)&&Y<=TY) 
    {
        if(D>0 && D<29){
            console.log("Nice");
            document.getElementById("year").textContent = `${nowyearage}`;
            document.getElementById("month").textContent = `${nowmonthage}`;
            document.getElementById("day").textContent = `${nowdayage}`;
            dayEmptyMessage.style.display = 'none';
            dayInvalidMessage.style.display= 'none';
            monthEmptyMessage.style.display = 'none';
            monthInvalidMessage.style.display = 'none';
            yearEmptyMessage.style.display = 'none';
            yearInvalidMessage.style.display = 'none';

        }
        else {
            console.log("not Nice day");
            dayInvalidMessage.style.display = "block";
        }
    }
    else if(Y > TY){
        console.log("Bro thinks he can slip aways");
        yearInvalidMessage.style.display="block"
    }
    else 
    {
        console.log("Bro thinks he can slip away");
        if (M>12 || M<0){
            monthInvalidMessage.style.display="block"
        }
    }
}





