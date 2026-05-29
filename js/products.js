const products = [

  // ── Îngrijire ten ──────────────────────────────────────────────────────────

  {
    id: 1,
    name: 'Ser Luxe Radiance cu Vitamina C',
    category: 'ten',
    brand: 'Lumière Paris',
    price: 420,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=85',
    desc: 'Ser antioxidant premium pentru luminozitate, pete pigmentare și aspect uniform.'
  },
  {
    id: 2,
    name: 'Cremă Velvet Hydro Repair',
    category: 'ten',
    brand: 'MaisonCare',
    price: 360,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=85',
    desc: 'Cremă catifelată cu acid hialuronic, ceramide și textură lejeră.'
  },
  {
    id: 3,
    name: 'Gel de curățare Pure Skin',
    category: 'ten',
    brand: 'DermaSoft',
    price: 245,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1000&q=85',
    desc: 'Curăță delicat impuritățile fără să usuce pielea.'
  },
  {
    id: 4,
    name: 'Cremă SPF 50 Urban Shield',
    category: 'ten',
    brand: 'Lumière Paris',
    price: 390,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1686831451322-8d8e234a51e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Protecție solară zilnică cu finisaj luminos și elegant.'
  },
  {
    id: 5,
    name: 'Toner Rose Balance',
    category: 'ten',
    brand: 'MaisonCare',
    price: 280,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1000&q=85',
    desc: 'Toner hidratant cu extract de trandafir pentru piele proaspătă.'
  },
  {
    id: 6,
    name: 'Mască Glow Therapy',
    category: 'ten',
    brand: 'DermaSoft',
    price: 315,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1685764290016-3600079629b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Mască pentru revitalizare, confort și strălucire naturală.'
  },

  // ── Îngrijire păr ─────────────────────────────────────────────────────────

  {
    id: 7,
    name: 'Mască reparatoare Silk Hair',
    category: 'par',
    brand: 'HairBloom',
    price: 340,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1732861612244-5704d12e9397?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Tratament nutritiv pentru păr uscat, vopsit sau deteriorat.'
  },
  {
    id: 8,
    name: 'Șampon Shine Repair',
    category: 'par',
    brand: 'HairBloom',
    price: 260,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1585751119414-ef2636f8aede?auto=format&fit=crop&w=1000&q=85',
    desc: 'Șampon delicat pentru strălucire și protecția lungimilor.'
  },
  {
    id: 9,
    name: 'Ulei capilar Golden Elixir',
    category: 'par',
    brand: 'Lumière Paris',
    price: 430,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1669281393011-c335050cf0e9?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Ulei luxos pentru vârfuri, anti-frizz și luciu elegant.'
  },
  {
    id: 10,
    name: 'Spray termo-protector Satin Heat',
    category: 'par',
    brand: 'HairBloom',
    price: 295,
    rating: 4.7,
    img: 'https://plus.unsplash.com/premium_photo-1661604366594-64781f82a4b6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Protecție termică pentru coafat, cu efect de netezire.'
  },
  {
    id: 11,
    name: 'Balsam Nutri Soft',
    category: 'par',
    brand: 'MaisonCare',
    price: 250,
    rating: 4.4,
    img: 'https://images.unsplash.com/photo-1739979903440-d0aae44cdf16?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Balsam cremos pentru păr mătăsos și ușor de pieptănat.'
  },
  {
    id: 12,
    name: 'Tratament Scalp Fresh',
    category: 'par',
    brand: 'DermaSoft',
    price: 375,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1683220718572-9e47b3d7c637?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Tratament pentru scalp, senzație de prospețime și confort.'
  },

  // ── Îngrijire corp ────────────────────────────────────────────────────────

  {
    id: 13,
    name: 'Ulei de corp Velvet Touch',
    category: 'corp',
    brand: 'BodyRitual',
    price: 310,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1608571423539-e951b9b3871e?q=80&w=760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Ulei parfumat pentru hidratare intensă și strălucire fină.'
  },
  {
    id: 14,
    name: 'Loțiune Cashmere Body',
    category: 'corp',
    brand: 'BodyRitual',
    price: 285,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1000&q=85',
    desc: 'Loțiune lejeră cu parfum discret și absorbție rapidă.'
  },
  {
    id: 15,
    name: 'Scrub Sugar Bloom',
    category: 'corp',
    brand: 'MaisonCare',
    price: 270,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1667803552102-00de1188d66f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Scrub delicat cu particule fine pentru piele netedă și catifelată.'
  },
  {
    id: 16,
    name: 'Cremă mâini Soft Petals',
    category: 'corp',
    brand: 'Lumière Paris',
    price: 190,
    rating: 4.4,
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85',
    desc: 'Cremă pentru mâini cativelate, ideală pentru geantă.'
  },
  {
    id: 17,
    name: 'Gel duș Amber Ritual',
    category: 'corp',
    brand: 'BodyRitual',
    price: 220,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1749567026462-8a5ced071a30?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Gel de duș parfumat, cu spumă fină și senzație spa.'
  },
  {
    id: 18,
    name: 'Set Body Spa Deluxe',
    category: 'corp',
    brand: 'BodyRitual',
    price: 620,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1638131163592-f91c859ac4fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Set cadou cu produse pentru corp, ambalaj premium.'
  },

  // ── Machiaj ───────────────────────────────────────────────────────────────

  {
    id: 19,
    name: 'Balsam de buze Berry Care',
    category: 'machiaj',
    brand: 'Lumière Paris',
    price: 180,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=1000&q=85',
    desc: 'Balsam nutritiv cu tentă naturală pentru buze moi și lucioase.'
  },
  {
    id: 20,
    name: 'Fond de ten Satin Skin',
    category: 'machiaj',
    brand: 'MaisonCare',
    price: 450,
    rating: 4.8,
    img: 'https://plus.unsplash.com/premium_photo-1678932075247-2d5e29363a3f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Acoperire medie, finisaj natural și rezistență pe parcursul zilei.'
  },
  {
    id: 21,
    name: 'Paletă farduri Nude Atelier',
    category: 'machiaj',
    brand: 'Lumière Paris',
    price: 540,
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85',
    desc: 'Nuanțe calde, elegante, perfecte pentru machiaj de zi și seară.'
  },
  {
    id: 22,
    name: 'Rimel Volume Noir',
    category: 'machiaj',
    brand: 'MaisonCare',
    price: 320,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1650664370914-f026578ec2a4?q=80&w=938&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Volum intens, separare și culoare neagră profundă.'
  },
  {
    id: 23,
    name: 'Ruj Creamy Rose',
    category: 'machiaj',
    brand: 'Lumière Paris',
    price: 260,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1695634503987-f6f18706708e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Ruj cremos cu finish satinat și nuanță romantică.'
  },
  {
    id: 24,
    name: 'Iluminator Pearl Drops',
    category: 'machiaj',
    brand: 'MaisonCare',
    price: 335,
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1580694500583-21a6189e6b56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Iluminator lichid pentru efect fresh, luminos și sofisticat.'
  }

];