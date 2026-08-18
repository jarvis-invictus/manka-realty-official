// Manka Realty Database File
const residentialCategories = [
  {
    "id": "land",
    "name": "Residential Land",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "desc": "Premium freehold residential plots in prime locations, perfect for custom luxury home construction."
  },
  {
    "id": "penthouse",
    "name": "Luxury Penthouse",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "desc": "Elite multi-story sky residences with private terraces, infinity pools, and panoramic city views."
  },
  {
    "id": "villa",
    "name": "Premium Villa",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "desc": "Spacious standalone luxury villas with private gardens, gated perimeters, and modular home features."
  },
  {
    "id": "rowhouse",
    "name": "Gated Row House",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "desc": "Modern row houses in secure gated enclaves with private entries and premium community amenities."
  },
  {
    "id": "floor",
    "name": "Builder Floor",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "desc": "Exclusive single-floor private residences offering high independence, luxury styling, and privacy."
  },
  {
    "id": "apartments",
    "name": "Apartments / Flats",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "desc": "High-end luxury apartments and flats inside Mumbai's most prestigious high-rise developments."
  },
  {
    "id": "house",
    "name": "Independent House",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "desc": "Independent standalone bungalows and houses in quiet sub-localities with freehold ownership."
  }
];
const commercialCategories = [
  {
    "id": "land",
    "name": "Commercial Land",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "desc": "High-potential commercial plots and zones ready for commercial complexes, malls, and workspaces."
  },
  {
    "id": "office",
    "name": "Office Spaces",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "desc": "Grade-A corporate office spaces, plug-and-play coworking setups, and customized private suites."
  },
  {
    "id": "retail",
    "name": "Shops / Retail Spaces",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "desc": "Premium high-footfall retail outlets, street shops, and boutique properties in prime retail districts."
  },
  {
    "id": "buildings",
    "name": "Commercial Buildings",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "desc": "Full standalone commercial towers, corporate headquarters, and investment-grade structures."
  },
  {
    "id": "showrooms",
    "name": "Showrooms",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "desc": "Spacious premium showroom frontage properties designed for auto, retail, and luxury display brands."
  },
  {
    "id": "warehouses",
    "name": "Warehouses",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "desc": "Grade-A industrial warehouses, distribution centers, and cold-storage options in major logistic zones."
  }
];
const residentialPropertiesDb = [
  {
    "id": "res-land-1",
    "category": "land",
    "title": "Exclusive Plot in Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "2000 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Bandra West. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-2",
    "category": "land",
    "title": "Exclusive Plot in Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "2500 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Juhu. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-3",
    "category": "land",
    "title": "Exclusive Plot in Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "3000 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Khar West. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-4",
    "category": "land",
    "title": "Exclusive Plot in Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "3500 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Santacruz West. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-5",
    "category": "land",
    "title": "Exclusive Plot in Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "4000 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Worli. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-6",
    "category": "land",
    "title": "Exclusive Plot in Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "4500 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Lower Parel. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-7",
    "category": "land",
    "title": "Exclusive Plot in BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "5000 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in BKC. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-land-8",
    "category": "land",
    "title": "Exclusive Plot in Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "5500 sq.yards",
    "beds": "N/A",
    "baths": "N/A",
    "desc": "Premium residential freehold plot at a peaceful cul-de-sac in Powai. Excellent FSI allowance, boundary wall built, immediate registration.",
    "image": "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Residential Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-1",
    "category": "penthouse",
    "title": "Duplex Penthouse at Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "3600 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-2",
    "category": "penthouse",
    "title": "Duplex Penthouse at Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "4000 sq.ft.",
    "beds": "3 BHK",
    "baths": "4",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-3",
    "category": "penthouse",
    "title": "Duplex Penthouse at Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "4400 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-4",
    "category": "penthouse",
    "title": "Duplex Penthouse at Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "4800 sq.ft.",
    "beds": "3 BHK",
    "baths": "4",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-5",
    "category": "penthouse",
    "title": "Duplex Penthouse at Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "5200 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-6",
    "category": "penthouse",
    "title": "Duplex Penthouse at Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "5600 sq.ft.",
    "beds": "3 BHK",
    "baths": "4",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-7",
    "category": "penthouse",
    "title": "Duplex Penthouse at BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "6000 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-penthouse-8",
    "category": "penthouse",
    "title": "Duplex Penthouse at Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "6400 sq.ft.",
    "beds": "3 BHK",
    "baths": "4",
    "desc": "Stunning multi-level penthouse overlooking the Mumbai skyline. Private elevators, floor-to-ceiling glass paneling, and massive wraps-around deck.",
    "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Luxury Penthouse",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-1",
    "category": "villa",
    "title": "Luxury Villa in Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "4600 sq.ft.",
    "beds": "5 BHK",
    "baths": "6",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-2",
    "category": "villa",
    "title": "Luxury Villa in Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "5200 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-3",
    "category": "villa",
    "title": "Luxury Villa in Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "5800 sq.ft.",
    "beds": "5 BHK",
    "baths": "6",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-4",
    "category": "villa",
    "title": "Luxury Villa in Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "6400 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-5",
    "category": "villa",
    "title": "Luxury Villa in Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "7000 sq.ft.",
    "beds": "5 BHK",
    "baths": "6",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-6",
    "category": "villa",
    "title": "Luxury Villa in Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "7600 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-7",
    "category": "villa",
    "title": "Luxury Villa in BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "8200 sq.ft.",
    "beds": "5 BHK",
    "baths": "6",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-villa-8",
    "category": "villa",
    "title": "Luxury Villa in Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "8800 sq.ft.",
    "beds": "4 BHK",
    "baths": "5",
    "desc": "Spacious modern smart villa with private pool, home automation, landscaped gardens, and parking space for 4 SUVs.",
    "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Premium Villa",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-1",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "3100 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Bandra West. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-2",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "3400 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Juhu. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-3",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "3700 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Khar West. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-4",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "4000 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Santacruz West. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-5",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "4300 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Worli. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-6",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "4600 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Lower Parel. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-7",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "4900 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at BKC. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-rowhouse-8",
    "category": "rowhouse",
    "title": "Premium Gated Rowhouse - Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "5200 sq.ft.",
    "beds": "3 BHK",
    "baths": "4 Baths",
    "desc": "A gorgeous triplex rowhouse in a premium gated community at Powai. Offers private lawn, modular kitchen, and active security gate.",
    "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Gated Row House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-1",
    "category": "floor",
    "title": "Exclusive Builder Floor - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "2400 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-2",
    "category": "floor",
    "title": "Exclusive Builder Floor - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "2600 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-3",
    "category": "floor",
    "title": "Exclusive Builder Floor - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "2800 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-4",
    "category": "floor",
    "title": "Exclusive Builder Floor - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "3000 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-5",
    "category": "floor",
    "title": "Exclusive Builder Floor - Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "3200 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-6",
    "category": "floor",
    "title": "Exclusive Builder Floor - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "3400 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-7",
    "category": "floor",
    "title": "Exclusive Builder Floor - BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "3600 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-floor-8",
    "category": "floor",
    "title": "Exclusive Builder Floor - Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "3800 sq.ft.",
    "beds": "3 BHK",
    "baths": "3 Baths",
    "desc": "Luxury single-floor apartment in a standalone low-rise building. Highly private, premium Italian marble floorings, modular woodwork.",
    "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Builder Floor",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-1",
    "category": "apartments",
    "title": "Modern Luxury Flat - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "1450 sq.ft.",
    "beds": "3 BHK",
    "baths": "3",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-2",
    "category": "apartments",
    "title": "Modern Luxury Flat - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "1700 sq.ft.",
    "beds": "2 BHK",
    "baths": "2",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-3",
    "category": "apartments",
    "title": "Modern Luxury Flat - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "1950 sq.ft.",
    "beds": "3 BHK",
    "baths": "3",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-4",
    "category": "apartments",
    "title": "Modern Luxury Flat - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "2200 sq.ft.",
    "beds": "2 BHK",
    "baths": "2",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-5",
    "category": "apartments",
    "title": "Modern Luxury Flat - Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "2450 sq.ft.",
    "beds": "3 BHK",
    "baths": "3",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-6",
    "category": "apartments",
    "title": "Modern Luxury Flat - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "2700 sq.ft.",
    "beds": "2 BHK",
    "baths": "2",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-7",
    "category": "apartments",
    "title": "Modern Luxury Flat - BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "2950 sq.ft.",
    "beds": "3 BHK",
    "baths": "3",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-apartments-8",
    "category": "apartments",
    "title": "Modern Luxury Flat - Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "3200 sq.ft.",
    "beds": "2 BHK",
    "baths": "2",
    "desc": "Spacious apartment located in a tier-1 residential high-rise. Features modular kitchen, high security, and clubhouse facilities.",
    "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Apartments / Flats",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-1",
    "category": "house",
    "title": "Independent Bungalow - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹4.0 Cr",
    "area": "4000 sq.ft.",
    "beds": "5 BHK",
    "baths": "5",
    "desc": "Freehold standalone independent house at a premium residential street in Bandra West. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-2",
    "category": "house",
    "title": "Independent Bungalow - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹5.5 Cr",
    "area": "4500 sq.ft.",
    "beds": "4 BHK",
    "baths": "4",
    "desc": "Freehold standalone independent house at a premium residential street in Juhu. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-3",
    "category": "house",
    "title": "Independent Bungalow - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹7.0 Cr",
    "area": "5000 sq.ft.",
    "beds": "5 BHK",
    "baths": "5",
    "desc": "Freehold standalone independent house at a premium residential street in Khar West. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-4",
    "category": "house",
    "title": "Independent Bungalow - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹8.5 Cr",
    "area": "5500 sq.ft.",
    "beds": "4 BHK",
    "baths": "4",
    "desc": "Freehold standalone independent house at a premium residential street in Santacruz West. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-5",
    "category": "house",
    "title": "Independent Bungalow - Worli",
    "location": "Worli, Mumbai",
    "price": "₹10.0 Cr",
    "area": "6000 sq.ft.",
    "beds": "5 BHK",
    "baths": "5",
    "desc": "Freehold standalone independent house at a premium residential street in Worli. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-6",
    "category": "house",
    "title": "Independent Bungalow - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹11.5 Cr",
    "area": "6500 sq.ft.",
    "beds": "4 BHK",
    "baths": "4",
    "desc": "Freehold standalone independent house at a premium residential street in Lower Parel. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-7",
    "category": "house",
    "title": "Independent Bungalow - BKC",
    "location": "BKC, Mumbai",
    "price": "₹13.0 Cr",
    "area": "7000 sq.ft.",
    "beds": "5 BHK",
    "baths": "5",
    "desc": "Freehold standalone independent house at a premium residential street in BKC. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "res-house-8",
    "category": "house",
    "title": "Independent Bungalow - Powai",
    "location": "Powai, Mumbai",
    "price": "₹14.5 Cr",
    "area": "7500 sq.ft.",
    "beds": "4 BHK",
    "baths": "4",
    "desc": "Freehold standalone independent house at a premium residential street in Powai. Offers spacious rooms, open terrace, and private water tank.",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Independent House",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  }
];
const commercialPropertiesDb = [
  {
    "id": "comm-land-1",
    "category": "land",
    "title": "Commercial Plot at Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "6000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-2",
    "category": "land",
    "title": "Commercial Plot at Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "7000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-3",
    "category": "land",
    "title": "Commercial Plot at Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "8000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-4",
    "category": "land",
    "title": "Commercial Plot at Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "9000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-5",
    "category": "land",
    "title": "Commercial Plot at Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "10000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-6",
    "category": "land",
    "title": "Commercial Plot at Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "11000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-7",
    "category": "land",
    "title": "Commercial Plot at BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "12000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-land-8",
    "category": "land",
    "title": "Commercial Plot at Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "13000 sq.ft.",
    "desc": "Prime commercial land parcel suitable for retail complexes, commercial corporate suites, or boutique hotels. High visibility, East-facing.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Land",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-1",
    "category": "office",
    "title": "Grade-A Office Suite - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "2200 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-2",
    "category": "office",
    "title": "Grade-A Office Suite - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "2600 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-3",
    "category": "office",
    "title": "Grade-A Office Suite - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "3000 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-4",
    "category": "office",
    "title": "Grade-A Office Suite - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "3400 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-5",
    "category": "office",
    "title": "Grade-A Office Suite - Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "3800 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-6",
    "category": "office",
    "title": "Grade-A Office Suite - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "4200 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-7",
    "category": "office",
    "title": "Grade-A Office Suite - BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "4600 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-office-8",
    "category": "office",
    "title": "Grade-A Office Suite - Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "5000 sq.ft.",
    "desc": "Modern, fully-furnished plug-and-play corporate office space. Features private conference rooms, 20 workstations, pantry, and IT storage.",
    "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Office Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-1",
    "category": "retail",
    "title": "High-Footfall Shop - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "800 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-2",
    "category": "retail",
    "title": "High-Footfall Shop - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "1000 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-3",
    "category": "retail",
    "title": "High-Footfall Shop - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "1200 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-4",
    "category": "retail",
    "title": "High-Footfall Shop - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "1400 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-5",
    "category": "retail",
    "title": "High-Footfall Shop - Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "1600 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-6",
    "category": "retail",
    "title": "High-Footfall Shop - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "1800 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-7",
    "category": "retail",
    "title": "High-Footfall Shop - BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "2000 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-retail-8",
    "category": "retail",
    "title": "High-Footfall Shop - Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "2200 sq.ft.",
    "desc": "Premium corner-facing retail store/shop inside a busy commercial galleria. Double glass facade frontage, excellent brand visibility.",
    "image": "https://images.unsplash.com/photo-1567401893930-7becd1117be2?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Shops / Retail Spaces",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-1",
    "category": "buildings",
    "title": "Corporate Commercial Building - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "18000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-2",
    "category": "buildings",
    "title": "Corporate Commercial Building - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "21000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-3",
    "category": "buildings",
    "title": "Corporate Commercial Building - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "24000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-4",
    "category": "buildings",
    "title": "Corporate Commercial Building - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "27000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-5",
    "category": "buildings",
    "title": "Corporate Commercial Building - Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "30000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-6",
    "category": "buildings",
    "title": "Corporate Commercial Building - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "33000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-7",
    "category": "buildings",
    "title": "Corporate Commercial Building - BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "36000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-buildings-8",
    "category": "buildings",
    "title": "Corporate Commercial Building - Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "39000 sq.ft.",
    "desc": "Standalone commercial tower suitable for corporate headquarters, banks, or hospital conversions. Multiple elevator shafts, parking basement.",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Commercial Buildings",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-1",
    "category": "showrooms",
    "title": "Premium Showroom - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "3000 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-2",
    "category": "showrooms",
    "title": "Premium Showroom - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "3500 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-3",
    "category": "showrooms",
    "title": "Premium Showroom - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "4000 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-4",
    "category": "showrooms",
    "title": "Premium Showroom - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "4500 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-5",
    "category": "showrooms",
    "title": "Premium Showroom - Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "5000 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-6",
    "category": "showrooms",
    "title": "Premium Showroom - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "5500 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-7",
    "category": "showrooms",
    "title": "Premium Showroom - BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "6000 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-showrooms-8",
    "category": "showrooms",
    "title": "Premium Showroom - Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "6500 sq.ft.",
    "desc": "Prime road-facing ground floor showroom space with high ceilings and heavy structural glazing. Perfect for automotive or premium luxury brands.",
    "image": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Showrooms",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-1",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Bandra West",
    "location": "Bandra West, Mumbai",
    "price": "₹3.5 L/mo",
    "area": "10000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-2",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Juhu",
    "location": "Juhu, Mumbai",
    "price": "₹9.0 Cr",
    "area": "12000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-3",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Khar West",
    "location": "Khar West, Mumbai",
    "price": "₹6.5 L/mo",
    "area": "14000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-4",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Santacruz West",
    "location": "Santacruz West, Mumbai",
    "price": "₹14.0 Cr",
    "area": "16000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-5",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Worli",
    "location": "Worli, Mumbai",
    "price": "₹9.5 L/mo",
    "area": "18000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-6",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Lower Parel",
    "location": "Lower Parel, Mumbai",
    "price": "₹19.0 Cr",
    "area": "20000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-7",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - BKC",
    "location": "BKC, Mumbai",
    "price": "₹12.5 L/mo",
    "area": "22000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  },
  {
    "id": "comm-warehouses-8",
    "category": "warehouses",
    "title": "Grade-A Logistics Warehouse - Powai",
    "location": "Powai, Mumbai",
    "price": "₹24.0 Cr",
    "area": "24000 sq.ft.",
    "desc": "Heavy-duty industrial warehouse with multi-loading docks, modern insulation, 30-ton weight capacities, and 24/7 security containment.",
    "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    "specs": {
      "Type": "Warehouses",
      "Ownership": "Freehold",
      "Availability": "Immediate"
    }
  }
];
const partnersDb = {
  "developers": [
    {
      "title": "Rustomjee",
      "html": "<div class=\"partner-logo-item\" title=\"Rustomjee\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M25,13 L35,33 L45,13 Z\" fill=\"#e30613\"/>\n    </svg></div>"
    },
    {
      "title": "Godrej",
      "html": "<div class=\"partner-logo-item\" title=\"Godrej\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M10,25 Q25,8 40,20 T70,12\" stroke=\"#e30613\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M25,28 Q35,38 45,28\" stroke=\"#4caf50\" stroke-width=\"2.2\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Runwal",
      "html": "<div class=\"partner-logo-item\" title=\"Runwal\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"12\" fill=\"#f59e0b\" text-anchor=\"middle\" letter-spacing=\"1\">RUNWAL</text>\n    </svg></div>"
    },
    {
      "title": "Ap Properties",
      "html": "<div class=\"partner-logo-item\" title=\"Ap Properties\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,32 L35,16 L50,32 Z\" fill=\"#60a5fa\"/>\n        <path d=\"M29,32 L35,24 L41,32 Z\" fill=\"#ff7f50\"/>\n    </svg></div>"
    },
    {
      "title": "S. Raheja",
      "html": "<div class=\"partner-logo-item\" title=\"S. Raheja\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#1e3a8a\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"800\" font-size=\"10.5\" fill=\"#ffffff\" text-anchor=\"middle\">SR</text>\n    </svg></div>"
    },
    {
      "title": "K. Raheja",
      "html": "<div class=\"partner-logo-item\" title=\"K. Raheja\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#040c21\" stroke=\"#e30613\" stroke-width=\"2\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#ffffff\" text-anchor=\"middle\">KR</text>\n    </svg></div>"
    },
    {
      "title": "R. Raheja",
      "html": "<div class=\"partner-logo-item\" title=\"R. Raheja\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#040c21\" stroke=\"#cbd5e1\" stroke-width=\"2\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#cbd5e1\" text-anchor=\"middle\">RR</text>\n    </svg></div>"
    },
    {
      "title": "Adani Realty",
      "html": "<div class=\"partner-logo-item\" title=\"Adani Realty\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"30\" cy=\"25\" r=\"10\" fill=\"#3b82f6\" opacity=\"0.9\"/>\n        <circle cx=\"40\" cy=\"25\" r=\"10\" fill=\"#ff7f50\" opacity=\"0.8\"/>\n    </svg></div>"
    },
    {
      "title": "Raymond Realty",
      "html": "<div class=\"partner-logo-item\" title=\"Raymond Realty\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,28 L35,16 L47,28 L41,34 L29,34 Z\" fill=\"#e30613\"/>\n    </svg></div>"
    },
    {
      "title": "Kalpatru",
      "html": "<div class=\"partner-logo-item\" title=\"Kalpatru\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M35,11 C26,11 20,18 20,28 L35,41 L50,28 C50,18 44,11 35,11 Z\" fill=\"#4caf50\"/>\n        <circle cx=\"35\" cy=\"23\" r=\"5\" fill=\"#040c21\"/>\n    </svg></div>"
    },
    {
      "title": "Oberoi",
      "html": "<div class=\"partner-logo-item\" title=\"Oberoi\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"12\" fill=\"#ffffff\" text-anchor=\"middle\" letter-spacing=\"1\">OBEROI</text>\n        <line x1=\"15\" y1=\"34\" x2=\"55\" y2=\"34\" stroke=\"#e30613\" stroke-width=\"2\"/>\n    </svg></div>"
    },
    {
      "title": "Bhoomi Group",
      "html": "<div class=\"partner-logo-item\" title=\"Bhoomi Group\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,35 C20,16 50,16 50,35 Z\" stroke=\"#ca8a04\" stroke-width=\"3\" fill=\"none\"/>\n        <circle cx=\"35\" cy=\"22\" r=\"4\" fill=\"#ca8a04\"/>\n    </svg></div>"
    },
    {
      "title": "Veena Developers",
      "html": "<div class=\"partner-logo-item\" title=\"Veena Developers\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,16 L35,34 L47,16\" stroke=\"#00a896\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <circle cx=\"35\" cy=\"11\" r=\"4\" fill=\"#00a896\"/>\n    </svg></div>"
    },
    {
      "title": "Suntech",
      "html": "<div class=\"partner-logo-item\" title=\"Suntech\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#d4af37\" text-anchor=\"middle\" letter-spacing=\"0.5\">SUNTECK</text>\n    </svg></div>"
    },
    {
      "title": "Windsor",
      "html": "<div class=\"partner-logo-item\" title=\"Windsor\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,17 L35,11 L47,17 L43,35 L35,41 L27,35 Z\" fill=\"#60a5fa\"/>\n    </svg></div>"
    },
    {
      "title": "DB Realty",
      "html": "<div class=\"partner-logo-item\" title=\"DB Realty\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" rx=\"3\" fill=\"#3b82f6\"/>\n        <text x=\"35\" y=\"30\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"14\" fill=\"#ffffff\" text-anchor=\"middle\">db</text>\n    </svg></div>"
    },
    {
      "title": "Mahindra Lifespace",
      "html": "<div class=\"partner-logo-item\" title=\"Mahindra Lifespace\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,34 H50 L40,16 H30 Z\" fill=\"#e30613\"/>\n        <path d=\"M30,34 L35,24 L40,34 Z\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Satguru Builders",
      "html": "<div class=\"partner-logo-item\" title=\"Satguru Builders\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,35 Q35,12 47,35\" stroke=\"#4caf50\" stroke-width=\"3\" fill=\"none\"/>\n        <circle cx=\"35\" cy=\"18\" r=\"4\" fill=\"#4caf50\"/>\n    </svg></div>"
    },
    {
      "title": "Transon",
      "html": "<div class=\"partner-logo-item\" title=\"Transon\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15,25 Q30,8 45,25 T75,25\" stroke=\"#00b4d8\" stroke-width=\"3.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Supreme",
      "html": "<div class=\"partner-logo-item\" title=\"Supreme\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,34 L30,16 L35,25 L40,16 L47,34 Z\" fill=\"#ef4444\"/>\n    </svg></div>"
    },
    {
      "title": "The Wadhwa Group",
      "html": "<div class=\"partner-logo-item\" title=\"The Wadhwa Group\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15,29 C27,15 43,15 55,29\" stroke=\"#3b82f6\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M25,35 C33,23 47,23 55,35\" stroke=\"#4caf50\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Lokhandwala",
      "html": "<div class=\"partner-logo-item\" title=\"Lokhandwala\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" rx=\"2\" fill=\"#ea580c\"/>\n        <line x1=\"23\" y1=\"21\" x2=\"47\" y2=\"21\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <line x1=\"23\" y1=\"29\" x2=\"47\" y2=\"29\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n    </svg></div>"
    },
    {
      "title": "Kanakia Space",
      "html": "<div class=\"partner-logo-item\" title=\"Kanakia Space\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M25,13 V37 M25,25 L39,13 M25,25 L39,37\" stroke=\"#ea580c\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Lodha",
      "html": "<div class=\"partner-logo-item\" title=\"Lodha\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,16 L35,24 L47,16 L43,35 L27,35 Z\" fill=\"#d4af37\"/>\n        <circle cx=\"35\" cy=\"12\" r=\"3\" fill=\"#d4af37\"/>\n    </svg></div>"
    },
    {
      "title": "Ashwin Sheth Group",
      "html": "<div class=\"partner-logo-item\" title=\"Ashwin Sheth Group\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"20,16 35,25 20,34\" fill=\"#ea580c\"/>\n        <polygon points=\"32,16 47,25 32,34\" fill=\"#3b82f6\"/>\n    </svg></div>"
    },
    {
      "title": "DLH",
      "html": "<div class=\"partner-logo-item\" title=\"DLH\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" fill=\"#64748b\" rx=\"3\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#ffffff\" text-anchor=\"middle\">DLH</text>\n    </svg></div>"
    },
    {
      "title": "Prestige Group",
      "html": "<div class=\"partner-logo-item\" title=\"Prestige Group\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,13 L35,8 L47,13 L43,35 L35,41 L27,35 Z\" fill=\"#ef4444\"/>\n        <path d=\"M30,23 L35,18 L40,23\" stroke=\"#ffffff\" stroke-width=\"2\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Ashar",
      "html": "<div class=\"partner-logo-item\" title=\"Ashar\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,37 L35,13 L47,37 M29,29 H41\" stroke=\"#f43f5e\" stroke-width=\"4.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Hiranandani",
      "html": "<div class=\"partner-logo-item\" title=\"Hiranandani\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"25\" y=\"13\" width=\"20\" height=\"24\" fill=\"#ca8a04\" rx=\"2\"/>\n        <path d=\"M35,17 V33 M30,21 H40 M30,27 H40\" stroke=\"#ffffff\" stroke-width=\"1.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Piramal Realty",
      "html": "<div class=\"partner-logo-item\" title=\"Piramal Realty\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,12 49,38 21,38\" fill=\"#ca8a04\"/>\n        <polygon points=\"35,20 42,34 28,34\" fill=\"#040c21\"/>\n    </svg></div>"
    },
    {
      "title": "Ekta",
      "html": "<div class=\"partner-logo-item\" title=\"Ekta\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M22,25 C22,17 32,17 35,25 C38,33 48,33 48,25 C48,17 38,17 35,25 C32,33 22,33 22,25 Z\" stroke=\"#22c55e\" stroke-width=\"3\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Ruparel",
      "html": "<div class=\"partner-logo-item\" title=\"Ruparel\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,16 L35,10 L50,16 L46,36 L35,42 L24,36 Z\" fill=\"#06b6d4\"/>\n        <path d=\"M27,24 L35,18 L43,24\" stroke=\"#ffffff\" stroke-width=\"2.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "JP Infra",
      "html": "<div class=\"partner-logo-item\" title=\"JP Infra\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" stroke=\"#ea580c\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M29,25 H41 M35,19 V31\" stroke=\"#ea580c\" stroke-width=\"2\"/>\n    </svg></div>"
    },
    {
      "title": "Shapoorji Pallonji",
      "html": "<div class=\"partner-logo-item\" title=\"Shapoorji Pallonji\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#1e3a8a\" stroke=\"#ffffff\" stroke-width=\"1\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"10.5\" fill=\"#ffffff\" text-anchor=\"middle\">SP</text>\n    </svg></div>"
    },
    {
      "title": "supreme Universal",
      "html": "<div class=\"partner-logo-item\" title=\"supreme Universal\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,10 39,22 51,22 41,29 45,40 35,33 25,40 29,29 19,22 31,22\" fill=\"#ef4444\"/>\n    </svg></div>"
    },
    {
      "title": "Chandak Group",
      "html": "<div class=\"partner-logo-item\" title=\"Chandak Group\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M22,25 A13,13 0 0,1 48,25 A13,13 0 0,1 22,25\" stroke=\"#f97316\" stroke-width=\"3\" fill=\"none\"/>\n        <circle cx=\"38\" cy=\"25\" r=\"7\" fill=\"#ef4444\"/>\n    </svg></div>"
    },
    {
      "title": "Dosti",
      "html": "<div class=\"partner-logo-item\" title=\"Dosti\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"30\" cy=\"25\" r=\"10\" stroke=\"#00a896\" stroke-width=\"2\" fill=\"none\"/>\n        <circle cx=\"40\" cy=\"25\" r=\"10\" stroke=\"#4caf50\" stroke-width=\"2\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Ajmera",
      "html": "<div class=\"partner-logo-item\" title=\"Ajmera\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#ef4444\"/>\n        <path d=\"M28,29 L35,17 L42,29 Z\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Platinum Corp",
      "html": "<div class=\"partner-logo-item\" title=\"Platinum Corp\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,12 47,25 35,38 23,25\" fill=\"#cbd5e1\"/>\n        <polygon points=\"35,17 42,25 35,33 28,25\" fill=\"#94a3b8\"/>\n    </svg></div>"
    },
    {
      "title": "L&T",
      "html": "<div class=\"partner-logo-item\" title=\"L&T\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"15\" fill=\"#1e3a8a\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#ffffff\" text-anchor=\"middle\">L&amp;T</text>\n    </svg></div>"
    }
  ],
  "brands": [
    {
      "title": "Zepto",
      "html": "<div class=\"partner-logo-item\" title=\"Zepto\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"5\" y=\"13\" width=\"60\" height=\"24\" rx=\"12\" fill=\"#5c268a\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11.5\" fill=\"#ffffff\" text-anchor=\"middle\">zepto</text>\n    </svg></div>"
    },
    {
      "title": "Swiggy",
      "html": "<div class=\"partner-logo-item\" title=\"Swiggy\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M35,10 C25,10 21,22 21,28 C21,37 35,42 35,42 C35,42 49,37 49,28 C49,22 45,10 35,10 Z\" fill=\"#fc8019\"/>\n        <path d=\"M30,22 Q35,18 40,25 Q32,32 37,28\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Fraazo",
      "html": "<div class=\"partner-logo-item\" title=\"Fraazo\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"26\" r=\"11\" fill=\"#4caf50\"/>\n        <path d=\"M33,12 Q35,17 38,13\" stroke=\"#e30613\" stroke-width=\"2.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Blinkit",
      "html": "<div class=\"partner-logo-item\" title=\"Blinkit\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"5\" y=\"13\" width=\"60\" height=\"24\" rx=\"5\" fill=\"#ffc700\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11.5\" fill=\"#000000\" text-anchor=\"middle\">blinkit</text>\n    </svg></div>"
    },
    {
      "title": "Vodafone",
      "html": "<div class=\"partner-logo-item\" title=\"Vodafone\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"12\" fill=\"#e60000\"/>\n        <path d=\"M35,18 C31,18 29,22 30,25 Q32,29 35,29 C39,29 40,25 39,22 C39,18 35,18 35,18 Z\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "La Pino’z Pizza",
      "html": "<div class=\"partner-logo-item\" title=\"La Pino’z Pizza\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"23,38 35,14 47,38\" fill=\"#22c55e\"/>\n        <circle cx=\"35\" cy=\"29\" r=\"3\" fill=\"#ef4444\"/>\n        <circle cx=\"31\" cy=\"34\" r=\"2\" fill=\"#ef4444\"/>\n        <circle cx=\"39\" cy=\"34\" r=\"2\" fill=\"#ef4444\"/>\n    </svg></div>"
    },
    {
      "title": "Third Wave Coffee",
      "html": "<div class=\"partner-logo-item\" title=\"Third Wave Coffee\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"25\" y=\"18\" width=\"18\" height=\"15\" rx=\"3\" fill=\"#78350f\"/>\n        <path d=\"M43,21 H48 V27 H43\" stroke=\"#78350f\" stroke-width=\"2.5\" fill=\"none\"/>\n        <path d=\"M28,14 Q31,10 32,14\" stroke=\"#92400e\" stroke-width=\"1.5\" fill=\"none\"/>\n        <path d=\"M35,14 Q37,10 38,14\" stroke=\"#92400e\" stroke-width=\"1.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "PharmEasy",
      "html": "<div class=\"partner-logo-item\" title=\"PharmEasy\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"20\" y=\"19\" width=\"30\" height=\"13\" rx=\"6.5\" fill=\"#10b981\"/>\n        <circle cx=\"26.5\" cy=\"25.5\" r=\"4\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Starbucks",
      "html": "<div class=\"partner-logo-item\" title=\"Starbucks\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"14\" fill=\"#00704a\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <path d=\"M35,16 L37,21 L42,21 L38,24 L40,29 L35,26 L30,29 L32,24 L28,21 L33,21 Z\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Lenskart",
      "html": "<div class=\"partner-logo-item\" title=\"Lenskart\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"26\" cy=\"25\" r=\"8\" stroke=\"#009688\" stroke-width=\"3\" fill=\"none\"/>\n        <circle cx=\"44\" cy=\"25\" r=\"8\" stroke=\"#009688\" stroke-width=\"3\" fill=\"none\"/>\n        <line x1=\"33\" y1=\"23\" x2=\"37\" y2=\"23\" stroke=\"#009688\" stroke-width=\"3\"/>\n    </svg></div>"
    },
    {
      "title": "eVision",
      "html": "<div class=\"partner-logo-item\" title=\"eVision\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"12\" stroke=\"#2563eb\" stroke-width=\"2\" fill=\"none\"/>\n        <ellipse cx=\"35\" cy=\"25\" rx=\"12\" ry=\"4\" stroke=\"#2563eb\" stroke-width=\"1.5\" fill=\"none\"/>\n        <ellipse cx=\"35\" cy=\"25\" rx=\"4\" ry=\"12\" stroke=\"#2563eb\" stroke-width=\"1.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Titan",
      "html": "<div class=\"partner-logo-item\" title=\"Titan\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"800\" font-size=\"12\" fill=\"#d4af37\" text-anchor=\"middle\" letter-spacing=\"1.5\">TITAN</text>\n    </svg></div>"
    },
    {
      "title": "KFC",
      "html": "<div class=\"partner-logo-item\" title=\"KFC\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" rx=\"4\" fill=\"#e30613\"/>\n        <line x1=\"29\" y1=\"13\" x2=\"29\" y2=\"37\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n        <line x1=\"35\" y1=\"13\" x2=\"35\" y2=\"37\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n        <line x1=\"41\" y1=\"13\" x2=\"41\" y2=\"37\" stroke=\"#ffffff\" stroke-width=\"2.5\"/>\n    </svg></div>"
    },
    {
      "title": "Domino’s",
      "html": "<div class=\"partner-logo-item\" title=\"Domino’s\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"23\" y=\"13\" width=\"24\" height=\"24\" rx=\"2\" fill=\"#0078ac\" transform=\"rotate(15 35 25)\"/>\n        <rect x=\"23\" y=\"13\" width=\"12\" height=\"24\" rx=\"1\" fill=\"#e30613\" transform=\"rotate(15 35 25)\"/>\n        <circle cx=\"29\" cy=\"19\" r=\"2\" fill=\"#ffffff\"/>\n        <circle cx=\"41\" cy=\"25\" r=\"2\" fill=\"#ffffff\"/>\n        <circle cx=\"41\" cy=\"31\" r=\"2\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Tim Hortons",
      "html": "<div class=\"partner-logo-item\" title=\"Tim Hortons\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"800\" font-size=\"10\" fill=\"#ef4444\" text-anchor=\"middle\">Tim Hortons</text>\n    </svg></div>"
    },
    {
      "title": "Pressto",
      "html": "<div class=\"partner-logo-item\" title=\"Pressto\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,32 L35,16 L47,32 Z\" stroke=\"#3b82f6\" stroke-width=\"2.5\" fill=\"none\"/>\n        <line x1=\"20\" y1=\"32\" x2=\"50\" y2=\"32\" stroke=\"#3b82f6\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg></div>"
    },
    {
      "title": "Pancake",
      "html": "<div class=\"partner-logo-item\" title=\"Pancake\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"27\" r=\"11\" fill=\"#f59e0b\"/>\n        <circle cx=\"35\" cy=\"24\" r=\"11\" fill=\"#fbbf24\"/>\n        <path d=\"M31,18 Q35,15 39,20\" stroke=\"#b45309\" stroke-width=\"2.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Lakmé",
      "html": "<div class=\"partner-logo-item\" title=\"Lakmé\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"800\" font-size=\"11\" fill=\"#ffffff\" text-anchor=\"middle\" letter-spacing=\"1.5\">LAKMÉ</text>\n    </svg></div>"
    },
    {
      "title": "BBlunt",
      "html": "<div class=\"partner-logo-item\" title=\"BBlunt\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11\" fill=\"#ec4899\" text-anchor=\"middle\">BBLUNT</text>\n    </svg></div>"
    },
    {
      "title": "The Kapil Salon",
      "html": "<div class=\"partner-logo-item\" title=\"The Kapil Salon\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,20 C23,16 28,16 30,22 L35,27 L40,22 C42,16 47,16 47,20 C47,27 35,37 35,37 C35,37 23,27 23,20 Z\" fill=\"#94a3b8\"/>\n        <circle cx=\"30\" cy=\"18\" r=\"2.5\" fill=\"#040c21\"/>\n        <circle cx=\"40\" cy=\"18\" r=\"2.5\" fill=\"#040c21\"/>\n    </svg></div>"
    },
    {
      "title": "PopTox",
      "html": "<div class=\"partner-logo-item\" title=\"PopTox\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M26,35 L23,19 H47 L44,35 Z\" fill=\"#f97316\"/>\n        <circle cx=\"31\" cy=\"16\" r=\"3.5\" fill=\"#ffffff\"/>\n        <circle cx=\"35\" cy=\"13\" r=\"4.5\" fill=\"#ffffff\"/>\n        <circle cx=\"39\" cy=\"16\" r=\"3.5\" fill=\"#ffffff\"/>\n    </svg></div>"
    },
    {
      "title": "Subway",
      "html": "<div class=\"partner-logo-item\" title=\"Subway\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,18 H38 M38,18 L34,13 M38,18 L34,23\" stroke=\"#008000\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M50,32 H32 M32,32 L36,27 M32,32 L36,37\" stroke=\"#ffcc00\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Tanishq",
      "html": "<div class=\"partner-logo-item\" title=\"Tanishq\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,11 47,21 35,37 23,21\" fill=\"#d4af37\"/>\n        <circle cx=\"35\" cy=\"23\" r=\"5\" fill=\"#040c21\"/>\n    </svg></div>"
    },
    {
      "title": "Raymond",
      "html": "<div class=\"partner-logo-item\" title=\"Raymond\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"800\" font-size=\"10.5\" fill=\"#ffffff\" text-anchor=\"middle\">Raymond</text>\n    </svg></div>"
    },
    {
      "title": "NRich",
      "html": "<div class=\"partner-logo-item\" title=\"NRich\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M23,35 V15 L37,27 V15 M47,35 H42 M28,15 H23\" stroke=\"#22c55e\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Croma",
      "html": "<div class=\"partner-logo-item\" title=\"Croma\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"11.5\" fill=\"#22c55e\" text-anchor=\"middle\">croma</text>\n    </svg></div>"
    },
    {
      "title": "Westside",
      "html": "<div class=\"partner-logo-item\" title=\"Westside\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"5\" y=\"13\" width=\"60\" height=\"24\" fill=\"#ffffff\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"9\" fill=\"#000000\" text-anchor=\"middle\" letter-spacing=\"0.5\">WESTSIDE</text>\n    </svg></div>"
    },
    {
      "title": "Zudio",
      "html": "<div class=\"partner-logo-item\" title=\"Zudio\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"5\" y=\"13\" width=\"60\" height=\"24\" fill=\"#000000\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"10.5\" fill=\"#ffffff\" text-anchor=\"middle\" letter-spacing=\"0.5\">ZUDIO</text>\n    </svg></div>"
    },
    {
      "title": "Pepperfry",
      "html": "<div class=\"partner-logo-item\" title=\"Pepperfry\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"11\" stroke=\"#ff5a00\" stroke-width=\"3.5\" fill=\"none\"/>\n        <circle cx=\"35\" cy=\"25\" r=\"4\" fill=\"#ff5a00\"/>\n    </svg></div>"
    },
    {
      "title": "Apollo Pharmacy",
      "html": "<div class=\"partner-logo-item\" title=\"Apollo Pharmacy\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,10 47,18 47,32 35,40 23,32 23,18\" fill=\"#ef4444\"/>\n        <path d=\"M35,17 V33 M27,25 H43\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\"/>\n    </svg></div>"
    },
    {
      "title": "Noble Medical",
      "html": "<div class=\"partner-logo-item\" title=\"Noble Medical\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <polygon points=\"35,11 46,17 46,31 35,37 24,31 24,17\" fill=\"#3b82f6\"/>\n        <path d=\"M35,16 V32 M27,24 H43\" stroke=\"#ffffff\" stroke-width=\"2.5\" stroke-linecap=\"round\"/>\n    </svg></div>"
    },
    {
      "title": "Burger King",
      "html": "<div class=\"partner-logo-item\" title=\"Burger King\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,23 C20,15 50,15 50,23\" fill=\"#f59e0b\"/>\n        <path d=\"M20,27 C20,35 50,35 50,27\" fill=\"#f59e0b\"/>\n        <text x=\"35\" y=\"28\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"8\" fill=\"#e30613\" text-anchor=\"middle\">KING</text>\n    </svg></div>"
    },
    {
      "title": "Pizza Hut",
      "html": "<div class=\"partner-logo-item\" title=\"Pizza Hut\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M15,22 Q35,8 55,22 L51,26 H19 Z\" fill=\"#ef4444\"/>\n        <rect x=\"23\" y=\"28\" width=\"24\" height=\"4\" fill=\"#f59e0b\"/>\n    </svg></div>"
    },
    {
      "title": "Flipkart",
      "html": "<div class=\"partner-logo-item\" title=\"Flipkart\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"22\" y=\"13\" width=\"26\" height=\"24\" rx=\"3\" fill=\"#2874f0\"/>\n        <path d=\"M28,13 V23 C28,26 32,28 35,28 C38,28 42,26 42,23 V13\" stroke=\"#ffe500\" stroke-width=\"2.5\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Amazon",
      "html": "<div class=\"partner-logo-item\" title=\"Amazon\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M20,20 C23,17 31,17 34,22 C37,20 44,17 47,20\" stroke=\"#ffffff\" stroke-width=\"3.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M22,27 Q35,37 48,27\" stroke=\"#ff9900\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"/>\n        <path d=\"M44,29 L48,27 L45,34\" stroke=\"#ff9900\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "Airtel",
      "html": "<div class=\"partner-logo-item\" title=\"Airtel\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" fill=\"#ff0000\"/>\n        <path d=\"M30,30 C30,23 40,23 40,30\" stroke=\"#ffffff\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n    </svg></div>"
    },
    {
      "title": "BOX8",
      "html": "<div class=\"partner-logo-item\" title=\"BOX8\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <rect x=\"12\" y=\"12\" width=\"46\" height=\"26\" rx=\"4\" fill=\"#000000\" stroke=\"#ffffff\" stroke-width=\"1.5\"/>\n        <text x=\"35\" y=\"29\" font-family=\"'Outfit', sans-serif\" font-weight=\"900\" font-size=\"10.5\" fill=\"#ef4444\" text-anchor=\"middle\">BOX8</text>\n    </svg></div>"
    },
    {
      "title": "The Bombay Nail Company",
      "html": "<div class=\"partner-logo-item\" title=\"The Bombay Nail Company\"><svg class=\"partner-svg\" width=\"70\" height=\"50\" viewBox=\"0 0 70 50\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <circle cx=\"35\" cy=\"25\" r=\"13\" stroke=\"#ec4899\" stroke-width=\"2\" fill=\"none\"/>\n        <rect x=\"32\" y=\"17\" width=\"6\" height=\"16\" rx=\"1\" fill=\"#ec4899\"/>\n    </svg></div>"
    }
  ]
};
