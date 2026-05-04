export type DesignCategory = "All" | "Floral" | "Geometric" | "Paisley" | "Traditional" | "Abstract" | "Contemporary";

export interface Design {
  id: string;
  name: string;
  code: string;
  category: DesignCategory;
  imageUrl: string;
  minMetres: number;
}

export const categories: DesignCategory[] = [
  "All",
  "Floral",
  "Geometric",
  "Paisley",
  "Traditional",
  "Abstract",
  "Contemporary"
];

export const designs: Design[] = [
  {
    "id": "1",
    "name": "Tanish Signature Print - 01",
    "code": "D0001",
    "category": "Contemporary",
    "imageUrl": "/catalogue/1.jpg", "minMetres": 500
  },
  {
    "id": "2",
    "name": "Tanish Signature Print - 02",
    "code": "D0002",
    "category": "Abstract",
    "imageUrl": "/catalogue/2.jpg", "minMetres": 500
  },
  {
    "id": "3",
    "name": "Tanish Signature Print - 03",
    "code": "D0003",
    "category": "Traditional",
    "imageUrl": "/catalogue/3.jpg", "minMetres": 500
  },
  {
    "id": "4",
    "name": "Tanish Signature Print - 04",
    "code": "D0004",
    "category": "Paisley",
    "imageUrl": "/catalogue/4.jpg", "minMetres": 500
  },
  {
    "id": "5",
    "name": "Tanish Signature Print - 05",
    "code": "D0005",
    "category": "Paisley",
    "imageUrl": "/catalogue/5.jpg", "minMetres": 500
  },
  {
    "id": "6",
    "name": "Tanish Signature Print - 06",
    "code": "D0006",
    "category": "Paisley",
    "imageUrl": "/catalogue/6.jpg", "minMetres": 500
  },
  {
    "id": "7",
    "name": "Tanish Signature Print - 07",
    "code": "D0007",
    "category": "Paisley",
    "imageUrl": "/catalogue/7.jpg", "minMetres": 500
  },
  {
    "id": "8",
    "name": "Tanish Signature Print - 08",
    "code": "D0008",
    "category": "Paisley",
    "imageUrl": "/catalogue/8.jpg", "minMetres": 500
  },
  {
    "id": "9",
    "name": "Tanish Signature Print - 09",
    "code": "D0009",
    "category": "Floral",
    "imageUrl": "/catalogue/9.jpg", "minMetres": 500
  },
  {
    "id": "10",
    "name": "Tanish Signature Print - 10",
    "code": "D0010",
    "category": "Paisley",
    "imageUrl": "/catalogue/10.jpg", "minMetres": 500
  },
  {
    "id": "11",
    "name": "Tanish Signature Print - 11",
    "code": "D0011",
    "category": "Contemporary",
    "imageUrl": "/catalogue/11.jpg", "minMetres": 500
  },
  {
    "id": "12",
    "name": "Tanish Signature Print - 12",
    "code": "D0012",
    "category": "Paisley",
    "imageUrl": "/catalogue/12.jpg", "minMetres": 500
  },
  {
    "id": "13",
    "name": "Tanish Signature Print - 13",
    "code": "D0013",
    "category": "Paisley",
    "imageUrl": "/catalogue/13.jpg", "minMetres": 500
  },
  {
    "id": "14",
    "name": "Tanish Signature Print - 14",
    "code": "D0014",
    "category": "Floral",
    "imageUrl": "/catalogue/14.jpg", "minMetres": 500
  },
  {
    "id": "15",
    "name": "Tanish Signature Print - 15",
    "code": "D0015",
    "category": "Paisley",
    "imageUrl": "/catalogue/15.jpg", "minMetres": 500
  },
  {
    "id": "16",
    "name": "Tanish Signature Print - 16",
    "code": "D0016",
    "category": "Traditional",
    "imageUrl": "/catalogue/16.jpg", "minMetres": 500
  },
  {
    "id": "17",
    "name": "Tanish Signature Print - 17",
    "code": "D0017",
    "category": "Geometric",
    "imageUrl": "/catalogue/17.jpg", "minMetres": 500
  },
  {
    "id": "18",
    "name": "Tanish Signature Print - 18",
    "code": "D0018",
    "category": "Traditional",
    "imageUrl": "/catalogue/18.jpg", "minMetres": 500
  },
  {
    "id": "19",
    "name": "Tanish Signature Print - 19",
    "code": "D0019",
    "category": "Contemporary",
    "imageUrl": "/catalogue/19.jpg", "minMetres": 500
  },
  {
    "id": "20",
    "name": "Tanish Signature Print - 20",
    "code": "D0020",
    "category": "Traditional",
    "imageUrl": "/catalogue/20.jpg", "minMetres": 500
  },
  {
    "id": "21",
    "name": "Tanish Signature Print - 21",
    "code": "D0021",
    "category": "Floral",
    "imageUrl": "/catalogue/21.jpg", "minMetres": 500
  },
  {
    "id": "22",
    "name": "Tanish Signature Print - 22",
    "code": "D0022",
    "category": "Paisley",
    "imageUrl": "/catalogue/22.jpg", "minMetres": 500
  },
  {
    "id": "23",
    "name": "Tanish Signature Print - 23",
    "code": "D0023",
    "category": "Traditional",
    "imageUrl": "/catalogue/23.jpg", "minMetres": 500
  },
  {
    "id": "24",
    "name": "Tanish Signature Print - 24",
    "code": "D0024",
    "category": "Contemporary",
    "imageUrl": "/catalogue/24.jpg", "minMetres": 500
  },
  {
    "id": "25",
    "name": "Tanish Signature Print - 25",
    "code": "D0025",
    "category": "Abstract",
    "imageUrl": "/catalogue/25.jpg", "minMetres": 500
  },
  {
    "id": "26",
    "name": "Tanish Signature Print - 26",
    "code": "D0026",
    "category": "Contemporary",
    "imageUrl": "/catalogue/26.jpg", "minMetres": 500
  },
  {
    "id": "27",
    "name": "Tanish Signature Print - 27",
    "code": "D0027",
    "category": "Geometric",
    "imageUrl": "/catalogue/27.jpg", "minMetres": 500
  },
  {
    "id": "28",
    "name": "Tanish Signature Print - 28",
    "code": "D0028",
    "category": "Paisley",
    "imageUrl": "/catalogue/28.jpg", "minMetres": 500
  },
  {
    "id": "29",
    "name": "Tanish Signature Print - 29",
    "code": "D0029",
    "category": "Floral",
    "imageUrl": "/catalogue/29.jpg", "minMetres": 500
  },
  {
    "id": "30",
    "name": "Tanish Signature Print - 30",
    "code": "D0030",
    "category": "Contemporary",
    "imageUrl": "/catalogue/30.jpg", "minMetres": 500
  },
  {
    "id": "31",
    "name": "Tanish Signature Print - 31",
    "code": "D0031",
    "category": "Abstract",
    "imageUrl": "/catalogue/31.jpg", "minMetres": 500
  },
  {
    "id": "32",
    "name": "Tanish Signature Print - 32",
    "code": "D0032",
    "category": "Geometric",
    "imageUrl": "/catalogue/32.jpg", "minMetres": 500
  },
  {
    "id": "33",
    "name": "Tanish Signature Print - 33",
    "code": "D0033",
    "category": "Floral",
    "imageUrl": "/catalogue/33.jpg", "minMetres": 500
  },
  {
    "id": "34",
    "name": "Tanish Signature Print - 34",
    "code": "D0034",
    "category": "Geometric",
    "imageUrl": "/catalogue/34.jpg", "minMetres": 500
  },
  {
    "id": "35",
    "name": "Tanish Signature Print - 35",
    "code": "D0035",
    "category": "Geometric",
    "imageUrl": "/catalogue/35.jpg", "minMetres": 500
  },
  {
    "id": "36",
    "name": "Tanish Signature Print - 36",
    "code": "D0036",
    "category": "Geometric",
    "imageUrl": "/catalogue/36.jpg", "minMetres": 500
  },
  {
    "id": "37",
    "name": "Tanish Signature Print - 37",
    "code": "D0037",
    "category": "Traditional",
    "imageUrl": "/catalogue/37.jpg", "minMetres": 500
  },
  {
    "id": "38",
    "name": "Tanish Signature Print - 38",
    "code": "D0038",
    "category": "Contemporary",
    "imageUrl": "/catalogue/38.jpg", "minMetres": 500
  },
  {
    "id": "39",
    "name": "Tanish Signature Print - 39",
    "code": "D0039",
    "category": "Paisley",
    "imageUrl": "/catalogue/39.jpg", "minMetres": 500
  },
  {
    "id": "40",
    "name": "Tanish Signature Print - 40",
    "code": "D0040",
    "category": "Floral",
    "imageUrl": "/catalogue/40.jpg", "minMetres": 500
  },
  {
    "id": "41",
    "name": "Tanish Signature Print - 41",
    "code": "D0041",
    "category": "Contemporary",
    "imageUrl": "/catalogue/41.jpg", "minMetres": 500
  },
  {
    "id": "42",
    "name": "Tanish Signature Print - 42",
    "code": "D0042",
    "category": "Geometric",
    "imageUrl": "/catalogue/42.jpg", "minMetres": 500
  },
  {
    "id": "43",
    "name": "Tanish Signature Print - 43",
    "code": "D0043",
    "category": "Traditional",
    "imageUrl": "/catalogue/43.jpg", "minMetres": 500
  },
  {
    "id": "44",
    "name": "Tanish Signature Print - 44",
    "code": "D0044",
    "category": "Traditional",
    "imageUrl": "/catalogue/44.jpg", "minMetres": 500
  },
  {
    "id": "45",
    "name": "Tanish Signature Print - 45",
    "code": "D0045",
    "category": "Abstract",
    "imageUrl": "/catalogue/45.jpg", "minMetres": 500
  },
  {
    "id": "46",
    "name": "Tanish Signature Print - 46",
    "code": "D0046",
    "category": "Traditional",
    "imageUrl": "/catalogue/46.jpg", "minMetres": 500
  },
  {
    "id": "47",
    "name": "Tanish Signature Print - 47",
    "code": "D0047",
    "category": "Abstract",
    "imageUrl": "/catalogue/47.jpg", "minMetres": 500
  },
  {
    "id": "48",
    "name": "Tanish Signature Print - 48",
    "code": "D0048",
    "category": "Paisley",
    "imageUrl": "/catalogue/48.jpg", "minMetres": 500
  },
  {
    "id": "49",
    "name": "Tanish Signature Print - 49",
    "code": "D0049",
    "category": "Contemporary",
    "imageUrl": "/catalogue/49.jpg", "minMetres": 500
  },
  {
    "id": "50",
    "name": "Tanish Signature Print - 50",
    "code": "D0050",
    "category": "Abstract",
    "imageUrl": "/catalogue/50.jpg", "minMetres": 500
  },
  {
    "id": "51",
    "name": "Tanish Signature Print - 51",
    "code": "D0051",
    "category": "Contemporary",
    "imageUrl": "/catalogue/51.jpg", "minMetres": 500
  },
  {
    "id": "52",
    "name": "Tanish Signature Print - 52",
    "code": "D0052",
    "category": "Paisley",
    "imageUrl": "/catalogue/52.jpg", "minMetres": 500
  },
  {
    "id": "53",
    "name": "Tanish Signature Print - 53",
    "code": "D0053",
    "category": "Contemporary",
    "imageUrl": "/catalogue/53.jpg", "minMetres": 500
  },
  {
    "id": "54",
    "name": "Tanish Signature Print - 54",
    "code": "D0054",
    "category": "Abstract",
    "imageUrl": "/catalogue/54.jpg", "minMetres": 500
  },
  {
    "id": "55",
    "name": "Tanish Signature Print - 55",
    "code": "D0055",
    "category": "Floral",
    "imageUrl": "/catalogue/55.jpg", "minMetres": 500
  },
  {
    "id": "56",
    "name": "Tanish Signature Print - 56",
    "code": "D0056",
    "category": "Paisley",
    "imageUrl": "/catalogue/56.jpg", "minMetres": 500
  },
  {
    "id": "57",
    "name": "Tanish Signature Print - 57",
    "code": "D0057",
    "category": "Floral",
    "imageUrl": "/catalogue/57.jpg", "minMetres": 500
  },
  {
    "id": "58",
    "name": "Tanish Signature Print - 58",
    "code": "D0058",
    "category": "Floral",
    "imageUrl": "/catalogue/58.jpg", "minMetres": 500
  },
  {
    "id": "59",
    "name": "Tanish Signature Print - 59",
    "code": "D0059",
    "category": "Contemporary",
    "imageUrl": "/catalogue/59.jpg", "minMetres": 500
  },
  {
    "id": "60",
    "name": "Tanish Signature Print - 60",
    "code": "D0060",
    "category": "Paisley",
    "imageUrl": "/catalogue/60.jpg", "minMetres": 500
  },
  {
    "id": "61",
    "name": "Tanish Signature Print - 61",
    "code": "D0061",
    "category": "Traditional",
    "imageUrl": "/catalogue/61.jpg", "minMetres": 500
  },
  {
    "id": "62",
    "name": "Tanish Signature Print - 62",
    "code": "D0062",
    "category": "Geometric",
    "imageUrl": "/catalogue/62.jpg", "minMetres": 500
  },
  {
    "id": "63",
    "name": "Tanish Signature Print - 63",
    "code": "D0063",
    "category": "Abstract",
    "imageUrl": "/catalogue/63.jpg", "minMetres": 500
  },
  {
    "id": "64",
    "name": "Tanish Signature Print - 64",
    "code": "D0064",
    "category": "Contemporary",
    "imageUrl": "/catalogue/64.jpg", "minMetres": 500
  },
  {
    "id": "65",
    "name": "Tanish Signature Print - 65",
    "code": "D0065",
    "category": "Paisley",
    "imageUrl": "/catalogue/65.jpg", "minMetres": 500
  },
  {
    "id": "66",
    "name": "Tanish Signature Print - 66",
    "code": "D0066",
    "category": "Floral",
    "imageUrl": "/catalogue/66.jpg", "minMetres": 500
  },
  {
    "id": "67",
    "name": "Tanish Signature Print - 67",
    "code": "D0067",
    "category": "Contemporary",
    "imageUrl": "/catalogue/67.jpg", "minMetres": 500
  },
  {
    "id": "68",
    "name": "Tanish Signature Print - 68",
    "code": "D0068",
    "category": "Floral",
    "imageUrl": "/catalogue/68.jpg", "minMetres": 500
  },
  {
    "id": "69",
    "name": "Tanish Signature Print - 69",
    "code": "D0069",
    "category": "Floral",
    "imageUrl": "/catalogue/69.jpg", "minMetres": 500
  },
  {
    "id": "70",
    "name": "Tanish Signature Print - 70",
    "code": "D0070",
    "category": "Abstract",
    "imageUrl": "/catalogue/70.jpg", "minMetres": 500
  }
];
export function generateDesigns(count?: number) { return designs; }
