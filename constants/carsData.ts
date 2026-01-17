
export interface Car {
  id: string;
  name: string;
  category: 'Luxe' | 'Économie' | 'SUV' | 'Familiale' | 'Sport';
  pricePerDay: number;
  image: string;
  features: {
    transmission: 'Automatique' | 'Manuelle';
    seats: number;
    fuel: string;
    ac: boolean;
  };
  description: string;
  isAvailable: boolean;
}

export const carsData: Car[] = [
  {
    id: '1',
    name: 'Range Rover Sport',
    category: 'Luxe',
    pricePerDay: 1500,
    image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Vivez l\'apogée du luxe et de la puissance. Parfait pour sillonner les rues de Marrakech ou s\'aventurer vers l\'Atlas dans un confort absolu.',
    isAvailable: true
  },
  {
    id: '2',
    name: 'Dacia Duster 4x4',
    category: 'SUV',
    pricePerDay: 450,
    image: 'https://images.unsplash.com/photo-1621348160309-848885695880?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Manuelle', seats: 5, fuel: 'Diesel', ac: true },
    description: 'Le choix robuste pour les routes marocaines. Fiable, spacieux et prêt pour toutes vos aventures.',
    isAvailable: true
  },
  {
    id: '3',
    name: 'Mercedes-Benz Classe E',
    category: 'Luxe',
    pricePerDay: 1200,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Essence', ac: true },
    description: 'L\'élégance rencontre la performance. Un favori pour les voyageurs d\'affaires et le tourisme haut de gamme dans la Ville Rouge.',
    isAvailable: true
  },
  {
    id: '4',
    name: 'Hyundai i10',
    category: 'Économie',
    pricePerDay: 250,
    image: 'https://images.unsplash.com/photo-1620310237583-f38f71be9702?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Manuelle', seats: 4, fuel: 'Essence', ac: true },
    description: 'Compacte et agile. Le meilleur moyen de naviguer dans les ruelles animées et de trouver un stationnement près de la Médina.',
    isAvailable: true
  },
  {
    id: '5',
    name: 'Volkswagen Tiguan',
    category: 'SUV',
    pricePerDay: 700,
    image: 'https://images.unsplash.com/photo-1541014741259-de5294113961?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 5, fuel: 'Diesel', ac: true },
    description: 'L\'ingénierie allemande au service du confort. Intérieur spacieux pour les familles explorant les environs de Marrakech.',
    isAvailable: true
  },
  {
    id: '6',
    name: 'Porsche 911 Carrera',
    category: 'Sport',
    pricePerDay: 3500,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    features: { transmission: 'Automatique', seats: 2, fuel: 'Essence', ac: true },
    description: 'Pour ceux qui veulent marquer les esprits. Des performances inégalées pour une escapade sur la côte.',
    isAvailable: true
  }
    {
    id: '7',
    name: 'BYD SEAL U PHEV',
    category: 'Familiale',
    pricePerDay: 2500,
    image: 'https://autohub.ma/wp-content/uploads/2024/11/byd-seal-u-5.jpg',
    features: { transmission: 'Automatique', seats: 2, fuel: 'Essence', ac: true },
    description: 'Pour ceux qui veulent marquer les esprits. Des performances inégalées pour une escapade sur la côte.',
    isAvailable: true
  }
];
