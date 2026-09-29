/* =====================================================
   PORTFOLIO DATA FILE
   Users should customize most content here.
   Add more projects or case studies by copying one object.
   ===================================================== */

const projects = [
  {
    title: "Financial Performance Intelligence Hub",
    description:
      "An executive powerBI Financial Intelligence Hub tracking $41.9M in revenue against a $47-2M target. It translates complex financials into actionable KPIs-highlighting a 37.7% profit margin, 88.9% attainment, and a $5.3M gap-to drive strategic decision-making.",
    image: "assets/images/project-revenue.svg",
    tags: ["Power BI", "DAX", "Excel"],
    metric: "$41.9M revenue/37.7% margin/88.9% attainment.",
    impact: "$5.3M target gap to optimize financial strategy",
    link: "https://app.powerbi.com/view?r=eyJrIjoiMjQ0M2Y3NDAtZDVjMS00ZGVjLWFlMGUtNzk4NzcwYTc4Njg5IiwidCI6ImI4NjlmMjg0LWUyMDEtNGQ4Mi1iMGYxLWU3NTdkMzk1ZjMxZSJ9",
  },
  {
    title: "Amdor Superstore Sales & Profitability Dashboard",
    description:
      "Interactive 2-page power BI report on 10K retail orders. Analyzed sales, profit & discount by Category, Region, Segment & ship Mode using Decomposition Tree to trace profit down to product level.",
    image: "assets/images/project-inventory.svg",
    tags: ["Power BI", "DAX", "Retail Analytics", "Data Viz"],
    metric: "9,994 Orders|793 Customers|1,862 Products|$2M Sales|286K Profit",
    impact: "Analyzed $2M / 10K orders",
    link: "https://app.powerbi.com/view?r=eyJrIjoiNDhjNjMwYzQtZmU1OS00MmUzLWJmZWItMzRhZmNmZWQ2MjU2IiwidCI6ImI4NjlmMjg0LWUyMDEtNGQ4Mi1iMGYxLWU3NTdkMzk1ZjMxZSJ9",
  },
  {
    title: "Bank Marketing Subscription Prediction & Customer Prioritization",
    description:
      "A machine learning classification project that predicts term-deposit subscriptions and helps banks prioritize customers for more efficient marketing campaigns.",
    image: "assets/images/Project-ROC Curve.svg.png",
    tags: ["Python", "Machine Learning", "Classification","Predictive Modeling", "Pandas", "Scikit-learn"],
    metric: "ROC-UC: 0.772|Precision:66.3%|Recall:17.9%|F1:0.28",
    impact: "5 segments",
    link: "https://github.com/Nkjulian24/bank-marketing-subscription-prediction",
  },
  {
    title: "Sales Performance Command Center",
    description:
      "Designed an executive dashboard tracking revenue, margin and sales team performance.",
    image: "assets/images/project-sales.svg",
    tags: ["Power Query", "DAX", "UI UX"],
    metric: "$2.4M tracked",
    impact: "+34% clarity",
    link: "https://example.com",
  },
];

const services = [
  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="6" height="6"/>
      <rect x="14" y="4" width="6" height="6"/>
      <rect x="4" y="14" width="6" height="6"/>
      <rect x="14" y="14" width="6" height="6"/>
    </svg>
    `,
    title: "Dashboard Design & Automation",
    text: "Custom Power BI and Excel dashboards that automate reporting and save hours weekly.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 3v4"/>
      <path d="M12 17v4"/>
      <path d="M4.9 4.9l2.8 2.8"/>
      <path d="M16.3 16.3l2.8 2.8"/>
      <path d="M3 12h4"/>
      <path d="M17 12h4"/>
      <path d="M4.9 19.1l2.8-2.8"/>
      <path d="M16.3 7.7l2.8-2.8"/>
    </svg>
    `,
    title: "Data Cleaning & Reporting",
    text: "Transform messy raw data into accurate structured, analysis-ready datasets with clear reporting.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 18L10 12L14 15L20 8"/>
      <path d="M20 8v5"/>
      <path d="M20 8h-5"/>
    </svg>
    `,
    title: "Business Insights & KPI Reporting",
    text: "Track what matters with actionable KPI frameworks tailored to business goals.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="4" y="4" width="16" height="16"/>
      <path d="M4 10h16"/>
      <path d="M10 4v16"/>
    </svg>
    `,
    title: "Spreadsheet Development",
    text: "Advanced Excel, Power Query and Google Sheets systems built for efficiency.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/>
      <path d="M4.6 9a1.65 1.65 0 0 0-.33-1.82"/>
      <path d="M9 4.6a1.65 1.65 0 0 0-1.82-.33"/>
      <path d="M15 19.4a1.65 1.65 0 0 0 1.82.33"/>
    </svg>
    `,
    title: "Operational Data Consulting",
    text: "Improve operations using analytics, workflow optimization and reporting systems.",
  },

  {
    icon: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M4 8l8-4l8 4"/>
      <path d="M6 10v5"/>
      <path d="M18 10v5"/>
      <path d="M4 8v8l8 4l8-4V8"/>
    </svg>
    `,
    title: "Data Science & Machine Learning",
    text: "Applying python, statistics, and machine learning to uncover patterns, build predictive models, and solve real-world problems.",
  },
];
