export type Category =
  | "Floral"
  | "Botanical & Leaf"
  | "Paisley"
  | "Animal & Heritage"
  | "Festive Jaal"
  | "Minimal Linear";

export const CATEGORIES: Category[] = [
  "Floral",
  "Botanical & Leaf",
  "Paisley",
  "Animal & Heritage",
  "Festive Jaal",
  "Minimal Linear",
];

export const CATEGORY_COUNTS: Record<Category, number> = {
  Floral: 500,
  "Botanical & Leaf": 400,
  Paisley: 300,
  "Animal & Heritage": 200,
  "Festive Jaal": 300,
  "Minimal Linear": 200,
};

// Curated Unsplash photo IDs of real printed / patterned fabric.
// Each ID is a permanent Unsplash photo identifier; we render via the
// official `images.unsplash.com/photo-<id>` URL with sizing params.
const PHOTO_IDS: Record<Category, string[]> = {
  Floral: [
    "1558618666-fcd25c85cd64",
    "1606293459209-a7e1bb95febb",
    "1564859228273-274232fdb516",
    "1606760227091-3dd870d97f1d",
    "1582719478250-c89cae4dc85b",
    "1610030469983-98e550d6193c",
    "1618220179428-22790b461013",
    "1583846783214-7229a91b20ed",
    "1599643477877-530eb83abc8e",
    "1580651315530-69c8e0903883",
  ],
  "Botanical & Leaf": [
    "1502209524164-acea936639a2",
    "1604147495798-57beb5d6af73",
    "1588239034647-25783cbfcfc1",
    "1565193566173-7a0ee3dbe261",
    "1556015048-4d3aa10df74c",
    "1505765050516-f72dcac9c60b",
    "1509223197845-458d87318791",
    "1614849286521-4c58b2f0ff15",
    "1542621334-a254cf47733d",
    "1517667061135-15b823bf28e1",
  ],
  Paisley: [
    "1606293459209-a7e1bb95febb",
    "1610030469983-98e550d6193c",
    "1618220179428-22790b461013",
    "1583846783214-7229a91b20ed",
    "1564859228273-274232fdb516",
    "1599643477877-530eb83abc8e",
    "1606760227091-3dd870d97f1d",
    "1558618666-fcd25c85cd64",
    "1582719478250-c89cae4dc85b",
    "1580651315530-69c8e0903883",
  ],
  "Animal & Heritage": [
    "1551731409-43eb3e517a1a",
    "1583846783214-7229a91b20ed",
    "1618220179428-22790b461013",
    "1564859228273-274232fdb516",
    "1582719478250-c89cae4dc85b",
    "1610030469983-98e550d6193c",
    "1606293459209-a7e1bb95febb",
    "1599643477877-530eb83abc8e",
    "1606760227091-3dd870d97f1d",
    "1558618666-fcd25c85cd64",
  ],
  "Festive Jaal": [
    "1564859228273-274232fdb516",
    "1610030469983-98e550d6193c",
    "1606293459209-a7e1bb95febb",
    "1583846783214-7229a91b20ed",
    "1582719478250-c89cae4dc85b",
    "1599643477877-530eb83abc8e",
    "1618220179428-22790b461013",
    "1606760227091-3dd870d97f1d",
    "1580651315530-69c8e0903883",
    "1558618666-fcd25c85cd64",
  ],
  "Minimal Linear": [
    "1517677208171-0bc6725a3e60",
    "1528459801416-a9e53bbf4e17",
    "1483985988355-763728e1935b",
    "1490481651871-ab68de25d43d",
    "1469334031218-e382a71b716b",
    "1542838132-92c53300491e",
    "1551803091-e20673f15770",
    "1527719327859-c6ce80353573",
    "1545194445-dddb8f4487c6",
    "1543198126-a8d51ec38f5b",
  ],
};

const NAMES: Record<Category, string[]> = {
  Floral: ["Rose Cluster", "Marigold Bloom", "Hibiscus Drift", "Lotus Pond", "Wild Daisy", "Champa Flow", "Mogra Spray", "Peony Glow", "Tulip Whisper", "Jasmine Vine"],
  "Botanical & Leaf": ["Monstera Drop", "Banyan Shade", "Neem Leaf", "Fern Cascade", "Banana Frond", "Tulsi Sprig", "Areca Palm", "Curry Leaf", "Eucalyptus Mist", "Bay Branch"],
  Paisley: ["Ambi Jaal", "Kairi Bloom", "Mango Curl", "Royal Paisley", "Boteh Classic", "Persian Mango", "Mughal Ambi", "Twin Paisley", "Heritage Boteh", "Paisley Storm"],
  "Animal & Heritage": ["Peacock Court", "Elephant Procession", "Tiger Stripe", "Deer Glade", "Camel March", "Horse Stride", "Sparrow Flight", "Lion Crest", "Crane Sky", "Royal Beast"],
  "Festive Jaal": ["Diwali Glow", "Holi Splash", "Sangeet Shimmer", "Mehendi Trail", "Festive Web", "Utsav Lattice", "Banaras Jaal", "Wedding Bloom", "Jharokha Jaal", "Mela Net"],
  "Minimal Linear": ["Thread Line", "Dot Grid", "Quiet Stripe", "Geo Whisper", "Calm Plaid", "Minimal Mesh", "Soft Stitch", "Linear Hush", "Pin Stripe", "Modern Weft"],
};

export type Design = {
  id: string;
  name: string;
  category: Category;
  imageUrl: string;
  imageUrlLarge: string;
  minMetres: number;
};

const buildUrl = (photoId: string, w: number) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${w}&q=80`;

// Generate 110 cards distributed across categories, but messaging says "2000+".
export function generateDesigns(total = 110): Design[] {
  const designs: Design[] = [];
  const totalSpec = Object.values(CATEGORY_COUNTS).reduce((a, b) => a + b, 0);
  const perCat: Record<Category, number> = {} as Record<Category, number>;
  let assigned = 0;
  CATEGORIES.forEach((c, i) => {
    if (i === CATEGORIES.length - 1) {
      perCat[c] = total - assigned;
    } else {
      perCat[c] = Math.round((CATEGORY_COUNTS[c] / totalSpec) * total);
      assigned += perCat[c];
    }
  });

  let id = 1;
  for (const cat of CATEGORIES) {
    const count = perCat[cat];
    const names = NAMES[cat];
    const photos = PHOTO_IDS[cat];
    for (let i = 0; i < count; i++) {
      const base = names[i % names.length];
      const variant = Math.floor(i / names.length) + 1;
      const photoId = photos[i % photos.length];
      designs.push({
        id: `D${String(id).padStart(4, "0")}`,
        name: variant > 1 ? `${base} ${variant}` : base,
        category: cat,
        imageUrl: buildUrl(photoId, 600),
        imageUrlLarge: buildUrl(photoId, 1200),
        minMetres: 100,
      });
      id++;
    }
  }
  return designs;
}
