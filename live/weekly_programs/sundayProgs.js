import dataPrograms from "../../dataPrograms.js";

const sunday = (time) => 
{
    let obj

    if(time>=0&&time<0.15)
    {
        obj=  dataPrograms.find(x => x.progName == "السلام الملائكي")
    }
	if(time>=0.15&&time<1)
    {
        obj=  dataPrograms.find(x => x.progName == "المسبحة اسرار الحزن")
    }
    else if(time>=1&&time<1.15)
    {
        obj=  dataPrograms.find(x => x.progName == "اية اليوم")
    }
	else if(time>=1.15&&time<1.30)
    {
        obj=  dataPrograms.find(x => x.progName == "تأملات مسيحية")
    }
    else if(time>=1.30&&time<2)
    {
        obj=  dataPrograms.find(x => x.progName == "نقطة حب من قلب الرب")
    }
    else if (time >= 2 && time < 2.45)
    {
        obj=  dataPrograms.find(x => x.progName == "كلام لمعي مع الاب داود لمعي")
    }
    else if(time>=2.45&&time<3)
    {
        obj=  dataPrograms.find(x => x.progName == "مزمور النهار")
    }
	else if(time>=3&&time<3.15)
    {
        obj=  dataPrograms.find(x => x.progName == "مسبحة الرحمة الالهية")
    }
    else if(time>=3.15&&time<3.30)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
	else if(time>=3.30&&time<3.45)
    {
        obj=  dataPrograms.find(x => x.progName == "اية اليوم")
    }
	else if(time>=3.45&&time<4)
    {
        obj=  dataPrograms.find(x => x.progName == "قصة وعبرة")
    }
	else if(time>=4&&time<4.30)
    {
        obj=  dataPrograms.find(x => x.progName == "نشرة الاخبار")
    }
	else if(time>=4.30&&time<4.45)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
	else if(time>=4.45&&time<5.30)
    {
        obj=  dataPrograms.find(x => x.progName == "الشباب يشهد")
    }
    else if(time>=5.30&&time<5.45)
    {
        obj=  dataPrograms.find(x => x.progName == "اية اليوم")
    }
	else if(time>=5.45&&time<6)
    {
        obj=  dataPrograms.find(x => x.progName == "صلاة النهوض")
    }
	 else if(time>=6&&time<6.15)
    {
        obj=  dataPrograms.find(x => x.progName == "السلام الملائكي")
    }
    else if(time>=6.15&&time<6.30)
    {
        obj=  dataPrograms.find(x => x.progName == "مزمور النهار")
    }
	else if(time>=6.30&&time<6.45)
    {
        obj=  dataPrograms.find(x => x.progName == "تأملات مسيحية")
    }
    else if(time>=6.45&&time<7)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
    else if(time>=7&&time<7.45)
    {
        obj=  dataPrograms.find(x => x.progName == "المسبحة اسرار النور")
    }
	else if(time>=7.45&&time<8)
    {
        obj=  dataPrograms.find(x => x.progName == "فنجان قهوة فيروزية")
    }
    else if(time>=8&&time<8.30)
    {
        obj=  dataPrograms.find(x => x.progName == "نشرة الاخبار")
    }
    else if(time>=8.30&&time<8.45)
    {
        obj=  dataPrograms.find(x => x.progName == "ومضة روحية")
    }
	else if(time>=8.45&&time<9)
    {
        obj=  dataPrograms.find(x => x.progName == "قراءات روحية")
    }
    else if(time>=9&&time<9.15)
    {
        obj=  dataPrograms.find(x => x.progName == "الليتروجية في حياتنا")
    }
    else if(time>=9.15&&time<9.30)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
	 else if(time>=9.30&&time<9.45)
    {
        obj=  dataPrograms.find(x => x.progName == "بشرى نار مع بشار")
    }
	 else if(time>=9.45&&time<10)
    {
        obj=  dataPrograms.find(x => x.progName == "قصة وعبرة")
    }
    else if(time>=10&&time<10.45)
    {
        obj=  dataPrograms.find(x => x.progName == "منائر مع الخوري انطوان الدويهي")
    }
	else if(time>=10.45&&time<11)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
    else if(time>=11&&time<11.15)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
	 else if(time>=11.15&&time<11.45)
    {
        obj=  dataPrograms.find(x => x.progName == "ليتروجية بيزنطية")
    }
	else if(time>=11.45&&time<12)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
    else if(time>=12&&time<12.15)
    {
        obj=  dataPrograms.find(x => x.progName == "السلام الملائكي")
    }
	else if(time>=12.15&&time<13)
    {
        obj=  dataPrograms.find(x => x.progName == "المسبحة اسرار المجد")
    }
    else if(time>=13&&time<13.15)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
    else if(time>=13.15&&time<13.30)
    {
        obj=  dataPrograms.find(x => x.progName == "بشرى نار مع الاب بشار")
    }
	else if(time>=13.30&&time<14)
    {
        obj=  dataPrograms.find(x => x.progName == "عائلاتنا الى اين")
    }
    else if(time>=14&&time<14.15)
    {
        obj=  dataPrograms.find(x => x.progName == "قصة وعبرة")
    }
    else if(time>=14.15&&time<14.30)
    {
        obj=  dataPrograms.find(x => x.progName == "اية اليوم")
    }
	else if(time>=14.30&&time<15)
    {
        obj=  dataPrograms.find(x => x.progName == "كلمة الرب نور لسبيلي")
    }
    else if(time>=15&&time<15.15)
    {
        obj=  dataPrograms.find(x => x.progName == "مسبحة الرحمة الالهية")
    }
    else if(time>=15.15&&time<15.30)
    {
        obj=  dataPrograms.find(x => x.progName == "تأملات مسيحية")
    }
	else if(time>=15.30&&time<16)
    {
        obj=  dataPrograms.find(x => x.progName == "العناصر الاساسية للاخلاق المسيحية")
    }
    else if(time>=16&&time<16.15)
    {
        obj=  dataPrograms.find(x => x.progName == "قديسي الاسبوع")
    }
    else if(time>=16.15&&time<16.30)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
	else if(time>=16.30&&time<16.45)
    {
        obj=  dataPrograms.find(x => x.progName == "قراءات روحية")
    }
    else if(time>=16.45&&time<17)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
    else if(time>=17&&time<17.30)
    {
        obj=  dataPrograms.find(x => x.progName == "لقاء نار مع بابا الفاتيكان")
    }
	else if(time>=17.30&&time<17.45)
    {
        obj=  dataPrograms.find(x => x.progName == "بشرى نار مع الاب بشار")
    }
	else if(time>=17.45&&time<18)
    {
        obj=  dataPrograms.find(x => x.progName == "مزمور النهار")
    }
    else if(time>=18&&time<18.15)
    {
        obj=  dataPrograms.find(x => x.progName == "السلام الملائكي")
    }
	else if(time>=18.15&&time<19)
    {
        obj=  dataPrograms.find(x => x.progName == "المسبحة اسرار الفرح")
    }
    else if(time>=19&&time<19.15)
    {
        obj=  dataPrograms.find(x => x.progName == "ومضة روحية")
    }
    else if(time>=19.15&&time<19.30)
    {
        obj=  dataPrograms.find(x => x.progName == "الليتروجية في حياتنا")
    }
	else if(time>=19.30&&time<20)
    {
        obj=  dataPrograms.find(x => x.progName == "ليتروجية بيزنطية")
    }
    else if(time>=20&&time<20.30)
    {
        obj=  dataPrograms.find(x => x.progName == "نشرة الاخبار")
    }
    else if(time>=20.30&&time<21)
    {
        obj=  dataPrograms.find(x => x.progName == "صلاة قبل النوم")
    }
    else if(time>=21&&time<21.15)
    {
        obj=  dataPrograms.find(x => x.progName == "تأملات مسيحية")
    }
    else if(time>=21.15&&time<21.45)
    {
        obj=  dataPrograms.find(x => x.progName == "العناصر الاساسية للاخلاق المسيحية")
    }
    else if(time>=21.45&&time<22)
    {
        obj=  dataPrograms.find(x => x.progName == "ترانيم")
    }
    else if(time>=22&&time<22.15)
    {
        obj=  dataPrograms.find(x => x.progName == "قصة وعبرة")
    }
	else if(time>=22.15&&time<22.30)
    {
        obj=  dataPrograms.find(x => x.progName == "اية اليوم")
    }
	else if(time>=22.30&&time<23)
    {
        obj=  dataPrograms.find(x => x.progName == "كلمة الراعي")
    }
	else if(time>=23&&time<23.15)
    {
        obj=  dataPrograms.find(x => x.progName == "وقفة مع برامجنا")
    }
	else if(time>=23.15&&time<23.30)
    {
        obj=  dataPrograms.find(x => x.progName == "بشرى نار مع الاب بشار")
    }
	else if(time>=23.30&&time<23.45)
    {
        obj=  dataPrograms.find(x => x.progName == "مزمور النهار")
    }
	else if(time>=23.45&&time<24)
    {
        obj=  dataPrograms.find(x => x.progName == "صلاة ختام النهار")
    }

    document.getElementById("showName").innerHTML=obj.progName
    document.getElementById("showImage").src=obj.progImg
}
export default sunday;
