
// src/lib/quoteServices.ts

export interface QuoteService {
  id: string;
  name: string;
  description: string;
}

export const quoteServices: QuoteService[] = [
  {
    id: 'general-supplies',
    name: 'General Supplies',
    description: 'Request a quote for office equipment, construction materials, safety gear, and more.',
  },
  {
    id: 'borehole-drilling',
    name: 'Borehole Drilling',
    description: 'Get a quote for water well drilling, geological surveys, and installation services.',
  },
  {
    id: 'meat-supply-export',
    name: 'Meat Supply & Export',
    description: 'Inquire about bulk meat supply, export logistics, and specific packaging needs.',
  },
  {
    id: 'road-construction',
    name: 'Road Construction',
    description: 'Request a quote for new road construction, paving, and drainage projects.',
  },
];