export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
  forWhom: string;
}

export const services: Service[] = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    tagline: "Reliable, independent verification that strengthens financial systems and stakeholder trust.",
    description:
      "Our audit and assurance services ensure transparency and accuracy in your financial records. From statutory audits to forensic investigations, we tailor each engagement to your specific regulatory and business requirements.",
    items: [
      "Statutory Audit under the Companies Act 2013",
      "Internal Audit and management systems review",
      "Tax Audit under Section 44AB of the Income Tax Act",
      "Stock & Receivables Audit for banks and NBFCs",
      "Concurrent Audit and revenue audit assignments",
      "Forensic Audit and fraud investigation",
      "CSR Audit and compliance verification",
      "Bank Branch Audit",
      "Special Purpose Audit for due diligence and transactions",
    ],
    forWhom:
      "Companies, LLPs, partnerships, and proprietorships requiring independent financial verification for regulatory, banking, or business purposes.",
  },
  {
    id: "gst",
    title: "GST Services",
    tagline: "End-to-end GST compliance — from registration to refunds — so you stay stress-free and penalty-free.",
    description:
      "Our GST solutions simplify compliance for businesses of all sizes. From seamless GST registration to filing returns, handling assessments, and providing expert advisory services, we ensure you stay compliant and stress-free.",
    items: [
      "GST Registrations — regular, composition, casual, and non-resident",
      "GST Refunds — export refunds, inverted duty structure, and excess payment",
      "GST Return Filing — GSTR-1, GSTR-3B, GSTR-9, GSTR-9C",
      "GST Assessments & Notices — drafting replies and departmental representation",
      "GST Advisory on classification, applicable rates, and exemptions",
      "Input Tax Credit (ITC) reconciliation and optimisation",
      "E-invoicing and e-way bill compliance",
      "GST appeal before Appellate Authority (AA) and Tribunal",
    ],
    forWhom:
      "Any business registered or liable to register under GST — from traders and manufacturers to service providers and e-commerce operators.",
  },
  {
    id: "income-tax",
    title: "Income Tax & Advisory",
    tagline: "Accurate filings, proactive planning, and effective representation — across all tax matters.",
    description:
      "Comprehensive income tax solutions for individuals, businesses, and NRIs. We specialise in accurate filings, personalised advisory, and resolving tax notices while helping you stay ahead in compliance.",
    items: [
      "Tax Filings — ITR for individuals, HUFs, firms, LLPs, and companies",
      "Tax Advisory — year-round planning, structuring, and optimisation",
      "Tax Assessments — scrutiny, best judgement, and departmental proceedings",
      "Tax Notices — drafting replies and follow-up with income tax department",
      "NRI Taxation — Indian income, DTAA benefits, and FEMA compliance",
      "TDS / TCS — return filing, reconciliation, and lower deduction certificates",
      "Rectifications under Section 154 of the Income Tax Act",
      "Demand Notices — resolution, payment of outstanding tax, and appeals",
      "Capital Gains — computation, exemption claims, and reinvestment planning",
      "Advance Tax computation, planning, and instalment payments",
    ],
    forWhom:
      "Salaried individuals, business owners, HUFs, NRIs, companies, and trusts with taxable income in India.",
  },
  {
    id: "startup-registrations",
    title: "Startup & Registrations",
    tagline: "From idea to incorporation — every registration your business needs, done right from the start.",
    description:
      "Launch your dream business with our complete registration and compliance services. We guide you through every step — from proprietorship and company setup to obtaining essential licenses and recognitions.",
    items: [
      "Proprietorship, Partnership, OPC, Company, LLP, and Trust Registrations",
      "TDS Registrations (TAN) for businesses deducting tax at source",
      "Provident Fund (PF) Registrations",
      "Employee State Insurance (ESI) Registrations",
      "Professional Tax (PT) Registrations",
      "Startup India (DPIIT) Recognition and benefits",
      "MSME — Udyam Registration",
      "Trade, Labour, EC, and FSSAI Licenses",
      "Import Export Code (IEC) Registration",
      "Trademark, copyright, and intellectual property filings",
      "GST Registration as part of business setup",
    ],
    forWhom:
      "Founders, entrepreneurs, and growing businesses that want a fully compliant legal structure from Day 1.",
  },
  {
    id: "business-support",
    title: "Business Support Services",
    tagline: "Your complete back-office finance function — accounting, payroll, CFO support, and beyond.",
    description:
      "Simplify your business operations with our expert accounting, payroll, and bookkeeping solutions. From Virtual CFO services to due diligence, we help you focus on growth.",
    items: [
      "Accounting & Book Keeping — Tally, Zoho Books, QuickBooks, and more",
      "Virtual CFO — strategic financial guidance without a full-time hire",
      "Due Diligence — financial, tax, and regulatory assessment",
      "Payroll Services — processing, payslips, PF/ESI/PT compliance",
      "Buy Back Advisory & Compliances",
      "Mergers & Acquisitions — structuring, valuation, and tax advisory",
      "Demergers and business restructuring support",
      "Certifications — net worth, turnover, receipts, and utilisation certificates",
      "Regulatory Compliances — SEBI, RBI, and sector-specific requirements",
      "MIS reports, budgeting, and variance analysis",
      "Financial projections and business plan preparation",
    ],
    forWhom:
      "SMEs, start-ups, and growing businesses that need a professional finance function without the cost of building one in-house.",
  },
  {
    id: "project-finance",
    title: "Project Finance",
    tagline: "Customised debt solutions to fund your capital investments and working capital needs.",
    description:
      "Fuel your growth with customised finance solutions. We assist in procuring working capital, term loans, and various other financing options to meet your business needs.",
    items: [
      "Working Capital — CC and OD facility proposals",
      "CC/TME Loans",
      "Term Loans for capital expenditure and expansion",
      "Housing Loans and property finance",
      "Loan Against Property (LAP)",
      "Non-Fund-Based Limits — Letter of Credit (LC), Bank Guarantee (BG), FLC",
      "Unsecured Business Loans",
      "Detailed Project Reports (DPR) for bank and NBFC financing",
      "CMA Data preparation and working capital assessment",
      "Government subsidy and incentive scheme advisory",
    ],
    forWhom:
      "Businesses planning capital investments, expansions, or new projects that require external debt financing from banks or NBFCs.",
  },
  {
    id: "legal-secretarial",
    title: "Legal & Secretarial Compliances",
    tagline: "Seamless compliance with company law, RBI, FEMA, and MSME regulations — end to end.",
    description:
      "Ensure smooth and hassle-free compliance with our tailored legal and secretarial services. We cater to individuals, MSMEs, and companies, helping them stay ahead of regulations.",
    items: [
      "RBI Compliances — FDI, ODI, ECB, and other regulatory filings",
      "FEMA Transactions — inbound and outbound cross-border dealings",
      "MSME Transactions and Form MSME-1 half-yearly compliance",
      "Secretarial Compliances — board minutes, resolutions, and statutory registers",
      "Conversion to Foreign Company Subsidiary and establishment",
      "Annual ROC Filings — AOC-4, MGT-7, ADT-1, and related forms",
      "Director appointment, resignation, DIN, and DSC services",
      "Share allotment, transfer, transmission, and capital restructuring",
      "Company name change, conversion, and registered office shift",
      "Winding-up, strike-off, and voluntary liquidation",
    ],
    forWhom:
      "Private and public companies, LLPs, and foreign subsidiaries requiring ongoing secretarial support, RBI/FEMA compliance, and MCA filings.",
  },
  {
    id: "rera",
    title: "RERA Services",
    tagline: "Complete RERA compliance for promoters and agents — registrations, audits, and advisory.",
    description:
      "Stay compliant with RERA regulations through our expert assistance. From registrations to audits and certifications, we provide end-to-end support for your real estate projects.",
    items: [
      "RERA Registrations — projects and agents (TSRERA / AP RERA)",
      "RERA Certifications and project-level financial statement preparation",
      "RERA Audits — quarterly and annual project compliance",
      "RERA Advisory on promoter and agent obligations",
      "Quarterly compliance reports to the regulatory authority",
      "Designated bank account monitoring and fund reconciliation",
      "RERA notice handling, hearings, and complaint representation",
      "Guidance on FSI utilisation, project timelines, and extension requests",
    ],
    forWhom:
      "Real-estate developers, builders, and registered agents who need to comply with RERA regulations in Telangana and Andhra Pradesh.",
  },
  {
    id: "valuations",
    title: "Valuations",
    tagline: "Credible, defensible valuations for transactions, compliance, fund-raising, and strategic decisions.",
    description:
      "Accurate and reliable valuations are key to sound decision-making. We specialise in valuation of companies, shares, securities, and intangibles for compliance and growth.",
    items: [
      "Company Valuation for M&A, investment rounds, and disputes",
      "Pitch Deck preparation and investor-ready financial modelling",
      "Valuation of Shares & Securities under Income Tax and FEMA",
      "Valuation of Intangibles — brand, goodwill, patents, and IP",
      "ESOP (Employee Stock Option Plan) valuation and scheme advisory",
      "Fair value assessment for financial reporting (Ind AS / IFRS)",
      "Net Worth Certificate for visa, immigration, and loan purposes",
      "Business restructuring valuation and fairness opinions",
    ],
    forWhom:
      "Businesses and individuals requiring a certified, independent valuation for regulatory submissions, investment decisions, or litigation support.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.id === slug);
}
