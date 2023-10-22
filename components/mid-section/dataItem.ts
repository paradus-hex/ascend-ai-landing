interface DataItem {
    id: number;
    icon: string;
    title: string;
    description: string;
  }
  
  const data: DataItem[] = [
    {
      id: 1,
      icon: "/chatBot.svg",
      title: "AI Chatbot Development",
      description:
        "We develop custom AI chatbots, accelerating response times by up to 300%, enhancing customer interactions, and streamlining internal communications, all tailored to your business needs.",
    },
    {
      id: 2,
      icon: "/workFlow.svg",
      title: "Workflow Automation",
      description:
        "Our team automates your manual tasks with effective solutions, leveraging tools like Zapier and Pipedream to reduce your operational costs and save up to 70% of your time.",
    },
  
    {
      id: 3,
      icon: "/consult.svg",
      title: "AI Strategy Consultation",
      description:
        "We help you discover potential opportunities for AI integration and automation in your business, ensuring your digital transformation is not only seamless but also value-driven.",
    },
  
    {
      id: 4,
      icon: "/llm.svg",
      title: "Fine tuning LLMs",
      description:
        "We fine-tune large language models to far exceed ChatGPT's performance in given specific tasks or domain.",
    },
  
    {
      id: 5,
      icon: "/plugin.svg",
      title: "ChatGPT Plugins",
      description:
        "We engineer custom ChatGPT plugins for your business, unlocking the potential to multiply your leads tenfold.",
    },
  
    {
      id: 6,
      icon: "/dataGeneration.svg",
      title: "Data generation",
      description:
        "We provide Data Generation service which optimizes Large Language Models by producing high-quality, diverse datasets for fine-tuning, prioritizing performance, data privacy, and security.",
    },
  ];
  export default data;