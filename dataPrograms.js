const dataPrograms = 
  [
    {
      id:1,
      progName:"السلام الملائكي",
      progImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-OAuXMHkWWQDnXkYIcIFS3GOOKHjR3ba846llCazedF3VMScdE4Pn3htftRV6zj0P8&usqp=CAU",
    },
    {
      id:2,
      progName:"اية اليوم",
      progImg:"https://p0.pikist.com/photos/62/607/jesus-christ-god-holy-spirit-christian-christianity-bible-gospel.jpg"
    },
    {
      id:3,
      progName:"عظة روحية",
      progImg:"https://i1.sndcdn.com/artworks-000158192525-t9faci-t500x500.jpg"
    },
    {
      id:4,
      progName:"حلقات اختياريه او تراتيل 1",
      progImg:"https://yt3.ggpht.com/ytc/AKedOLQavFL0utWN832gk8ZVjyFMePwebIOjaaSen9BGhQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id:5,
      progName:"حلقة تراتيل",
      progImg:"https://yt3.ggpht.com/ytc/AKedOLQavFL0utWN832gk8ZVjyFMePwebIOjaaSen9BGhQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id:6,
      progName:"مسبحة الرحمة الالهية",
      progImg:"https://noursat.s3.amazonaws.com/596/jesus.jpg"
    },
    {
    id:7,
    progName:"حلقات اختيارية او تراتيل2",
    progImg:"https://yt3.ggpht.com/ytc/AKedOLQavFL0utWN832gk8ZVjyFMePwebIOjaaSen9BGhQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id:8,
      progName:"شخصية ورسائل",
      progImg:"https://static.wixstatic.com/media/cbd749_e0a6400c9c564dcba51f3ee22a330185~mv2.jpeg"
    },
    {
      id:9,
      progName:"حلقات اختيارية او تراتيل 3",
      progImg:"https://yt3.ggpht.com/ytc/AKedOLQavFL0utWN832gk8ZVjyFMePwebIOjaaSen9BGhQ=s900-c-k-c0x00ffffff-no-rj"
    },
    {
      id:10,
      progName:"سنكسار اسبوعي",
      progImg:"xKsJAx67j3idlrmEuW7aAM9rKi7AErA9IpF2a7Fd0wuOwdjo3IKOccxrz5aVYsbirlq64a1Fo281q4DOYsfhj8JURIPWq1heMOGhrwRjqMxHU9fQ"
    },
    {
      id:11,
      progName:"نقطة حب من قلب الرب",
      progImg:"https://static.wixstatic.com/media/e1c0d0_5a56878f3c3045afbe9d351cc2582772~mv2.png"
    },
    {
      id:12,
      progName:"المسبحة اسرار الفرح",
      progImg:"https://w0.peakpx.com/wallpaper/26/813/HD-wallpaper-rosary-and-bible-crosses-book-bible-rosary-thumbnail.jpg"
    },
    {
      id:13,
      progName:"نشرة الاخبار",
      progImg:"https://i1.wp.com/nnn.ng/wp-content/uploads/2021/03/bbc-news.jpg"
    },
    {
      id:14,
      progName:"تأملات مسيحية",
      progImg:"https://static.wixstatic.com/media/cbd749_6480f39d9f9b402fbbed4e45e0b65182~mv2.jpeg"
    },
    {
      id:15,
      progName:"صلاة النهوض",
      progImg:"https://i.ytimg.com/vi/d0BdfjFBnAo/maxresdefault.jpg"
    },
    {
      id:16,
      progName:"خبرات المستمعين",
      progImg:"https://static.wixstatic.com/media/cbd749_adf0161200ad4244a04863fbd480599c~mv2.jpeg"
    },
    {
      id:17,
      progName:"كنزنا اولادنا",
      progImg:"https://static.wixstatic.com/media/cbd749_7daefbd4110d4ae4a0daa22e62064e9d~mv2.jpeg"
    },
    {
      id:18,
      progName:"القداس الالهي",
      progImg:"https://media.istockphoto.com/vectors/catholic-church-black-glyph-icon-vector-id1255176984?k=20&m=1255176984&s=612x612&w=0&h=Zth94kJJHTpIRqzj7dXtE4XWBFsACu2kqZ6WG4jgfGY="
    },
    {
      id:19,
      progName:"قصة وعبرة",
      progImg:"https://static.wixstatic.com/media/e1c0d0_d2f5e96100ed4a7c866d45cb43a69ff3~mv2.jpg"
    },
    {
      id:20,
      progName:"صوت الكنيسة انجيلوس",
      progImg:"https://static.wixstatic.com/media/cbd749_fcc1308509b34f3b8d664d91baef4002~mv2.jpeg"
    },
    {
      id:21,
      progName:"حلقات اختيارية حرة",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:22,
      progName:"فصل من الكتاب",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:23,
      progName:"اسرار الفرح",
      progImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-OAuXMHkWWQDnXkYIcIFS3GOOKHjR3ba846llCazedF3VMScdE4Pn3htftRV6zj0P8&usqp=CAU"
    },
    {
      id:24,
      progName:"صلاة ختام النهار",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:25,
      progName:"تراث وتطلعات",
      progImg:"https://static.wixstatic.com/media/cbd749_3b64416055054304a9bbd288af44748c~mv2.jpeg"
    },
    {
      id:26,
      progName:"صلاة قبل النوم",
      progImg:"https://static.wixstatic.com/media/cbd749_fcc1308509b34f3b8d664d91baef4002~mv2.jpeg"
    },
    {
      id:27,
      progName:"كلمة الرب نور لسبيلي",
      progImg:"https://static.wixstatic.com/media/cbd749_af1e6b89576e41658b5ddb887ee35387~mv2.jpeg"
    },
    {
      id:28,
      progName:"منائر مع الخوري انطوان الدويهي",
      progImg:"https://static.wixstatic.com/media/e1c0d0_d357f82eb96344799f8496f0d5130757~mv2.png"
    },
    {
      id:29,
      progName:"مسيرة سنودسية",
      progImg:"https://static.wixstatic.com/media/cbd749_6d3397a95454445fb187d2c20ad4017d~mv2.jpeg"
    },
    {
      id:30,
      progName:"كلمة الراعي",
      progImg:"https://static.wixstatic.com/media/cbd749_a79df237507c49f88f09e25fe196cb7e~mv2.jpeg"
    },
    {
      id:31,
      progName:"ليتروجية بيزنطية",
      progImg:"https://static.wixstatic.com/media/e1c0d0_0582ab0f760342dfabd23ce24c47b620~mv2.png"
    },
    {
      id:32,
      progName:"المسبحة اسرار الحزن",
      progImg:"https://w0.peakpx.com/wallpaper/26/813/HD-wallpaper-rosary-and-bible-crosses-book-bible-rosary-thumbnail.jpg"
    },
    {
      id:33,
      progName:"طلبات المستمعين",
      progImg:"https://static.wixstatic.com/media/cbd749_adf0161200ad4244a04863fbd480599c~mv2.jpeg"
    },
    {
      id:34,
      progName:"تعبدات روحية",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:35,
      progName:"قراءات روحية",
      progImg:"https://static.wixstatic.com/media/e1c0d0_f69c25985c1e408ca918975d07ca60c2~mv2.png"
    },
    {
      id:36,
      progName:"صوت الكنيسة اوديينسا",
      progImg:"https://static.wixstatic.com/media/cbd749_fad8b5be81394bd5b7a1deba389c73a1~mv2.jpeg"
    },
    {
      id:37,
      progName:"المسبحة اسرار المجد",
      progImg:"https://w0.peakpx.com/wallpaper/26/813/HD-wallpaper-rosary-and-bible-crosses-book-bible-rosary-thumbnail.jpg"
    },
    {
      id:38,
      progName:"ها انا ارسلكم",
      progImg:"https://static.wixstatic.com/media/cbd749_437c3ce9766a4272beff43672df6ad8b~mv2.jpeg"
    },
    {
      id:39,
      progName:"اسرار المجد",
      progImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-OAuXMHkWWQDnXkYIcIFS3GOOKHjR3ba846llCazedF3VMScdE4Pn3htftRV6zj0P8&usqp=CAU"
    },
    {
      id:40,
      progName:"كلام رائد مع الاب رائد",
      progImg:"https://static.wixstatic.com/media/cbd749_21c22a9fbcc54ae882bdb82055f9050a~mv2.jpeg"
    },
    {
      id:41,
      progName:"تعليم اباء روحيين",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:42,
      progName:"عائلاتنا الى اين",
      progImg:"https://static.wixstatic.com/media/cbd749_c1927dd457914064a027674b74954ce5~mv2.jpeg"
    },
    {
      id:43,
      progName:"المسبحة اسرار النور",
      progImg:"https://w0.peakpx.com/wallpaper/26/813/HD-wallpaper-rosary-and-bible-crosses-book-bible-rosary-thumbnail.jpg"
    },
    {
      id:44,
      progName:"اسئلة المستمعين",
      progImg:"https://static.wixstatic.com/media/cbd749_adf0161200ad4244a04863fbd480599c~mv2.jpeg"
    },
    {
      id:45,
      progName:"اسرار النور",
      progImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-OAuXMHkWWQDnXkYIcIFS3GOOKHjR3ba846llCazedF3VMScdE4Pn3htftRV6zj0P8&usqp=CAU"
    },
    {
      id:46,
      progName:"عظة الاب رائد",
      progImg:"https://static.wixstatic.com/media/cbd749_21c22a9fbcc54ae882bdb82055f9050a~mv2.jpeg"
    },
    {
      id:47,
      progName:"تعبدات متنوعة",
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:48,
      progName:"اجوبة للمستمعين",
      progImg:"https://static.wixstatic.com/media/cbd749_adf0161200ad4244a04863fbd480599c~mv2.jpeg"
    },
    {
      id:49,
      progName:"ليتروجية مارونية",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_1dadc3d7397f44cda02233c3eb439d53~mv2.png"
    },
    {
      id:50,
      progName:"اسرار الحزن",  
      progImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-OAuXMHkWWQDnXkYIcIFS3GOOKHjR3ba846llCazedF3VMScdE4Pn3htftRV6zj0P8&usqp=CAU"
    },
     {
      id:51,
      progName:"كلمة حياة",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_6655300d26cf4f48b3647aa495a97ccb~mv2.png"
    },
    {
      id:52,
      progName:"كلام لمعي مع الاب داود لمعي",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_599fa1994dcc40e0ae9b7f2b6a01efb7~mv2.jpg"
    },
    {
      id:53,
      progName:"مزمور النهار",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:54,
      progName:"طبق اليوم",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_8a6ee5a80af34fafbe36361a59def0a3~mv2.png"
    },
    {
      id:55,
      progName:"نداء الاحد",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_5b188030dddb4dd7941baeedf9f22ac9~mv2.jpg"
    },
    {
      id:56,
      progName:"وقفة مع برامجنا",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_8d03c16859f74ddca90909d0f589d94b~mv2.png"
    },
    {
      id:57,
      progName:"بشرى نار مع الاب بشار",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:58,
      progName:"ترانيم",  
      progImg:"https://static.wixstatic.com/media/6ec620_62255017cab247ba9d907cac6df9bcfa~mv2.png"
    },
    {
      id:59,
      progName:"الليتروجيه في حياتنا",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:60,
      progName:"فنجان قهوة فيروزية",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_81842751c7d841d49f7ccaccc2be07b7~mv2.webp"
    },
    {
      id:61,
      progName:"ومضة روحية",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_636cf12b59f74779bc63c8128b16400d~mv2.webp"
    },
    {
      id:62,
      progName:"التنشئة المسيحية",  
      progImg:"https://static.wixstatic.com/media/6ec620_e6a68252c7f54fac9e8d912f045135e3~mv2.jpg"
    },
    {
      id:63,
      progName:"اشارة وبشارة",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_fa888c897eb04ffda5554b0e85b72279~mv2.png"
    },
    {
      id:64,
      progName:"قديسي الاسبوع",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:65,
      progName:"الشباب يشهد",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_038733fc1dc440b7990588cd5bca4d54~mv2.png"
    },
    {
      id:66,
      progName:"لقاء رنان مع بابا الفاتيكان",  
      progImg:"https://static.wixstatic.com/media/e1c0d0_53bd5728506f44b5b860c18e182cccd1~mv2.png"
    },
    {
      id:67,
      progName:"ترانيم بيزنطية",  
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:68,
      progName:"العناصر الاساسية للأخلاق المسيحية",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:69,
      progName:"اتبعك اليوم وكل ان",  
      progImg:"https://static.wixstatic.com/media/cbd749_1fb37fdf54bf4536842aaf27c3a3cd6d~mv2.jpeg"
    },
    {
      id:70,
      progName:"ترانيم مارونية",  
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:71,
      progName:"ترانيم قبطية",  
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:72,
      progName:"انجيل وعظة قداس اليوم",  
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },
    {
      id:73,
      progName:"ترانيم لاتينية",  
      progImg:"https://static.wixstatic.com/media/cbd749_3dbe037527b7454a8a3356a3ebf37fed~mv2.jpg"
    },

  ]
export default  dataPrograms;