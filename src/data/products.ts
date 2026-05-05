export type Product = {
  id: string;
  name: string;
  price: string;
  discount?: string;
  category: 'Traditional' | 'Modern' | 'Special Occasion';
  image: string;
  caption: string;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Imperial Tillet Chiffon',
    price: '7,500 ETB',
    discount: '10% OFF',
    category: 'Special Occasion',
    image: '/assets/dresses/dress-1.jpg',
    caption: 'Majestic embroidery on heavy silk chiffon.'
  },
  {
    id: '2',
    name: 'Modern Addis Flare',
    price: '4,200 ETB',
    category: 'Modern',
    image: '/assets/dresses/dress-2.jpg',
    caption: 'Chic urban style with traditional motifs.'
  },
  {
    id: '3',
    name: 'Heritage Golden Wrap',
    price: '5,800 ETB',
    discount: 'NEW',
    category: 'Traditional',
    image: '/assets/dresses/dress-3.jpg',
    caption: 'Classic hand-woven gold tillet details.'
  },
  {
    id: '4',
    name: 'Royal Bridal Gown',
    price: '15,000 ETB',
    category: 'Special Occasion',
    image: '/assets/dresses/dress-4.jpg',
    caption: 'Exquisite bridal wear for the modern queen.'
  },
  {
    id: '5',
    name: 'Sky Blue Chiffon',
    price: '3,500 ETB',
    category: 'Modern',
    image: '/assets/dresses/dress-5.jpg',
    caption: 'Light, breathable, and culturally vibrant.'
  },
  {
    id: '6',
    name: 'Traditional Motif Set',
    price: '6,200 ETB',
    category: 'Traditional',
    image: '/assets/dresses/dress-6.jpg',
    caption: 'Timeless patterns for every celebration.'
  },
  {
    id: '7',
    name: 'Emerald Evening Flow',
    price: '8,400 ETB',
    discount: 'LIMITED',
    category: 'Special Occasion',
    image: '/assets/dresses/dress-7.jpg',
    caption: 'Sophisticated drape for high-end events.'
  },
  {
    id: '8',
    name: 'Addis Modern Mesh',
    price: '4,800 ETB',
    category: 'Modern',
    image: '/assets/dresses/dress-8.jpg',
    caption: 'A fusion of modern textures and Ethiopian art.'
  },
  {
    id: '9',
    name: 'Classic White Tillet',
    price: '5,500 ETB',
    category: 'Traditional',
    image: '/assets/dresses/dress-9.jpg',
    caption: 'Purity and tradition in every stitch.'
  },
  {
    id: '10',
    name: 'Sunset Chiffon Wrap',
    price: '3,900 ETB',
    category: 'Modern',
    image: '/assets/dresses/dress-10.jpg',
    caption: 'Vibrant colors meeting traditional craftsmanship.'
  },
  {
    id: '11',
    name: 'Artisan Signature Piece',
    price: '12,000 ETB',
    discount: 'EXCLUSIVE',
    category: 'Special Occasion',
    image: '/assets/dresses/dress-11.jpg',
    caption: 'Hand-crafted by master weavers in Addis.'
  },
  {
    id: '12',
    name: 'Vintage Ethiopian Drape',
    price: '6,500 ETB',
    category: 'Traditional',
    image: '/assets/dresses/dress-12.jpg',
    caption: 'A tribute to the golden era of Habesha style.'
  }
];
