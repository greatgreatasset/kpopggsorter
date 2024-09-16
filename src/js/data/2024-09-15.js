dataSetVersion = "2024-08-25";
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
      { name: "Oh My Girl", key: "omg" },	  
      { name: "Purple Kiss", key: "purplekiss" },
	  { name: "Red Velvet", key: "redvelvet" },
 	  { name: "RESCENE", key: "RESCENE" },	  
	  { name: "Rocket Punch", key: "Rocket Punch" },	  
      { name: "STAYC", key: "stayc" },
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
    name: "Jiu (Dreamcatcher)",
    img: "Sz1tPB8.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Sua (Dreamcatcher)",
    img: "Imo1DT0.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Siyeon (Dreamcatcher)",
    img: "N7QqRPy.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Handong (Dreamcatcher)",
    img: "GjzqKbo.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yoohyeon (Dreamcatcher)",
    img: "ckHdclc.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Dami (Dreamcatcher)",
    img: "wtyVNhX.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Gahyeon (Dreamcatcher)",
    img: "2kdqYw0.png",
    opts: {
      group: [ "dc" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Umji (VIVIZ)",
    img: "sJifOFc.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "SinB (VIVZ)",
    img: "GzoNhbh.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Eunha (VIVIZ)",
    img: "505pdBh.png",
    opts: {
      group: [ "VIVIZ" ],
      gen: ["gen3"]  
      }
  }, 
  {
    name: "Irene (Red Velvet)",
    img: "buMjekK.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Joy (Red Velvet)",
    img: "7VRAScN.png",
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
    img: "R0anfXf.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
    name: "Yeri (Red Velvet)",
    img: "M36SzMD.png",
    opts: {
      group: [ "redvelvet" ],
      gen: ["gen3"]  
      }
  },
  {
  name: "Choerry (ARTMS)",
  img: "5jUHzYp.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chuu (solo)",
  img: "qSp6i66.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Heejin (ARTMS)",
  img: "sa5QO18.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jinsoul (ARTMS)",
  img: "Wc8EfXk.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Haseul (ARTMS)",
  img: "HCiqi6r.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Kim Lip (ARTMS)",
  img: "9u71FRD.png",
  opts: {
    group: [ "ARTMS" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Goeun (Purple Kiss)",
  img: "Pji3zn3.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Dosie (Purple Kiss)",
  img: "gE7Oxn2.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ireh (Purple Kiss)",
  img: "Iyzyj8m.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuki (Purple Kiss)",
  img: "BvjqG8d.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaein (Purple Kiss)",
  img: "o5zSbQy.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Swan (Purple Kiss)",
  img: "3Qf53c9.png",
  opts: {
    group: [ "purplekiss" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Nana (WOOAH)",
  img: "LKllJ6c.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wooyeon (WOOAH)",
  img: "dSWcMBK.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sora (WOOAH)",
  img: "DWSZ7UC.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },  
  {
  name: "Lucy (WOOAH)",
  img: "9jRtEM6.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Minseo (WOOAH)",
  img: "HzFqPs0.png",
  opts: {
    group: [ "wooah" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Gaeul (IVE)",
  img: "qOO3urb.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Leeseo (IVE)",
  img: "FKzvUfW.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Liz (IVE)",
  img: "bbAjH1n.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Rei (IVE)",
  img: "DNPQW4n.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Jihan (Weeekly)",
  img: "qnZbs7Z.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Zoa (Weeekly)",
  img: "k3XmjAc.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Jaehee (Weeekly)",
  img: "2t4nE3T.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soojin (Weeekly)",
  img: "Xuf8t0x.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Monday (Weeekly)",
  img: "kSy5mfB.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Soeun (Weeekly)",
  img: "4SQmHEk.png",
  opts: {
    group: [ "weeekly" ],
    gen: ["gen4"]
    }
  },
  {
  name: "Eunbi (solo)",
  img: "u0LpS6J.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sakura (LE SSERAFIM)",
  img: "RclcY50.png",
  opts: {
    group: [ "le sserafim" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yena (solo)",
  img: "5GRCIOw.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Chaeyeon (solo)",
  img: "xpo9tU3.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaewon (LE SSERAFIM)",
  img: "gUU8bhZ.png",
  opts: {
    group: [ "le sserafim" ],
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
  name: "Taeyeon (solo)",
  img: "5u4O7Mn.png",
  opts: {
    group: [ "solo" ],
    gen: ["gen2"]  
    }
  },
  {
  name: "Yujin (IVE)",
  img: "CwVOyng.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Wonyoung (ive)",
  img: "17yKvMj.png",
  opts: {
    group: [ "ive" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Soyeon ((G)-Idle)",
  img: "U4bpw40.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Miyeon ((G)-Idle)",
  img: "jIxNZue.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Minnie ((G)-Idle)",
  img: "E6KiHj8.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuqi ((G)-Idle)",
  img: "YJ6Vsuw.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Shuhua ((G)-Idle)",
  img: "SOQku7u.png",
  opts: {
    group: [ "gidle" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yeji (ITZY)",
  img: "BT9bZwj.png",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Lia (ITZY)",
  img: "0QBUdaf.png",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Ryujin (ITZY)",
  img: "cliLu0W.png",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeryeong (ITZY)",
  img: "Q0ix1mj.png",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yuna (ITZY)",
  img: "zAtefuR.png",
  opts: {
    group: [ "ITZY" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yubin (Oh My Girl)",
  img: "OdS059F.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Arin (Oh My Girl)",
  img: "nMMHQrD.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Hyojung (Oh My Girl)",
  img: "Ef32yJr.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Seunghee (Oh My Girl)",
  img: "DEBshZP.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mimi (Oh My Girl)",
  img: "qDjP3gx.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "YooA (Oh My Girl)",
  img: "vHvIZYc.png",
  opts: {
    group: [ "omg" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Giselle (aespa)",
  img: "cFVrKHB.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Karina (aespa)",
  img: "N45HAu8.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Ningning (aespa)",
  img: "7Bgvev8.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
    {
  name: "Winter (aespa)",
  img: "HdYdPWU.png",
  opts: {
    group: [ "aespa" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Isa (STAYC)",
  img: "eaJdKRH.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "J (STAYC)",
  img: "2OK8EhX.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Seeun (STAYC)",
  img: "YzwRVl1.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sieun (STAYC)",
  img: "Y9VLrCj.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Sumin (STAYC)",
  img: "dbBt0hm.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Yoon (STAYC)",
  img: "r1vTwRm.png",
  opts: {
    group: [ "stayc" ],
    gen: ["gen4"]  
    }
  },
  {
  name: "Chaeyoung (fromis_9)",
  img: "SfCuovX.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Hayoung (fromis_9)",
  img: "FuLFedr.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jiheon (fromis_9)",
  img: "iiQ8oMJ.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jisun (fromis_9)",
  img: "Fk6bE6g.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Megan (fromis_9)",
  img: "QiRobdZ.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Nagyung (fromis_9)",
  img: "E1eiEPM.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Saerom (fromis_9)",
  img: "VZPObo5.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Seoyeon (fromis_9)",
  img: "YrIuzK5.png",
  opts: {
    group: [ "fromis9" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Chaeyoung (Twice)",
  img: "Y665shI.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Dahyun (Twice)",
  img: "UMbf22e.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jeongyeon (Twice)",
  img: "8mQVxoU.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Jihyo (Twice)",
  img: "PRyHnMV.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Mina (Twice)",
  img: "p3m2SKa.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Momo (Twice)",
  img: "Znt75Vi.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Nayeon (Twice)",
  img: "1gOXo3l.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Sana (Twice)",
  img: "SdqhaPj.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
    {
  name: "Tzuyu (Twice)",
  img: "jEqHm6D.png",
  opts: {
    group: [ "twice" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jennie (Blackpink)",
  img: "VqfQYd5.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Jisoo (Blackpink)",
  img: "FmdqBJI.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
  name: "Lisa (Blackpink)",
  img: "s42JJRk.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
 {
  name: "Rosé (Blackpink)",
  img: "L97f0nM.png",
  opts: {
    group: [ "blackpink" ],
    gen: ["gen3"]  
    }
  },
  {
    name: "Yunjin (Lesserafim)",
    img: "oJEMmBQ.png",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
    }
  },
  {
    name: "Kazuha (Lesserafim)",
    img: "ouAFOsH.png",
    opts: {
      group: [ "le sserafim" ],
      gen: ["gen4"]  
      }
    },
    {
      name: "Eunchae (Lesserafim)",
      img: "eWkHUyC.png",
      opts: {
        group: [ "le sserafim" ],
        gen: ["gen4"]  
        }
    },    
	 {
    name: "Minji (NewJeans)",
    img: "0PR6mBl.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Hanni (NewJeans)",
    img: "Ay2DxPW.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Danielle (NewJeans)",
    img: "ZwhdBlg.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Haerin (NewJeans)",
    img: "nYxDW2S.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Hyein (NewJeans)",
    img: "tuzBJ8M.png",
    opts: {
      group: [ "NewJeans" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Lily (NMIXX)",
    img: "pCNl2vm.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Bae (NMIXX)",
    img: "ckj9fuh.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Haewon (NMIXX)",
    img: "Pe4z0az.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Kyujin (NMIXX)",
    img: "I5e0LtY.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
	 },
	 {
    name: "Sullyoon (NMIXX)",
    img: "4bCAIFK.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	 {
    name: "Jiwoo (NMIXX)",
    img: "cjzT1tv.png",
    opts: {
      group: [ "NMIXX" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujin (Kep1er)",
    img: "3wW8CWE.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hikaru (Kep1er)",
    img: "0QVhDdZ.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dayeon (Kep1er)",
    img: "SIs9OnW.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaehyun (Kep1er)",
    img: "QTovmbr.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Bahiyyih (Kep1er)",
    img: "zippJEK.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Xiaoting (Kep1er)",
    img: "8HDD42n.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Youngeun (Kep1er)",
    img: "r7oPHjT.png",
    opts: {
      group: [ "Kep1er" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Duna (CSR)",
    img: "3FXEAha.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Geumhee (CSR)",
    img: "PDwdeny.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yuna (CSR)",
    img: "rdJbDOP.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeham (CSR)",
    img: "mqEZCz8.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sihyeon (CSR)",
    img: "zb4KzeN.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sua (CSR)",
    img: "wEfQfio.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoyeon (CSR)",
    img: "qB27O42.png",
    opts: {
      group: [ "CSR" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Tsuki (Billlie)",
    img: "bZW7GE4.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haruna (Billlie)",
    img: "qwoUnWK.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Siyoon (Billlie)",
    img: "5A4D4ud.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sheon (Billlie)",
    img: "6LXn8nl.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Moon Sua (Billlie)",
    img: "IX5iu5T.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suhyeon (Billlie)",
    img: "EkxWXDF.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Haram (Billlie)",
    img: "ymXGFBL.png",
    opts: {
      group: [ "Billlie" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Somi (solo)",
    img: "F4xD49d.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "IU (solo)",
    img: "Xs3Nk8F.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen2"]  
      }
    },
	{
    name: "Sunmi (solo)",
    img: "DhJ7Voz.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen2"]  
      }
    },
	{
    name: "Yeoreum (WJSN)",
    img: "XAeHDRf.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Yeonjung (WJSN)",
    img: "tYYg5DL.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Soobin (WJSN)",
    img: "EMADucm.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Luda (WJSN)",
    img: "eEBF1Qu.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Seola (WJSN)",
    img: "xzvYUnz.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Exy (WJSN)",
    img: "zFkx7Tg.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Eunseo (WJSN)",
    img: "qdQ2C7F.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Dayoung (WJSN)",
    img: "t8RqD1K.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Dawon (WJSN)",
    img: "0myJ3eV.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Bona (WJSN)",
    img: "LFvm0lQ.png",
    opts: {
      group: [ "WJSN" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Natty (Kiss of Life)",
    img: "8AudLPy.png",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Haneul (Kiss of Life)",
    img: "XFQLZ7T.png",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Julie (Kiss of Life)",
    img: "Xy74wcD.png",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Belle (Kiss of Life)",
    img: "sMMh0dK.png",
    opts: {
      group: [ "Kiss of Life" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Riina (H1-KEY)",
    img: "I27IMZE.png",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seoi (H1-KEY)",
    img: "NQrLVZh.png",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hwiseo (H1-KEY)",
    img: "2ZYZgjo.png",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yel (H1-KEY)",
    img: "cBsHJRy.png",
    opts: {
      group: [ "H1-KEY" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyunjin (Loossemble)",
    img: "2JGNfUJ.png",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeju (Loossemble)",
    img: "ZiLx6uC.png",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Vivi (Loossemble)",
    img: "S5nbuD4.png",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeojin (Loossemble)",
    img: "d5dC0yR.png",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Gowon (Loossemble)",
    img: "FMv5uPO.png",
    opts: {
      group: [ "Loossemble" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sunhye (Young Posse)",
    img: "3BTFR41.png",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjung (Young Posse)",
    img: "Vey5UCH.png",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
    {
    name: "Jiana (Young Posse)",
    img: "68CNimc.png",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Doeun (Young Posse)",
    img: "CrYcejf.png",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jieun (Young Posse)",
    img: "iuDf3AR.png",
    opts: {
      group: [ "Young Posse" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Bibi (solo)",
    img: "BCz80jy.png",
    opts: {
      group: [ "solo" ],
      gen: ["gen3"]  
      }
    },
	{
    name: "Yunkyoung (Rocket Punch)",
    img: "i1yS26C.png",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonhee (Rocket Punch)",
    img: "w6Fgy7D.png",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Suyun (Rocket Punch)",
    img: "43Yjqjp.png",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sohee (Rocket Punch)",
    img: "YormJCy.png",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dahyun (Rocket Punch)",
    img: "8Z0moBH.png",
    opts: {
      group: [ "Rocket Punch" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Juhyeon (Lightsum)",
    img: "e3Up7JF.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chowon (Lightsum)",
    img: "c83eLyX.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sangah (Lightsum)",
    img: "SjsKzaX.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hina (Lightsum)",
    img: "PDeTZAL.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yujeong (Lightsum)",
    img: "ZwXkHqH.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Nayoung (Lightsum)",
    img: "y0W3ydq.png",
    opts: {
      group: [ "Lightsum" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaesol (Cignature)",
    img: "drHUPlG.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jeewon (Cignature)",
    img: "FO8XpEY.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seline (Cignature)",
    img: "53TQwIA.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Dohee (Cignature)",
    img: "MCGFdTQ.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Semi (Cignature)",
    img: "56uxtXN.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chloe (Cignature)",
    img: "7dbwKkj.png",
    opts: {
      group: [ "Cignature" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunah (ILLIT)",
    img: "b5lIXMx.png",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Minju (ILLIT)",
    img: "bT3vJuz.png",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Moka (ILLIT)",
    img: "FoKQdPc.png",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Wonhee (ILLIT)",
    img: "AveAU3s.png",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Iroha (ILLIT)",
    img: "U2MiTK5.png",
    opts: {
      group: [ "ILLIT" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeyoung (Geenius)",
    img: "i4NRplh.png",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Sion (Geenius)",
    img: "mzFSCll.png",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mika (Geenius)",
    img: "zYCQKtR.png",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Andamiro (Geenius)",
    img: "gB3XsIP.png",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Zoe (Geenius)",
    img: "rLIMFOY.png",
    opts: {
      group: [ "Geenius" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yubin (tripleS)",
    img: "3KqRvOR.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yooyeon (tripleS)",
    img: "qWsyL4U.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeonji (tripleS)",
    img: "5CSZ1XM.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soomin (tripleS)",
    img: "cdclheA.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sohyun (tripleS)",
    img: "siz6DB9.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seoyeon (tripleS)",
    img: "qXP5LZc.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nien (tripleS)",
    img: "nNt5JMB.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nakyoung (tripleS)",
    img: "iL6oyef.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kotone (tripleS)",
    img: "5vdV1eU.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kaede (tripleS)",
    img: "mR8yE6s.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jiwoo (tripleS)",
    img: "O4Gasts.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyerin (tripleS)",
    img: "iQmm95E.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Dahyun (tripleS)",
    img: "U2IUe12.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chaeyeon (tripleS)",
    img: "eqNcVzG.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Xinyu (tripleS)",
    img: "DrnlIOa.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mayu (tripleS)",
    img: "GBY4Xp6.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chaewon (tripleS)",
    img: "dqPdOzZ.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Joobin (tripleS)",
    img: "9kSdVV7.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jiyeon (tripleS)",
    img: "zHlcuDe.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Lynn (tripleS)",
    img: "czr2hAp.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "SeoAh (tripleS)",
    img: "KdGY9xW.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Shion (tripleS)",
    img: "x2KnFeD.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sullin (tripleS)",
    img: "82STXM8.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hayeon (tripleS)",
    img: "BuIWnnZ.png",
    opts: {
      group: [ "tripleS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sihyeon (Everglow)",
    img: "fxB2u4t.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mia (Everglow)",
    img: "RxS0E9z.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Onda (Everglow)",
    img: "wCRIknL.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "E:U (Everglow)",
    img: "9bp3tKs.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Aisha (Everglow)",
    img: "pMDlTfJ.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yiren (Everglow)",
    img: "k3fcVos.png",
    opts: {
      group: [ "Everglow" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeonju (UNIS)",
    img: "nKAKSJm.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Elisia (UNIS)",
    img: "Mxbgz7R.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yoona (UNIS)",
    img: "SJTYS7Z.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gehlee (UNIS)",
    img: "MuIUrF6.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Kotoko (UNIS)",
    img: "Dyl41dZ.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nana (UNIS)",
    img: "usirUxH.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Seowon (UNIS)",
    img: "kgPzMWe.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yunha (UNIS)",
    img: "jvx18ZP.png",
    opts: {
      group: [ "UNIS" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ruka (Babymonster)",
    img: "TlLabM5.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Asa (Babymonster)",
    img: "nodcSmN.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rora (Babymonster)",
    img: "wj5Litl.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Chiquita (Babymonster)",
    img: "vECn2yh.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Pharita (Babymonster)",
    img: "x4aggax.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Rami (Babymonster)",
    img: "ByEIGEG.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ahyeon (Babymonster)",
    img: "e0UoQD2.png",
    opts: {
      group: [ "Babymonster" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Woni (RESCENE)",
    img: "XPUFy5u.png",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Minami (RESCENE)",
    img: "DykQyvx.png",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Liv (RESCENE)",
    img: "2ClZC0K.png",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "May (RESCENE)",
    img: "sB0ADaA.png",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Zena (RESCENE)",
    img: "ypIKbyW.png",
    opts: {
      group: [ "RESCENE" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sui (Candy Shop)",
    img: "DC6OtIu.png",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sarang (Candy Shop)",
    img: "lMM3uIf.png",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Julia (Candy Shop)",
    img: "5D3k1Zr.png",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yuina (Candy Shop)",
    img: "wVBdPln.png",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Soram (Candy Shop)",
    img: "qX1t5kl.png",
    opts: {
      group: [ "Candy Shop" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Mashiro (Madein)",
    img: "mQrkOKf.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Yeseo (Madein)",
    img: "9QS1JKm.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Miu (Madein)",
    img: "SGQvzIU.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gaeun (Madein)",
    img: "1KTlFxq.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Suhye (Madein)",
    img: "Z3Ng7Jz.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Nagomi (Madein)",
    img: "UqFv8Jc.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Serina (Madein)",
    img: "bBCX8dU.png",
    opts: {
      group: [ "Madein" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Jimin (CLASS:y)",
    img: "i9AapuW.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Boeun (CLASS:y)",
    img: "YSceUuO.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Riwon (CLASS:y)",
    img: "8ChFgiP.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyeju (CLASS:y)",
    img: "lZCZ2pf.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaewon (CLASS:y)",
    img: "41L4SPy.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Hyungseo (CLASS:y)",
    img: "wPXrzPn.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Seonyou (CLASS:y)",
    img: "KqMEjNt.png",
    opts: {
      group: [ "Classy" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chaerin (ICHILLIN')",
    img: "exDqZQ4.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Chowon (ICHILLIN')",
    img: "iZInhkM.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "E.ji (ICHILLIN')",
    img: "gomTUiw.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jackie (ICHILLIN')",
    img: "sBSfFnK.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jiyoon (ICHILLIN')",
    img: "x1hGWyU.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Joonie (ICHILLIN')",
    img: "9IVNG7l.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeju (ICHILLIN')",
    img: "MkUGvGV.png",
    opts: {
      group: [ "Ichillin" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Mai (izna)",
    img: "qz92pFc.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jeemin (izna)",
    img: "BnJRQB7.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jiyoon (izna)",
    img: "lkDg8pJ.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Koko (izna)",
    img: "QTjvymL.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Sarang (izna)",
    img: "SbGfOEo.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Jungeun (izna)",
    img: "XSK4ydi.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
  {
    name: "Saebi (izna)",
    img: "hLWgX4I.png",
    opts: {
      group: [ "Izna" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Sooin (MEOVV)",
    img: "NUHMji8.png",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Gawon (MEOVV)",
    img: "zFQDBTR.png",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Anna (MEOVV)",
    img: "j6luHXI.png",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Narin (MEOVV)",
    img: "12OSVRi.png",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Ella (MEOVV)",
    img: "6dnPbFj.png",
    opts: {
      group: [ "Meovv" ],
      gen: ["gen5"]  
      }
    },
	{
    name: "Hyori (Mimiirose)",
    img: "lTzACm2.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yeonjae (Mimiirose)",
    img: "u2TGL4Y.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yewon (Mimiirose)",
    img: "ug20qhp.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Jia (Mimiirose)",
    img: "8PVRwBN.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yerin (Mimiirose)",
    img: "PEpeuYf.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Anna (Mimiirose)",
    img: "kIkAiFj.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
	{
    name: "Yunju (Mimiirose)",
    img: "VAClEIJ.png",
    opts: {
      group: [ "Mimiirose" ],
      gen: ["gen4"]  
      }
    },
];
