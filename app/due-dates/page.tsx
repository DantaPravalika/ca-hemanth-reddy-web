import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Due Dates",
  description:
    "Compliance calendar with due dates for GST, Income Tax, TDS, PF, ESI, ROC filings for Companies and LLPs in India.",
};

/* ─── Financial Year helpers ──────────────────────────
   India FY runs April 1 → March 31.
   This page is a Server Component so new Date() always
   reflects the actual current date at request time.
──────────────────────────────────────────────────── */

function getFYInfo() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-based

  const fyStart = month >= 4 ? year : year - 1;
  const fyEnd = fyStart + 1;
  const ayStart = fyEnd;
  const ayEnd = ayStart + 1;

  return {
    fy: `${fyStart}-${String(fyEnd).slice(-2)}`,        // e.g. "2026-27"
    ay: `${ayStart}-${String(ayEnd).slice(-2)}`,        // e.g. "2027-28"
    fyStartYear: fyStart,   // e.g. 2026
    fyEndYear: fyEnd,       // e.g. 2027
    ayYear: ayStart,        // e.g. 2027  — the year in which AY returns are due
  };
}

/* ─── Data factories (receive year context) ──────── */

function getMonthlyCompliances() {
  return [
    {
      compliance: "TDS / TCS Payment",
      dueDate: "7th of every month",
      description:
        "Deposit of TDS or TCS deducted or collected during the previous month. For March, the extended due date is 30th April.",
    },
    {
      compliance: "Professional Tax (PT)",
      dueDate: "10th of every month",
      description:
        "Monthly remittance of Professional Tax deducted from employee salaries to the respective State government.",
    },
    {
      compliance: "GSTR-1 (Monthly filers)",
      dueDate: "11th of every month",
      description:
        "Monthly statement of outward supplies filed by regular taxpayers with aggregate annual turnover above ₹5 crore.",
    },
    {
      compliance: "IFF – Invoice Furnishing Facility",
      dueDate: "13th of every month",
      description:
        "Optional facility for QRMP-scheme taxpayers to upload B2B invoices for the first two months of each quarter, enabling recipients to claim ITC.",
    },
    {
      compliance: "PF & ECR Filing",
      dueDate: "15th of every month",
      description:
        "Payment of Provident Fund (PF) contributions and submission of the Electronic Challan cum Return (ECR) for the preceding month.",
    },
    {
      compliance: "ESI Payment",
      dueDate: "15th of every month",
      description:
        "Deposit of Employee State Insurance (ESI) contributions — both employer and employee share — for the previous month.",
    },
    {
      compliance: "GSTR-3B",
      dueDate: "20th of every month",
      description:
        "Monthly summary return reporting aggregate outward supply values, ITC availed, and net GST payable. Due on 22nd / 24th for certain categories.",
    },
  ];
}

function getAdvanceTaxRow(fyStartYear: number, fyEndYear: number) {
  return {
    compliance: "Advance Tax — Instalments",
    dueDate: `15 Jun · 15 Sep · 15 Dec · 15 Mar`,
    description:
      `Quarterly advance tax instalments for FY ${fyStartYear}-${String(fyEndYear).slice(-2)}: ` +
      `15% by 15 Jun ${fyStartYear}, 45% by 15 Sep ${fyStartYear}, ` +
      `75% by 15 Dec ${fyStartYear}, and 100% by 15 Mar ${fyEndYear}.`,
  };
}

function getQuarterlyAnnualCompliances(fy: string, ayYear: number) {
  return [
    {
      compliance: "Goods and Services Tax (GST) — QRMP",
      frequency: "Quarterly",
      template: "GSTR-1 / GSTR-3B",
      description:
        "QRMP-scheme taxpayers (turnover ≤ ₹5 crore) file GSTR-1 quarterly (by 13th of month after quarter) and pay GST monthly via PMT-06.",
    },
    {
      compliance: "TDS / TCS Returns",
      frequency: "Quarterly",
      template: "Form 24Q / 26Q / 27EQ",
      description:
        `Quarterly TDS returns for salary (24Q) and non-salary (26Q) payments, and TCS return (27EQ) for FY ${fy}. ` +
        `Due by 31 Jul, 31 Oct, 31 Jan, and 31 May.`,
    },
    {
      compliance: "Income Tax Return — Non-Audit",
      frequency: "Annual",
      template: "ITR-1 to ITR-7",
      description:
        `Return of income for individuals, HUFs, and businesses not subject to tax audit. ` +
        `Due date for AY ${ayYear}-${String(ayYear + 1).slice(-2)}: 31 July ${ayYear}.`,
    },
    {
      compliance: "Tax Audit Report",
      frequency: "Annual",
      template: "Form 3CA / 3CB + 3CD",
      description:
        `Mandatory audit under Section 44AB for taxpayers exceeding the prescribed turnover threshold. ` +
        `Audit report and ITR for AY ${ayYear}-${String(ayYear + 1).slice(-2)} are due by 30 September ${ayYear}.`,
    },
    {
      compliance: "GST Annual Return",
      frequency: "Annual",
      template: "GSTR-9 / GSTR-9C",
      description:
        `Annual consolidated return summarising all monthly/quarterly GST filings for FY ${fy}. ` +
        `GSTR-9C (reconciliation statement) applies to taxpayers with turnover above ₹5 crore. ` +
        `Due: 31 December ${ayYear}.`,
    },
    {
      compliance: "MSME Half-Yearly Return",
      frequency: "Bi-Annual",
      template: "Form MSME-1",
      description:
        "Companies with payments outstanding to MSME suppliers for more than 45 days must file this return twice a year — by 30th April and 31st October.",
    },
  ];
}

function getCompanyCompliances() {
  return [
    {
      transaction: "Annual General Meeting (AGM)",
      deadline: "30th September",
      description:
        "Every company must hold its AGM within six months from the close of the financial year (i.e., by 30th September). The first AGM must be held within nine months of incorporation.",
    },
    {
      transaction: "Filing of Financial Statements",
      deadline: "30 days from AGM",
      description:
        "Form AOC-4 (and AOC-4 XBRL for applicable companies) must be filed with the Registrar of Companies within 30 days of the AGM, attaching audited accounts.",
    },
    {
      transaction: "Annual Return",
      deadline: "60 days from AGM",
      description:
        "Form MGT-7 (or MGT-7A for small companies and OPCs) contains details of shareholders, directors, and company structure. Filed within 60 days of AGM.",
    },
    {
      transaction: "Auditor Appointment",
      deadline: "15 days from AGM",
      description:
        "Form ADT-1 intimates the Registrar of the auditor appointed or re-appointed at the AGM. Must be filed within 15 days of the meeting.",
    },
    {
      transaction: "DIR-3 KYC — Director KYC",
      deadline: "30th September",
      description:
        "Every director who has been allotted a DIN must complete KYC annually. Web KYC is used for directors with no change in details; full DIR-3 KYC otherwise.",
    },
    {
      transaction: "DPT-3 — Return of Deposits",
      deadline: "30th June",
      description:
        "All companies (except government companies) must file Form DPT-3 every year disclosing the details of outstanding loans not treated as deposits as of 31st March.",
    },
    {
      transaction: "BEN-2 — Beneficial Ownership",
      deadline: "Within 30 days of change",
      description:
        "Form BEN-2 must be filed whenever a significant beneficial owner (SBO) makes a declaration. Initial and subsequent filings required within 30 days.",
    },
    {
      transaction: "Form PAS-6 — Reconciliation of Share Capital",
      deadline: "Within 60 days of each half-year",
      description:
        "Unlisted public companies must reconcile their share capital audit report bi-annually (for half-years ending 30th September and 31st March) with the Registrar.",
    },
    {
      transaction: "INC-20A — Declaration of Commencement",
      deadline: "180 days from incorporation",
      description:
        "A company with share capital must file this declaration within 180 days of incorporation confirming that each subscriber has paid up their subscribed capital.",
    },
    {
      transaction: "Total Contribution — PF Challan",
      deadline: "15th of every month",
      description:
        "Monthly employer and employee PF contribution challan payment. Any delay attracts interest at 12% per annum and damages up to 25%.",
    },
  ];
}

function getLLPCompliances() {
  return [
    {
      transaction: "Annual Return",
      dueDate: "30th May",
      description:
        "Form 11 captures details of partners, contribution, and business summary for the preceding financial year. Every LLP must file this by 30th May regardless of whether it has conducted business.",
    },
    {
      transaction: "Statement of Accounts & Solvency",
      dueDate: "30th October",
      description:
        "Form 8 includes the LLP's Balance Sheet and Profit & Loss Account for the year ended 31st March. Signed by designated partners and, if turnover exceeds ₹40 lakh, certified by a CA.",
    },
    {
      transaction: "Income Tax Return — Non-Audit LLP",
      dueDate: "31st July",
      description:
        "LLPs not subject to tax audit must file their ITR by 31st July of the assessment year using ITR-5.",
    },
    {
      transaction: "Tax Audit Report — Audit LLP",
      dueDate: "30th September",
      description:
        "LLPs with turnover exceeding ₹1 crore (business) or ₹50 lakh (profession) require a tax audit. Report and ITR-5 are due by 30th September.",
    },
    {
      transaction: "Transfer of Contribution",
      dueDate: "Within 30 days of change",
      description:
        "Any change in the contribution of an LLP partner must be reflected in Form 3 (amendment to LLP agreement) filed within 30 days of the change.",
    },
    {
      transaction: "LLP Form 3 — LLP Agreement Amendment",
      dueDate: "Within 30 days of change",
      description:
        "Any amendment to the LLP Agreement — change in name, registered office, partners, or profit-sharing ratio — must be filed with MCA within 30 days.",
    },
    {
      transaction: "GST Compliance (if applicable)",
      dueDate: "As per GST calendar",
      description:
        "LLPs registered under GST must follow the same GSTR-1, GSTR-3B, and annual return schedule as companies. Turnover determines monthly vs. QRMP scheme eligibility.",
    },
    {
      transaction: "DIR-3 KYC — Designated Partners",
      dueDate: "30th September",
      description:
        "Designated partners of an LLP who hold a DIN must complete their annual KYC by 30th September to avoid deactivation of the DIN.",
    },
  ];
}

/* ─── Sub-components ─────────────────────────────── */

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[#1e3a5f]">{title}</h2>
      {subtitle && <p className="text-[#64748b] text-sm mt-1">{subtitle}</p>}
    </div>
  );
}

function Badge({ label, color }: { label: string; color: "blue" | "amber" | "green" | "purple" }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-700",
    amber: "bg-amber-100 text-amber-700",
    green: "bg-green-100 text-green-700",
    purple: "bg-purple-100 text-purple-700",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${colorMap[color]}`}>
      {label}
    </span>
  );
}

/* ─── Page ─────────────────────────────────────────── */

export default function DueDatesPage() {
  const { fy, ay, fyStartYear, fyEndYear, ayYear } = getFYInfo();

  const monthlyCompliances = getMonthlyCompliances();
  const advanceTaxRow = getAdvanceTaxRow(fyStartYear, fyEndYear);
  const quarterlyAnnualCompliances = getQuarterlyAnnualCompliances(fy, ayYear);
  const companyCompliances = getCompanyCompliances();
  const llpCompliances = getLLPCompliances();

  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-br from-[#1e3a5f] to-[#2e5490] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <p className="text-[#0891b2] text-xs font-semibold uppercase tracking-wider mb-3">Compliance Calendar</p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Due Dates</h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed">
            A ready-reference compliance calendar covering GST, Income Tax, TDS, PF/ESI, and MCA filings for businesses, companies, and LLPs in India.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              FY {fy}
            </span>
            <span className="bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
              AY {ay}
            </span>
          </div>
        </div>
      </section>

      {/* Anchor tabs */}
      <div className="bg-[#f5f7fa] border-b border-[#e2e8f0] sticky top-16 z-40 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-2 min-w-max">
            {[
              { href: "#monthly", label: "Monthly" },
              { href: "#quarterly-annual", label: "Quarterly & Annual" },
              { href: "#companies", label: "Companies" },
              { href: "#llp", label: "LLPs" },
            ].map((tab) => (
              <a
                key={tab.href}
                href={tab.href}
                className="px-4 py-1.5 text-sm font-medium text-[#374151] hover:bg-white hover:text-[#1e3a5f] rounded-md transition-colors whitespace-nowrap"
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-20">

        {/* ── Monthly ── */}
        <section id="monthly">
          <SectionHeader
            title="Monthly Compliances"
            subtitle="Recurring monthly deadlines applicable to most registered businesses."
          />
          <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="text-left px-5 py-4 font-semibold w-56">Compliance</th>
                  <th className="text-left px-5 py-4 font-semibold w-48">Due Date</th>
                  <th className="text-left px-5 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {[...monthlyCompliances, advanceTaxRow].map((row, i) => (
                  <tr key={row.compliance} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f7fa]"}>
                    <td className="px-5 py-4 font-semibold text-[#1e3a5f] align-top">{row.compliance}</td>
                    <td className="px-5 py-4 align-top">
                      <Badge label={row.dueDate} color="amber" />
                    </td>
                    <td className="px-5 py-4 text-[#374151] leading-relaxed align-top">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Quarterly & Annual ── */}
        <section id="quarterly-annual">
          <SectionHeader
            title={`Quarterly and Bi-Annual / Annual Compliances — FY ${fy} / AY ${ay}`}
            subtitle="Periodic filings that fall less frequently but carry significant penalties for non-compliance."
          />
          <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Compliance</th>
                  <th className="text-left px-5 py-4 font-semibold w-32">Frequency</th>
                  <th className="text-left px-5 py-4 font-semibold w-48">Form / Template</th>
                  <th className="text-left px-5 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {quarterlyAnnualCompliances.map((row, i) => (
                  <tr key={row.compliance} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f7fa]"}>
                    <td className="px-5 py-4 font-semibold text-[#1e3a5f] align-top">{row.compliance}</td>
                    <td className="px-5 py-4 align-top">
                      <Badge
                        label={row.frequency}
                        color={row.frequency === "Quarterly" ? "blue" : row.frequency === "Annual" ? "green" : "purple"}
                      />
                    </td>
                    <td className="px-5 py-4 text-[#64748b] font-medium align-top">{row.template}</td>
                    <td className="px-5 py-4 text-[#374151] leading-relaxed align-top">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Companies ── */}
        <section id="companies">
          <SectionHeader
            title="Compliance Calendar for Companies"
            subtitle="Annual and event-based MCA / ROC filings applicable to Private Limited, Public Limited, and One Person Companies."
          />
          <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Transaction / Filing</th>
                  <th className="text-left px-5 py-4 font-semibold w-52">Deadline</th>
                  <th className="text-left px-5 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {companyCompliances.map((row, i) => (
                  <tr key={row.transaction} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f7fa]"}>
                    <td className="px-5 py-4 font-semibold text-[#1e3a5f] align-top">{row.transaction}</td>
                    <td className="px-5 py-4 align-top">
                      <Badge label={row.deadline} color="blue" />
                    </td>
                    <td className="px-5 py-4 text-[#374151] leading-relaxed align-top">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── LLPs ── */}
        <section id="llp">
          <SectionHeader
            title="Compliance Calendar for Limited Liability Partnerships (LLPs)"
            subtitle="Annual and event-based filings that every LLP registered under the LLP Act 2008 must complete."
          />
          <div className="overflow-x-auto rounded-xl border border-[#e2e8f0] shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1e3a5f] text-white">
                  <th className="text-left px-5 py-4 font-semibold">Transaction / Filing</th>
                  <th className="text-left px-5 py-4 font-semibold w-52">Max Due Date</th>
                  <th className="text-left px-5 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                {llpCompliances.map((row, i) => (
                  <tr key={row.transaction} className={i % 2 === 0 ? "bg-white" : "bg-[#f5f7fa]"}>
                    <td className="px-5 py-4 font-semibold text-[#1e3a5f] align-top">{row.transaction}</td>
                    <td className="px-5 py-4 align-top">
                      <Badge label={row.dueDate} color="green" />
                    </td>
                    <td className="px-5 py-4 text-[#374151] leading-relaxed align-top">{row.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="font-semibold text-amber-800 text-sm mb-1">Important Disclaimer</p>
            <p className="text-amber-700 text-sm leading-relaxed">
              The due dates listed above are for general reference and are automatically calculated for FY {fy} / AY {ay}.
              Actual deadlines may change due to government notifications, extensions, or taxpayer-specific conditions.
              Always verify current due dates from official CBDT, GSTN, MCA, EPFO, and ESIC portals before filing.
              CA Hemanth Reddy &amp; Co is not liable for any action taken solely on the basis of this calendar.
            </p>
          </div>
        </div>

      </div>
    </>
  );
}
