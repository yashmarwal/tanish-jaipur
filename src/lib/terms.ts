/** Single source for the commercial terms quoted across cards, forms, FAQ and the chat assistant. */
export const TERMS = {
  minMetres: 500,
  leadTime: "7–10 days",
  capacityPerDay: 15000,
  designs: 20000,
  since: 1959,
  visitHours: "Mon–Sat, 10am – 5pm",
  maxVisitors: 20,
  fabrics: "cotton, linen, rayon and silk",
} as const;

export const fmtNum = (n: number) => new Intl.NumberFormat("en-US").format(n);
export const MIN_ORDER = `${TERMS.minMetres} m`;

/** Per-category minimum order (metres). Every category is currently 500 m. */
export const MIN_METRES_BY_CATEGORY = {
  Floral: 500,
  Geometric: 500,
  Paisley: 500,
  Traditional: 500,
  Abstract: 500,
  Contemporary: 500,
} as const;
