
export interface Car {
  id: string;
  name: string;
  category: 'Luxe' | 'Économie' | 'SUV' | 'Familiale';
  image: string;
  features: {
    transmission: 'Automatique' | 'Manuelle';
    seats: number;
    fuel: string;
    ac: boolean;
    extra?: string;
  };
  description: string;
  pricePerDay: number;
}

export const carsData: Car[] = [
  {
    id: 'logan',
    name: 'Dacia Logan',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1621348160309-848885695880?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'La référence de la fiabilité au Maroc. Idéale pour les longs trajets avec une consommation minimale.',
    pricePerDay: 250
  },
  {
    id: 'sandero',
    name: 'Dacia Sandero',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1620310237583-f38f71be9702?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Citadine polyvalente et robuste, parfaite pour naviguer entre ville et campagne.',
    pricePerDay: 250
  },
  {
    id: 'corsa',
    name: 'Opel Corsa',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Élégance allemande et confort de conduite. Une citadine premium pour vos déplacements.',
    pricePerDay: 300
  },
  {
    id: 'i10',
    name: 'Hyundai i10',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 4, fuel: 'Essence', ac: true },
    description: 'Agile et facile à garer. Le choix idéal pour la circulation urbaine intense.',
    pricePerDay: 250
  },
  {
    id: 'i20',
    name: 'Hyundai i20 avec Toit',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1631830206603-4f51e0892095?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true, extra: 'Toit Ouvrant' },
    description: 'Plus d\'espace et de style avec son toit ouvrant. Confort et modernité réunis.',
    pricePerDay: 300
  },
  {
    id: 'accent',
    name: 'Hyundai Accent',
    category: 'Économie',
    image: 'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'Une berline fluide et confortable pour vos voyages d\'affaires ou de loisirs.',
    pricePerDay: 350
  },
  {
    id: 'tucson',
    name: 'Hyundai Tucson avec Toit',
    category: 'SUV',
    image: 'https://images.unsplash.com/photo-1583267746897-2cf415888171?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Diesel', ac: true, extra: 'Toit Ouvrant' },
    description: 'Luxe et puissance. Un SUV spacieux avec toit panoramique pour une expérience de route inégalée.',
    pricePerDay: 600
  }
];
