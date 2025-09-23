export const projectsData = [
    {
        id: 1,
        name: 'MeOpenAIAPI - Intelligent Chatbot API',
        description: "Developed an AI-powered chatbot API using ASP.NET Core Web API, Azure OpenAI, and Azure Cognitive Search, designed for enterprise AI chatbots, knowledge retrieval, and automated FAQ resolution. Implemented secure data handling with encryption using SOPS and Azure Key Vault keys, PII removal using Azure AI Language Service, and multilingual support with language detection, translation, and transliteration. Optimized query processing by transforming user inputs into search-friendly formats, retrieving top-ranked results, and applying semantic ranking while maintaining chat history for context-aware responses.",
        tools: ['ASP.NET Core', 'Azure OpenAI', 'Azure Cognitive Search', 'Azure Key Vault', 'Azure AI Language Service', 'Semantic Ranking', 'PII Removal', 'Multilingual Support'],
        role: 'Conversational AI Engineer',
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Invoice Processing API',
        description: 'Fine-tuned Azure OpenAI on 1,000 invoice templates and developed an API that extracts text using Azure Read API and converts it into structured data using the Fine-tuned model. Automated invoice processing for financial and inventory management, improving accuracy and efficiency.',
        tools: ['Azure OpenAI', 'Azure Read API', 'Fine-tuning', 'Document Processing', 'Data Extraction', 'API Development'],
        role: 'AI Engineer',
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Hanley Conversation Analyzing Function APP',
        description: 'Built an Azure Function in C# to analyze and summarize chatbot interactions. Processed message logs from Azure Cosmos DB, calculating session duration and Azure OpenAI token usage. Updated analyzed data in Cosmos DB for tracking and performance optimization.',
        tools: ['Azure Functions', 'C#', 'Azure Cosmos DB', 'Azure OpenAI', 'Data Analysis', 'Performance Optimization'],
        role: 'Conversational AI Developer',
        code: '',
        demo: '',
    },
    {
        id: 4,
        name: 'AI-Powered Task Automation API',
        description: "Built an intent-based AI automation API using Azure OpenAI Assistant API for task execution. Automated Freshdesk ticket creation, to-do list management, meeting scheduling, and invoice processing. Integrated Azure AI to fetch available time slots and automate scheduling, optimizing workflow execution with AI-powered decision-making.",
        tools: ['Azure OpenAI Assistant API', 'Freshdesk Integration', 'Automation', 'Workflow Optimization', 'Intent Recognition', 'Task Scheduling'],
        code: '',
        demo: '',
        role: 'AI Solution Developer',
    },
    {
        id: 5,
        name: 'Database Query Bot',
        description: "Developed an AI-powered chatbot using Azure Bot Service and Python SDK, enabling natural language database querying with secure execution on Azure SQL Database. Integrated Azure OpenAI Assistant API for query understanding, SQL generation, and conversation context maintenance, utilizing Azure AI Search for schema indexing and vector search to identify relevant tables. Implemented Azure Key Vault for secure credential storage and formatted query responses as Adaptive Cards with an Export to CSV option.",
        tools: ['Azure Bot Service', 'Python SDK', 'Azure OpenAI Assistant API', 'Azure SQL Database', 'Azure AI Search', 'Azure Key Vault', 'Adaptive Cards', 'Natural Language Processing'],
        code: '',
        demo: '',
        role: 'Conversational AI Engineer',
    },
    {
        id: 6,
        name: 'Digital Human Bot',
        description: "Designed conversational flows using Bot Framework Composer and integrated APIs to enable real-time voice-based interactions with a digital avatar via Azure Bot Service and Media Services. Developed a speech-to-text and text-to-speech pipeline using Azure Speech SDK for realistic lip-sync animation, while ensuring efficient deployment and scalability with Azure Function App and Azure Storage.",
        tools: ['Bot Framework Composer', 'Azure Bot Service', 'Azure Media Services', 'Azure Speech SDK', 'Azure Function App', 'Azure Storage', 'Digital Avatar', 'Voice Interaction'],
        code: '',
        demo: '',
        role: 'Conversational AI Developer',
    },
    {
        id: 7,
        name: 'IT Support Chatbot',
        description: "Developed an AI-powered IT support chatbot using Azure AI Agent and Azure OpenAI for intelligent query handling and automation. Implemented intent recognition to dynamically execute tasks, including support ticket creation, leave application tracking, and policy queries via Azure Search. Integrated automated function execution within the AI Agent, ensuring seamless user interactions and efficient IT support automation.",
        tools: ['Azure AI Agent', 'Azure OpenAI', 'Azure Search', 'RAG', 'Intent Recognition', 'Automated Function Execution', 'IT Support Automation'],
        code: '',
        demo: '',
        role: 'Conversational AI Engineer',
    },
    {
        id: 8,
        name: 'Customization Chatbot',
        description: "Developed an AI-powered customizable chatbot system that allows users to train the chatbot with their own documents and generate an embed code to deploy it anywhere. The system is built with FastAPI and supports RAG (Retrieval-Augmented Generation) using FAISS. It integrates with multiple LLM providers (Google Gemini, OpenAI), supports document ingestion (PDFs, text, scanned images via OCR), and enables multilingual interactions with translation and language detection. Provides secure authentication, persistent chat history, and seamless embedding for external platforms.",
        tools: ['FastAPI', 'Uvicorn', 'FAISS', 'Google Gemini', 'OpenAI', 'PyPDF2', 'PyMuPDF', 'Tesseract OCR', 'Google Cloud Vision', 'Azure Cognitive Services', 'LangDetect', 'Deep Translator', 'SQLite', 'Authlib', 'Pydantic', 'BeautifulSoup4'],
        code: '',
        demo: '',
        role: 'AI Chatbot Platform Developer',
    },
    {
        id: 9,
        name: 'Finance & Health Chatbot',
        description: "Developed an AI-powered personal assistant chatbot that helps users track both financial expenses and health data in natural language. Users can log daily expenses (with item, amount, category) and food intake (with calories, quantity, and meal type). The system integrates with Google Gemini for intent recognition and entity extraction, securely stores structured logs in SQLite, and provides interactive summaries for expenses and nutrition. Features include currency formatting based on user preferences, period-based summaries (daily, weekly, monthly, yearly), calorie tracking by meal and food item, and top expense/food insights. The chatbot supports contextual queries such as 'What were my expenses last week?' or 'How many calories did I consume yesterday?' and responds with friendly, human-like confirmations.",
        tools: ['FastAPI', 'Google Gemini', 'SQLite', 'OpenAi', 'JWT Authentication'],
        code: '',
        demo: '',
        role: 'AI Chatbot Developer',
    },
    {
        id: 10,
        name: '360° Spin Virtual Try-On System',
        description: "Developed an interactive 360° virtual try-on system that allows users to view clothing items in a rotatable, multi-angle interactive viewer. The system takes product images from multiple angles, stitches them together, and renders a smooth rotation experience with HTML and JavaScript. Integrated Google Gemini (via Vertex AI) for multimodal image-to-image generation, enabling the simulation of a person wearing the selected clothing item in 360° view. Features include image preprocessing with Pillow, base64 encoding/decoding for efficient transfer, and dynamic user interactions with sliders and thumbnails.",
        tools: [
            'Python',
            'Google Gemini (Vertex AI)',
            'Pillow (PIL)',
            'HTML',
            'JavaScript',
            'Base64',
            'IO'
        ],
        code: '',
        demo: '',
        role: 'AI Solutions Developer',
    },

    {
        id: 11,
        name: 'Body Measurement Prediction System',
        description: "Built a Body Measurement Prediction System using the Anthropometric-Data-Pak dataset to predict children’s anthropometric measurements for garment sizing, growth monitoring, and virtual try-on applications. The system takes basic inputs such as age, gender, height, and weight, then predicts multiple measurements (waist, hip, bicep, neck, wrist) using a multi-output regression model, while deriving chest, shoulder, and sleeve using domain-specific formulas. Outputs are provided in both centimeters and inches for usability across industries.",
        tools: ['Python', 'pandas', 'scikit-learn', 'joblib'],
        code: '',
        demo: '',
        role: 'Machine Learning Developer',
    },
    
    {
        id: 12,
        name: 'Swakriti FAQ Chatbot',
        description: "Developed a Swakriti FAQ Chatbot to assist parents and users by answering questions based on the official Swakriti User Guide. The chatbot provides onboarding help, outfit designing guidance, sustainability information, and support contacts in a friendly, professional tone. Powered by Google Gemini, it ensures responses are strictly aligned with the guide.",
        tools: ['Python', 'Flask', 'python-dotenv', 'Google Gemini'],
        code: '',
        demo: '',
        role: 'Conversational AI Developer',
    },

    {
        id: 13,
        name: 'Dress Recommendation System',
        description: "Built a Dress Recommendation System that imports product data from MySQL, generates semantic embeddings for product descriptions and tags using Google Gemini, stores them in Pinecone, and enables semantic search-based recommendations. The system bridges structured product metadata with advanced vector search for accurate and personalized outfit suggestions.",
        tools: ['Python', 'Flask', 'langchain_google_genai', 'Pinecone', 'MySQL', 'pandas'],
        code: '',
        demo: '',
        role: 'AI Developer',
    }




];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },