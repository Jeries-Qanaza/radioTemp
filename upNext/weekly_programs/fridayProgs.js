import dataPrograms from "../../dataPrograms.js";


const friday = (time) => 
{
    let fridayArr =['1','37','40','51','30','73','53','6','54','19','13','56','66','58','2','15','1','53','14','56','43','60','13','61','35','58','54','31','56','18','1','32','58','11','58','19','2','69','6','14','54','64','58','56','42','71','53','1','12','65','35','13','26','14','58','31','19','72','27','56','61','53','24']
    let currShow;

    if(time>=0&&time<0.15)            {currShow=0}
	else if(time>=0.15&&time<1)       {currShow=1}
    else if(time>=1&&time<1.30)       {currShow=2}
    else if(time>=1.30&&time<2)       {currShow=3}
    else if (time>=2&&time<2.30)      {currShow=4}
    else if(time>=2.30&&time<2.45)    {currShow=5}
    else if(time>=2.45&&time<3)       {currShow=6}
	else if(time>=3&&time<3.15)       {currShow=7}
    else if(time>=3.15&&time<3.45)    {currShow=8}
	else if(time>=3.45&&time<4)       {currShow=9}
	else if(time>=4&&time<4.30)       {currShow=10}
	else if(time>=4.30&&time<4.45)    {currShow=11}
	else if(time>=4.45&&time<5.15)    {currShow=12}
	else if(time>=5.15&&time<5.30)    {currShow=13}
    else if(time>=5.30&&time<5.45)    {currShow=14}
	else if(time>=5.45&&time<6)       {currShow=15}
	else if(time>=6&&time<6.15)       {currShow=16}
    else if(time>=6.15&&time<6.30)    {currShow=17}
	else if(time>=6.30&&time<6.45)    {currShow=18}
    else if(time>=6.45&&time<7)       {currShow=19}
    else if(time>=7&&time<7.45)       {currShow=20}
	else if(time>=7.45&&time<8)       {currShow=21}
    else if(time>=8&&time<8.30)       {currShow=22}
    else if(time>=8.30&&time<8.45)    {currShow=23}
	else if(time>=8.45&&time<9)       {currShow=24}
    else if(time>=9&&time<9.30)       {currShow=25}
    else if(time>=9.30&&time<10)      {currShow=26}
    else if(time>=10&&time<10.30)     {currShow=27}
	else if(time>=10.30&&time<10.45)  {currShow=28}
	else if(time>=10.45&&time<11)     {currShow=29}
    else if(time>=11&&time<12)        {currShow=30}
    else if(time>=12&&time<12.15)     {currShow=31}
	else if(time>=12.15&&time<13)     {currShow=32}
    else if(time>=13&&time<13.15)     {currShow=33}
    else if(time>=13.15&&time<13.45)  {currShow=34}
	else if(time>=13.45&&time<14)     {currShow=35}
    else if(time>=14&&time<14.15)     {currShow=36}
    else if(time>=14.15&&time<14.30)  {currShow=37}
	else if(time>=14.30&&time<15)     {currShow=38}
    else if(time>=15&&time<15.15)     {currShow=39}
    else if(time>=15.15&&time<15.30)  {currShow=40}
	else if(time>=15.30&&time<16)     {currShow=41}
    else if(time>=16&&time<16.15)     {currShow=42}
    else if(time>=16.15&&time<16.45)  {currShow=43}
    else if(time>=16.45&&time<17)     {currShow=44}
    else if(time>=17&&time<17.30)     {currShow=45}
	else if(time>=17.30&&time<17.45)  {currShow=46}
	else if(time>=17.45&&time<18)     {currShow=47}
    else if(time>=18&&time<18.15)     {currShow=48}
	else if(time>=18.15&&time<19)     {currShow=49}
    else if(time>=19&&time<19.45)     {currShow=50}
    else if(time>=19.45&&time<20)     {currShow=51}
    else if(time>=20&&time<20.30)     {currShow=52}
    else if(time>=20.30&&time<21)     {currShow=53}
    else if(time>=21&&time<21.15)     {currShow=54}
    else if(time>=21.15&&time<21.30)  {currShow=55}
    else if(time>=21.30&&time<22)     {currShow=56}
    else if(time>=22&&time<22.15)     {currShow=57}
    else if(time>=22.15&&time<22.30)  {currShow=58}
	else if(time>=22.30&&time<23)     {currShow=59}
	else if(time>=23&&time<23.15)     {currShow=60}
	else if(time>=23.15&&time<23.30)  {currShow=61}
	else if(time>=23.30&&time<23.45)  {currShow=62}
	else if(time>=23.45&&time<24)     {currShow=63}

    let nextObj1=dataPrograms.find(x => x.id == fridayArr[currShow])
    let nextObj2=dataPrograms.find(x => x.id == fridayArr[currShow+1])
    let nextObj3=dataPrograms.find(x => x.id == fridayArr[currShow+2])
    let nextObj4=dataPrograms.find(x => x.id == fridayArr[currShow+3])
    let nextObj5=dataPrograms.find(x => x.id == fridayArr[currShow+4])
    
    document.getElementById("nextName1").innerHTML = nextObj1.progName
    document.getElementById("nextImg1").src = nextObj1.progImg

    document.getElementById("nextName2").innerHTML =nextObj2.progName
    document.getElementById("nextImg2").src = nextObj2.progImg

    document.getElementById("nextName3").innerHTML = nextObj3.progName
    document.getElementById("nextImg3").src = nextObj3.progImg

    document.getElementById("nextName4").innerHTML = nextObj4.progName
    document.getElementById("nextImg4").src = nextObj4.progImg

    document.getElementById("nextName5").innerHTML = nextObj5.progName
    document.getElementById("nextImg5").src = nextObj5.progImg
}


export default friday;
