// Industry-oriented course syllabi data

export interface CourseModule {
    title: string;
    duration: string;
    topics: string[];
}

export interface CourseSyllabus {
    id: number;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    duration: string;
    level: string;
    image: string;
    modules: CourseModule[];
    highlights: string[];
    prerequisites: string[];
    careerPaths: string[];
    salaryRange: string;
    tools: string[];
    certification: string;
}

export const courseSyllabi: CourseSyllabus[] = [
    {
        id: 1,
        slug: "full-stack-development",
        title: "Full Stack Development",
        tagline: "Build Complete Web Applications from Frontend to Backend",
        description: "Master both frontend and backend development with React, Node.js, MongoDB, and more. Build real-world applications from scratch and become job-ready.",
        duration: "6 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800",
        modules: [
            {
                title: "Module 1: Web Development Fundamentals",
                duration: "2 weeks",
                topics: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "Responsive Design", "JavaScript ES6+ Basics", "DOM Manipulation"]
            },
            {
                title: "Module 2: Advanced JavaScript",
                duration: "3 weeks",
                topics: ["Async/Await & Promises", "ES6+ Features", "Closures & Prototypes", "Error Handling", "Modules & Bundlers"]
            },
            {
                title: "Module 3: React.js Frontend",
                duration: "4 weeks",
                topics: ["React Components & JSX", "Hooks (useState, useEffect, useContext)", "State Management (Redux/Zustand)", "React Router", "API Integration"]
            },
            {
                title: "Module 4: Node.js & Express",
                duration: "3 weeks",
                topics: ["Node.js Fundamentals", "Express.js Framework", "RESTful API Design", "Middleware & Authentication", "Error Handling"]
            },
            {
                title: "Module 5: Database Design",
                duration: "3 weeks",
                topics: ["MongoDB & Mongoose", "SQL with PostgreSQL", "Database Modeling", "CRUD Operations", "Indexing & Optimization"]
            },
            {
                title: "Module 6: DevOps & Deployment",
                duration: "2 weeks",
                topics: ["Git & GitHub", "CI/CD Basics", "Docker Containers", "Cloud Deployment (AWS/Vercel)", "Monitoring & Logging"]
            },
            {
                title: "Module 7: Capstone Project",
                duration: "4 weeks",
                topics: ["E-commerce Platform", "Social Media App", "Project Management Tool", "Code Review & Best Practices", "Portfolio Building"]
            }
        ],
        highlights: [
            "100% Placement Assistance",
            "10+ Real-world Projects",
            "Industry Expert Mentors",
            "Interview Preparation",
            "Resume Building Workshop"
        ],
        prerequisites: ["Basic computer knowledge", "Logical thinking ability", "No prior coding experience required"],
        careerPaths: ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Software Engineer", "Web Developer"],
        salaryRange: "₹4-15 LPA",
        tools: ["VS Code", "Git", "Postman", "MongoDB Compass", "Chrome DevTools"],
        certification: "Full Stack Development Professional Certificate"
    },
    {
        id: 2,
        slug: "data-science-analytics",
        title: "Data Science & Analytics",
        tagline: "Transform Data into Insights & Business Decisions",
        description: "Learn Python, machine learning, data visualization, and statistical analysis to become a data science expert.",
        duration: "4 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        modules: [
            {
                title: "Module 1: Python for Data Science",
                duration: "3 weeks",
                topics: ["Python Programming Basics", "NumPy & Pandas", "Data Manipulation", "File Handling", "Functions & OOP"]
            },
            {
                title: "Module 2: Statistics & Probability",
                duration: "2 weeks",
                topics: ["Descriptive Statistics", "Probability Theory", "Hypothesis Testing", "Correlation & Regression", "Bayesian Statistics"]
            },
            {
                title: "Module 3: Data Visualization",
                duration: "2 weeks",
                topics: ["Matplotlib & Seaborn", "Plotly Interactive Charts", "Dashboard Creation", "Storytelling with Data", "Power BI/Tableau Basics"]
            },
            {
                title: "Module 4: Machine Learning",
                duration: "4 weeks",
                topics: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation Metrics", "Feature Engineering", "Scikit-learn Library"]
            },
            {
                title: "Module 5: Advanced ML & Deep Learning",
                duration: "3 weeks",
                topics: ["Neural Networks", "TensorFlow/Keras", "Natural Language Processing", "Computer Vision Basics", "Model Deployment"]
            },
            {
                title: "Module 6: Capstone Projects",
                duration: "2 weeks",
                topics: ["Customer Churn Prediction", "Sentiment Analysis", "Sales Forecasting", "Recommendation Systems", "Portfolio Building"]
            }
        ],
        highlights: [
            "5+ Industry Projects",
            "Kaggle Competition Prep",
            "Portfolio Building",
            "Mock Interviews",
            "Job Referrals"
        ],
        prerequisites: ["Basic mathematics knowledge", "Analytical mindset", "No prior coding experience required"],
        careerPaths: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Analyst", "AI Researcher"],
        salaryRange: "₹5-20 LPA",
        tools: ["Jupyter Notebook", "Python", "TensorFlow", "Tableau", "SQL"],
        certification: "Data Science Professional Certificate"
    },
    {
        id: 3,
        slug: "java-programming",
        title: "Java Programming Mastery",
        tagline: "Build Enterprise-Grade Applications with Java",
        description: "Complete Java development from basics to enterprise applications. Learn Spring Boot, Hibernate, and microservices.",
        duration: "5 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
        modules: [
            {
                title: "Module 1: Core Java Fundamentals",
                duration: "3 weeks",
                topics: ["Java Syntax & Data Types", "OOP Concepts", "Exception Handling", "Collections Framework", "Multithreading"]
            },
            {
                title: "Module 2: Advanced Java",
                duration: "3 weeks",
                topics: ["Java 8+ Features", "Lambda Expressions", "Streams API", "Generics", "Annotations"]
            },
            {
                title: "Module 3: Database Integration",
                duration: "2 weeks",
                topics: ["JDBC", "SQL Fundamentals", "Hibernate ORM", "JPA", "Transaction Management"]
            },
            {
                title: "Module 4: Spring Framework",
                duration: "4 weeks",
                topics: ["Spring Core & IoC", "Spring MVC", "Spring Boot", "Spring Security", "Spring Data"]
            },
            {
                title: "Module 5: Microservices",
                duration: "3 weeks",
                topics: ["Microservices Architecture", "REST APIs", "API Gateway", "Service Discovery", "Docker & Kubernetes Basics"]
            },
            {
                title: "Module 6: Testing & Deployment",
                duration: "2 weeks",
                topics: ["JUnit & Mockito", "Integration Testing", "CI/CD Pipelines", "Cloud Deployment", "Monitoring"]
            },
            {
                title: "Module 7: Enterprise Project",
                duration: "3 weeks",
                topics: ["Banking Application", "E-commerce Backend", "Inventory Management", "Best Practices", "Code Review"]
            }
        ],
        highlights: [
            "Enterprise Project Experience",
            "Spring Boot Certification Prep",
            "Interview Preparation",
            "Code Review Sessions",
            "Placement Support"
        ],
        prerequisites: ["Basic programming logic", "Computer fundamentals", "Problem-solving attitude"],
        careerPaths: ["Java Developer", "Backend Developer", "Software Engineer", "Technical Lead", "Architect"],
        salaryRange: "₹4-18 LPA",
        tools: ["IntelliJ IDEA", "Maven/Gradle", "Git", "Postman", "Docker"],
        certification: "Java Full Stack Developer Certificate"
    },
    {
        id: 4,
        slug: "aptitude-training",
        title: "Aptitude Training",
        tagline: "Crack Any Competitive Exam & Placement Interview",
        description: "Comprehensive aptitude training for placement interviews, competitive exams, and logical reasoning skills.",
        duration: "2 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
        modules: [
            {
                title: "Module 1: Quantitative Aptitude",
                duration: "3 weeks",
                topics: ["Number System", "Percentages & Ratios", "Time, Speed & Distance", "Profit & Loss", "Permutation & Combination"]
            },
            {
                title: "Module 2: Logical Reasoning",
                duration: "2 weeks",
                topics: ["Blood Relations", "Coding-Decoding", "Syllogisms", "Seating Arrangements", "Puzzles"]
            },
            {
                title: "Module 3: Verbal Ability",
                duration: "2 weeks",
                topics: ["Reading Comprehension", "Grammar & Vocabulary", "Para Jumbles", "Sentence Correction", "Verbal Reasoning"]
            },
            {
                title: "Module 4: Mock Tests & Practice",
                duration: "1 week",
                topics: ["Company-specific Tests", "Time Management", "Accuracy Improvement", "Test-taking Strategies", "Performance Analysis"]
            }
        ],
        highlights: [
            "500+ Practice Questions",
            "Mock Test Series",
            "Shortcut Techniques",
            "Time Management Tips",
            "Weekly Assessments"
        ],
        prerequisites: ["Basic mathematics", "Reading comprehension", "Desire to improve"],
        careerPaths: ["Any IT Job", "Government Exams", "MBA Entrance", "Bank Exams", "CAT/GRE Preparation"],
        salaryRange: "Enhanced employability",
        tools: ["Online Test Platform", "Practice Sheets", "Mock Tests"],
        certification: "Aptitude Proficiency Certificate"
    },
    {
        id: 5,
        slug: "cloud-computing",
        title: "Cloud Computing",
        tagline: "Master AWS Cloud Infrastructure & Architecture",
        description: "Master Amazon Web Services cloud platform. Learn deployment, scaling, and cloud architecture.",
        duration: "3 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
        modules: [
            {
                title: "Module 1: Cloud Fundamentals",
                duration: "2 weeks",
                topics: ["Cloud Computing Basics", "AWS Account Setup", "IAM & Security", "Regions & Availability Zones", "Billing & Cost Management"]
            },
            {
                title: "Module 2: Compute Services",
                duration: "2 weeks",
                topics: ["EC2 Instances", "Lambda Functions", "Elastic Beanstalk", "Auto Scaling", "Load Balancing"]
            },
            {
                title: "Module 3: Storage & Database",
                duration: "2 weeks",
                topics: ["S3 & Glacier", "EBS & EFS", "RDS & DynamoDB", "ElastiCache", "Backup & Recovery"]
            },
            {
                title: "Module 4: Networking & Security",
                duration: "2 weeks",
                topics: ["VPC Design", "Route 53", "CloudFront CDN", "Security Groups", "AWS Shield & WAF"]
            },
            {
                title: "Module 5: DevOps on AWS",
                duration: "2 weeks",
                topics: ["CodePipeline", "CodeBuild & CodeDeploy", "CloudFormation", "Terraform Basics", "Monitoring with CloudWatch"]
            },
            {
                title: "Module 6: Certification Prep",
                duration: "2 weeks",
                topics: ["AWS Solutions Architect Prep", "Practice Exams", "Hands-on Labs", "Architecture Design", "Best Practices"]
            }
        ],
        highlights: [
            "AWS Certification Prep",
            "Hands-on Labs",
            "Real-world Scenarios",
            "Interview Preparation",
            "Job Assistance"
        ],
        prerequisites: ["Basic IT knowledge", "Networking fundamentals", "Linux basics helpful"],
        careerPaths: ["Cloud Engineer", "AWS Solutions Architect", "DevOps Engineer", "Cloud Administrator", "SRE"],
        salaryRange: "₹6-25 LPA",
        tools: ["AWS Console", "Terraform", "Docker", "Jenkins", "Linux"],
        certification: "AWS Solutions Architect Associate Prep"
    },
    {
        id: 6,
        slug: "mobile-app-development",
        title: "Mobile App Development",
        tagline: "Build Apps for iOS & Android Platforms",
        description: "Build native and cross-platform mobile applications using React Native and Flutter.",
        duration: "4 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
        modules: [
            {
                title: "Module 1: Mobile Development Basics",
                duration: "2 weeks",
                topics: ["Mobile UI/UX Principles", "App Architecture", "Development Environment Setup", "Mobile Design Patterns", "Git Version Control"]
            },
            {
                title: "Module 2: React Native",
                duration: "4 weeks",
                topics: ["React Native Components", "Navigation", "State Management", "Native Modules", "API Integration"]
            },
            {
                title: "Module 3: Flutter Development",
                duration: "4 weeks",
                topics: ["Dart Programming", "Flutter Widgets", "State Management (Provider/Riverpod)", "Animations", "Platform Integration"]
            },
            {
                title: "Module 4: Backend Integration",
                duration: "2 weeks",
                topics: ["REST API Integration", "Firebase Services", "Push Notifications", "Real-time Data", "Offline Storage"]
            },
            {
                title: "Module 5: Testing & Deployment",
                duration: "2 weeks",
                topics: ["Unit & Widget Testing", "Play Store Deployment", "App Store Deployment", "App Performance", "Analytics Integration"]
            },
            {
                title: "Module 6: Capstone Project",
                duration: "2 weeks",
                topics: ["E-commerce App", "Social Media App", "Food Delivery App", "Portfolio Building", "Code Review"]
            }
        ],
        highlights: [
            "3+ Complete Apps",
            "Play Store Publishing",
            "UI/UX Design Skills",
            "Portfolio Apps",
            "Interview Prep"
        ],
        prerequisites: ["Basic programming knowledge", "JavaScript helpful", "Creative mindset"],
        careerPaths: ["Mobile Developer", "React Native Developer", "Flutter Developer", "App Developer", "Mobile Lead"],
        salaryRange: "₹5-18 LPA",
        tools: ["VS Code", "Android Studio", "Xcode", "Firebase", "Figma"],
        certification: "Mobile App Development Professional Certificate"
    },
    {
        id: 7,
        slug: "cybersecurity",
        title: "Cybersecurity",
        tagline: "Protect Systems & Networks from Cyber Threats",
        description: "Learn ethical hacking, penetration testing, and defensive security to protect systems from cyber threats.",
        duration: "6 months",
        level: "Beginner to Advanced",
        image: "https://www.neit.edu/wp-content/uploads/2022/10/Cyber-Security-Icon-Concept-2-1.jpeg",
        modules: [
            {
                title: "Module 1: Security Fundamentals",
                duration: "3 weeks",
                topics: ["CIA Triad", "Security Frameworks", "Threat Landscape", "Risk Assessment", "Security Policies"]
            },
            {
                title: "Module 2: Network Security",
                duration: "3 weeks",
                topics: ["Network Protocols", "Firewalls & IDS/IPS", "VPN & Encryption", "Wireless Security", "Network Monitoring"]
            },
            {
                title: "Module 3: Ethical Hacking",
                duration: "4 weeks",
                topics: ["Reconnaissance", "Scanning & Enumeration", "Exploitation Techniques", "Metasploit Framework", "Social Engineering"]
            },
            {
                title: "Module 4: Web Application Security",
                duration: "3 weeks",
                topics: ["OWASP Top 10", "SQL Injection", "XSS & CSRF", "Burp Suite", "Secure Coding"]
            },
            {
                title: "Module 5: Incident Response",
                duration: "2 weeks",
                topics: ["Incident Handling", "Digital Forensics", "Malware Analysis", "Log Analysis", "Threat Hunting"]
            },
            {
                title: "Module 6: Compliance & Governance",
                duration: "2 weeks",
                topics: ["ISO 27001", "GDPR & Privacy", "SOC 2", "Security Auditing", "Career Guidance"]
            },
            {
                title: "Module 7: Certification Prep",
                duration: "3 weeks",
                topics: ["CEH Preparation", "CompTIA Security+", "Practical Labs", "Mock Exams", "Interview Prep"]
            }
        ],
        highlights: [
            "50+ Hands-on Labs",
            "CTF Challenges",
            "CEH Certification Prep",
            "Bug Bounty Training",
            "Industry Mentorship"
        ],
        prerequisites: ["Basic networking knowledge", "Linux basics", "Curiosity about security"],
        careerPaths: ["Security Analyst", "Penetration Tester", "SOC Analyst", "Security Engineer", "CISO"],
        salaryRange: "₹5-25 LPA",
        tools: ["Kali Linux", "Burp Suite", "Metasploit", "Wireshark", "Nmap"],
        certification: "Cybersecurity Professional Certificate + CEH Prep"
    },
    {
        id: 8,
        slug: "android-development",
        title: "Android Development",
        tagline: "Build Native Android Apps with Kotlin",
        description: "Develop mobile apps for Android using Kotlin and Flutter. Learn native and cross-platform development.",
        duration: "5 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800",
        modules: [
            {
                title: "Module 1: Kotlin Programming",
                duration: "3 weeks",
                topics: ["Kotlin Basics", "OOP in Kotlin", "Null Safety", "Coroutines", "Kotlin Collections"]
            },
            {
                title: "Module 2: Android Fundamentals",
                duration: "3 weeks",
                topics: ["Android Studio Setup", "Activities & Fragments", "Layouts & Views", "Intents & Navigation", "Lifecycle Management"]
            },
            {
                title: "Module 3: Advanced Android",
                duration: "4 weeks",
                topics: ["Jetpack Components", "Room Database", "ViewModel & LiveData", "WorkManager", "Dependency Injection"]
            },
            {
                title: "Module 4: Jetpack Compose",
                duration: "3 weeks",
                topics: ["Compose Basics", "State Management", "Animations", "Material Design 3", "Navigation Compose"]
            },
            {
                title: "Module 5: Backend Integration",
                duration: "2 weeks",
                topics: ["REST API with Retrofit", "Firebase Integration", "Push Notifications", "Authentication", "Cloud Storage"]
            },
            {
                title: "Module 6: Testing & Publishing",
                duration: "2 weeks",
                topics: ["Unit Testing", "UI Testing", "Play Store Guidelines", "App Monetization", "Analytics"]
            },
            {
                title: "Module 7: Capstone Project",
                duration: "3 weeks",
                topics: ["Complete App Development", "Code Review", "Performance Optimization", "Portfolio Building", "Interview Prep"]
            }
        ],
        highlights: [
            "5+ Complete Apps",
            "Play Store Publishing",
            "Jetpack Compose",
            "Industry Projects",
            "Placement Support"
        ],
        prerequisites: ["Basic programming logic", "OOP concepts helpful", "Android device for testing"],
        careerPaths: ["Android Developer", "Mobile Developer", "App Developer", "Tech Lead", "Freelancer"],
        salaryRange: "₹4-15 LPA",
        tools: ["Android Studio", "Kotlin", "Firebase", "Git", "Figma"],
        certification: "Android Development Professional Certificate"
    },
    {
        id: 9,
        slug: "devops",
        title: "DevOps",
        tagline: "Automate, Deploy & Scale Modern Applications",
        description: "Learn CI/CD pipelines, containerization, cloud deployment, and automation tools for modern software delivery.",
        duration: "3 months",
        level: "Beginner to Advanced",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*hnrlp3W6kfInWHtJd9Vvag.jpeg",
        modules: [
            {
                title: "Module 1: DevOps Fundamentals",
                duration: "1 week",
                topics: ["DevOps Culture", "Agile & Scrum", "Version Control with Git", "Branching Strategies", "Collaboration Tools"]
            },
            {
                title: "Module 2: Linux & Scripting",
                duration: "2 weeks",
                topics: ["Linux Administration", "Shell Scripting", "Bash Automation", "Cron Jobs", "System Monitoring"]
            },
            {
                title: "Module 3: Containerization",
                duration: "2 weeks",
                topics: ["Docker Fundamentals", "Dockerfile Best Practices", "Docker Compose", "Container Networking", "Docker Registry"]
            },
            {
                title: "Module 4: CI/CD Pipelines",
                duration: "2 weeks",
                topics: ["Jenkins Pipeline", "GitHub Actions", "GitLab CI", "Artifact Management", "Testing Automation"]
            },
            {
                title: "Module 5: Kubernetes",
                duration: "3 weeks",
                topics: ["K8s Architecture", "Pods & Deployments", "Services & Ingress", "ConfigMaps & Secrets", "Helm Charts"]
            },
            {
                title: "Module 6: Infrastructure as Code",
                duration: "2 weeks",
                topics: ["Terraform Basics", "AWS CloudFormation", "Ansible Automation", "Infrastructure Patterns", "Best Practices"]
            }
        ],
        highlights: [
            "Hands-on Labs",
            "Real CI/CD Projects",
            "Kubernetes Certification Prep",
            "Industry Tools",
            "Job Placement"
        ],
        prerequisites: ["Basic Linux knowledge", "Any programming language", "Cloud basics helpful"],
        careerPaths: ["DevOps Engineer", "SRE", "Platform Engineer", "Cloud Engineer", "Release Manager"],
        salaryRange: "₹6-22 LPA",
        tools: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"],
        certification: "DevOps Professional Certificate"
    },
    {
        id: 10,
        slug: "mlops",
        title: "MLOps",
        tagline: "Deploy & Manage ML Models in Production",
        description: "Bridge machine learning and operations. Deploy, monitor, and manage ML models in production.",
        duration: "4 months",
        level: "Beginner to Advanced",
        image: "https://www.atomcamp.com/wp-content/uploads/2024/04/image-10-1024x495.png",
        modules: [
            {
                title: "Module 1: ML Fundamentals Recap",
                duration: "2 weeks",
                topics: ["ML Pipeline Overview", "Model Training Basics", "Data Preprocessing", "Feature Engineering", "Model Evaluation"]
            },
            {
                title: "Module 2: Experiment Tracking",
                duration: "2 weeks",
                topics: ["MLflow Basics", "Experiment Logging", "Model Registry", "Versioning", "Reproducibility"]
            },
            {
                title: "Module 3: Data Pipelines",
                duration: "2 weeks",
                topics: ["Apache Airflow", "Data Validation", "Feature Stores", "Data Quality", "ETL Best Practices"]
            },
            {
                title: "Module 4: Model Deployment",
                duration: "3 weeks",
                topics: ["Docker for ML", "FastAPI/Flask APIs", "TensorFlow Serving", "Model Optimization", "A/B Testing"]
            },
            {
                title: "Module 5: Kubernetes for ML",
                duration: "2 weeks",
                topics: ["K8s ML Workloads", "Kubeflow", "Seldon Core", "Scaling Models", "Resource Management"]
            },
            {
                title: "Module 6: Monitoring & LLMOps",
                duration: "3 weeks",
                topics: ["Model Monitoring", "Drift Detection", "LLM Deployment", "Vector Databases", "RAG Pipelines"]
            },
            {
                title: "Module 7: Capstone Project",
                duration: "2 weeks",
                topics: ["End-to-End ML Pipeline", "Production Deployment", "CI/CD for ML", "Documentation", "Portfolio"]
            }
        ],
        highlights: [
            "End-to-End ML Pipelines",
            "LLMOps & GenAI",
            "Industry Best Practices",
            "Real Deployment Projects",
            "Career Guidance"
        ],
        prerequisites: ["Python programming", "ML basics", "Docker knowledge helpful"],
        careerPaths: ["MLOps Engineer", "ML Engineer", "Data Engineer", "AI Infrastructure Engineer", "Platform Engineer"],
        salaryRange: "₹8-28 LPA",
        tools: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "Airflow"],
        certification: "MLOps Professional Certificate"
    },
    {
        id: 11,
        slug: "generative-ai",
        title: "Generative AI",
        tagline: "Master LLMs, Prompt Engineering & AI Applications",
        description: "Explore large language models, image generation, and AI-powered creative tools with hands-on projects.",
        duration: "6 months",
        level: "Beginner to Advanced",
        image: "https://pub-e93d5c9fdf134c89830082377f6df465.r2.dev/2025/01/Generative-AI-edited.webp",
        modules: [
            {
                title: "Module 1: AI & ML Foundations",
                duration: "2 weeks",
                topics: ["AI/ML Fundamentals", "Neural Networks Basics", "Deep Learning Overview", "Transformers Architecture", "Attention Mechanism"]
            },
            {
                title: "Module 2: Large Language Models",
                duration: "3 weeks",
                topics: ["GPT Architecture", "BERT & T5", "Fine-tuning LLMs", "Hugging Face Ecosystem", "Tokenization & Embeddings"]
            },
            {
                title: "Module 3: Prompt Engineering",
                duration: "2 weeks",
                topics: ["Prompt Design Principles", "Few-shot Learning", "Chain-of-Thought", "Prompt Optimization", "Safety & Guardrails"]
            },
            {
                title: "Module 4: Building AI Applications",
                duration: "4 weeks",
                topics: ["LangChain Framework", "RAG Architecture", "Vector Databases (Pinecone/Chroma)", "Chatbot Development", "Document QA Systems"]
            },
            {
                title: "Module 5: Agentic AI & MCP",
                duration: "3 weeks",
                topics: ["AI Agents Fundamentals", "Multi-Agent Systems", "Tool Use & Function Calling", "Model Context Protocol", "Autonomous AI Systems"]
            },
            {
                title: "Module 6: Image Generation",
                duration: "2 weeks",
                topics: ["Diffusion Models", "Stable Diffusion", "DALL-E & Midjourney", "Image-to-Image", "ControlNet"]
            },
            {
                title: "Module 7: Production Deployment",
                duration: "2 weeks",
                topics: ["API Integration", "Cost Optimization", "Model Serving", "Monitoring & Safety", "Ethics & Responsible AI"]
            },
            {
                title: "Module 8: Capstone Projects",
                duration: "3 weeks",
                topics: ["AI Chatbot", "Content Generator", "Code Assistant", "Image Generation App", "Portfolio Building"]
            }
        ],
        highlights: [
            "Hands-on with GPT-4 & Claude",
            "RAG Application Building",
            "Agentic AI & MCP",
            "10+ Projects",
            "Industry Mentorship"
        ],
        prerequisites: ["Python basics", "Basic ML understanding helpful", "API knowledge helpful"],
        careerPaths: ["GenAI Engineer", "AI Developer", "Prompt Engineer", "AI Solutions Architect", "ML Engineer"],
        salaryRange: "₹8-35 LPA",
        tools: ["Python", "LangChain", "OpenAI API", "Hugging Face", "Pinecone"],
        certification: "Generative AI Professional Certificate"
    },
    {
        id: 12,
        slug: "embedded-iot",
        title: "Embedded & IoT",
        tagline: "Build Smart Devices & IoT Solutions",
        description: "Learn microcontroller programming, IoT protocols, and real-time data integration with cloud services.",
        duration: "4 months",
        level: "Beginner to Advanced",
        image: "https://www.ultralibrarian.com/wp-content/uploads/2022/06/shutterstock_13717364781.jpg",
        modules: [
            {
                title: "Module 1: Electronics Fundamentals",
                duration: "2 weeks",
                topics: ["Basic Electronics", "Circuit Components", "Sensors & Actuators", "Reading Datasheets", "Breadboard Prototyping"]
            },
            {
                title: "Module 2: Arduino Programming",
                duration: "3 weeks",
                topics: ["Arduino IDE Setup", "Digital & Analog I/O", "Serial Communication", "Libraries & Shields", "Sensor Integration"]
            },
            {
                title: "Module 3: ESP32 & WiFi",
                duration: "3 weeks",
                topics: ["ESP32 Architecture", "WiFi Connectivity", "Web Server", "OTA Updates", "Power Management"]
            },
            {
                title: "Module 4: IoT Protocols",
                duration: "2 weeks",
                topics: ["MQTT Protocol", "HTTP/REST APIs", "WebSockets", "LoRa/LoRaWAN", "Bluetooth/BLE"]
            },
            {
                title: "Module 5: Cloud Integration",
                duration: "2 weeks",
                topics: ["AWS IoT Core", "Firebase Realtime DB", "ThingSpeak", "Data Visualization", "Mobile App Integration"]
            },
            {
                title: "Module 6: Embedded C/C++",
                duration: "2 weeks",
                topics: ["C Programming Basics", "Memory Management", "Interrupts", "RTOS Basics", "Debugging Techniques"]
            },
            {
                title: "Module 7: Capstone Project",
                duration: "2 weeks",
                topics: ["Smart Home System", "Environmental Monitoring", "Industrial IoT", "Portfolio Building", "Project Demo"]
            }
        ],
        highlights: [
            "10+ Hardware Projects",
            "ESP32 & Arduino Kits",
            "Cloud Integration",
            "Industry Mentorship",
            "Job Assistance"
        ],
        prerequisites: ["Basic programming", "Interest in electronics", "No hardware experience needed"],
        careerPaths: ["Embedded Engineer", "IoT Developer", "Firmware Engineer", "Hardware Engineer", "Product Developer"],
        salaryRange: "₹4-15 LPA",
        tools: ["Arduino IDE", "PlatformIO", "ESP32", "MQTT", "AWS IoT"],
        certification: "Embedded & IoT Professional Certificate"
    },
    {
        id: 13,
        slug: "digital-marketing",
        title: "Digital Marketing",
        tagline: "Grow Businesses Online with Data-Driven Marketing",
        description: "Master SEO, social media marketing, Google Ads, and analytics to grow businesses online.",
        duration: "3 months",
        level: "Beginner to Advanced",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800",
        modules: [
            {
                title: "Module 1: Digital Marketing Fundamentals",
                duration: "1 week",
                topics: ["Digital Marketing Overview", "Customer Journey", "Marketing Funnel", "Brand Building", "Goal Setting"]
            },
            {
                title: "Module 2: SEO & Content Marketing",
                duration: "3 weeks",
                topics: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Content Strategy"]
            },
            {
                title: "Module 3: Social Media Marketing",
                duration: "2 weeks",
                topics: ["Facebook & Instagram", "LinkedIn Marketing", "Twitter/X Strategy", "Content Calendar", "Community Management"]
            },
            {
                title: "Module 4: Paid Advertising",
                duration: "3 weeks",
                topics: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Retargeting", "Campaign Optimization"]
            },
            {
                title: "Module 5: Analytics & Reporting",
                duration: "2 weeks",
                topics: ["Google Analytics 4", "Tag Manager", "Conversion Tracking", "Dashboard Creation", "ROI Measurement"]
            },
            {
                title: "Module 6: AI in Marketing",
                duration: "1 week",
                topics: ["ChatGPT for Content", "AI Tools for Marketing", "Automation", "Personalization", "Future Trends"]
            }
        ],
        highlights: [
            "Google Ads Certification",
            "Real Campaign Experience",
            "Analytics Mastery",
            "AI Tools Training",
            "Portfolio Projects"
        ],
        prerequisites: ["Basic computer skills", "Social media familiarity", "Creative mindset"],
        careerPaths: ["Digital Marketing Manager", "SEO Specialist", "Social Media Manager", "PPC Specialist", "Content Strategist"],
        salaryRange: "₹3-12 LPA",
        tools: ["Google Ads", "Meta Business Suite", "Google Analytics", "SEMrush", "Canva"],
        certification: "Digital Marketing Professional Certificate"
    },
    {
        id: 14,
        slug: "automation-testing",
        title: "Automation Testing",
        tagline: "Ensure Software Quality with Automated Testing",
        description: "QA Engineering with Selenium, JUnit, Load Runner, and Trello for comprehensive software testing.",
        duration: "3 months",
        level: "Beginner to Advanced",
        image: "https://executeautomationtest.wordpress.com/wp-content/uploads/2017/11/automation-testing.png",
        modules: [
            {
                title: "Module 1: Testing Fundamentals",
                duration: "2 weeks",
                topics: ["SDLC & STLC", "Testing Types", "Test Case Design", "Bug Life Cycle", "Testing Documentation"]
            },
            {
                title: "Module 2: Manual Testing",
                duration: "2 weeks",
                topics: ["Functional Testing", "Regression Testing", "UAT", "Test Management Tools", "Defect Tracking"]
            },
            {
                title: "Module 3: Selenium WebDriver",
                duration: "4 weeks",
                topics: ["Selenium Setup", "Locators & WebElements", "Test Frameworks", "Page Object Model", "Data-Driven Testing"]
            },
            {
                title: "Module 4: API Testing",
                duration: "2 weeks",
                topics: ["REST API Basics", "Postman Tool", "REST Assured", "API Test Automation", "Contract Testing"]
            },
            {
                title: "Module 5: Performance Testing",
                duration: "2 weeks",
                topics: ["JMeter Basics", "Load Testing", "Stress Testing", "Performance Metrics", "LoadRunner Introduction"]
            },
            {
                title: "Module 6: CI/CD & Reporting",
                duration: "2 weeks",
                topics: ["Jenkins Integration", "Test Reporting", "Allure Reports", "Test Management", "Best Practices"]
            }
        ],
        highlights: [
            "Selenium Certification Prep",
            "Real Project Experience",
            "API Testing Skills",
            "Performance Testing",
            "Job Placement"
        ],
        prerequisites: ["Basic programming knowledge", "Analytical mindset", "Attention to detail"],
        careerPaths: ["QA Engineer", "Automation Tester", "SDET", "Test Lead", "QA Manager"],
        salaryRange: "₹4-15 LPA",
        tools: ["Selenium", "TestNG", "JMeter", "Postman", "Jenkins"],
        certification: "Automation Testing Professional Certificate"
    }
];

export const getCourseBySlug = (slug: string): CourseSyllabus | undefined => {
    return courseSyllabi.find(course => course.slug === slug);
};
