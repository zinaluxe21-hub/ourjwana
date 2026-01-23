
export interface Car {
  id: string;
  name: string;
  category: 'TOUS' | 'ÉCONOMIE' | 'Luxe' | 'SUV' | 'FAMILLE' | 'SPORT';
  image: string;
  // Added pricePerDay to match usage in CarDetails.tsx
  pricePerDay: number;
  features: {
    transmission: 'Automatique' | 'Manuelle';
    seats: number;
    fuel: 'Diesel' | 'Essence';
    ac: boolean;
    extra?: string;
  };
  description: string;
}

export const carsData: Car[] = [
  {
    id: 'logan',
    name: 'Dacia Logan',
    category: 'ÉCONOMIE',
    image: 'https://cdn.group.renault.com/dac/master/dacia-new-identities/cars/logan/logan-intro.jpg.ximg.l_12_m.smart.jpg',
    pricePerDay: 250,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'La fiabilité Dacia au service de vos trajets. Idéale pour les longs parcours avec une consommation de diesel optimisée.'
  },
  {
    id: 'sandero',
    name: 'Dacia Sandero Stepway',
    category: 'ÉCONOMIE',
    image: 'https://cdn.group.renault.com/dac/master/dacia-new-identities/cars/sandero-stepway/stepway-intro.jpg.ximg.l_12_m.smart.jpg',
    pricePerDay: 300,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Le crossover citadin par excellence. Robuste, spacieux et prêt pour toutes vos aventures marocaines.'
  },
  {
    id: 'corsa',
    name: 'Opel Corsa',
    category: 'ÉCONOMIE',
    image: 'https://www.opel.ma/content/dam/opel/morocco/master/vehicles/corsa/corsa-launch/highlights/corsa-launch-highlights-desktop.jpg',
    pricePerDay: 350,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Confort allemand et design moderne. Une citadine dynamique pour vos déplacements urbains et autoroutiers.'
  },
  {
    id: 'i10',
    name: 'Hyundai i10',
    category: 'ÉCONOMIE',
    image: 'https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/i10/highlights/hyundai-i10-exterior-highlights-01-pc.jpg',
    pricePerDay: 300,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'Petite par la taille, grande par le confort. Transmission automatique fluide pour une conduite sans stress en ville.'
  },
  {
    id: 'i20',
    name: 'Hyundai i20 avec Toit',
    category: 'ÉCONOMIE',
    image: 'https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/i20/exterior/hyundai-i20-exterior-02-pc.jpg',
    pricePerDay: 350,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true, extra: 'Toit Ouvrant' },
    description: 'Style et modernité. Profitez de la lumière du Maroc avec son toit ouvrant et son équipement premium.'
  },
  {
    id: 'accent',
    name: 'Hyundai Accent',
    category: 'ÉCONOMIE',
    image: 'https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/accent/exterior/hyundai-accent-exterior-01-pc.jpg',
    pricePerDay: 400,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'Berline élégante offrant une tenue de route irréprochable. Le choix parfait pour allier prestige et économie.'
  },
  {
    id: 'tucson',
    name: 'Hyundai Tucson avec Toit',
    category: 'SUV',
    image: 'https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/tucson-2020/exterior/hyundai-tucson-exterior-01-pc.jpg',
    pricePerDay: 700,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Diesel', ac: true, extra: 'Toit Ouvrant' },
    description: 'SUV de luxe. Puissance, confort et panoramique. Vivez une expérience de conduite supérieure sur les routes du Royaume.'
  }
];
