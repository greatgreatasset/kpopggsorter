dataSetVersion = "2025-02-17";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
	  { name: "aespa", key: "aespa" },
	  { name: "ARTMS", key: "ARTMS" },	  
  	  { name: "Babymonster", key: "Babymonster" },
	  { name: "Billlie", key: "Billlie" },	  
      { name: "Blackpink", key: "blackpink" },	
  	  { name: "Candy Shop", key: "Candy Shop" },
	  { name: "Cignature", key: "Cignature" },	  
	  { name: "CLASS:y", key: "Classy" },
	  { name: "CSR", key: "CSR" },	  
      { name: "Dreamcatcher", key: "dc" },	
	  { name: "Everglow", key: "Everglow" },
      { name: "fromis_9", key: "fromis9" },	  
      { name: "(G)I-dle	", key: "gidle" },	
	  { name: "Geenius", key: "Geenius" },	  
	  { name: "H1-KEY", key: "H1-KEY" },	  
  	  { name: "ICHILLIN'", key: "Ichillin" },	  
	  { name: "ILLIT", key: "ILLIT" },	  
      { name: "ITZY", key: "ITZY" },
      { name: "IVE", key: "ive"},
 	  { name: "Izna", key: "Izna" },
	  { name: "Kep1er", key: "Kep1er" },
	  { name: "Kiss of Life", key: "Kiss of Life" },	  
      { name: "LE SSERAFIM", key: "le sserafim" },	  
	  { name: "Lightsum", key: "Lightsum" },
	  { name: "Loossemble", key: "Loossemble" },
  	  { name: "Madein", key: "Madein" },	 
  	  { name: "Meovv", key: "Meovv" },		
  	  { name: "Mimiirose", key: "Mimiirose" },		  
	  { name: "NewJeans", key: "NewJeans" },
	  { name: "NMIXX", key: "NMIXX" },	 
	  { name: "Odd Youth", key: "Odd Youth" },		  
      { name: "Oh My Girl", key: "omg" },	  
      { name: "Purple Kiss", key: "purplekiss" },
	  { name: "Red Velvet", key: "redvelvet" },
 	  { name: "RESCENE", key: "RESCENE" },	  
	  { name: "Rocket Punch", key: "Rocket Punch" },	
      { name: "Say My Name", key: "Say My Name" },	  
      { name: "STAYC", key: "stayc" },
	  { name: "TRI.BE", key: "tribe" },	
	  { name: "tripleS", key: "tripleS" },	  
      { name: "Twice", key: "twice" },
  	  { name: "UNIS", key: "UNIS" },	  
	  { name: "VIVIZ", key: "VIVIZ" },	  
      { name: "Weeekly", key: "weeekly" },
	  { name: "WJSN", key: "WJSN" },	  
      { name: "WOOAH", key: "wooah" },
	  { name: "Young Posse", key: "Young Posse" },
	  { name: "Soloists / Misc.", key: "solo" }, 
	  
    ]
  },
  {
    name: "Filter by Generation",
    key: "gen",
    tooltip: "Check this to restrict to groups that debuted in certain generations.",
    checked: false,
    sub: [ 
      { name: "2nd Gen", key: "gen2" }, 
      { name: "3rd Gen", key: "gen3" }, 
      { name: "4th Gen", key: "gen4" },
	  { name: "5th Gen", key: "gen5" },
    ]
  },
];

dataSet[dataSetVersion].characterData = [
  
	{
	name: "Somi (solo)",
    img: "F4xD49d.png",
    opts: {
     group: [ "solo" ],
     gen: ["gen3"]  
	 }
	},
	{
	name: "Minju (solo)",
    img: "F1VZHXy.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
	 }
	},
	{
    name: "IU (solo)",
    img: "BNPbNcw.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen2"]  
	 }
	},
	{
    name: "Yves (solo)",
    img: "isLxSqW.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
	}
	},
	{
    name: "Jinni (solo)",
    img: "lbusChX.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
	 }
	},
	{
    name: "Yuri (solo)",
    img: "TMC2B6o.png",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
     }
	},
	{
	name: "Hyewon (solo)",
    img: "erKt6NB.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen3"]  
     }
	},
	{
	name: "Nako (solo)",
    img: "9XIvJ1j.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen3"]  
     }
	},
	{
    name: "Taeyeon (solo)",
    img: "5u4O7Mn.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen2"]  
     }
	},
	{
    name: "Eunbi (solo)",
    img: "u0LpS6J.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
     }
	},
	{
	name: "Chuu (solo)",
	img: "qSp6i66.jpeg",
	opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
     }
  },
  {
    name: "Yena (solo)",
    img: "5GRCIOw.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
    }
	},
	{
    name: "Chaeyeon (solo)",
    img: "xpo9tU3.jpeg",
    opts: {
     group: [ "solo" ],
     gen: ["gen4"]  
    }
  },
   {
    name: "Sunmi (solo)",
    img: "DhJ7Voz.jpeg",
    opts: {
      group: [ "solo" ],
      gen: ["gen2"]  
      }
   },
   {
    name: "Bibi (solo)",
    img: "BCz80jy.jpeg",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
  {
    name: "Jiu (Dreamcatcher)",
    img: "Sz1tPB8.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Sua (Dreamcatcher)",
    img: "Imo1DT0.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Siyeon (Dreamcatcher)",
    img: "N7QqRPy.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Handong (Dreamcatcher)",
    img: "GjzqKbo.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yoohyeon (Dreamcatcher)",
    img: "ckHdclc.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Dami (Dreamcatcher)",
    img: "wtyVNhX.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Gahyun (Dreamcatcher)",
    img: "2kdqYw0.jpeg",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Umji (VIVIZ)",
    img: "sJifOFc.jpeg",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "SinB (VIVZ)",
    img: "GzoNhbh.jpeg",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Eunha (VIVIZ)",
    img: "505pdBh.jpeg",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Irene (Red Velvet)",
    img: "buMjekK.jpeg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Joy (Red Velvet)",
    img: "7VRAScN.jpeg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Seulgi (Red Velvet)",
    img: "KiU7gDO.jpg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Wendy (Red Velvet)",
    img: "R0anfXf.jpeg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yeri (Red Velvet)",
    img: "M36SzMD.jpeg",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
  name: "Choerry (ARTMS)",
  img: "5jUHzYp.jpeg",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
 
  {
  name: "Heejin (ARTMS)",
  img: "sa5QO18.jpeg",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jinsoul (ARTMS)",
  img: "Wc8EfXk.jpeg",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Haseul (ARTMS)",
  img: "HCiqi6r.jpeg",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Kim Lip (ARTMS)",
  img: "9u71FRD.jpeg",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Goeun (Purple Kiss)",
  img: "Pji3zn3.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Dosie (Purple Kiss)",
  img: "gE7Oxn2.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ireh (Purple Kiss)",
  img: "Iyzyj8m.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuki (Purple Kiss)",
  img: "BvjqG8d.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaein (Purple Kiss)",
  img: "o5zSbQy.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Swan (Purple Kiss)",
  img: "3Qf53c9.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Nana (WOOAH)",
  img: "LKllJ6c.jpeg",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wooyeon (WOOAH)",
  img: "dSWcMBK.jpeg",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sora (WOOAH)",
  img: "DWSZ7UC.jpeg",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },  
  {
  name: "Lucy (WOOAH)",
  img: "9jRtEM6.jpeg",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Minseo (WOOAH)",
  img: "HzFqPs0.jpeg",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Gaeul (IVE)",
  img: "qOO3urb.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Leeseo (IVE)",
  img: "FKzvUfW.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Liz (IVE)",
  img: "bbAjH1n.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Rei (IVE)",
  img: "DNPQW4n.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jihan (Weeekly)",
  img: "qnZbs7Z.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Zoa (Weeekly)",
  img: "k3XmjAc.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Jaehee (Weeekly)",
  img: "2t4nE3T.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soojin (Weeekly)",
  img: "Xuf8t0x.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Monday (Weeekly)",
  img: "kSy5mfB.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soeun (Weeekly)",
  img: "4SQmHEk.jpeg",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
 {
  name: "Sakura (LE SSERAFIM)",
  img: "RclcY50.jpeg",
  opts: {
    group: [ "le sserafim" ],
    gen: ["gen4"]  
    }
  },
 {
  name: "Chaewon (LE SSERAFIM)",
  img: "gUU8bhZ.jpeg",
  opts: {
    group: [ "le sserafim" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yujin (IVE)",
  img: "CwVOyng.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wonyoung (ive)",
  img: "17yKvMj.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Soyeon ((G)-Idle)",
  img: "U4bpw40.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Miyeon ((G)-Idle)",
  img: "jIxNZue.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Minnie ((G)-Idle)",
  img: "E6KiHj8.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuqi ((G)-Idle)",
  img: "YJ6Vsuw.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Shuhua ((G)-Idle)",
  img: "SOQku7u.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yeji (ITZY)",
  img: "BT9bZwj.jpeg",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Lia (ITZY)",
  img: "0QBUdaf.jpeg",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ryujin (ITZY)",
  img: "cliLu0W.jpeg",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeryeong (ITZY)",
  img: "Q0ix1mj.jpeg",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuna (ITZY)",
  img: "zAtefuR.jpeg",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yubin (Oh My Girl)",
  img: "OdS059F.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Arin (Oh My Girl)",
  img: "nMMHQrD.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Hyojung (Oh My Girl)",
  img: "Ef32yJr.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Seunghee (Oh My Girl)",
  img: "DEBshZP.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mimi (Oh My Girl)",
  img: "qDjP3gx.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "YooA (Oh My Girl)",
  img: "vHvIZYc.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Giselle (aespa)",
  img: "cFVrKHB.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Karina (aespa)",
  img: "N45HAu8.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Ningning (aespa)",
  img: "7Bgvev8.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Winter (aespa)",
  img: "HdYdPWU.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Isa (STAYC)",
  img: "eaJdKRH.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "J (STAYC)",
  img: "2OK8EhX.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Seeun (STAYC)",
  img: "YzwRVl1.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sieun (STAYC)",
  img: "Y9VLrCj.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sumin (STAYC)",
  img: "dbBt0hm.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yoon (STAYC)",
  img: "r1vTwRm.jpeg",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeyoung (fromis_9)",
  img: "c6vPYMH.jpeg",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Hayoung (fromis_9)",
    img: "gBEemHu.jpeg",
    opts: {
     group: [ "fromis9" ],
     gen: ["gen3"]  
    }
  },
  {
    name: "Jiheon (fromis_9)",
    img: "FUrZaxp.jpeg",
    opts: {
     group: [ "fromis9" ],
     gen: ["gen3"]  
    }
  },
  {
  name: "Jisun (fromis_9)",
  img: "AbhuyXJ.jpeg",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jiwon (fromis_9)",
  img: "P4ZKwFc.jpeg",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Nagyung (fromis_9)",
    img: "P23iub6.jpeg",
    opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Saerom (fromis_9)",
  img: "W8sYS7y.jpeg",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Seoyeon (fromis_9)",
  img: "76CnK7W.jpeg",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Chaeyoung (Twice)",
  img: "Y665shI.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Dahyun (Twice)",
  img: "UMbf22e.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jeongyeon (Twice)",
  img: "8mQVxoU.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jihyo (Twice)",
  img: "PRyHnMV.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mina (Twice)",
  img: "p3m2SKa.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Momo (Twice)",
  img: "Znt75Vi.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Nayeon (Twice)",
  img: "1gOXo3l.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Sana (Twice)",
  img: "SdqhaPj.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Tzuyu (Twice)",
  img: "jEqHm6D.jpeg",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jennie (Blackpink)",
  img: "VqfQYd5.jpeg",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jisoo (Blackpink)",
  img: "FmdqBJI.jpeg",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Lisa (Blackpink)",
  img: "s42JJRk.jpeg",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
 {
  name: "Rosé (Blackpink)",
  img: "L97f0nM.jpeg",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Yunjin (LE SSERAFIM)",
    img: "oJEMmBQ.jpeg",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
    }
  },
  {
    name: "Kazuha (LE SSERAFIM)",
    img: "ouAFOsH.jpeg",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
      }
    },
    {
      name: "Eunchae (LE SSERAFIM)",
      img: "eWkHUyC.jpeg",
      opts: {
        group: [ "le sserafim" ],
        gen: ["gen4"]  
        }
    },    
	 {
    name: "Minji (NewJeans)",
    img: "0PR6mBl.jpeg",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Hanni (NewJeans)",
    img: "Ay2DxPW.jpeg",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Danielle (NewJeans)",
    img: "ZwhdBlg.jpeg",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Haerin (NewJeans)",
    img: "nYxDW2S.jpeg",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Hyein (NewJeans)",
    img: "tuzBJ8M.jpeg",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Lily (NMIXX)",
    img: "pCNl2vm.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Bae (NMIXX)",
    img: "ckj9fuh.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Haewon (NMIXX)",
    img: "Pe4z0az.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Kyujin (NMIXX)",
    img: "I5e0LtY.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Sullyoon (NMIXX)",
    img: "4bCAIFK.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Jiwoo (NMIXX)",
    img: "cjzT1tv.jpeg",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujin (Kep1er)",
    img: "3wW8CWE.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hikaru (Kep1er)",
    img: "0QVhDdZ.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dayeon (Kep1er)",
    img: "SIs9OnW.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaehyun (Kep1er)",
    img: "QTovmbr.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Bahiyyih (Kep1er)",
    img: "zippJEK.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Xiaoting (Kep1er)",
    img: "8HDD42n.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Youngeun (Kep1er)",
    img: "r7oPHjT.jpeg",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Duna (CSR)",
    img: "3FXEAha.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Geumhee (CSR)",
    img: "PDwdeny.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yuna (CSR)",
    img: "rdJbDOP.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeham (CSR)",
    img: "mqEZCz8.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sihyeon (CSR)",
    img: "zb4KzeN.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sua (CSR)",
    img: "wEfQfio.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoyeon (CSR)",
    img: "qB27O42.jpeg",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Tsuki (Billlie)",
    img: "bZW7GE4.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haruna (Billlie)",
    img: "qwoUnWK.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Siyoon (Billlie)",
    img: "5A4D4ud.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sheon (Billlie)",
    img: "6LXn8nl.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Moon Sua (Billlie)",
    img: "IX5iu5T.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suhyeon (Billlie)",
    img: "EkxWXDF.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haram (Billlie)",
    img: "ymXGFBL.jpeg",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeoreum (WJSN)",
    img: "XAeHDRf.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Yeonjung (WJSN)",
    img: "tYYg5DL.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Soobin (WJSN)",
    img: "EMADucm.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Luda (WJSN)",
    img: "eEBF1Qu.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Seola (WJSN)",
    img: "xzvYUnz.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Exy (WJSN)",
    img: "zFkx7Tg.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Eunseo (WJSN)",
    img: "qdQ2C7F.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Dayoung (WJSN)",
    img: "t8RqD1K.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Dawon (WJSN)",
    img: "0myJ3eV.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Bona (WJSN)",
    img: "LFvm0lQ.jpeg",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Natty (Kiss of Life)",
    img: "8AudLPy.jpeg",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Haneul (Kiss of Life)",
    img: "XFQLZ7T.jpeg",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Julie (Kiss of Life)",
    img: "Xy74wcD.jpeg",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Belle (Kiss of Life)",
    img: "sMMh0dK.jpeg",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Riina (H1-KEY)",
    img: "I27IMZE.jpeg",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoi (H1-KEY)",
    img: "NQrLVZh.jpeg",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hwiseo (H1-KEY)",
    img: "2ZYZgjo.jpeg",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yel (H1-KEY)",
    img: "cBsHJRy.jpeg",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyunjin (Loossemble)",
    img: "2JGNfUJ.jpeg",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeju (Loossemble)",
    img: "ZiLx6uC.jpeg",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Vivi (Loossemble)",
    img: "S5nbuD4.jpeg",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeojin (Loossemble)",
    img: "d5dC0yR.jpeg",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Gowon (Loossemble)",
    img: "FMv5uPO.jpeg",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sunhye (Young Posse)",
    img: "3BTFR41.jpeg",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjung (Young Posse)",
    img: "Vey5UCH.jpeg",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Jiana (Young Posse)",
    img: "68CNimc.jpeg",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Doeun (Young Posse)",
    img: "CrYcejf.jpeg",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jieun (Young Posse)",
    img: "iuDf3AR.jpeg",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunkyoung (Rocket Punch)",
    img: "i1yS26C.jpeg",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonhee (Rocket Punch)",
    img: "w6Fgy7D.jpeg",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suyun (Rocket Punch)",
    img: "43Yjqjp.jpeg",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sohee (Rocket Punch)",
    img: "YormJCy.jpeg",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dahyun (Rocket Punch)",
    img: "8Z0moBH.jpeg",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Juhyeon (Lightsum)",
    img: "e3Up7JF.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chowon (Lightsum)",
    img: "c83eLyX.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sangah (Lightsum)",
    img: "SjsKzaX.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hina (Lightsum)",
    img: "PDeTZAL.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujeong (Lightsum)",
    img: "ZwXkHqH.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Nayoung (Lightsum)",
    img: "y0W3ydq.jpeg",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaesol (Cignature)",
    img: "drHUPlG.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jeewon (Cignature)",
    img: "FO8XpEY.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seline (Cignature)",
    img: "53TQwIA.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dohee (Cignature)",
    img: "MCGFdTQ.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Semi (Cignature)",
    img: "56uxtXN.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chloe (Cignature)",
    img: "7dbwKkj.jpeg",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunah (ILLIT)",
    img: "b5lIXMx.jpeg",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Minju (ILLIT)",
    img: "bT3vJuz.jpeg",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Moka (ILLIT)",
    img: "FoKQdPc.jpeg",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Wonhee (ILLIT)",
    img: "AveAU3s.jpeg",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Iroha (ILLIT)",
    img: "U2MiTK5.jpeg",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeyoung (Geenius)",
    img: "i4NRplh.jpeg",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sion (Geenius)",
    img: "mzFSCll.jpeg",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mika (Geenius)",
    img: "zYCQKtR.jpeg",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Andamiro (Geenius)",
    img: "gB3XsIP.jpeg",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Zoe (Geenius)",
    img: "rLIMFOY.jpeg",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yubin (tripleS)",
    img: "3KqRvOR.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yooyeon (tripleS)",
    img: "qWsyL4U.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeonji (tripleS)",
    img: "5CSZ1XM.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soomin (tripleS)",
    img: "cdclheA.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sohyun (tripleS)",
    img: "siz6DB9.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seoyeon (tripleS)",
    img: "qXP5LZc.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nien (tripleS)",
    img: "nNt5JMB.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nakyoung (tripleS)",
    img: "iL6oyef.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kotone (tripleS)",
    img: "5vdV1eU.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kaede (tripleS)",
    img: "mR8yE6s.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jiwoo (tripleS)",
    img: "O4Gasts.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyerin (tripleS)",
    img: "iQmm95E.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Dahyun (tripleS)",
    img: "U2IUe12.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chaeyeon (tripleS)",
    img: "eqNcVzG.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Xinyu (tripleS)",
    img: "DrnlIOa.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mayu (tripleS)",
    img: "GBY4Xp6.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chaewon (tripleS)",
    img: "dqPdOzZ.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Joobin (tripleS)",
    img: "9kSdVV7.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jiyeon (tripleS)",
    img: "zHlcuDe.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Lynn (tripleS)",
    img: "czr2hAp.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "SeoAh (tripleS)",
    img: "KdGY9xW.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Shion (tripleS)",
    img: "x2KnFeD.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sullin (tripleS)",
    img: "82STXM8.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hayeon (tripleS)",
    img: "BuIWnnZ.jpeg",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sihyeon (Everglow)",
    img: "fxB2u4t.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mia (Everglow)",
    img: "RxS0E9z.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Onda (Everglow)",
    img: "wCRIknL.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "E:U (Everglow)",
    img: "9bp3tKs.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Aisha (Everglow)",
    img: "pMDlTfJ.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yiren (Everglow)",
    img: "k3fcVos.jpeg",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeonju (UNIS)",
    img: "nKAKSJm.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Elisia (UNIS)",
    img: "Mxbgz7R.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yoona (UNIS)",
    img: "SJTYS7Z.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gehlee (UNIS)",
    img: "MuIUrF6.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kotoko (UNIS)",
    img: "Dyl41dZ.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nana (UNIS)",
    img: "usirUxH.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seowon (UNIS)",
    img: "kgPzMWe.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yunha (UNIS)",
    img: "jvx18ZP.jpeg",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ruka (Babymonster)",
    img: "TlLabM5.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Asa (Babymonster)",
    img: "nodcSmN.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rora (Babymonster)",
    img: "wj5Litl.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chiquita (Babymonster)",
    img: "vECn2yh.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Pharita (Babymonster)",
    img: "x4aggax.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rami (Babymonster)",
    img: "ByEIGEG.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ahyeon (Babymonster)",
    img: "e0UoQD2.jpeg",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Woni (RESCENE)",
    img: "XPUFy5u.jpeg",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Minami (RESCENE)",
    img: "DykQyvx.jpeg",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Liv (RESCENE)",
    img: "2ClZC0K.jpeg",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "May (RESCENE)",
    img: "sB0ADaA.jpeg",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Zena (RESCENE)",
    img: "ypIKbyW.jpeg",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sui (Candy Shop)",
    img: "DC6OtIu.jpeg",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sarang (Candy Shop)",
    img: "lMM3uIf.jpeg",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Julia (Candy Shop)",
    img: "5D3k1Zr.jpeg",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yuina (Candy Shop)",
    img: "wVBdPln.jpeg",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soram (Candy Shop)",
    img: "qX1t5kl.jpeg",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mashiro (Madein)",
    img: "mQrkOKf.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeseo (Madein)",
    img: "9QS1JKm.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Miu (Madein)",
    img: "SGQvzIU.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gaeun (Madein)",
    img: "1KTlFxq.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Suhye (Madein)",
    img: "Z3Ng7Jz.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nagomi (Madein)",
    img: "UqFv8Jc.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Serina (Madein)",
    img: "bBCX8dU.jpeg",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jimin (CLASS:y)",
    img: "i9AapuW.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Boeun (CLASS:y)",
    img: "YSceUuO.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Riwon (CLASS:y)",
    img: "8ChFgiP.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeju (CLASS:y)",
    img: "lZCZ2pf.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaewon (CLASS:y)",
    img: "41L4SPy.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyungseo (CLASS:y)",
    img: "wPXrzPn.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seonyou (CLASS:y)",
    img: "KqMEjNt.jpeg",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaerin (ICHILLIN')",
    img: "exDqZQ4.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chowon (ICHILLIN')",
    img: "iZInhkM.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "E.ji (ICHILLIN')",
    img: "gomTUiw.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jackie (ICHILLIN')",
    img: "sBSfFnK.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jiyoon (ICHILLIN')",
    img: "x1hGWyU.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Joonie (ICHILLIN')",
    img: "9IVNG7l.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeju (ICHILLIN')",
    img: "MkUGvGV.jpeg",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mai (izna)",
    img: "qz92pFc.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jeemin (izna)",
    img: "BnJRQB7.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jiyoon (izna)",
    img: "lkDg8pJ.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Koko (izna)",
    img: "QTjvymL.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Sarang (izna)",
    img: "SbGfOEo.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jungeun (izna)",
    img: "XSK4ydi.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Saebi (izna)",
    img: "hLWgX4I.jpeg",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sooin (MEOVV)",
    img: "NUHMji8.jpeg",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gawon (MEOVV)",
    img: "zFQDBTR.jpeg",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Anna (MEOVV)",
    img: "j6luHXI.jpeg",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Narin (MEOVV)",
    img: "12OSVRi.jpeg",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ella (MEOVV)",
    img: "6dnPbFj.jpeg",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyori (Mimiirose)",
    img: "lTzACm2.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjae (Mimiirose)",
    img: "u2TGL4Y.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yewon (Mimiirose)",
    img: "ug20qhp.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jia (Mimiirose)",
    img: "8PVRwBN.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yerin (Mimiirose)",
    img: "PEpeuYf.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Anna (Mimiirose)",
    img: "kIkAiFj.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunju (Mimiirose)",
    img: "VAClEIJ.jpeg",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seungjoo (Say My Name)",
    img: "QwGuobV.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soha (Say My Name)",
    img: "s81pr3q.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Junhwi (Say My Name)",
    img: "7Dx23YP.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Dohee (Say My Name)",
    img: "lo1PgyK.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mei (Say My Name)",
    img: "St8ixQM.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kanny (Say My Name)",
    img: "J5KELod.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hitomi (Say My Name)",
    img: "SIZap0t.jpeg",
    opts: {
      group: [ "Say My Name" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeeum (Odd Youth)",
    img: "Bk38QDI.jpeg",
    opts: {
      group: [ "Odd Youth" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Summer (Odd Youth)",
    img: "bs911wS.jpeg",
    opts: {
      group: [ "Odd Youth" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kanie (Odd Youth)",
    img: "VHkWtFc.jpeg",
    opts: {
      group: [ "Odd Youth" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Myah (Odd Youth)",
    img: "pUIOvzU.jpeg",
    opts: {
      group: [ "Odd Youth" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Maika (Odd Youth)",
    img: "jTNx1K1.jpeg",
    opts: {
      group: [ "Odd Youth" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kelly (Tri.be)",
    img: "AO8xFvk.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jia (Tri.be)",
    img: "lLRtsQh.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mire (Tri.be)",
    img: "DKsvTLz.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soeun (Tri.be)",
    img: "YJwo8DN.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Songusn (Tri.be)",
    img: "13Jz8i3.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyunbin (Tri.be)",
    img: "ZpAi8N0.jpeg",
    opts: {
      group: [ "tribe" ],
      gen: ["gen5"]  
      }
    },
];
