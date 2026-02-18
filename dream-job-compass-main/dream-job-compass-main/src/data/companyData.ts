export interface RoleInfo {
  title: string;
  skills: string[];
  guidelines: string[];
  resources: string[];
  salary: string;
  experience: string;
}

export interface CompanyInfo {
  name: string;
  logo: string;
  industry: string;
  hidden?: boolean;
  roles: Record<string, RoleInfo>;
}

export const companies: CompanyInfo[] = [
  {
    name: "Google",
    logo: "https://logo.clearbit.com/google.com",
    industry: "Technology",
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["Data Structures & Algorithms", "System Design", "Python/Java/C++/Go", "Distributed Systems", "API Design", "Testing & Debugging"],
        guidelines: ["Strong CS fundamentals required", "Expect 5-6 coding rounds", "Focus on Leetcode Medium/Hard", "System design for L4+", "Google values 'Googleyness' — collaboration & leadership"],
        resources: ["Cracking the Coding Interview", "LeetCode Google tag", "System Design Primer (GitHub)", "Google Tech Dev Guide"],
        salary: "$120K - $250K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["DSA Basics", "One strong programming language", "OOP Concepts", "Basic Web/Mobile Dev", "Problem Solving"],
        guidelines: ["2 coding interviews (~45 mins each)", "Focus on Leetcode Easy/Medium", "Strong academic record helps", "Apply via careers.google.com", "Host matching after interview clearance"],
        resources: ["LeetCode Explore Cards", "CS50 (Harvard)", "Intro to Algorithms (MIT OCW)"],
        salary: "$8K - $12K/month",
        experience: "Currently enrolled in CS/related degree"
      },
      "Data Scientist": {
        title: "Data Scientist",
        skills: ["Python/R", "Machine Learning", "SQL & BigQuery", "Statistics & Probability", "TensorFlow/JAX", "Data Visualization"],
        guidelines: ["Expect ML coding + case study rounds", "Research publications are a plus", "Strong stats fundamentals", "Product sense is important"],
        resources: ["Google ML Crash Course", "Kaggle Competitions", "Hands-On ML (Aurélien Géron)"],
        salary: "$130K - $280K+",
        experience: "2-7+ years"
      },
      "Product Manager": {
        title: "Product Manager",
        skills: ["Product Strategy", "Data Analysis", "User Research", "A/B Testing", "Cross-functional Leadership", "SQL"],
        guidelines: ["APM program for new grads", "Expect product design + analytical rounds", "Demonstrate user empathy", "Technical background preferred"],
        resources: ["Decode and Conquer", "Google APM blog posts", "Product School YouTube"],
        salary: "$140K - $300K+",
        experience: "3-8+ years"
      }
    }
  },
  {
    name: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    industry: "Technology",
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["C#/.NET/Java", "Data Structures & Algorithms", "System Design", "Cloud (Azure)", "Agile Methodologies", "SQL/NoSQL"],
        guidelines: ["4-5 coding + design rounds", "Focus on problem-solving approach", "Communication matters a lot", "Growth mindset is key cultural value"],
        resources: ["LeetCode Microsoft tag", "Azure Fundamentals (free cert)", "System Design Interview by Alex Xu"],
        salary: "$110K - $230K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern (Explore/SWE)",
        skills: ["DSA Fundamentals", "C++/Java/Python", "Basic System Design", "Collaboration Skills"],
        guidelines: ["Explore program for freshmen/sophomores", "2-3 coding rounds", "Apply early (Aug-Oct)", "Strong campus presence"],
        resources: ["LeetCode Easy/Medium", "Microsoft Learn platform", "GeeksforGeeks"],
        salary: "$7K - $10K/month",
        experience: "Currently enrolled"
      },
      "Cloud Solutions Architect": {
        title: "Cloud Solutions Architect",
        skills: ["Azure Services", "Networking", "Security", "Infrastructure as Code", "DevOps", "Solution Design"],
        guidelines: ["Azure certifications highly valued", "Customer-facing role", "Pre-sales experience helps", "Technical depth + breadth needed"],
        resources: ["Azure certifications path", "Microsoft Learn", "Cloud Architecture Patterns (O'Reilly)"],
        salary: "$130K - $250K+",
        experience: "5-10+ years"
      }
    }
  },
  {
    name: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    industry: "E-Commerce / Cloud",
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["Java/Python/C++", "Data Structures & Algorithms", "System Design", "AWS Services", "Object-Oriented Design", "Scalability"],
        guidelines: ["Strong focus on Leadership Principles", "Behavioral questions are critical (STAR method)", "4-5 coding rounds + LP rounds", "Bar Raiser interview is unique to Amazon"],
        resources: ["Amazon Leadership Principles", "LeetCode Amazon tag", "Grokking the System Design Interview"],
        salary: "$115K - $240K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "SDE Intern",
        skills: ["DSA", "One programming language", "OOP", "Problem Solving"],
        guidelines: ["1-3 coding rounds + LP questions", "Online assessment first", "Apply via Amazon University portal", "Leadership Principles matter even for interns"],
        resources: ["LeetCode Amazon tag", "Amazon LP prep guides"],
        salary: "$7K - $11K/month",
        experience: "Currently enrolled"
      },
      "Data Engineer": {
        title: "Data Engineer",
        skills: ["SQL/NoSQL", "ETL Pipelines", "AWS (Redshift, Glue, EMR)", "Python/Spark", "Data Modeling", "Airflow"],
        guidelines: ["Expect data modeling + coding rounds", "LP-heavy interviews", "Hands-on AWS experience valued"],
        resources: ["AWS Data Analytics Specialty cert", "Designing Data-Intensive Applications"],
        salary: "$120K - $230K+",
        experience: "2-6+ years"
      }
    }
  },
  {
    name: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    industry: "Social Media / Technology",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Python/Java/C++", "Data Structures & Algorithms", "System Design", "React/React Native", "Distributed Systems", "SQL"],
        guidelines: ["2 coding + 1 system design + 1 behavioral", "45-min rounds, fast-paced", "Leetcode Medium/Hard focus", "Move fast culture — ship quickly"],
        resources: ["LeetCode Meta tag", "Meta Engineering blog", "Designing Data-Intensive Applications"],
        salary: "$120K - $270K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["DSA", "Python/Java/C++", "Web Fundamentals", "Problem Solving"],
        guidelines: ["1-2 coding rounds", "Apply via Meta University or general intern portal", "Hackathon projects help stand out"],
        resources: ["LeetCode Meta tag", "Meta Open Source projects"],
        salary: "$8K - $12K/month",
        experience: "Currently enrolled"
      },
      "ML Engineer": {
        title: "Machine Learning Engineer",
        skills: ["PyTorch", "Deep Learning", "NLP/CV", "Python", "Distributed Training", "MLOps"],
        guidelines: ["ML system design is key", "Research experience valued", "Coding + ML depth rounds", "Publications are a strong plus"],
        resources: ["PyTorch tutorials", "Papers With Code", "Deep Learning (Goodfellow)"],
        salary: "$140K - $300K+",
        experience: "2-7+ years"
      }
    }
  },
  {
    name: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    industry: "Technology / Consumer Electronics",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Swift/Objective-C/C++", "Data Structures & Algorithms", "System Design", "iOS/macOS frameworks", "Concurrency", "Performance Optimization"],
        guidelines: ["Team-specific interviews", "Deep domain knowledge valued", "Secrecy culture — limited info online", "Strong coding fundamentals required"],
        resources: ["LeetCode Apple tag", "Swift documentation", "WWDC sessions"],
        salary: "$120K - $260K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Swift or C++", "DSA", "iOS/macOS basics", "Problem Solving"],
        guidelines: ["Team matching based on skills", "2-3 technical interviews", "Portfolio/projects help a lot"],
        resources: ["Swift Playgrounds", "Apple Developer docs", "LeetCode Easy/Medium"],
        salary: "$7K - $11K/month",
        experience: "Currently enrolled"
      },
      "Hardware Engineer": {
        title: "Hardware Engineer",
        skills: ["VLSI/ASIC Design", "Verilog/VHDL", "Circuit Design", "Signal Processing", "PCB Design", "Embedded Systems"],
        guidelines: ["Deep technical interviews", "Lab/research experience important", "Patent portfolio is a plus"],
        resources: ["IEEE papers", "EE coursework", "Apple silicon case studies"],
        salary: "$130K - $270K+",
        experience: "2-8+ years"
      }
    }
  },
  {
    name: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    industry: "Entertainment / Streaming",
    roles: {
      "SDE": {
        title: "Senior Software Engineer",
        skills: ["Java/Python", "Microservices", "AWS", "Distributed Systems", "CI/CD", "Data Pipelines"],
        guidelines: ["Netflix hires mostly senior engineers", "Culture deck is a must-read", "Freedom & Responsibility culture", "Phone screen + onsite (5-6 rounds)"],
        resources: ["Netflix Tech Blog", "Netflix Culture Deck", "LeetCode Hard problems"],
        salary: "$200K - $500K+ (top of market)",
        experience: "5-10+ years"
      },
      "Data Scientist": {
        title: "Data Scientist",
        skills: ["Python/R", "Causal Inference", "A/B Testing", "SQL", "ML/Statistics", "Visualization (Tableau/D3)"],
        guidelines: ["Strong stats background", "Product intuition crucial", "Case study rounds", "Expect take-home assignments"],
        resources: ["Netflix Research blog", "Causal Inference (Cunningham)", "Kaggle"],
        salary: "$180K - $400K+",
        experience: "3-8+ years"
      }
    }
  },
  {
    name: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    industry: "Automotive / Energy",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["C++/Python", "Embedded Systems", "Computer Vision", "Real-time Systems", "Linux", "GPU Programming"],
        guidelines: ["Fast-paced, startup-like culture", "Elon may be involved in hiring", "Strong ownership expected", "Hardware-software intersection"],
        resources: ["Tesla AI Day talks", "Autonomous driving papers", "C++ Primer"],
        salary: "$110K - $220K+",
        experience: "1-5+ years"
      },
      "Intern": {
        title: "Engineering Intern",
        skills: ["Python/C++", "ML Basics", "Embedded Programming", "Problem Solving"],
        guidelines: ["Apply early", "Projects in robotics/CV stand out", "High-intensity work environment"],
        resources: ["Tesla careers page", "Karpathy's lectures"],
        salary: "$5K - $9K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Goldman Sachs",
    logo: "https://logo.clearbit.com/goldmansachs.com",
    industry: "Finance / Banking",
    roles: {
      "SDE": {
        title: "Software Engineer (Engineering Division)",
        skills: ["Java/Python", "Data Structures", "System Design", "SQL", "Financial Concepts", "Multithreading"],
        guidelines: ["HackerRank online test first", "5 rounds: coding + behavioral", "Dress formal", "Finance knowledge is a bonus"],
        resources: ["HackerRank GS questions", "LeetCode GS tag", "GS Engineering blog"],
        salary: "$100K - $200K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Summer Analyst (Technology)",
        skills: ["Java/Python", "DSA Basics", "SQL", "Communication Skills"],
        guidelines: ["Apply via campus or GS careers", "HackerRank + video interview + superday", "Networking matters", "Dress code: business formal"],
        resources: ["GS Insight Series", "HackerRank practice", "Wall Street Oasis forums"],
        salary: "$6K - $9K/month",
        experience: "Pre-final/final year"
      },
      "Quantitative Analyst": {
        title: "Quantitative Analyst (Strats)",
        skills: ["Python/C++", "Stochastic Calculus", "Linear Algebra", "Statistics", "Financial Modeling", "Monte Carlo Methods"],
        guidelines: ["Math-heavy interviews", "Brainteaser questions common", "PhD preferred for senior roles"],
        resources: ["Heard on the Street (Crack)", "QuantNet forums", "Options, Futures & Derivatives (Hull)"],
        salary: "$150K - $350K+",
        experience: "2-8+ years"
      }
    }
  },
  {
    name: "JPMorgan Chase",
    logo: "https://logo.clearbit.com/jpmorganchase.com",
    industry: "Finance / Banking",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Java/Python/Spring", "Cloud (AWS/Azure)", "Microservices", "SQL", "Agile", "DevOps"],
        guidelines: ["HackerRank coding test", "3-4 technical rounds", "Code for Good hackathon is a great entry point", "JPM values diversity & inclusion"],
        resources: ["JPM Tech careers", "Code for Good", "LeetCode Medium"],
        salary: "$95K - $190K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA", "Basic Web Dev", "SQL"],
        guidelines: ["Apply via Code for Good hackathon", "HackerRank + interview", "Strong leadership valued"],
        resources: ["JPM careers", "HackerRank practice"],
        salary: "$5K - $8K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Uber",
    logo: "https://logo.clearbit.com/uber.com",
    industry: "Transportation / Technology",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Java/Go/Python", "Distributed Systems", "System Design", "Microservices", "Real-time Data", "Kafka"],
        guidelines: ["2 coding + 1 system design + 1 behavioral", "Focus on scalability problems", "Strong engineering culture"],
        resources: ["Uber Engineering Blog", "LeetCode Uber tag", "System Design Interview"],
        salary: "$120K - $260K+",
        experience: "1-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["DSA", "Python/Java", "Web/Mobile basics"],
        guidelines: ["Online assessment + 2 interviews", "Apply early fall"],
        resources: ["LeetCode Medium", "Uber Engineering Blog"],
        salary: "$7K - $10K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Adobe",
    logo: "https://logo.clearbit.com/adobe.com",
    industry: "Software / Creative Tools",
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["C++/Java/JavaScript", "DSA", "System Design", "Graphics Programming", "React/Angular", "Cloud Services"],
        guidelines: ["3-4 coding rounds", "Focus on OOP and design patterns", "Creative problem solving valued", "Adobe values innovation"],
        resources: ["LeetCode Adobe tag", "Adobe Tech Blog", "Design Patterns (GoF)"],
        salary: "$110K - $220K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["C++/Java", "DSA", "Web Technologies", "Problem Solving"],
        guidelines: ["Online test + 2-3 interviews", "Projects in creative tech stand out"],
        resources: ["LeetCode Medium", "Adobe Developer docs"],
        salary: "$6K - $9K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Salesforce",
    logo: "https://logo.clearbit.com/salesforce.com",
    industry: "Cloud / CRM",
    roles: {
      "SDE": {
        title: "Software Engineer (MTS)",
        skills: ["Java/Python", "Distributed Systems", "SQL/NoSQL", "REST APIs", "Salesforce Platform", "Testing"],
        guidelines: ["4-5 rounds: coding + design + behavioral", "Ohana culture — teamwork emphasized", "Values-driven hiring"],
        resources: ["LeetCode Salesforce tag", "Trailhead (free learning)", "Salesforce Engineering Blog"],
        salary: "$115K - $230K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern (Futureforce)",
        skills: ["Java/Python", "DSA", "Web Dev basics"],
        guidelines: ["Futureforce program", "Online assessment + interviews", "Community involvement valued"],
        resources: ["Trailhead", "LeetCode Easy/Medium"],
        salary: "$6K - $9K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "IBM",
    logo: "https://logo.clearbit.com/ibm.com",
    industry: "Technology / Consulting",
    roles: {
      "SDE": {
        title: "Software Developer",
        skills: ["Java/Python/Node.js", "Cloud (IBM Cloud/AWS)", "AI/ML Basics", "Docker/Kubernetes", "Agile", "SQL"],
        guidelines: ["Online assessment + 2-3 interviews", "IBM values diversity", "Open source contributions valued"],
        resources: ["IBM Developer", "IBM Skills Network", "LeetCode Medium"],
        salary: "$90K - $180K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Python/Java", "DSA Basics", "Cloud Basics"],
        guidelines: ["Apply via IBM Early Professional portal", "Hackathon participation helps"],
        resources: ["IBM SkillsBuild", "HackerRank"],
        salary: "$4K - $7K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Oracle",
    logo: "https://logo.clearbit.com/oracle.com",
    industry: "Enterprise Software / Cloud",
    roles: {
      "SDE": {
        title: "Software Developer",
        skills: ["Java/C++", "SQL/PL-SQL", "System Design", "OCI (Oracle Cloud)", "Data Structures", "Linux"],
        guidelines: ["3-4 technical rounds", "Strong Java fundamentals", "Database knowledge is a big plus"],
        resources: ["LeetCode Oracle tag", "Oracle documentation", "Java Concurrency in Practice"],
        salary: "$100K - $200K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java", "DSA", "SQL Basics", "OOP"],
        guidelines: ["Online test + 2 interviews", "Campus recruitment is strong"],
        resources: ["LeetCode Easy/Medium", "Oracle Academy"],
        salary: "$5K - $8K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Spotify",
    logo: "https://logo.clearbit.com/spotify.com",
    industry: "Music / Technology",
    roles: {
      "SDE": {
        title: "Backend/Full-Stack Engineer",
        skills: ["Java/Python/TypeScript", "Microservices", "GCP", "Event-Driven Architecture", "CI/CD", "Data Pipelines"],
        guidelines: ["Coding + system design + culture fit", "Squad-based autonomous teams", "Music/audio passion is a plus"],
        resources: ["Spotify Engineering Blog", "LeetCode Medium/Hard", "Backstage.io docs"],
        salary: "$120K - $250K+",
        experience: "2-6+ years"
      },
      "Intern": {
        title: "Engineering Intern",
        skills: ["Python/Java", "DSA", "Web Dev", "Collaboration"],
        guidelines: ["Apply via Spotify Jobs", "Portfolio projects help"],
        resources: ["Spotify R&D blog", "LeetCode Medium"],
        salary: "$6K - $9K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Twitter / X",
    logo: "https://logo.clearbit.com/x.com",
    industry: "Social Media / Technology",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Scala/Java/Python", "Distributed Systems", "Real-time Processing", "GraphQL", "Microservices", "Kafka"],
        guidelines: ["Coding + system design focused", "Scale-focused problems", "Fast iteration culture"],
        resources: ["Twitter Engineering Blog (archived)", "LeetCode Twitter tag"],
        salary: "$110K - $240K+",
        experience: "1-5+ years"
      }
    }
  },
  {
    name: "Infosys",
    logo: "https://logo.clearbit.com/infosys.com",
    industry: "IT Services / Consulting",
    roles: {
      "SDE": {
        title: "Systems Engineer / Software Developer",
        skills: ["Java/Python/C", "SQL", "Web Technologies", "Agile", "Cloud Basics", "Testing"],
        guidelines: ["Online test (Infosys HackWithInfy)", "3 rounds: aptitude + coding + HR", "Training provided post-joining (Mysore campus)"],
        resources: ["InfyTQ platform", "HackWithInfy past papers", "GeeksforGeeks"],
        salary: "₹3.6L - ₹10L+ (India)",
        experience: "0-3+ years"
      },
      "Intern": {
        title: "InStep Intern / HackWithInfy Intern",
        skills: ["Java/Python", "DSA Basics", "Problem Solving"],
        guidelines: ["HackWithInfy competition for top interns", "Apply via campus or InfyTQ"],
        resources: ["InfyTQ", "GeeksforGeeks", "HackerRank"],
        salary: "₹15K - ₹40K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "TCS",
    logo: "https://logo.clearbit.com/tcs.com",
    industry: "IT Services / Consulting",
    roles: {
      "SDE": {
        title: "Software Developer / Digital Engineer",
        skills: ["Java/Python/C", "SQL", "Cloud (AWS/Azure)", "Agile", "Full Stack Web Dev"],
        guidelines: ["TCS NQT (National Qualifier Test)", "Aptitude + coding + interview", "TCS Digital for top performers"],
        resources: ["TCS iON", "TCS NQT practice", "GeeksforGeeks"],
        salary: "₹3.5L - ₹9L+ (India)",
        experience: "0-3+ years"
      },
      "Intern": {
        title: "TCS Intern",
        skills: ["Basic Programming", "Aptitude", "Communication"],
        guidelines: ["Apply via campus", "Aptitude test is key"],
        resources: ["TCS iON", "IndiaBix"],
        salary: "₹10K - ₹25K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Wipro",
    logo: "https://logo.clearbit.com/wipro.com",
    industry: "IT Services",
    roles: {
      "SDE": {
        title: "Project Engineer / Software Developer",
        skills: ["Java/Python/.NET", "SQL", "Cloud Basics", "Testing", "Agile"],
        guidelines: ["Wipro NLTH (National Level Talent Hunt)", "Online test + interview", "Elite program for top candidates"],
        resources: ["Wipro TalentNext", "GeeksforGeeks", "HackerRank"],
        salary: "₹3.5L - ₹8L+ (India)",
        experience: "0-3+ years"
      }
    }
  },
  {
    name: "Deloitte",
    logo: "https://logo.clearbit.com/deloitte.com",
    industry: "Consulting / Professional Services",
    roles: {
      "SDE": {
        title: "Software Engineer / Consultant",
        skills: ["Java/Python/.NET", "Cloud (AWS/Azure/GCP)", "DevOps", "SQL", "Agile/Scrum", "Client Communication"],
        guidelines: ["Case study + technical + behavioral rounds", "Consulting mindset valued", "Business acumen important"],
        resources: ["Deloitte Tech Trends report", "Case interview prep", "LeetCode Medium"],
        salary: "$85K - $180K+",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Technology Consulting Intern",
        skills: ["Programming basics", "Communication", "Problem Solving", "Teamwork"],
        guidelines: ["Apply via campus or Deloitte careers", "Group discussion + interview"],
        resources: ["Deloitte University Press", "Victor Cheng case prep"],
        salary: "$4K - $7K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "NVIDIA",
    logo: "https://logo.clearbit.com/nvidia.com",
    industry: "Semiconductors / AI",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["C++/CUDA", "GPU Programming", "Deep Learning", "Linux", "Computer Architecture", "Python"],
        guidelines: ["Deep technical interviews", "GPU/parallel computing knowledge crucial", "Research publications valued"],
        resources: ["NVIDIA Developer Blog", "CUDA Programming Guide", "GTC conference talks"],
        salary: "$130K - $280K+",
        experience: "1-5+ years"
      },
      "Intern": {
        title: "Engineering Intern",
        skills: ["C++/Python", "GPU basics", "Linear Algebra", "ML Fundamentals"],
        guidelines: ["Apply early", "Research projects stand out", "CUDA experience is a huge plus"],
        resources: ["NVIDIA DLI courses", "CUDA by Example"],
        salary: "$7K - $11K/month",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Samsung",
    logo: "https://logo.clearbit.com/samsung.com",
    industry: "Electronics / Technology",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["C/C++/Java", "Android Development", "Embedded Systems", "DSA", "Linux Kernel", "Tizen OS"],
        guidelines: ["Samsung SWC (Coding Test) is mandatory", "3-hour coding test + interviews", "Strong C/C++ preferred", "R&D focused roles"],
        resources: ["Samsung SWC practice", "GeeksforGeeks Samsung tag", "Android Developer docs"],
        salary: "₹8L - ₹25L+ (India) / $100K - $200K+ (US)",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["C/C++", "DSA", "OS Fundamentals"],
        guidelines: ["Samsung coding test (3 hours, 2 problems)", "Focus on graph/DP problems"],
        resources: ["Samsung SWC past problems", "GeeksforGeeks"],
        salary: "₹20K - ₹50K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Stripe",
    logo: "https://logo.clearbit.com/stripe.com",
    industry: "Fintech",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Ruby/Java/Go", "Distributed Systems", "API Design", "Payments/Fintech", "System Design", "Debugging"],
        guidelines: ["Bug squash round is unique to Stripe", "Pair programming interviews", "Code quality matters more than speed", "Strong communication skills needed"],
        resources: ["Stripe Engineering Blog", "Stripe API docs", "LeetCode Medium"],
        salary: "$130K - $280K+",
        experience: "1-6+ years"
      }
    }
  },
  {
    name: "Airbnb",
    logo: "https://logo.clearbit.com/airbnb.com",
    industry: "Travel / Technology",
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Java/Ruby/JavaScript", "React", "System Design", "Distributed Systems", "GraphQL", "Data Pipelines"],
        guidelines: ["Cross-functional values interview", "Culture fit is critical", "Belong Anywhere values", "Expect coding + architecture rounds"],
        resources: ["Airbnb Engineering Blog", "LeetCode Airbnb tag", "Airbnb design system"],
        salary: "$120K - $260K+",
        experience: "1-6+ years"
      }
    }
  },
  // Hidden companies — only appear when searched
  {
    name: "Myntra",
    logo: "https://logo.clearbit.com/myntra.com",
    industry: "E-Commerce / Fashion",
    hidden: true,
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["Java/Kotlin", "Spring Boot", "Microservices", "React/Angular", "SQL/NoSQL", "System Design"],
        guidelines: ["3-4 coding rounds", "Focus on scalable system design", "E-commerce domain knowledge helps", "Part of Flipkart group"],
        resources: ["LeetCode Medium/Hard", "GeeksforGeeks", "Myntra Tech Blog"],
        salary: "₹12L - ₹35L+ (India)",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA", "Web Dev basics", "Problem Solving"],
        guidelines: ["Online test + 2 interviews", "Apply via campus"],
        resources: ["GeeksforGeeks", "LeetCode Easy/Medium"],
        salary: "₹20K - ₹50K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Meesho",
    logo: "https://logo.clearbit.com/meesho.com",
    industry: "E-Commerce / Social Commerce",
    hidden: true,
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["Java/Go/Python", "Microservices", "AWS", "Kafka", "System Design", "React"],
        guidelines: ["3-4 coding + design rounds", "Scale-focused problems", "Startup-like culture with fast growth", "Focus on DSA + system design"],
        resources: ["Meesho Tech Blog", "LeetCode Medium/Hard", "System Design Primer"],
        salary: "₹15L - ₹45L+ (India)",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA", "Web Technologies"],
        guidelines: ["Online assessment + interviews", "Fast-paced environment"],
        resources: ["LeetCode Medium", "GeeksforGeeks"],
        salary: "₹25K - ₹60K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "AJIO",
    logo: "https://logo.clearbit.com/ajio.com",
    industry: "E-Commerce / Fashion",
    hidden: true,
    roles: {
      "SDE": {
        title: "Software Development Engineer",
        skills: ["Java/Node.js", "React/Angular", "Microservices", "SQL/NoSQL", "AWS", "System Design"],
        guidelines: ["Part of Reliance Retail", "3-4 technical rounds", "E-commerce platform experience valued", "Focus on scalability"],
        resources: ["LeetCode Medium", "GeeksforGeeks", "System Design Interview"],
        salary: "₹10L - ₹30L+ (India)",
        experience: "0-5+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA", "Web Development"],
        guidelines: ["Apply via campus or careers page", "Online test + interview"],
        resources: ["GeeksforGeeks", "LeetCode Easy/Medium"],
        salary: "₹15K - ₹40K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Cognizant",
    logo: "https://logo.clearbit.com/cognizant.com",
    industry: "IT Services / Consulting",
    hidden: true,
    roles: {
      "SDE": {
        title: "Programmer Analyst / Software Engineer",
        skills: ["Java/Python/.NET", "SQL", "Cloud (AWS/Azure)", "Agile", "Web Technologies", "Testing"],
        guidelines: ["Cognizant GenC / GenC Next / GenC Elevate tiers", "Online aptitude + coding test", "Communication skills matter", "Training provided post-joining"],
        resources: ["GeeksforGeeks", "HackerRank", "Cognizant careers"],
        salary: "₹4L - ₹12L+ (India)",
        experience: "0-3+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA Basics", "SQL", "Communication"],
        guidelines: ["Campus recruitment", "Aptitude + coding + HR rounds"],
        resources: ["IndiaBix", "GeeksforGeeks", "HackerRank"],
        salary: "₹10K - ₹25K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Capgemini",
    logo: "https://logo.clearbit.com/capgemini.com",
    industry: "IT Services / Consulting",
    hidden: true,
    roles: {
      "SDE": {
        title: "Software Engineer / Analyst",
        skills: ["Java/Python/.NET", "SQL", "Cloud Basics", "DevOps", "Agile", "Web Technologies"],
        guidelines: ["Online assessment (Game-based + coding)", "Pseudo-code based test", "Multiple tiers: Analyst, Senior Analyst", "Training at Capgemini University"],
        resources: ["GeeksforGeeks", "HackerRank", "Capgemini careers"],
        salary: "₹3.8L - ₹10L+ (India)",
        experience: "0-3+ years"
      },
      "Intern": {
        title: "Technology Intern",
        skills: ["Basic Programming", "Aptitude", "SQL", "Communication"],
        guidelines: ["Campus-driven hiring", "Game-based assessment + interview"],
        resources: ["IndiaBix", "PrepInsta", "GeeksforGeeks"],
        salary: "₹10K - ₹20K/month (India)",
        experience: "Currently enrolled"
      }
    }
  },
  {
    name: "Virtusa",
    logo: "https://logo.clearbit.com/virtusa.com",
    industry: "IT Services / Digital Engineering",
    hidden: true,
    roles: {
      "SDE": {
        title: "Software Engineer",
        skills: ["Java/Python/.NET", "Spring Boot", "Microservices", "SQL", "Cloud (AWS/Azure)", "Agile"],
        guidelines: ["Online test + technical + HR rounds", "Focus on Java/Spring ecosystem", "Good for freshers", "Client-facing roles available"],
        resources: ["GeeksforGeeks", "HackerRank", "Virtusa careers"],
        salary: "₹3.5L - ₹9L+ (India)",
        experience: "0-3+ years"
      },
      "Intern": {
        title: "Software Engineering Intern",
        skills: ["Java/Python", "DSA Basics", "Web Dev", "Communication"],
        guidelines: ["Campus recruitment", "Aptitude + coding rounds"],
        resources: ["GeeksforGeeks", "HackerRank"],
        salary: "₹10K - ₹20K/month (India)",
        experience: "Currently enrolled"
      }
    }
  }
];
