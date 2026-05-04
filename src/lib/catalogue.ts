export type DesignCategory = "All" | "Floral" | "Geometric" | "Paisley" | "Traditional" | "Abstract" | "Contemporary";

export interface Design {
  id: string;
  name: string;
  code: string;
  category: DesignCategory;
  image: string;
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
    "image": "/catalogue/1.jpg"
  },
  {
    "id": "2",
    "name": "Emerald Leaf Motif",
    "code": "D0002",
    "category": "Abstract",
    "image": "/catalogue/2.jpg"
  },
  {
    "id": "3",
    "name": "Teal Ikat Motif",
    "code": "D0003",
    "category": "Traditional",
    "image": "/catalogue/3.jpg"
  },
  {
    "id": "4",
    "name": "Scarlet Dabu Motif",
    "code": "D0004",
    "category": "Paisley",
    "image": "/catalogue/4.jpg"
  },
  {
    "id": "5",
    "name": "Olive Polka Motif",
    "code": "D0005",
    "category": "Paisley",
    "image": "/catalogue/5.jpg"
  },
  {
    "id": "6",
    "name": "Plum Mughal Weave",
    "code": "D0006",
    "category": "Paisley",
    "image": "/catalogue/6.jpg"
  },
  {
    "id": "7",
    "name": "Teal Lotus Design",
    "code": "D0007",
    "category": "Paisley",
    "image": "/catalogue/7.jpg"
  },
  {
    "id": "8",
    "name": "Fuchsia Mandala Design",
    "code": "D0008",
    "category": "Paisley",
    "image": "/catalogue/8.jpg"
  },
  {
    "id": "9",
    "name": "Emerald Chintz Pattern",
    "code": "D0009",
    "category": "Floral",
    "image": "/catalogue/9.jpg"
  },
  {
    "id": "10",
    "name": "Blush Polka Block Print",
    "code": "D0010",
    "category": "Paisley",
    "image": "/catalogue/10.jpg"
  },
  {
    "id": "11",
    "name": "Vintage Leaf Design",
    "code": "D0011",
    "category": "Contemporary",
    "image": "/catalogue/11.jpg"
  },
  {
    "id": "12",
    "name": "Scarlet Blossom Motif",
    "code": "D0012",
    "category": "Paisley",
    "image": "/catalogue/12.jpg"
  },
  {
    "id": "13",
    "name": "Teal Chintz Screen Print",
    "code": "D0013",
    "category": "Paisley",
    "image": "/catalogue/13.jpg"
  },
  {
    "id": "14",
    "name": "Olive Damask Design",
    "code": "D0014",
    "category": "Floral",
    "image": "/catalogue/14.jpg"
  },
  {
    "id": "15",
    "name": "Mint Mandala Weave",
    "code": "D0015",
    "category": "Paisley",
    "image": "/catalogue/15.jpg"
  },
  {
    "id": "16",
    "name": "Peach Chintz Motif",
    "code": "D0016",
    "category": "Traditional",
    "image": "/catalogue/16.jpg"
  },
  {
    "id": "17",
    "name": "Cerulean Damask Motif",
    "code": "D0017",
    "category": "Geometric",
    "image": "/catalogue/17.jpg"
  },
  {
    "id": "18",
    "name": "Jade Chevron Motif",
    "code": "D0018",
    "category": "Traditional",
    "image": "/catalogue/18.jpg"
  },
  {
    "id": "19",
    "name": "Olive Peacock Weave",
    "code": "D0019",
    "category": "Contemporary",
    "image": "/catalogue/19.jpg"
  },
  {
    "id": "20",
    "name": "Peach Meadow Design",
    "code": "D0020",
    "category": "Traditional",
    "image": "/catalogue/20.jpg"
  },
  {
    "id": "21",
    "name": "Ruby Dabu Screen Print",
    "code": "D0021",
    "category": "Floral",
    "image": "/catalogue/21.jpg"
  },
  {
    "id": "22",
    "name": "Olive Elephant Pattern",
    "code": "D0022",
    "category": "Paisley",
    "image": "/catalogue/22.jpg"
  },
  {
    "id": "23",
    "name": "Olive Elephant Screen Print",
    "code": "D0023",
    "category": "Traditional",
    "image": "/catalogue/23.jpg"
  },
  {
    "id": "24",
    "name": "Sapphire Bagh Pattern",
    "code": "D0024",
    "category": "Contemporary",
    "image": "/catalogue/24.jpg"
  },
  {
    "id": "25",
    "name": "Golden Chintz Design",
    "code": "D0025",
    "category": "Abstract",
    "image": "/catalogue/25.jpg"
  },
  {
    "id": "26",
    "name": "Crimson Polka Motif",
    "code": "D0026",
    "category": "Contemporary",
    "image": "/catalogue/26.jpg"
  },
  {
    "id": "27",
    "name": "Peach Leaf Screen Print",
    "code": "D0027",
    "category": "Geometric",
    "image": "/catalogue/27.jpg"
  },
  {
    "id": "28",
    "name": "Mustard Vine Screen Print",
    "code": "D0028",
    "category": "Paisley",
    "image": "/catalogue/28.jpg"
  },
  {
    "id": "29",
    "name": "Copper Blossom Design",
    "code": "D0029",
    "category": "Floral",
    "image": "/catalogue/29.jpg"
  },
  {
    "id": "30",
    "name": "Indigo Meadow Weave",
    "code": "D0030",
    "category": "Contemporary",
    "image": "/catalogue/30.jpg"
  },
  {
    "id": "31",
    "name": "Crimson Paisley Screen Print",
    "code": "D0031",
    "category": "Abstract",
    "image": "/catalogue/31.jpg"
  },
  {
    "id": "32",
    "name": "Cerulean Polka Pattern",
    "code": "D0032",
    "category": "Geometric",
    "image": "/catalogue/32.jpg"
  },
  {
    "id": "33",
    "name": "Blush Jaal Design",
    "code": "D0033",
    "category": "Floral",
    "image": "/catalogue/33.jpg"
  },
  {
    "id": "34",
    "name": "Royal Paisley Design",
    "code": "D0034",
    "category": "Geometric",
    "image": "/catalogue/34.jpg"
  },
  {
    "id": "35",
    "name": "Marigold Boota Screen Print",
    "code": "D0035",
    "category": "Geometric",
    "image": "/catalogue/35.jpg"
  },
  {
    "id": "36",
    "name": "Royal Floral Pattern",
    "code": "D0036",
    "category": "Geometric",
    "image": "/catalogue/36.jpg"
  },
  {
    "id": "37",
    "name": "Marigold Dabu Weave",
    "code": "D0037",
    "category": "Traditional",
    "image": "/catalogue/37.jpg"
  },
  {
    "id": "38",
    "name": "Ruby Meadow Motif",
    "code": "D0038",
    "category": "Contemporary",
    "image": "/catalogue/38.jpg"
  },
  {
    "id": "39",
    "name": "Amber Mughal Motif",
    "code": "D0039",
    "category": "Paisley",
    "image": "/catalogue/39.jpg"
  },
  {
    "id": "40",
    "name": "Garnet Geometric Block Print",
    "code": "D0040",
    "category": "Floral",
    "image": "/catalogue/40.jpg"
  },
  {
    "id": "41",
    "name": "Emerald Kalamkari Block Print",
    "code": "D0041",
    "category": "Contemporary",
    "image": "/catalogue/41.jpg"
  },
  {
    "id": "42",
    "name": "Azure Stripe Pattern",
    "code": "D0042",
    "category": "Geometric",
    "image": "/catalogue/42.jpg"
  },
  {
    "id": "43",
    "name": "Azure Blossom Motif",
    "code": "D0043",
    "category": "Traditional",
    "image": "/catalogue/43.jpg"
  },
  {
    "id": "44",
    "name": "Rose Bagh Block Print",
    "code": "D0044",
    "category": "Traditional",
    "image": "/catalogue/44.jpg"
  },
  {
    "id": "45",
    "name": "Saffron Floral Design",
    "code": "D0045",
    "category": "Abstract",
    "image": "/catalogue/45.jpg"
  },
  {
    "id": "46",
    "name": "Ruby Batik Motif",
    "code": "D0046",
    "category": "Traditional",
    "image": "/catalogue/46.jpg"
  },
  {
    "id": "47",
    "name": "Blush Elephant Weave",
    "code": "D0047",
    "category": "Abstract",
    "image": "/catalogue/47.jpg"
  },
  {
    "id": "48",
    "name": "Golden Petal Design",
    "code": "D0048",
    "category": "Paisley",
    "image": "/catalogue/48.jpg"
  },
  {
    "id": "49",
    "name": "Lavender Mughal Screen Print",
    "code": "D0049",
    "category": "Contemporary",
    "image": "/catalogue/49.jpg"
  },
  {
    "id": "50",
    "name": "Golden Petal Screen Print",
    "code": "D0050",
    "category": "Abstract",
    "image": "/catalogue/50.jpg"
  },
  {
    "id": "51",
    "name": "Golden Bagh Screen Print",
    "code": "D0051",
    "category": "Contemporary",
    "image": "/catalogue/51.jpg"
  },
  {
    "id": "52",
    "name": "Marigold Petal Weave",
    "code": "D0052",
    "category": "Paisley",
    "image": "/catalogue/52.jpg"
  },
  {
    "id": "53",
    "name": "Saffron Lotus Design",
    "code": "D0053",
    "category": "Contemporary",
    "image": "/catalogue/53.jpg"
  },
  {
    "id": "54",
    "name": "Emerald Meadow Weave",
    "code": "D0054",
    "category": "Abstract",
    "image": "/catalogue/54.jpg"
  },
  {
    "id": "55",
    "name": "Golden Lotus Design",
    "code": "D0055",
    "category": "Floral",
    "image": "/catalogue/55.jpg"
  },
  {
    "id": "56",
    "name": "Cerulean Elephant Screen Print",
    "code": "D0056",
    "category": "Paisley",
    "image": "/catalogue/56.jpg"
  },
  {
    "id": "57",
    "name": "Mint Mandala Pattern",
    "code": "D0057",
    "category": "Floral",
    "image": "/catalogue/57.jpg"
  },
  {
    "id": "58",
    "name": "Ruby Lotus Block Print",
    "code": "D0058",
    "category": "Floral",
    "image": "/catalogue/58.jpg"
  },
  {
    "id": "59",
    "name": "Royal Leaf Motif",
    "code": "D0059",
    "category": "Contemporary",
    "image": "/catalogue/59.jpg"
  },
  {
    "id": "60",
    "name": "Midnight Blossom Block Print",
    "code": "D0060",
    "category": "Paisley",
    "image": "/catalogue/60.jpg"
  },
  {
    "id": "61",
    "name": "Azure Chintz Block Print",
    "code": "D0061",
    "category": "Traditional",
    "image": "/catalogue/61.jpg"
  },
  {
    "id": "62",
    "name": "Emerald Chintz Block Print",
    "code": "D0062",
    "category": "Geometric",
    "image": "/catalogue/62.jpg"
  },
  {
    "id": "63",
    "name": "Fuchsia Chintz Motif",
    "code": "D0063",
    "category": "Abstract",
    "image": "/catalogue/63.jpg"
  },
  {
    "id": "64",
    "name": "Plum Damask Screen Print",
    "code": "D0064",
    "category": "Contemporary",
    "image": "/catalogue/64.jpg"
  },
  {
    "id": "65",
    "name": "Emerald Geometric Pattern",
    "code": "D0065",
    "category": "Paisley",
    "image": "/catalogue/65.jpg"
  },
  {
    "id": "66",
    "name": "Plum Floral Weave",
    "code": "D0066",
    "category": "Floral",
    "image": "/catalogue/66.jpg"
  },
  {
    "id": "67",
    "name": "Midnight Peacock Pattern",
    "code": "D0067",
    "category": "Contemporary",
    "image": "/catalogue/67.jpg"
  },
  {
    "id": "68",
    "name": "Plum Kalamkari Screen Print",
    "code": "D0068",
    "category": "Floral",
    "image": "/catalogue/68.jpg"
  },
  {
    "id": "69",
    "name": "Copper Geometric Screen Print",
    "code": "D0069",
    "category": "Floral",
    "image": "/catalogue/69.jpg"
  },
  {
    "id": "70",
    "name": "Mint Polka Block Print",
    "code": "D0070",
    "category": "Abstract",
    "image": "/catalogue/70.jpg"
  }
];
export function generateDesigns(count?: number) { return designs; }
