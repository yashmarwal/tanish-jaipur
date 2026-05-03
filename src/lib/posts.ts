export type PostContent = string | { type: 'h2' | 'h3' | 'image' | 'ul' | 'li'; content?: string; items?: string[]; src?: string; alt?: string; caption?: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  pattern: string;
  body: PostContent[];
  keywords: string;
  coverImage: string;
};

export const POSTS: Post[] = [
  {
    slug: "art-of-screen-printing",
    title: "The Art of Screen Printing",
    excerpt: "How a 2000-year-old craft still beats digital printing on hand-feel and depth.",
    category: "Craft",
    pattern: "pat-floral-1",
    keywords: "screen printing Jaipur, hand screen printing, fabric printing manufacturer India",
    coverImage: "/blog_screen_print_1777803461974.png",
    body: [
      "Screen printing is one of the oldest surface-design techniques humans ever invented. The earliest documented examples date back to the Song dynasty in China, but the craft as we practise it in Sanganer, Jaipur, has been refined over five centuries — block to block, screen to screen, generation to generation.",
      "At its heart, the process is deceptively simple: a fine mesh screen is stretched over a frame, areas are blocked off, and pigment is pulled across the open mesh onto fabric below. Each colour gets its own screen. Each screen gets its own pull. A six-colour print isn't six steps — it's six small acts of hand-craft, repeated metre after metre.",
      "What digital printing can't match is the way ink sits on the cloth. A digitally printed fabric carries pigment that has been atomised onto the surface; the dye sits on top, slightly stiff, slightly flat. A hand-pulled screen print pushes pigment into the weave. The result has depth, hand-feel, and a faint topography you can read with your fingertips.",
      "There's also the question of colour. Our colour mixer hand-mixes every base shade against a reference swatch — sometimes a fabric snip, sometimes a paint chip, sometimes a photograph. Digital printers approximate; we match. Repeat orders months later use the same logged formula, so a brand's signature pink stays a signature.",
      "Of course, screen printing has limits. Photo-real gradients are difficult. Tiny fonts can break. And every additional colour adds a screen, a setup, and a pull. But for designs built around clean shapes, layered patterns, and rich solid colours — the floral jaals, the paisley fields, the bold stripes our clients order by the thousand metres — nothing else comes close.",
      "When a boutique buyer asks us why their cotton kurta drape feels different from a fast-fashion equivalent, the answer is in the print. Screen printing isn't slower because we're stuck in the past. It's slower because the result is worth the time.",
    ],
  },
  {
    slug: "why-jaipur-textile-capital",
    title: "Why Jaipur is India's Textile Capital",
    excerpt: "From Sanganer dye-pits to global D2C brands — the Jaipur story.",
    category: "Heritage",
    pattern: "pat-paisley",
    keywords:
      "Jaipur textile manufacturer, Sanganer screen printing, fabric printing manufacturer India",
    coverImage: "/blog_jaipur_drying_1777803476680.png",
    body: [
      "Walk through Sanganer at six in the morning and you'll smell it before you see it: indigo, alum, and the faint mineral tang of well water. Twelve kilometres south of Jaipur city, Sanganer has been a printing town since the 16th century — and today it produces a quantifiable share of India's hand-printed fabric.",
      "The reason isn't accident. Three things converge in Jaipur that don't converge anywhere else in India: a 400-year continuous craft tradition, abundant soft groundwater perfect for dyeing, and a dense ecosystem of suppliers — block carvers, screen makers, dye chemists, fabric merchants — packed inside a few square kilometres.",
      "The royal patronage of the Kachhwaha rulers seeded the craft. Their courts wanted hand-printed cotton for tents, canopies, and clothing, and they imported skilled chhipa printers from Sindh in the 1600s to settle in Sanganer and Bagru. Those printer families never left.",
      "By the 19th century, Jaipur prints were exported to Europe under the name 'Indiennes' and copied by mills from Marseille to Manchester. The originals, though, kept their advantage: water that didn't dull the dye, a dry climate that let prints cure outdoors, and craftsmen who knew their formulas better than the chemists copying them.",
      "Today, Jaipur supplies fabric to virtually every major Indian D2C apparel brand, hundreds of boutique designers, and exports to buyers in the US, UK, Japan and Australia. The infrastructure has scaled — facilities like ours run 15,000 metres a day — but the craft logic is unchanged. Mix the colour by hand, pull each screen by hand, inspect each roll by hand.",
      "When a buyer in Mumbai or Brooklyn picks up a fabric and asks 'where's this from?' — the honest answer is: a town outside Jaipur where someone's grandfather probably printed for someone else's grandfather. That continuity is the moat. It's also the reason we'll never move.",
    ],
  },
  {
    slug: "choosing-right-fabric",
    title: "Choosing the Right Fabric for Print",
    excerpt: "Cotton, rayon, linen, silk — a buyer's guide to fabric for screen printing.",
    category: "Guide",
    pattern: "pat-leaf",
    keywords: "bulk fabric printing, screen print fabric, fabric printing manufacturer India",
    coverImage: "/blog_fabric_swatches_1777803490494.png",
    body: [
      "Fabric is half the print. The same screen and the same pigment will give you four completely different results on cotton, rayon, linen, and silk — and the difference matters more than most first-time buyers realise. Here's how we guide our clients.",
      "Cotton is the safe default. It absorbs pigment evenly, holds colour for years, and washes well. Within cotton, weave matters: a 60-count cambric prints crisp lines and is ideal for sharp graphic prints; a 40-count poplin gives slightly softer edges and a fuller hand. For wholesale boutique runs, cambric and poplin together cover most use-cases.",
      "Rayon (viscose) is fluid, drapey, and prints with a slightly higher saturation than cotton because the fibre is smoother. The trade-off is that rayon shrinks more aggressively and demands a more careful curing step. For flowing dresses, scarves and dupattas where drape matters more than structure, rayon is unbeatable.",
      "Linen is the prestige base — but it's also the most demanding. Its natural slubs absorb pigment unevenly, which is either a feature or a bug depending on the print. Bold, large-scale prints sing on linen. Fine-line prints can look broken. We always recommend a strike-off on linen before committing to a bulk run.",
      "Silk — habotai, crepe, georgette — gives the deepest, most luminous colour of any base, but the screens have to be lighter, the pigment thinner, and the pulls gentler. It's the right choice for premium scarves, special-occasion saris, and luxury bridal fabric. It's the wrong choice for a 1000-metre boutique drop unless your price point supports it.",
      "Our usual advice for a first-time client: order strike-offs on two or three bases before deciding. A 1-metre sample on each fabric costs almost nothing and removes 90% of the guesswork. After that, your bulk order behaves exactly the way you expected.",
    ],
  },
  {
    slug: "manufacturing-process",
    title: "Inside Our Manufacturing Process",
    excerpt: "From design approval to dispatch — a full walkthrough of how your order is made.",
    category: "Process",
    pattern: "pat-jaal",
    keywords: "bulk fabric printing, screen printing Jaipur, fabric manufacturer process",
    coverImage: "/blog_workshop_view_1777803506161.png",
    body: [
      "Most clients see the catalogue and the invoice. The middle — the actual manufacturing — is invisible. We think it shouldn't be. Here's exactly what happens between the moment you confirm an order and the moment your fabric ships.",
      "Step one is design approval. You either pick a design from our 2000-strong archive or send us your own artwork. Our studio prepares a digital strike-off — a printed proof on your chosen base fabric — and ships it to you within 3-4 days. Nothing moves to bulk until you sign off.",
      "Step two is screen preparation. Each colour in your design gets its own screen: a fine polyester mesh stretched over an aluminium frame, hand-coated with a light-sensitive emulsion, exposed under your artwork on a UV table, and washed out so that pigment passes only through the design areas. A six-colour print needs six screens, and each screen takes about an hour to prepare.",
      "Step three is colour mixing. Our master colourist works against your reference — a fabric snip, a Pantone code, sometimes just a photo. Every formula is logged in a hand-written ledger so that repeat orders three months later use the exact same shade. Consistency across runs is one of our most-requested features.",
      "Step four is the print itself. Long printing tables — some up to 60 metres — are laid with the base fabric and lightly tacked down. Each screen is positioned by hand, pigment is poured at the top, and a squeegee pulls it across the screen in a single firm stroke. The screen lifts; the printer steps one repeat-length forward; the pull repeats. Six colours means six passes down the table.",
      "Step five is curing and quality. The printed fabric cures naturally in our drying yards (or, for some pigments, through a heated curing chamber) before going through a roll-by-roll quality inspection. Defects are flagged, the roll is reprinted if needed, and only then does it ship.",
      "From design approval to dispatch, the typical timeline is 7–10 days for orders above 100 metres. Larger orders take longer only because the printing itself takes longer — every other step scales with our capacity.",
    ],
  },
  {
    slug: "sustainable-screen-printing",
    title: "Sustainable Screen Printing Practices",
    excerpt: "How modern Jaipur print houses are balancing heritage with eco-friendly innovations.",
    category: "Sustainability",
    pattern: "pat-leaf",
    keywords: "sustainable screen printing, eco friendly fabric printing, organic dyes Jaipur",
    coverImage: "/blog_eco_dyes_1777803519854.png",
    body: [
      "The textile industry is increasingly moving towards sustainable practices, and traditional screen printing is evolving to meet these demands. While natural dyes and organic fabrics have long been part of the craft, modern print houses are taking a holistic approach to sustainability.",
      { type: "h2", content: "Water Conservation and Closed-Loop Systems" },
      "A key focus is water conservation. Printing requires significant water, especially during screen washing and fabric curing. By implementing closed-loop water recycling systems, modern Sanganer facilities can reduce freshwater consumption by up to 60%, filtering and reusing dye-water safely. This dramatically reduces the environmental footprint of bulk fabric manufacturing.",
      { type: "h3", content: "Organic Pigments vs Synthetic Dyes" },
      "Pigment choices also matter. Transitioning from harmful synthetic dyes to GOTS-certified reactive and organic pigments ensures that the end product is safer for consumers and the environment. These eco-friendly dyes still deliver the vibrant, long-lasting colors that Jaipur prints are famous for.",
      { type: "image", src: "/blog_inside_eco_1777804168470.png", alt: "Extracting organic dyes from pomegranate peels", caption: "Organic fabric dyes extracted from natural sources for sustainable screen printing." },
      "Sustainability extends to the base fabric as well. More D2C brands are requesting screen prints on organic cotton, bamboo, and Kala cotton.",
      { type: "ul", items: [
        "<strong>Organic Cotton:</strong> Grown without toxic pesticides, better for soil and farmers.",
        "<strong>Bamboo Viscose:</strong> Highly renewable, requires less water, and produces an incredibly soft drape.",
        "<strong>Kala Cotton:</strong> An indigenous Indian strain that is entirely rain-fed and pest-resistant."
      ]},
      "We work closely with our clients to source ethical fabrics that support local farmers while providing the perfect canvas for our prints.",
      { type: "h2", content: "The Future of Jaipur's Textile Heritage" },
      "The future of screen printing in Jaipur is bright. By blending a 400-year-old craft with forward-thinking ecological practices, we ensure that our heritage continues to thrive without compromising the planet. Brands that adopt sustainable fabrics not only help the environment but also appeal to a growing demographic of conscious consumers."
    ],
  },
  {
    slug: "sanganer-vs-bagru-prints",
    title: "Sanganer vs Bagru Prints",
    excerpt: "Decoding the distinct styles, colors, and motifs of Jaipur's two legendary textile towns.",
    category: "Heritage",
    pattern: "pat-floral-1",
    keywords: "Sanganer prints, Bagru block printing, Jaipur fabric styles, Indian textile heritage",
    coverImage: "/blog_heritage_prints_1777803538254.png",
    body: [
      "Jaipur is globally recognized for its textiles, but true connoisseurs know that 'Jaipur print' usually refers to one of two distinct regional styles: Sanganer or Bagru. Though these towns are only a few kilometers apart, their techniques and aesthetics couldn't be more different.",
      { type: "h2", content: "The Sanganer Style: Vibrant Florals on White" },
      "Sanganer prints are famous for their pristine white or off-white backgrounds. The motifs are predominantly floral—intricate 'butis' (small motifs) and 'jaals' (networks) inspired by Persian flora. The colors are traditionally vibrant: bright reds, yellows, and blues, made possible by the unique properties of Sanganer's water.",
      "Because Sanganer was patronized by the royal families of Jaipur, the prints were historically used for elegant court garments, tents, and fine linens. The bright colors required a complex washing and sun-bleaching process that the Sanganer river accommodated perfectly.",
      { type: "h2", content: "The Bagru Style: Earthy Tones and Mud Resist" },
      "In contrast, Bagru prints are known for their dark, earthy tones. The background is often dyed in natural red (madder) or black (iron rust), and the motifs tend to be more geometric or bold. Bagru printing also frequently uses 'Dabu'—a mud-resist technique that creates distinct, organic patterns not found in Sanganer work.",
      { type: "image", src: "/blog_inside_bagru_1777804184178.png", alt: "Close-up of Bagru dabu block print fabric", caption: "Rich earthy red and black tones typical of Bagru's geometric mud-resist dabu patterns." },
      "Bagru's aesthetic is deeply rooted in the local communities, traditionally worn by the Raigars, Gujjars, and other agrarian castes. The deep colors were practical, hiding the dust and wear of daily labor.",
      { type: "h3", content: "How to Choose for Your Brand Collection" },
      "The choice between Sanganer and Bagru often dictates the mood of the collection.",
      { type: "ul", items: [
        "<strong>Spring/Summer Collections:</strong> A breezy summer dress typically calls for the bright, airy florals of Sanganer.",
        "<strong>Autumn/Winter Collections:</strong> A bohemian winter collection might lean towards the deeper, grounded tones of Bagru.",
        "<strong>Home Decor:</strong> Sanganer works beautifully for delicate bedding, while Bagru is excellent for statement rugs and heavy drapery."
      ]},
      "Today, both styles have adapted to modern screen printing, allowing designers to scale these traditional aesthetics for global audiences. Understanding the difference helps brands tell a deeper, more authentic story about their fabrics."
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
