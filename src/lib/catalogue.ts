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
    "name": "Copper Chintz Block Print",
    "code": "D0001",
    "category": "Contemporary",
    "imageUrl": "/catalogue/1.jpg", "minMetres": 500
  },
  {
    "id": "2",
    "name": "Emerald Leaf Motif",
    "code": "D0002",
    "category": "Abstract",
    "imageUrl": "/catalogue/2.jpg", "minMetres": 500
  },
  {
    "id": "3",
    "name": "Teal Ikat Motif",
    "code": "D0003",
    "category": "Traditional",
    "imageUrl": "/catalogue/3.jpg", "minMetres": 500
  },
  {
    "id": "4",
    "name": "Scarlet Dabu Motif",
    "code": "D0004",
    "category": "Paisley",
    "imageUrl": "/catalogue/4.jpg", "minMetres": 500
  },
  {
    "id": "5",
    "name": "Olive Polka Motif",
    "code": "D0005",
    "category": "Paisley",
    "imageUrl": "/catalogue/5.jpg", "minMetres": 500
  },
  {
    "id": "6",
    "name": "Plum Mughal Weave",
    "code": "D0006",
    "category": "Paisley",
    "imageUrl": "/catalogue/6.jpg", "minMetres": 500
  },
  {
    "id": "7",
    "name": "Teal Lotus Design",
    "code": "D0007",
    "category": "Paisley",
    "imageUrl": "/catalogue/7.jpg", "minMetres": 500
  },
  {
    "id": "8",
    "name": "Fuchsia Mandala Design",
    "code": "D0008",
    "category": "Paisley",
    "imageUrl": "/catalogue/8.jpg", "minMetres": 500
  },
  {
    "id": "9",
    "name": "Emerald Chintz Pattern",
    "code": "D0009",
    "category": "Floral",
    "imageUrl": "/catalogue/9.jpg", "minMetres": 500
  },
  {
    "id": "10",
    "name": "Blush Polka Block Print",
    "code": "D0010",
    "category": "Paisley",
    "imageUrl": "/catalogue/10.jpg", "minMetres": 500
  },
  {
    "id": "11",
    "name": "Vintage Leaf Design",
    "code": "D0011",
    "category": "Contemporary",
    "imageUrl": "/catalogue/11.jpg", "minMetres": 500
  },
  {
    "id": "12",
    "name": "Scarlet Blossom Motif",
    "code": "D0012",
    "category": "Paisley",
    "imageUrl": "/catalogue/12.jpg", "minMetres": 500
  },
  {
    "id": "13",
    "name": "Teal Chintz Screen Print",
    "code": "D0013",
    "category": "Paisley",
    "imageUrl": "/catalogue/13.jpg", "minMetres": 500
  },
  {
    "id": "14",
    "name": "Olive Damask Design",
    "code": "D0014",
    "category": "Floral",
    "imageUrl": "/catalogue/14.jpg", "minMetres": 500
  },
  {
    "id": "15",
    "name": "Mint Mandala Weave",
    "code": "D0015",
    "category": "Paisley",
    "imageUrl": "/catalogue/15.jpg", "minMetres": 500
  },
  {
    "id": "16",
    "name": "Peach Chintz Motif",
    "code": "D0016",
    "category": "Traditional",
    "imageUrl": "/catalogue/16.jpg", "minMetres": 500
  },
  {
    "id": "17",
    "name": "Cerulean Damask Motif",
    "code": "D0017",
    "category": "Geometric",
    "imageUrl": "/catalogue/17.jpg", "minMetres": 500
  },
  {
    "id": "18",
    "name": "Jade Chevron Motif",
    "code": "D0018",
    "category": "Traditional",
    "imageUrl": "/catalogue/18.jpg", "minMetres": 500
  },
  {
    "id": "19",
    "name": "Olive Peacock Weave",
    "code": "D0019",
    "category": "Contemporary",
    "imageUrl": "/catalogue/19.jpg", "minMetres": 500
  },
  {
    "id": "20",
    "name": "Peach Meadow Design",
    "code": "D0020",
    "category": "Traditional",
    "imageUrl": "/catalogue/20.jpg", "minMetres": 500
  },
  {
    "id": "21",
    "name": "Ruby Dabu Screen Print",
    "code": "D0021",
    "category": "Floral",
    "imageUrl": "/catalogue/21.jpg", "minMetres": 500
  },
  {
    "id": "22",
    "name": "Olive Elephant Pattern",
    "code": "D0022",
    "category": "Paisley",
    "imageUrl": "/catalogue/22.jpg", "minMetres": 500
  },
  {
    "id": "23",
    "name": "Olive Elephant Screen Print",
    "code": "D0023",
    "category": "Traditional",
    "imageUrl": "/catalogue/23.jpg", "minMetres": 500
  },
  {
    "id": "24",
    "name": "Sapphire Bagh Pattern",
    "code": "D0024",
    "category": "Contemporary",
    "imageUrl": "/catalogue/24.jpg", "minMetres": 500
  },
  {
    "id": "25",
    "name": "Golden Chintz Design",
    "code": "D0025",
    "category": "Abstract",
    "imageUrl": "/catalogue/25.jpg", "minMetres": 500
  },
  {
    "id": "26",
    "name": "Crimson Polka Motif",
    "code": "D0026",
    "category": "Contemporary",
    "imageUrl": "/catalogue/26.jpg", "minMetres": 500
  },
  {
    "id": "27",
    "name": "Peach Leaf Screen Print",
    "code": "D0027",
    "category": "Geometric",
    "imageUrl": "/catalogue/27.jpg", "minMetres": 500
  },
  {
    "id": "28",
    "name": "Mustard Vine Screen Print",
    "code": "D0028",
    "category": "Paisley",
    "imageUrl": "/catalogue/28.jpg", "minMetres": 500
  },
  {
    "id": "29",
    "name": "Copper Blossom Design",
    "code": "D0029",
    "category": "Floral",
    "imageUrl": "/catalogue/29.jpg", "minMetres": 500
  },
  {
    "id": "30",
    "name": "Indigo Meadow Weave",
    "code": "D0030",
    "category": "Contemporary",
    "imageUrl": "/catalogue/30.jpg", "minMetres": 500
  },
  {
    "id": "31",
    "name": "Crimson Paisley Screen Print",
    "code": "D0031",
    "category": "Abstract",
    "imageUrl": "/catalogue/31.jpg", "minMetres": 500
  },
  {
    "id": "32",
    "name": "Cerulean Polka Pattern",
    "code": "D0032",
    "category": "Geometric",
    "imageUrl": "/catalogue/32.jpg", "minMetres": 500
  },
  {
    "id": "33",
    "name": "Blush Jaal Design",
    "code": "D0033",
    "category": "Floral",
    "imageUrl": "/catalogue/33.jpg", "minMetres": 500
  },
  {
    "id": "34",
    "name": "Royal Paisley Design",
    "code": "D0034",
    "category": "Geometric",
    "imageUrl": "/catalogue/34.jpg", "minMetres": 500
  },
  {
    "id": "35",
    "name": "Marigold Boota Screen Print",
    "code": "D0035",
    "category": "Geometric",
    "imageUrl": "/catalogue/35.jpg", "minMetres": 500
  },
  {
    "id": "36",
    "name": "Royal Floral Pattern",
    "code": "D0036",
    "category": "Geometric",
    "imageUrl": "/catalogue/36.jpg", "minMetres": 500
  },
  {
    "id": "37",
    "name": "Marigold Dabu Weave",
    "code": "D0037",
    "category": "Traditional",
    "imageUrl": "/catalogue/37.jpg", "minMetres": 500
  },
  {
    "id": "38",
    "name": "Ruby Meadow Motif",
    "code": "D0038",
    "category": "Contemporary",
    "imageUrl": "/catalogue/38.jpg", "minMetres": 500
  },
  {
    "id": "39",
    "name": "Amber Mughal Motif",
    "code": "D0039",
    "category": "Paisley",
    "imageUrl": "/catalogue/39.jpg", "minMetres": 500
  },
  {
    "id": "40",
    "name": "Garnet Geometric Block Print",
    "code": "D0040",
    "category": "Floral",
    "imageUrl": "/catalogue/40.jpg", "minMetres": 500
  },
  {
    "id": "41",
    "name": "Emerald Kalamkari Block Print",
    "code": "D0041",
    "category": "Contemporary",
    "imageUrl": "/catalogue/41.jpg", "minMetres": 500
  },
  {
    "id": "42",
    "name": "Azure Stripe Pattern",
    "code": "D0042",
    "category": "Geometric",
    "imageUrl": "/catalogue/42.jpg", "minMetres": 500
  },
  {
    "id": "43",
    "name": "Azure Blossom Motif",
    "code": "D0043",
    "category": "Traditional",
    "imageUrl": "/catalogue/43.jpg", "minMetres": 500
  },
  {
    "id": "44",
    "name": "Rose Bagh Block Print",
    "code": "D0044",
    "category": "Traditional",
    "imageUrl": "/catalogue/44.jpg", "minMetres": 500
  },
  {
    "id": "45",
    "name": "Saffron Floral Design",
    "code": "D0045",
    "category": "Abstract",
    "imageUrl": "/catalogue/45.jpg", "minMetres": 500
  },
  {
    "id": "46",
    "name": "Ruby Batik Motif",
    "code": "D0046",
    "category": "Traditional",
    "imageUrl": "/catalogue/46.jpg", "minMetres": 500
  },
  {
    "id": "47",
    "name": "Blush Elephant Weave",
    "code": "D0047",
    "category": "Abstract",
    "imageUrl": "/catalogue/47.jpg", "minMetres": 500
  },
  {
    "id": "48",
    "name": "Golden Petal Design",
    "code": "D0048",
    "category": "Paisley",
    "imageUrl": "/catalogue/48.jpg", "minMetres": 500
  },
  {
    "id": "49",
    "name": "Lavender Mughal Screen Print",
    "code": "D0049",
    "category": "Contemporary",
    "imageUrl": "/catalogue/49.jpg", "minMetres": 500
  },
  {
    "id": "50",
    "name": "Golden Petal Screen Print",
    "code": "D0050",
    "category": "Abstract",
    "imageUrl": "/catalogue/50.jpg", "minMetres": 500
  },
  {
    "id": "51",
    "name": "Golden Bagh Screen Print",
    "code": "D0051",
    "category": "Contemporary",
    "imageUrl": "/catalogue/51.jpg", "minMetres": 500
  },
  {
    "id": "52",
    "name": "Marigold Petal Weave",
    "code": "D0052",
    "category": "Paisley",
    "imageUrl": "/catalogue/52.jpg", "minMetres": 500
  },
  {
    "id": "53",
    "name": "Saffron Lotus Design",
    "code": "D0053",
    "category": "Contemporary",
    "imageUrl": "/catalogue/53.jpg", "minMetres": 500
  },
  {
    "id": "54",
    "name": "Emerald Meadow Weave",
    "code": "D0054",
    "category": "Abstract",
    "imageUrl": "/catalogue/54.jpg", "minMetres": 500
  },
  {
    "id": "55",
    "name": "Golden Lotus Design",
    "code": "D0055",
    "category": "Floral",
    "imageUrl": "/catalogue/55.jpg", "minMetres": 500
  },
  {
    "id": "56",
    "name": "Cerulean Elephant Screen Print",
    "code": "D0056",
    "category": "Paisley",
    "imageUrl": "/catalogue/56.jpg", "minMetres": 500
  },
  {
    "id": "57",
    "name": "Mint Mandala Pattern",
    "code": "D0057",
    "category": "Floral",
    "imageUrl": "/catalogue/57.jpg", "minMetres": 500
  },
  {
    "id": "58",
    "name": "Ruby Lotus Block Print",
    "code": "D0058",
    "category": "Floral",
    "imageUrl": "/catalogue/58.jpg", "minMetres": 500
  },
  {
    "id": "59",
    "name": "Royal Leaf Motif",
    "code": "D0059",
    "category": "Contemporary",
    "imageUrl": "/catalogue/59.jpg", "minMetres": 500
  },
  {
    "id": "60",
    "name": "Midnight Blossom Block Print",
    "code": "D0060",
    "category": "Paisley",
    "imageUrl": "/catalogue/60.jpg", "minMetres": 500
  },
  {
    "id": "61",
    "name": "Azure Chintz Block Print",
    "code": "D0061",
    "category": "Traditional",
    "imageUrl": "/catalogue/61.jpg", "minMetres": 500
  },
  {
    "id": "62",
    "name": "Emerald Chintz Block Print",
    "code": "D0062",
    "category": "Geometric",
    "imageUrl": "/catalogue/62.jpg", "minMetres": 500
  },
  {
    "id": "63",
    "name": "Fuchsia Chintz Motif",
    "code": "D0063",
    "category": "Abstract",
    "imageUrl": "/catalogue/63.jpg", "minMetres": 500
  },
  {
    "id": "64",
    "name": "Plum Damask Screen Print",
    "code": "D0064",
    "category": "Contemporary",
    "imageUrl": "/catalogue/64.jpg", "minMetres": 500
  },
  {
    "id": "65",
    "name": "Emerald Geometric Pattern",
    "code": "D0065",
    "category": "Paisley",
    "imageUrl": "/catalogue/65.jpg", "minMetres": 500
  },
  {
    "id": "66",
    "name": "Plum Floral Weave",
    "code": "D0066",
    "category": "Floral",
    "imageUrl": "/catalogue/66.jpg", "minMetres": 500
  },
  {
    "id": "67",
    "name": "Midnight Peacock Pattern",
    "code": "D0067",
    "category": "Contemporary",
    "imageUrl": "/catalogue/67.jpg", "minMetres": 500
  },
  {
    "id": "68",
    "name": "Plum Kalamkari Screen Print",
    "code": "D0068",
    "category": "Floral",
    "imageUrl": "/catalogue/68.jpg", "minMetres": 500
  },
  {
    "id": "69",
    "name": "Copper Geometric Screen Print",
    "code": "D0069",
    "category": "Floral",
    "imageUrl": "/catalogue/69.jpg", "minMetres": 500
  },
  {
    "id": "70",
    "name": "Mint Polka Block Print",
    "code": "D0070",
    "category": "Abstract",
    "imageUrl": "/catalogue/70.jpg", "minMetres": 500
  }
];
export function generateDesigns(count?: number) { return designs; }
