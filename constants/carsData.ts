
export interface Car {
  id: string;
  name: string;
  category: 'TOUS' | 'ÉCONOMIE' | 'Luxe' | 'SUV' | 'FAMILLE' | 'SPORT';
  image: string;
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
    image: 'https://leasingoperational.com/wp-content/uploads/2022/03/Dacia-Logan-Alb-2021.jpg',
    pricePerDay: 22,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'La fiabilité Dacia au service de vos trajets. Idéale pour les longs parcours avec une consommation de diesel optimisée.'
  },
  {
    id: 'sandero',
    name: 'Dacia Sandero Stepway',
    category: 'ÉCONOMIE',
    image: 'https://www.leguideauto.ma/contents/cars/pictures/2021/12/large/SvmtWqFZflWrPiO5IK1UYKOTxkx7xVi8UDonOAK5.webp',
    pricePerDay: 22,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Le crossover citadin par excellence. Robuste, spacieux et prêt pour toutes vos aventures marocaines.'
  },
  {
    id: 'corsa',
    name: 'Opel Corsa',
    category: 'ÉCONOMIE',
    image: 'https://venture-mobility.ma/__media/6839bd204c918..png',
    pricePerDay: 25,
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Confort allemand et design moderne. Une citadine dynamique pour vos déplacements urbains et autoroutiers.'
  },
  {
    id: 'i10',
    name: 'Hyundai i10',
    category: 'ÉCONOMIE',
    image: 'https://im.qccdn.fr/node/actualite-hyundai-i10-premieres-impressions-11137/inline-14891.jpg',
    pricePerDay: 20,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'Petite par la taille, grande par le confort. Transmission automatique fluide pour une conduite sans stress en ville.'
  },
  {
    id: 'i20',
    name: 'Hyundai i20 avec Toit',
    category: 'ÉCONOMIE',
    image: 'https://car360.ma/wp-content/uploads/2025/07/208-gris-410x208.jpg',
    pricePerDay: 23,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true, extra: 'Toit Ouvrant' },
    description: 'Style et modernité. Profitez de la lumière du Maroc avec son toit ouvrant et son équipement premium.'
  },
  {
    id: 'accent',
    name: 'Hyundai Accent',
    category: 'ÉCONOMIE',
    image: 'https://static.oneclickdrive.com/car-for-rent/mobile/Hyundai_Accent_2023_31767_31767_25886794520-1_small.jpg',
    pricePerDay: 25,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'Berline élégante offrant une tenue de route irréprochable. Le choix parfait pour allier prestige et économie.'
  },
  {
    id: 'tucson',
    name: 'Hyundai Tucson avec Toit',
    category: 'SUV',
    image: 'https://dmassets.hyundai.com/is/image/hyundaiautoever/Hyundai_TUCSON_Hybrid_MY25_2024',
    pricePerDay: 55,
    features: { transmission: 'Automatique', seats: 5, fuel: 'Diesel', ac: true, extra: 'Toit Ouvrant' },
    description: 'SUV de luxe. Puissance, confort et panoramique. Vivez une expérience de conduite supérieure sur les routes du Royaume.'
  }
];
