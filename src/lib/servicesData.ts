// lib/servicesData.ts

export interface Service {
  id: string
  name: string
  shortDescription: string
  longDescription: string[]
  imageUrl: string
}

export const servicesData: Service[] = [
  {
    id: 'general-supplies',
    name: 'General Supplies',
    shortDescription:
      'Providing a wide range of essential supplies for offices, construction, and households.',
    longDescription: [
      'We offer a comprehensive range of general supplies, ensuring quality and timely delivery for various needs. Our offerings include:',
      '- Office equipment and stationery: From pens and paper to printers and furniture, we equip your workspace.',
      '- Construction materials: High-quality building materials for all your construction projects.',
      '- Safety gear and PPE: Essential personal protective equipment to ensure workplace safety.',
      '- Electrical and plumbing supplies: Reliable components for all electrical and plumbing installations.',
      '- Household and institutional consumables: Daily necessities for homes and large institutions.',
    ],
    imageUrl:
      '/assets/flighthero2.webp',
  },
  {
    id: 'borehole-drilling',
    name: 'Borehole Drilling',
    shortDescription: 'Expert services in water solutions, from surveys to installation and maintenance.',
    longDescription: [
      'Indardek Limited specializes in providing complete borehole drilling solutions, ensuring access to clean and reliable water sources.',
      'Our services include:',
      '- Hydrogeological surveys: Professional assessment to identify optimal drilling locations.',
      '- Borehole siting and drilling: Precision drilling using advanced equipment.',
      '- Pump installation and maintenance: Installation of efficient pumping systems and ongoing maintenance.',
      '- Water testing and treatment: Ensuring water quality meets health standards through testing and treatment.',
      '- Borehole rehabilitation: Restoration of existing boreholes to improve functionality and water yield.',
    ],
    imageUrl:
      '/assets/flighthero2.webp',
  },
  {
    id: 'road-construction',
    name: 'Road Construction',
    shortDescription: 'Building and maintaining robust road networks for sustainable development.',
    longDescription: [
      'We are experts in road construction, delivering durable and well-engineered infrastructure projects.',
      'Our capabilities cover:',
      '- Earthworks and grading: Preparation of the ground for road construction.',
      '- Paving and surfacing (bitumen, murram): Application of high-quality paving materials.',
      '- Drainage and culvert installation: Ensuring proper water management to prevent road damage.',
      '- Road signage and markings: Installation of clear and compliant road signs and markings.',
      '- Road maintenance and rehabilitation: Ongoing upkeep and restoration of road networks.',
    ],
    imageUrl:
      '/assets/flighthero2.webp',
  },
  {
    id: 'meat-supply-export',
    name: 'Meat Supply and Export',
    shortDescription: 'Sourcing, processing, and exporting high-quality meat products globally.',
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
      '/assets/flighthero2.webp',
  },
]
