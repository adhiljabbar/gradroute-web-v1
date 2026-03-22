export const destinationsData = {
  uk: {
    id: 'uk',
    name: "United Kingdom",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "Study in the heart of academic excellence and historical prestige.",
    description: "The UK is home to some of the world's oldest and most respected universities, including Oxford, Cambridge, and Imperial. A major advantage of UK education is the shorter course duration (1-year Master's and 3-year Bachelor's), which significantly reduces both tuition fees and living costs while accelerating your entry into the highly competitive global workforce.",
    whyStudy: [
      { title: "Academic Excellence", desc: "Degrees are globally recognized and highly respected by massive employers." },
      { title: "Post-Study Work Visa", desc: "The Graduate route allows international students to stay and work for 2 years (3 years for PhD)." },
      { title: "Cultural Diversity", desc: "A robust multicultural society with rich historical significance and global connections." }
    ],
    topPrograms: ["Business & Management", "Engineering & Technology", "Law", "Medicine", "Data Science"],
    requirements: [
      "Valid Passport & Student Visa (Tier 4)",
      "IELTS (6.0 - 7.5) or equivalent English proficiency validation",
      "Statement of Purpose (SOP)",
      "2-3 Letters of Recommendation (LOR)",
      "Proof of financial support for exact tuition and living"
    ],
    costOfLiving: "£9,000 - £14,000 per year (varies by city; London is more expensive)."
  },
  usa: {
    id: 'usa',
    name: "United States",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "The land of opportunity and cutting-edge research.",
    description: "The US hosts the largest number of international students globally. Renowned for its flexible education system, unparalleled campus life, and pioneering research facilities across the Ivy League and beyond, the US offers a dynamic, diverse environment for ambitious, forward-thinking students.",
    whyStudy: [
      { title: "Academic Flexibility", desc: "Unmatched ability to explore varied subjects before declaring a fixed major." },
      { title: "OPT/CPT Opportunities", desc: "Valuable practical training opportunities allowing you to work in your exact field of study." },
      { title: "Cutting-Edge Tech", desc: "Direct access to world-class research labs and leading global tech hubs (Silicon Valley, NYC)." }
    ],
    topPrograms: ["Computer Science", "Engineering", "Business (MBA)", "Healthcare & Bioengineering", "Media & Communications"],
    requirements: [
      "F-1 Student Visa",
      "Standardized Tests (GRE/GMAT for Master's, SAT/ACT for Undergrad)",
      "IELTS/TOEFL scores",
      "Comprehensive, narrative SOP and robust LORs",
      "Verified, certified bank statements for I-20 approval"
    ],
    costOfLiving: "$12,000 - $25,000 per year depending heavily on the state, city, and personal lifestyle."
  },
  canada: {
    id: 'canada',
    name: "Canada",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "High-quality education in a safe, welcoming, and beautifully diverse environment.",
    description: "Canada consistently ranks as one of the best countries in the entire world for quality of life. It offers an excellent, affordable education system and some of the most favorable, streamlined immigration policies globally, making it explicitly ideal for students ultimately seeking permanent residency.",
    whyStudy: [
      { title: "Affordable Education", desc: "Tuition fees are generally significantly lower than comparable programs in the US and UK." },
      { title: "Direct PR Pathways", desc: "Extremely favorable points-based immigration system post-graduation via Express Entry." },
      { title: "Safe & Welcoming", desc: "Known globally for its polite society, incredibly low crime rates, and celebrated multiculturalism." }
    ],
    topPrograms: ["Information Technology", "Nursing & Public Healthcare", "Engineering", "Business Administration", "Hospitality"],
    requirements: [
      "Canadian Study Permit",
      "IELTS (usually 6.5 minimum, no band less than 6.0)",
      "Guaranteed Investment Certificate (GIC) of $10,000+ CAD",
      "Official Academic Transcripts & dedicated SOP",
      "Panel Physician Medical examination clearance"
    ],
    costOfLiving: "CAD 12,000 - CAD 15,000 per year on average."
  },
  australia: {
    id: 'australia',
    name: "Australia",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "World-class education surrounded by stunning, iconic landscapes.",
    description: "Australia is celebrated for its incredible lifestyle, fantastic sunny weather, and consistently high-ranking Group of Eight (Go8) universities. The education framework is strictly regulated by the government to ensure premier quality for all international students.",
    whyStudy: [
      { title: "High Standard of Living", desc: "Cities like Melbourne and Sydney frequently rank in the top global livability indexes." },
      { title: "Extensive Work Rights", desc: "Students can easily work during studies, followed by a generous Temporary Graduate Visa." },
      { title: "Innovation Hub", desc: "Leading research happening in environmental sciences, nursing, and marine biology." }
    ],
    topPrograms: ["Nursing & Midwifery", "Accounting & Finance", "Engineering", "Environmental Science", "IT"],
    requirements: [
      "Subclass 500 Student Visa",
      "IELTS or PTE Academic verified scores",
      "Genuine Temporary Entrant (GTE) formal statement",
      "Overseas Student Health Cover (OSHC) purchased beforehand",
      "Proof of rigorously sufficient funds"
    ],
    costOfLiving: "AUD 20,000 - AUD 25,000 per year."
  },
  germany: {
    id: 'germany',
    name: "Germany",
    heroImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "The powerhouse engine of Europe offering premium tuition-free academic education.",
    description: "Germany is a complete paradise for higher education. The vast majority of state-funded public universities charge zero tuition fees, regardless of your nationality. It functions as a massive, respected global hub for engineering, research, and high-technical innovation.",
    whyStudy: [
      { title: "Zero/Low Tuition Fees", desc: "Public universities are virtually free, requiring only a tiny semester contribution." },
      { title: "Engineering Powerhouse", desc: "Unquestioned world leaders in automotive, mechanical, and industrial engineering spaces." },
      { title: "Economic Stability", desc: "Europe's absolute strongest economy providing massive job opportunities across sectors post-graduation." }
    ],
    topPrograms: ["Mechanical/Auto Engineering", "Computer Science", "Business & Economics", "Architecture", "Data Engineering"],
    requirements: [
      "German National Student Visa",
      "Blocked Account (Sperrkonto) loaded with approx. €11,208 for one year",
      "IELTS for English tracks OR official TestDaF/DSH for German tracks",
      "Recognized Bachelor's degree or Studienkolleg for UG programs",
      "Letter of Motivation (LOM)"
    ],
    costOfLiving: "€10,000 - €12,000 per year depending on the region."
  },
  'new-zealand': {
    id: 'new-zealand',
    name: "New Zealand",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    subtitle: "A pristine environment with a highly progressive, practical education model.",
    description: "New Zealand offers a truly unique, peaceful study experience with its breathtaking cinematic landscapes and a highly supportive, student-centric academic environment. Incredibly, all its major universities are ranked in the top 3% globally.",
    whyStudy: [
      { title: "Global Recognition", desc: "A rigorous, respected education system based heavily on the British academic model." },
      { title: "Safe & Peaceful", desc: "Consistently ranked heavily as one of the top five safest countries in the world." },
      { title: "Work-Life Balance", desc: "A phenomenal national focus on mental well-being, outdoor living, and cultural integration." }
    ],
    topPrograms: ["Agriculture & Vet Science", "Information Technology", "Business & PR", "Tourism & Hospitality", "Healthcare"],
    requirements: [
      "New Zealand Fee-Paying Student Visa",
      "IELTS/PTE official Academic Scores",
      "Clean Official Police Clearance Certificate",
      "Comprehensive Panel Medical Examination",
      "Secure Proof of funds for duration"
    ],
    costOfLiving: "NZD 15,000 - NZD 20,000 per year."
  }
};
