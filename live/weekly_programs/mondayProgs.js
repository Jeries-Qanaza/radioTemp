import dataPrograms from "../../dataPrograms.js";

const monday = (time) => 
{
    let obj

    if(time>=0&&time<0.15)
    {
        obj=  dataPrograms.find(x => x.id == 1)
    }
	if(time>=0.15&&time<1)
    {
        obj=  dataPrograms.find(x => x.id ==32)
    }
    else if(time>=1&&time<1.15)
    {
        obj=  dataPrograms.find(x => x.id == 2)
    }
    else if(time>=1.15&&time<1.30)
    {
        obj=  dataPrograms.find(x => x.id == 14)
    }
    else if(time>=1.30&&time<2)
    {
        obj=  dataPrograms.find(x => x.id ==31)
    }
    else if (time >= 2 && time < 2.45)
    {
        obj=  dataPrograms.find(x => x.id == 52)
    }
    else if(time>=2.45&&time<3)
    {
        obj=  dataPrograms.find(x => x.id == 53)
    }
    else if(time>=3&&time<3.15)
    {
        obj=  dataPrograms.find(x => x.id == 6)
    }
    else if(time>=3.15&&time<3.30)
    {
        obj=  dataPrograms.find(x => x.id == 57)
    }
	else if(time>=3.30&&time<3.45)
    {
        obj=  dataPrograms.find(x => x.id == 2)
    }
	else if(time>=3.45&&time<4)
    {
        obj=  dataPrograms.find(x => x.id == 19)
    }
    else if(time>=4&&time<4.30)
    {
        obj=  dataPrograms.find(x => x.id == 13)
    }
	else if(time>=4.30&&time<4.45)
    {
        obj=  dataPrograms.find(x => x.id == 56)
    }
	else if(time>=4.45&&time<5)
    {
        obj=  dataPrograms.find(x => x.id == 58)
    }
    else if(time>=5&&time<5.15)
    {
        obj=  dataPrograms.find(x => x.id == 59)
    }
	else if(time>=5.15&&time<5.30)
    {
        obj=  dataPrograms.find(x => x.id == 58)
    }
    else if(time>=5.30&&time<5.45)
    {
        obj=  dataPrograms.find(x => x.id == 2)
    }
	else if(time>=5.45&&time<6)
    {
        obj=  dataPrograms.find(x => x.id == 15)
    }
	 else if(time>=6&&time<6.15)
    {
        obj=  dataPrograms.find(x => x.id == 1)
    }
    else if(time>=6.15&&time<6.30)
    {
        obj=  dataPrograms.find(x => x.id == 53)
    }
	else if(time>=6.30&&time<6.45)
    {
        obj=  dataPrograms.find(x => x.id == 14)
    }
    else if(time>=6.45&&time<7)
    {
        obj=  dataPrograms.find(x => x.id == 56)
    }
    else if(time>=7&&time<7.45)
    {
        obj=  dataPrograms.find(x => x.id == 43)
    }
	else if(time>=7.45&&time<8)
    {
        obj=  dataPrograms.find(x => x.id == 60)
    }
    else if(time>=8&&time<8.30)
    {
        obj=  dataPrograms.find(x => x.id == 13)
    }
    else if(time>=8.30&&time<8.45)
    {
        obj=  dataPrograms.find(x => x.id == 61)
    }
	else if(time>=8.45&&time<9)
    {
        obj=  dataPrograms.find(x => x.id == 35)
    }
    else if(time>=9&&time<9.30)
    {
        obj=  dataPrograms.find(x => x.id == 55)
    }
    else if(time>=9.30&&time<10)
    {
        obj=  dataPrograms.find(x => x.id == 54)
    }
    else if(time>=10&&time<10.30)
    {
        obj=  dataPrograms.find(x => x.id ==62)
    }
	else if(time>=10.30&&time<11)
    {
        obj=  dataPrograms.find(x => x.id == 56)
    }
	else if(time>=11&&time<12)
    {
        obj=  dataPrograms.find(x => x.id == 18)
    }
    else if(time>=12&&time<12.15)
    {
        obj=  dataPrograms.find(x => x.id == 1)
    }
	else if(time>=12.15&&time<13)
    {
        obj=  dataPrograms.find(x => x.id == 12)
    }
    else if(time>=13&&time<13.15)
    {
        obj=  dataPrograms.find(x => x.id == 58)
    }
    else if(time>=13.15&&time<13.45)
    {
        obj=  dataPrograms.find(x => x.id == 63)
    }
	else if(time>=13.45&&time<14)
    {
        obj=  dataPrograms.find(x => x.id ==58)
    }
    else if(time>=14&&time<14.15)
    {
        obj=  dataPrograms.find(x => x.id == 19)
    }
    else if(time>=14.15&&time<14.30)
    {
        obj=  dataPrograms.find(x => x.id ==2)
    }
	else if(time>=14.30&&time<15)
    {
        obj=  dataPrograms.find(x => x.id == 55)
    }
    else if(time>=15&&time<15.15)
    {
        obj=  dataPrograms.find(x => x.id == 6)
    }
    else if(time>=15.15&&time<15.30)
    {
        obj=  dataPrograms.find(x => x.id == 14)
    }
	else if(time>=15.30&&time<16)
    {
        obj=  dataPrograms.find(x => x.id == 54)
    }
    else if(time>=16&&time<16.15)
    {
        obj=  dataPrograms.find(x => x.id == 64)
    }
    else if(time>=16.15&&time<16.45)
    {
        obj=  dataPrograms.find(x => x.id == 30)
    }
    else if(time>=16.45&&time<17)
    {
        obj=  dataPrograms.find(x => x.id == 56)
    }
    else if(time>=17&&time<17.45)
    {
        obj=  dataPrograms.find(x => x.id == 65)
    }
	else if(time>=17.45&&time<18)
    {
        obj=  dataPrograms.find(x => x.id == 53)
    }
	else if(time>=18&&time<18.15)
    {
        obj=  dataPrograms.find(x => x.id == 1)
    }
    else if(time>=18.15&&time<19)
    {
        obj=  dataPrograms.find(x => x.id == 37)
    }
    else if(time>=19&&time<19.15)
    {
        obj=  dataPrograms.find(x => x.id == 2)
    }
    else if(time>=19.15&&time<19.45)
    {
        obj=  dataPrograms.find(x => x.id == 62)
    }
	else if(time>=19.45&&time<20)
    {
        obj=  dataPrograms.find(x => x.id == 35)
    }
    else if(time>=20&&time<20.30)
    {
        obj=  dataPrograms.find(x => x.id == 13)
    }
    else if(time>=20.30&&time<21)
    {
        obj=  dataPrograms.find(x => x.id == 26)
    }
    else if(time>=21&&time<21.15)
    {
        obj=  dataPrograms.find(x => x.id == 14)
    }
    else if(time>=21.15&&time<21.30)
    {
        obj=  dataPrograms.find(x => x.id == 58)
    }
    else if(time>=21.30&&time<22)
    {
        obj=  dataPrograms.find(x => x.id ==42)
    }
    else if(time>=22&&time<22.15)
    {
        obj=  dataPrograms.find(x => x.id == 19)
    }
    else if(time>=22.15&&time<22.30)
    {
        obj=  dataPrograms.find(x => x.id == 72)
    }
	else if(time>=22.30&&time<23)
    {
        obj=  dataPrograms.find(x => x.id == 27)
    }
	else if(time>=23&&time<23.15)
    {
        obj=  dataPrograms.find(x => x.id == 56)
    }
	else if(time>=23.15&&time<23.30)
    {
        obj=  dataPrograms.find(x => x.id == 61)
    }
	else if(time>=23.30&&time<23.45)
    {
        obj=  dataPrograms.find(x => x.id == 53)
    }
	else if(time>=23.45&&time<24)
    {
        obj=  dataPrograms.find(x => x.id == 24)
    }

    document.getElementById("showName").innerHTML=obj.progName
    document.getElementById("showImage").src = obj.progImg
    
}
export default monday;