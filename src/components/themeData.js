const themeArray = [
  {
    theme: "ajs",
    name: "Admin of Justice",
    code: "AJS",
    description: "This theme uses a muted palette with badge-like elements.",
    image1: "/images/themes/ajs-01.jpg",
    image2: "/images/themes/ajs-02.jpg",
    image3: "/images/themes/ajs-03.jpg",
  },
  {
    theme: "ant",
    name: "Anthropology",
    code: "ANT",
    description: "This theme uses a box-heavy build with a museum-like feel.",
    image1: "/images/themes/ant-01.jpg",
    image2: "/images/themes/ant-02.jpg",
    image3: "/images/themes/ant-03.jpg",
  },
  {
    theme: "art",
    name: "Art",
    code: "ART",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/art-01.jpg",
    image2: "/images/themes/art-02.jpg",
    image3: "/images/themes/art-03.jpg",
  },
  {
    theme: "ait",
    name: "Automated Industrial Technology",
    code: "AIT",
    description: "This theme uses a gray palette with subtle accents and a machinery overlay.",
    image1: "/images/themes/ait-01.jpg",
    image2: "/images/themes/ait-02.jpg",
    image3: "/images/themes/ait-03.jpg",
  },
  {
    theme: "aviation",
    name: "Aviation Technology",
    code: "AVM",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/aviation-01.jpg",
    image2: "/images/themes/aviation-02.jpg",
    image3: "/images/themes/aviation-03.jpg",
  },
  {
    theme: "bio",
    name: "Biology",
    code: "BIO",
    description: "This theme uses an eye-catching palette and header illustrations.",
    image1: "/images/themes/bio-01.jpg",
    image2: "/images/themes/bio-02.jpg",
    image3: "/images/themes/bio-03.jpg",
  },
  {
    theme: "bct",
    name: "Building & Construction",
    code: "BCT",
    description: "This theme uses a gray palette with subtle accents and a machinery overlay.",
    image1: "/images/themes/bct-01.jpg",
    image2: "/images/themes/bct-02.jpg",
    image3: "/images/themes/bct-03.jpg",
  },
  {
    theme: "business",
    name: "Business",
    code: "BUS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/business-01.jpg",
    image2: "/images/themes/business-02.jpg",
    image3: "/images/themes/business-03.jpg",
    buttonColor: "black",
    hoverColor: "white"
  },
  {
    theme: "cas",
    name: "Climate Action & Sustainability",
    code: "CAS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/cas-01.jpg",
    image2: "/images/themes/cas-02.jpg",
    image3: "/images/themes/cas-03.jpg",
  },
  {
    theme: "chm",
    name: "Chemistry",
    code: "CHM",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/chm-01.jpg",
    image2: "/images/themes/chm-02.jpg",
    image3: "/images/themes/chm-03.jpg",
  },
  {
    theme: "cda",
    name: "Childhood Development",
    code: "CDA",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/cda-01.jpg",
    image2: "/images/themes/cda-02.jpg",
    image3: "/images/themes/cda-03.jpg",
  },
  {
    theme: "communication",
    name: "Communication",
    code: "CMN",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/communication-01.jpg",
    image2: "/images/themes/communication-02.jpg",
    image3: "/images/themes/communication-03.jpg",
  },
  {
    theme: "cad",
    name: "Computer Aided Design",
    code: "CAD",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/cad-01.jpg",
    image2: "/images/themes/cad-02.jpg",
    image3: "/images/themes/cad-03.jpg",
  },
  {
    theme: "cards",
    name: "Cards",
    code: "",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/cards-01.jpg",
    image2: "/images/themes/cards-02.jpg",
    image3: "/images/themes/cards-03.jpg",
  },
  {
    theme: "cis",
    name: "Computer Information Systems",
    code: "CIS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/cis-01.jpg",
    image2: "/images/themes/cis-02.jpg",
    image3: "/images/themes/cis-03.jpg",
    buttonColor: "black",
    hoverColor: "black"
  },
  {
    theme: "culinary",
    name: "Culinary Arts",
    code: "CUL",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/culinary-01.jpg",
    image2: "/images/themes/culinary-02.jpg",
    image3: "/images/themes/culinary-03.jpg",
  },
  {
    theme: "dental",
    name: "Dental Assisting",
    code: "DAE",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/dental-01.jpg",
    image2: "/images/themes/dental-02.jpg",
    image3: "/images/themes/dental-03.jpg",
  },
  {
    theme: "ece",
    name: "Early Childhood Education",
    code: "ECE",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/ece-01.jpg",
    image2: "/images/themes/ece-02.jpg",
    image3: "/images/themes/ece-03.jpg",
    buttonColor: "black",
    hoverColor: "black"
  },
  {
    theme: "ecn",
    name: "Economics",
    code: "ECN",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/ecn-01.jpg",
    image2: "/images/themes/ecn-02.jpg",
    image3: "/images/themes/ecn-03.jpg",
  },
  {
    theme: "eng",
    name: "Engineering",
    code: "ENG",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/eng-01.jpg",
    image2: "/images/themes/eng-02.jpg",
    image3: "/images/themes/eng-03.jpg",
  },
  {
    theme: "fashion",
    name: "Fashion Design & Clothing",
    code: "FDC",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/fashion-01.jpg",
    image2: "/images/themes/fashion-02.jpg",
    image3: "/images/themes/fashion-03.jpg",
  },
  {
    theme: "fsc",
    name: "Fire Science",
    code: "FSC",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/fsc-01.jpg",
    image2: "/images/themes/fsc-02.jpg",
    image3: "/images/themes/fsc-03.jpg",
  },
  {
    theme: "fitness",
    name: "Fitness & Sports Sciences",
    code: "FSS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/fitness-01.jpg",
    image2: "/images/themes/fitness-02.jpg",
    image3: "/images/themes/fitness-03.jpg",  
  },
  {
    theme: "geography",
    name: "Geography",
    code: "GEO",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/geography-01.jpg",
    image2: "/images/themes/geography-02.jpg",
    image3: "/images/themes/geography-03.jpg",
    buttonColor: "rgba(47, 65, 63, 1)"
  },
  {
    theme: "geology",
    name: "Geology",
    code: "GLG",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/geology-01.jpg",
    image2: "/images/themes/geology-02.jpg",
    image3: "/images/themes/geology-03.jpg",
  },
  {
    theme: "health-it",
    name: "Health Information Technology",
    code: "HIT",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/hit-01.jpg",
    image2: "/images/themes/hit-02.jpg",
    image3: "/images/themes/hit-03.jpg",
  },
  {
    theme: "history",
    name: "History",
    code: "HIS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/history-01.jpg",
    image2: "/images/themes/history-02.jpg",
    image3: "/images/themes/history-03.jpg",
  },
  {
    theme: "hrm",
    name: "Hotel & Restaurant",
    code: "HRM",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/hrm-01.jpg",
    image2: "/images/themes/hrm-02.jpg",
    image3: "/images/themes/hrm-03.jpg",
  },
  {
    theme: "hrs",
    name: "Human Resources",
    code: "HRS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/hrs-01.jpg",
    image2: "/images/themes/hrs-02.jpg",
    image3: "/images/themes/hrs-03.jpg",
  },
  {
    theme: "journalism",
    name: "Journalism",
    code: "JRN",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/journalism-01.jpg",
    image2: "/images/themes/journalism-02.jpg",
    image3: "/images/themes/journalism-03.jpg",
  },
  {
    theme: "lang",
    name: "Language",
    code: "",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/lang-01.jpg",
    image2: "/images/themes/lang-02.jpg",
    image3: "/images/themes/lang-03.jpg",
    buttonColor: "black"
  },
  {
    theme: "lgm",
    name: "Logistics & Supply Chain",
    code: "LGM",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/lgm-01.jpg",
    image2: "/images/themes/lgm-02.jpg",
    image3: "/images/themes/lgm-03.jpg",
  },
  {
    theme: "machine",
    name: "Machine Tool Technology",
    code: "MAC",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/machine-01.jpg",
    image2: "/images/themes/machine-02.jpg",
    image3: "/images/themes/machine-03.jpg",
  },
  {
    theme: "mgt",
    name: "Management",
    code: "MGT",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/mgt-01.jpg",
    image2: "/images/themes/mgt-02.jpg",
    image3: "/images/themes/mgt-03.jpg",
  },
  {
    theme: "mkt",
    name: "Marketing",
    code: "mkt",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/mkt-01.jpg",
    image2: "/images/themes/mkt-02.jpg",
    image3: "/images/themes/mkt-03.jpg",
  },
  {
    theme: "math",
    name: "Mathematics",
    code: "MAT",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/math-01.jpg",
    image2: "/images/themes/math-02.jpg",
    image3: "/images/themes/math-03.jpg",
  },
  {
    theme: "minimalist",
    name: "Minimalist",
    code: "",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/minimalist-01.jpg",
    image2: "/images/themes/minimalist-02.jpg",
    image3: "/images/themes/minimalist-03.jpg",
  },
  {
    theme: "music",
    name: "Music",
    code: "MUS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/music-01.jpg",
    image2: "/images/themes/music-02.jpg",
    image3: "/images/themes/music-03.jpg",
    buttonColor: "black"
  },
  {
    theme: "nursing",
    name: "Nursing",
    code: "NRS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/nursing-01.jpg",
    image2: "/images/themes/nursing-02.jpg",
    image3: "/images/themes/nursing-03.jpg",
  },
  {
    theme: "pht",
    name: "Pharmacy Technology",
    code: "PHT",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/pht-01.jpg",
    image2: "/images/themes/pht-02.jpg",
    image3: "/images/themes/pht-03.jpg",
  },
  {
    theme: "philosophy",
    name: "Philosophy",
    code: "PHI",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/philosophy-01.jpg",
    image2: "/images/themes/philosophy-02.jpg",
    image3: "/images/themes/philosophy-03.jpg",  
  },
  {
    theme: "phy",
    name: "Physics",
    code: "PHY",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/phy-01.jpg",
    image2: "/images/themes/phy-02.jpg",
    image3: "/images/themes/phy-03.jpg",  
  },
  {
    theme: "pos",
    name: "Political Science",
    code: "POS",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/pos-01.jpg",
    image2: "/images/themes/pos-02.jpg",
    image3: "/images/themes/pos-03.jpg",  
  },
  {
    theme: "psy",
    name: "Psychology",
    code: "PSY",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/psy-01.jpg",
    image2: "/images/themes/psy-02.jpg",
    image3: "/images/themes/psy-03.jpg",  
  },
  {
    theme: "reading",
    name: "Reading",
    code: "REA",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/reading-01.jpg",
    image2: "/images/themes/reading-02.jpg",
    image3: "/images/themes/reading-03.jpg",  
  },
  {
    theme: "resort",
    name: "Resort",
    code: "",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/resort-01.jpg",
    image2: "/images/themes/resort-02.jpg",
    image3: "/images/themes/resort-03.jpg",  
  },
  {
    theme: "ss",
    name: "Social Services",
    code: "SSE",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/ss-01.jpg",
    image2: "/images/themes/ss-02.jpg",
    image3: "/images/themes/ss-03.jpg",  
  },
  {
    theme: "soc",
    name: "Sociology",
    code: "SOC",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/soc-01.jpg",
    image2: "/images/themes/soc-02.jpg",
    image3: "/images/themes/soc-03.jpg",  
    buttonColor: "black",
    hoverColor: "black"
  },
  {
    theme: "university",
    name: "University",
    code: "",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/university-01.jpg",
    image2: "/images/themes/university-02.jpg",
    image3: "/images/themes/university-03.jpg",
  },
  {
    theme: "vet",
    name: "Veterinary Technology",
    code: "VET",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/vet-01.jpg",
    image2: "/images/themes/vet-02.jpg",
    image3: "/images/themes/vet-03.jpg",
  },
  {
    theme: "welding",
    name: "Welding",
    code: "WLD",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/welding-01.jpg",
    image2: "/images/themes/welding-02.jpg",
    image3: "/images/themes/welding-03.jpg",
  },
  {
    theme: "writing",
    name: "Writing",
    code: "WRT",
    description: "This theme uses a gradient in the background and adds frames to images.",
    image1: "/images/themes/writing-01.jpg",
    image2: "/images/themes/writing-02.jpg",
    image3: "/images/themes/writing-03.jpg",
  }
  // Add more themes to the array
];

export default themeArray;