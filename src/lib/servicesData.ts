// lib/servicesData.ts

export interface Service {
  id: string
  name: string
  shortDescription: string
  longDescription: string[] // Added this line to define the property
  imageUrl: string
}

export const servicesData: Service[] = [
  {
    id: 'general-supplies',
    name: 'General Supplies',
    shortDescription:
      'We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs, from office essentials to construction materials and household consumables.',
    longDescription: [
      'We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs. Our offerings include:',
      '- Office equipment and stationery: From pens and paper to printers and furniture, we equip your workspace.',
      '- Construction materials: High-quality building materials for all your construction projects.',
      '- Safety gear and PPE: Essential personal protective equipment to ensure workplace safety.',
      '- Electrical and plumbing supplies: Reliable components for all electrical and plumbing installations.',
      '- Household and institutional consumables: Daily necessities for homes and large institutions.',
    ],
    imageUrl:
      '/assets/general.jpg', // Distinct placeholder
  },
  {
    id: 'borehole-drilling',
    name: 'Borehole Drilling',
    shortDescription: 'Indardek Limited specializes in complete borehole drilling solutions, ensuring access to clean and reliable water sources for various applications.',
    longDescription: [
      'Indardek Limited specializes in complete borehole drilling solutions, ensuring access to clean and reliable water sources for various applications.',
      'Our comprehensive services include:',
      '- Hydrogeological surveys: Expert assessment to identify optimal drilling locations.',
      '- Borehole drilling and construction: Utilizing advanced techniques for efficient and sustainable boreholes.',
      '- Test pumping and water quality analysis: Ensuring yield and potability of water sources.',
      '- Pump installation and reticulation systems: Setting up efficient water distribution systems.',
      '- Borehole rehabilitation and maintenance: Extending the lifespan and efficiency of existing boreholes.',
    ],
    imageUrl:
      '/assets/borehole.jpg', // Distinct placeholder
  },
  {
    id: 'road-construction',
    name: 'Road Construction',
    shortDescription: 'Indardek Limited delivers high-quality road construction services, from design and excavation to paving and maintenance, ensuring durable and safe infrastructure.',
    longDescription: [
      'Indardek Limited delivers high-quality road construction services, from design and excavation to paving and maintenance, ensuring durable and safe infrastructure.',
      'Our services encompass:',
      '- Road design and planning: Comprehensive planning for efficient and safe road networks.',
      '- Earthworks and excavation: Preparing the ground for stable road foundations.',
      '- Pavement and surfacing: Application of durable and high-quality road surfaces.',
      '- Drainage systems: Installation of effective drainage management to prevent road damage.',
      '- Road signage and markings: Installation of clear and compliant road signs and markings.',
      '- Road maintenance and rehabilitation: Ongoing upkeep and restoration of road networks.',
    ],
    imageUrl:
      '/assets/road.jpg', // Distinct placeholder
  },
  {
    id: 'meat-supply-export',
    name: 'Meat Supply and Export',
    shortDescription: 'Indardek Limited is a trusted supplier and exporter of premium quality meat products (beef, goat, lamb), ensuring ethical sourcing, hygienic processing, and cold chain delivery globally.',
    longDescription: [
      'Indardek Limited is a trusted supplier and exporter of premium quality meat products.',
      'Our services include:',
      '- Sourcing and processing of high-quality meat (beef, goat, lamb): Ensuring ethical sourcing and hygienic processing.',
      '- Supply to institutions, hotels, and large-scale buyers: Reliable delivery to various clients.',
      '- Compliance with international food safety standards: Adherence to stringent global safety regulations.',
      '- Export logistics and documentation: Efficient handling of all export procedures.',
      '- Cold chain transportation and delivery: Maintaining optimal conditions for meat products during transit.',
    ],
    imageUrl:
      '/assets/meat.jpg', // Distinct placeholder
  },
];