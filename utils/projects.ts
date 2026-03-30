const projects = [
  {
    slug: 'rfp-automation',
    title: 'Government RFP Automation & AI Proposal System',
    excerpt: 'Full-stack RFP scraping, normalization, and AI-powered proposal generation for government tenders.',
    category: 'AI / Automation',
    stack: ['Django', 'React', 'PostgreSQL', 'Selenium', 'Gemini', 'Groq'],
    problem: 'Manually tracking government RFPs across multiple portals and generating compliant proposals was slow and error-prone.',
    challenges: [
      'Normalization of heterogeneous RFP schemas',
      'Reliable scrapers for SAM.gov and Grants.gov',
      'Integrating LLMs for structured proposal generation',
    ],
    architecture: {
      summary: 'Scrapers → Normalizer → Postgres → Django API → React Dashboard → LLM proposal generator',
      components: ['Scrapers', 'Normalization', 'DB', 'API', 'Dashboard', 'LLM Evaluation']
    },
    impact: 'Reduced proposal turnaround time by ~70% and increased win-rate through structured AI drafts.'
  },

  {
    slug: 'supplychain-hts',
    title: 'Supply Chain Compliance & HTS Automation System',
    excerpt: 'Bulk HTS detection, CBP rulings extraction and AI-generated compliance reports.',
    category: 'Compliance',
    stack: ['Django', 'Pandas', 'LLM APIs', 'Scrapers'],
    problem: 'Manual HTS code attribution and rulings lookup were a bottleneck for large catalogs.',
    challenges: ['Bulk Excel processing', 'Structured LLM JSON outputs', 'Data quality & mapping'],
    architecture: {
      summary: 'Uploader → ETL → LLM labeling → Reports',
      components: ['Uploader', 'ETL', 'LLM Processor', 'Reporting']
    },
    impact: 'Automated classification at scale and improved shipment compliance accuracy.'
  },

  {
    slug: 'wifi-ticket-saas',
    title: 'WiFi Ticket SaaS Platform',
    excerpt: 'Role-based ticketing, payment flows, subscription logic and owner dashboard.',
    category: 'SaaS',
    stack: ['Django', 'Stripe', 'PostgreSQL'],
    problem: 'Businesses needed a simple, secure WiFi ticketing and payment flow for events.',
    challenges: ['Subscription logic', 'Secure code generation', 'Owner reporting'],
    architecture: { summary: 'Auth → Billing → Ticket Engine → Dashboard', components: ['Auth', 'Billing', 'Dashboard'] },
    impact: 'Scaled to hundreds of daily activations with low fraud rates.'
  },

  {
    slug: 'lang-scheduling',
    title: 'Language Service Scheduling Platform',
    excerpt: 'Multi-language booking, interpreter scheduling and admin management.',
    category: 'SaaS',
    stack: ['PostgreSQL', 'Django', 'Celery'],
    problem: 'Scheduling multilingual interpreters with complex availability rules.',
    challenges: ['Availability matching', 'Conflict resolution', 'Production Git conflict fixes'],
    architecture: { summary: 'Bookings → Match Engine → Notifications', components: ['Booking Engine', 'Admin'] },
    impact: 'Improved utilization and simplified admin workflows.'
  },

  {
    slug: 'study-platform',
    title: 'Study Material Sharing Platform',
    excerpt: 'Semester-based uploads, access controls and analytics for student resources.',
    category: 'Full-Stack',
    stack: ['Django', 'React', 'Postgres'],
    problem: 'Students needed an organized way to share semester-based materials securely.',
    challenges: ['Access control', 'Analytics', 'Favorites'],
    architecture: { summary: 'Uploads → Storage → Access Layer → Analytics', components: ['Storage', 'Access', 'Analytics'] },
    impact: 'Increased resource discoverability and engagement.'
  },

  {
    slug: 'gym-subscriptions',
    title: 'Gym Subscription Management System',
    excerpt: 'Multi-plan logic, SMS integration and payment calculation engine.',
    category: 'SaaS',
    stack: ['Django', 'Stripe', 'Twilio'],
    problem: 'Complex multi-plan billing and SMS communication for members.',
    challenges: ['Billing engine', 'Plan migrations', 'SMS flows'],
    architecture: { summary: 'Plans → Billing Engine → Notifications', components: ['Billing', 'Notifications'] },
    impact: 'Lower churn with clearer billing and automated notifications.'
  },

  {
    slug: 'ai-research-assistant',
    title: 'AI Research Assistant Engine',
    excerpt: 'Web search → scraping → token management and multi-model evaluation framework.',
    category: 'AI',
    stack: ['FastAPI', 'LLaMA', 'Gemini', 'Groq'],
    problem: 'Need for an engine that structures web research, optimizes tokens, and evaluates multiple models.',
    challenges: ['Token budgeting', 'Prompt engineering', 'Multi-model scoring'],
    architecture: { summary: 'Crawler → Retriever → LLM Orchestrator → Evaluator', components: ['Crawler', 'Orchestrator', 'Evaluator'] },
    impact: 'Accelerated research pipelines and improved answer quality via ensemble evaluation.'
  }
]

export default projects
