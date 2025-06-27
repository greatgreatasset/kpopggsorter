dataSetVersion = "2025-06-27";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
	  { name: "aespa", key: "aespa" },
	  { name: "ALLDAY PROJECT", key: "ADP" },	 
	  { name: "ARTMS", key: "ARTMS" },	  
  	  { name: "BABYMONSTER", key: "BABYMONSTER" },
	  { name: "Billlie", key: "Billlie" },	  
      { name: "BLACKPINK", key: "BLACKPINK" },	
  	  { name: "Candy Shop", key: "Candy Shop" },
	  { name: "cignature", key: "cignature" },	  
	  { name: "CLASS:y", key: "Classy" },
	  { name: "CSR", key: "CSR" },	  
      { name: "Dreamcatcher", key: "dc" },	
	  { name: "EVERGLOW", key: "EVERGLOW" },
      { name: "fromis_9", key: "fromis9" },	  
	  { name: "Geenius", key: "Geenius" },	  
	  { name: "H1-KEY", key: "H1-KEY" },	 
	  { name: "Hearts2Hearts", key: "h2h" },
	  { name: "HITGS", key: "HITGS" },
	  { name: "i-dle", key: "idle" },	
  	  { name: "ICHILLIN'", key: "Ichillin" },	  
	  { name: "ILLIT", key: "ILLIT" },	  
      { name: "ITZY", key: "ITZY" },
      { name: "IVE", key: "ive"},
 	  { name: "izna", key: "izna" },
	  { name: "Kep1er", key: "Kep1er" },
	  { name: "KiiiKiii", key: "kk" },
	  { name: "KIIRAS", key: "KIIRAS" },
	  { name: "KISS OF LIFE", key: "KISS OF LIFE" },	  
      { name: "LE SSERAFIM", key: "le sserafim" },	  
	  { name: "LIGHTSUM", key: "LIGHTSUM" },
	  { name: "Loossemble", key: "Loossemble" },
  	  { name: "MADEIN", key: "MADEIN" },	 
  	  { name: "MEOVV", key: "MEOVV" },		
  	  { name: "MIMIIROSE", key: "MIMIIROSE" },		  
	  { name: "NJZ", key: "NJZ" },
	  { name: "NMIXX", key: "NMIXX" },	 
	  { name: "ODD YOUTH", key: "ODD YOUTH" },		  
      { name: "OH MY GIRL", key: "omg" },	  
      { name: "PURPLE KISS", key: "purplekiss" },
	  { name: "QWER", key: "QWER" },
	  { name: "Red Velvet", key: "redvelvet" },
 	  { name: "RESCENE", key: "RESCENE" },	  
	  { name: "Rocket Punch", key: "Rocket Punch" },	
      { name: "SAY MY NAME", key: "SAY MY NAME" },	  
      { name: "STAYC", key: "stayc" },
	  { name: "TRI.BE", key: "tribe" },	
	  { name: "tripleS", key: "tripleS" },	  
      { name: "TWICE", key: "TWICE" },
  	  { name: "UNIS", key: "UNIS" },
      { name: "USPEER", key: "USPEER" },	  
	  { name: "VIVIZ", key: "VIVIZ" },	  
      { name: "Weeekly", key: "weeekly" },
	  { name: "WJSN", key: "WJSN" },	  
      { name: "WOOAH", key: "wooah" },
	  { name: "YOUNG POSSE", key: "YOUNG POSSE" },
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
  name: "Goeun (PURPLE KISS)",
  img: "Pji3zn3.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Dosie (PURPLE KISS)",
  img: "gE7Oxn2.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ireh (PURPLE KISS)",
  img: "Iyzyj8m.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuki (PURPLE KISS)",
  img: "BvjqG8d.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaein (PURPLE KISS)",
  img: "o5zSbQy.jpeg",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Swan (PURPLE KISS)",
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
  name: "Yujin (IVE)",
  img: "XCcUNYn.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wonyoung (ive)",
  img: "KO4KRWZ.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Gaeul (IVE)",
  img: "wh78m9e.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Leeseo (IVE)",
  img: "hwEFUGr.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Liz (IVE)",
  img: "yKrxsxq.jpeg",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Rei (IVE)",
  img: "Tbe7O9J.jpeg",
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
  img: "fn9s6lM.jpeg",
  opts: {
    group: [ "le sserafim" ],
    gen: ["gen4"]  
    }
  },
 {
  name: "Chaewon (LE SSERAFIM)",
  img: "WoDMN87.jpeg",
  opts: {
    group: [ "le sserafim" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Soyeon (i-dle)",
  img: "U4bpw40.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Miyeon (i-dle)",
  img: "jIxNZue.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Minnie (i-dle)",
  img: "E6KiHj8.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuqi (i-dle)",
  img: "YJ6Vsuw.jpeg",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Shuhua (i-dle)",
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
  name: "Yubin (OH MY GIRL)",
  img: "OdS059F.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Arin (OH MY GIRL)",
  img: "nMMHQrD.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Hyojung (OH MY GIRL)",
  img: "Ef32yJr.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Seunghee (OH MY GIRL)",
  img: "DEBshZP.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mimi (OH MY GIRL)",
  img: "qDjP3gx.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "YooA (OH MY GIRL)",
  img: "vHvIZYc.jpeg",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Giselle (aespa)",
  img: "CIx6XXl.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Karina (aespa)",
  img: "MvBSCPq.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Ningning (aespa)",
  img: "xEgIrYn.jpeg",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Winter (aespa)",
  img: "jCu9UIr.jpeg",
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
  name: "Chaeyoung (TWICE)",
  img: "Y665shI.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Dahyun (TWICE)",
  img: "UMbf22e.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jeongyeon (TWICE)",
  img: "8mQVxoU.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jihyo (TWICE)",
  img: "PRyHnMV.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mina (TWICE)",
  img: "p3m2SKa.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Momo (TWICE)",
  img: "Znt75Vi.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Nayeon (TWICE)",
  img: "1gOXo3l.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Sana (TWICE)",
  img: "SdqhaPj.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Tzuyu (TWICE)",
  img: "jEqHm6D.jpeg",
  opts: {
    group: [ "TWICE" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jennie (BLACKPINK)",
  img: "VqfQYd5.jpeg",
  opts: {
    group: [ "BLACKPINK" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jisoo (BLACKPINK)",
  img: "FmdqBJI.jpeg",
  opts: {
    group: [ "BLACKPINK" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Lisa (BLACKPINK)",
  img: "s42JJRk.jpeg",
  opts: {
    group: [ "BLACKPINK" ],
    gen: ["gen3"]  
    }
  },
 {
  name: "Rosé (BLACKPINK)",
  img: "L97f0nM.jpeg",
  opts: {
    group: [ "BLACKPINK" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Yunjin (LE SSERAFIM)",
    img: "Y29skk1.jpeg",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
    }
  },
  {
    name: "Kazuha (LE SSERAFIM)",
    img: "ASuyYUK.jpeg",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
      }
    },
    {
      name: "Eunchae (LE SSERAFIM)",
      img: "aZrO1ad.jpeg",
      opts: {
        group: [ "le sserafim" ],
        gen: ["gen4"]  
        }
    },    
	 {
    name: "Minji (NJZ)",
    img: "VgBAagN.jpeg",
    opts: {
      group: [ "NJZ" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Hanni (NJZ)",
    img: "LFK4ab1.jpeg",
    opts: {
      group: [ "NJZ" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Danielle (NJZ)",
    img: "iJhI575.jpeg",
    opts: {
      group: [ "NJZ" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Haerin (NJZ)",
    img: "t3jojxf.jpeg",
    opts: {
      group: [ "NJZ" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Hyein (NJZ)",
    img: "QdSzAw4.jpeg",
    opts: {
      group: [ "NJZ" ],
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
    name: "Natty (KISS OF LIFE)",
    img: "8AudLPy.jpeg",
    opts: {
      group: [ "KISS OF LIFE" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Haneul (KISS OF LIFE)",
    img: "XFQLZ7T.jpeg",
    opts: {
      group: [ "KISS OF LIFE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Julie (KISS OF LIFE)",
    img: "Xy74wcD.jpeg",
    opts: {
      group: [ "KISS OF LIFE" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Belle (KISS OF LIFE)",
    img: "sMMh0dK.jpeg",
    opts: {
      group: [ "KISS OF LIFE" ],
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
    name: "Sunhye (YOUNG POSSE)",
    img: "3BTFR41.jpeg",
    opts: {
      group: [ "YOUNG POSSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjung (YOUNG POSSE)",
    img: "Vey5UCH.jpeg",
    opts: {
      group: [ "YOUNG POSSE" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Jiana (YOUNG POSSE)",
    img: "68CNimc.jpeg",
    opts: {
      group: [ "YOUNG POSSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Doeun (YOUNG POSSE)",
    img: "CrYcejf.jpeg",
    opts: {
      group: [ "YOUNG POSSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jieun (YOUNG POSSE)",
    img: "iuDf3AR.jpeg",
    opts: {
      group: [ "YOUNG POSSE" ],
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
    name: "Juhyeon (LIGHTSUM)",
    img: "e3Up7JF.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chowon (LIGHTSUM)",
    img: "c83eLyX.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sangah (LIGHTSUM)",
    img: "SjsKzaX.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hina (LIGHTSUM)",
    img: "PDeTZAL.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujeong (LIGHTSUM)",
    img: "ZwXkHqH.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Nayoung (LIGHTSUM)",
    img: "y0W3ydq.jpeg",
    opts: {
      group: [ "LIGHTSUM" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaesol (cignature)",
    img: "drHUPlG.jpeg",
    opts: {
      group: [ "cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jeewon (cignature)",
    img: "FO8XpEY.jpeg",
    opts: {
      group: [ "cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seline (cignature)",
    img: "53TQwIA.jpeg",
    opts: {
      group: [ "cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dohee (cignature)",
    img: "MCGFdTQ.jpeg",
    opts: {
      group: [ "cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Semi (cignature)",
    img: "56uxtXN.jpeg",
    opts: {
      group: [ "cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chloe (cignature)",
    img: "7dbwKkj.jpeg",
    opts: {
      group: [ "cignature" ],
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
    name: "Sihyeon (EVERGLOW)",
    img: "fxB2u4t.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mia (EVERGLOW)",
    img: "RxS0E9z.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Onda (EVERGLOW)",
    img: "wCRIknL.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "E:U (EVERGLOW)",
    img: "9bp3tKs.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Aisha (EVERGLOW)",
    img: "pMDlTfJ.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yiren (EVERGLOW)",
    img: "k3fcVos.jpeg",
    opts: {
      group: [ "EVERGLOW" ],
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
    name: "Ruka (BABYMONSTER)",
    img: "TlLabM5.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Asa (BABYMONSTER)",
    img: "nodcSmN.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rora (BABYMONSTER)",
    img: "wj5Litl.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chiquita (BABYMONSTER)",
    img: "vECn2yh.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Pharita (BABYMONSTER)",
    img: "x4aggax.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rami (BABYMONSTER)",
    img: "ByEIGEG.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ahyeon (BABYMONSTER)",
    img: "e0UoQD2.jpeg",
    opts: {
      group: [ "BABYMONSTER" ],
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
    name: "Mashiro (MADEIN)",
    img: "mQrkOKf.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeseo (MADEIN)",
    img: "9QS1JKm.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Miu (MADEIN)",
    img: "SGQvzIU.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gaeun (MADEIN)",
    img: "1KTlFxq.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Suhye (MADEIN)",
    img: "Z3Ng7Jz.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nagomi (MADEIN)",
    img: "UqFv8Jc.jpeg",
    opts: {
      group: [ "MADEIN" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Serina (MADEIN)",
    img: "bBCX8dU.jpeg",
    opts: {
      group: [ "MADEIN" ],
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
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jeemin (izna)",
    img: "BnJRQB7.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jiyoon (izna)",
    img: "lkDg8pJ.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Koko (izna)",
    img: "QTjvymL.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Sarang (izna)",
    img: "SbGfOEo.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jungeun (izna)",
    img: "XSK4ydi.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Saebi (izna)",
    img: "hLWgX4I.jpeg",
    opts: {
      group: [ "izna" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sooin (MEOVV)",
    img: "NUHMji8.jpeg",
    opts: {
      group: [ "MEOVV" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gawon (MEOVV)",
    img: "zFQDBTR.jpeg",
    opts: {
      group: [ "MEOVV" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Anna (MEOVV)",
    img: "j6luHXI.jpeg",
    opts: {
      group: [ "MEOVV" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Narin (MEOVV)",
    img: "12OSVRi.jpeg",
    opts: {
      group: [ "MEOVV" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ella (MEOVV)",
    img: "6dnPbFj.jpeg",
    opts: {
      group: [ "MEOVV" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyori (MIMIIROSE)",
    img: "lTzACm2.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjae (MIMIIROSE)",
    img: "u2TGL4Y.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yewon (MIMIIROSE)",
    img: "ug20qhp.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jia (MIMIIROSE)",
    img: "8PVRwBN.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yerin (MIMIIROSE)",
    img: "PEpeuYf.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Anna (MIMIIROSE)",
    img: "kIkAiFj.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunju (MIMIIROSE)",
    img: "VAClEIJ.jpeg",
    opts: {
      group: [ "MIMIIROSE" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seungjoo (SAY MY NAME)",
    img: "QwGuobV.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soha (SAY MY NAME)",
    img: "s81pr3q.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Junhwi (SAY MY NAME)",
    img: "7Dx23YP.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Dohee (SAY MY NAME)",
    img: "lo1PgyK.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mei (SAY MY NAME)",
    img: "St8ixQM.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kanny (SAY MY NAME)",
    img: "J5KELod.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hitomi (SAY MY NAME)",
    img: "SIZap0t.jpeg",
    opts: {
      group: [ "SAY MY NAME" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeeum (ODD YOUTH)",
    img: "Bk38QDI.jpeg",
    opts: {
      group: [ "ODD YOUTH" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Summer (ODD YOUTH)",
    img: "bs911wS.jpeg",
    opts: {
      group: [ "ODD YOUTH" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kanie (ODD YOUTH)",
    img: "VHkWtFc.jpeg",
    opts: {
      group: [ "ODD YOUTH" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Myah (ODD YOUTH)",
    img: "pUIOvzU.jpeg",
    opts: {
      group: [ "ODD YOUTH" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Maika (ODD YOUTH)",
    img: "jTNx1K1.jpeg",
    opts: {
      group: [ "ODD YOUTH" ],
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
	{
    name: "Jiwoo (Hearts2Hearts)",
    img: "s92SPQK.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Carmen (Hearts2Hearts)",
    img: "QCVeHyF.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yuha (Hearts2Hearts)",
    img: "lDNnfUc.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Stella (Hearts2Hearts)",
    img: "QoDKDvl.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Juun (Hearts2Hearts)",
    img: "F1FlbVz.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "A-na (Hearts2Hearts)",
    img: "kL9ZGfi.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ian (Hearts2Hearts)",
    img: "zPcj1Vj.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ye-on (Hearts2Hearts)",
    img: "2GXpu66.jpeg",
    opts: {
      group: [ "h2h" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jiyu (KiiiKiii)",
    img: "NavkEjq.jpeg",
    opts: {
      group: [ "kk" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Leesol (KiiiKiii)",
    img: "mdmWhiT.jpeg",
    opts: {
      group: [ "kk" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sui (KiiiKiii)",
    img: "gwQ7as9.jpeg",
    opts: {
      group: [ "kk" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Haum (KiiiKiii)",
    img: "BFZZVSR.jpeg",
    opts: {
      group: [ "kk" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kya (KiiiKiii)",
    img: "Hd8MwTu.jpeg",
    opts: {
      group: [ "kk" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chodan (QWER)",
    img: "ozuC0iF.jpeg",
    opts: {
      group: [ "QWER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Magenta (QWER)",
    img: "0RXiAlv.jpeg",
    opts: {
      group: [ "QWER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Siyeon (QWER)",
    img: "frD5F0Q.jpeg",
    opts: {
      group: [ "QWER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hina (QWER)",
    img: "FqnDBb3.jpeg",
    opts: {
      group: [ "QWER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yewon (USPEER)",
    img: "OwxSIus.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soee (USPEER)",
    img: "ulAc7mg.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sian (USPEER)",
    img: "BFyVPTn.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seoyu (USPEER)",
    img: "lxkqEfn.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Daon (USPEER)",
    img: "U2Iq5lA.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chaena (USPEER)",
    img: "fH83Pg5.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Roa (USPEER)",
    img: "6qcnNpU.jpeg",
    opts: {
      group: [ "USPEER" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "VV (HITGS)",
    img: "RsKCSjy.jpeg",
    opts: {
      group: [ "HITGS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seojin (HITGS)",
    img: "AHM0WaP.jpeg",
    opts: {
      group: [ "HITGS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seohee (HITGS)",
    img: "7XyYzhw.jpeg",
    opts: {
      group: [ "HITGS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyerin (HITGS)",
    img: "fLp6Tds.jpeg",
    opts: {
      group: [ "HITGS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Iyoo (HITGS)",
    img: "4iM4pvt.jpeg",
    opts: {
      group: [ "HITGS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Bailey (ALLDAY PROJECT)",
    img: "lMeBMyP.jpeg",
    opts: {
      group: [ "ADP" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Youngseo (ALLDAY PROJECT)",
    img: "2rWJoC8.jpeg",
    opts: {
      group: [ "ADP" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Annie (ALLDAY PROJECT)",
    img: "zzsa28U.jpeg",
    opts: {
      group: [ "ADP" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "LingLing (KIIRAS)",
    img: "3bzMgE3.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kurumi (KIIRAS)",
    img: "7wHCZsp.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Harin (KIIRAS)",
    img: "4OcoPox.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kylie (KIIRAS)",
    img: "aet9tbD.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Doyeon (KIIRAS)",
    img: "aNHEUkH.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Roah (KIIRAS)",
    img: "m6Vh7XC.jpeg",
    opts: {
      group: [ "KIIRAS" ],
      gen: ["gen5"]  
      }
    },
];
