"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle2, Bot, BrainCircuit, Code, Sparkles, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

const GenerativeAIBangalore = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Generative AI Training in Bangalore",
    "description": "Master Generative AI, Large Language Models (LLMs), LangChain, and ChatGPT API integration with hands-on projects at Techmiya EdTech in Jayanagar.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Techmiya EdTech",
      "sameAs": "https://www.techmiyaedtech.com"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Generative AI Training Bangalore | 100% Placement Support"
        description="Looking for the best Generative AI training in Bangalore? Join Techmiya EdTech in Jayanagar. Master LLMs, Prompt Engineering & LangChain. Enroll today!"
        keywords="Generative AI training Bangalore, GenAI course Jayanagar, LLM course Bangalore, ChatGPT API training, best AI institute South Bangalore"
        canonicalUrl="/courses/generative-ai-training-bangalore"
        structuredData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-[#0f172a]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="container relative z-10 px-4 mx-auto lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="px-4 py-1 mb-6 text-sm font-semibold text-white uppercase bg-blue-600/80 rounded-full backdrop-blur-sm border border-blue-400/30">
              #1 Ranked AI Institute in Jayanagar
            </Badge>
            <h1 className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
              Master the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Generative AI Training</span> in Bangalore
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-300">
              Transform your career with Bangalore's most comprehensive offline Generative AI program. 
              Learn directly from industry experts in Jayanagar. Master Large Language Models, LangChain, 
              Agentic AI, and build real-world AI applications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/30">
                  Book Free Demo Class
                </Button>
              </Link>
              <a href="tel:+916363760275">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg font-bold border-slate-600 text-white bg-slate-800/50 hover:bg-slate-800">
                  Call Counselor: +91-6363760275
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Techmiya Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Why is Bangalore the Hub for Generative AI Careers?
              </h2>
              <div className="prose prose-lg text-slate-600">
                <p>
                  As India's Silicon Valley, Bangalore is currently witnessing an unprecedented surge in demand for Artificial Intelligence engineers. Startups and enterprise giants in Koramangala, HSR Layout, and Electronic City are actively recruiting professionals skilled in <strong>Generative AI, ChatGPT integration, and Prompt Engineering</strong>.
                </p>
                <p>
                  However, there is a massive skill gap. While theoretical knowledge is available online, companies are looking for developers who can <em>build scalable AI agents</em> and integrate LLMs into production applications.
                </p>
                <p>
                  At <strong>Techmiya EdTech in Jayanagar</strong>, our Generative AI training program is designed to bridge this exact gap. We don't just teach theory; we provide an intensive, project-driven offline environment where you build AI apps that recruiters are actually looking for.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Bot className="w-8 h-8 text-blue-500" />, title: "Hands-on Projects", desc: "Build custom chatbots, text generators, and RAG pipelines." },
                { icon: <GraduationCap className="w-8 h-8 text-indigo-500" />, title: "Expert Faculty", desc: "Learn from AI researchers and seasoned ML engineers." },
                { icon: <Briefcase className="w-8 h-8 text-cyan-500" />, title: "100% Placement", desc: "Dedicated interview prep and direct referrals in Bangalore." },
                { icon: <Sparkles className="w-8 h-8 text-purple-500" />, title: "Latest Tech Stack", desc: "Master OpenAI API, HuggingFace, LangChain & Vector DBs." }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-lg bg-slate-50 hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6">
                    <div className="mb-4 bg-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container px-4 mx-auto lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive GenAI Curriculum</h2>
            <p className="text-xl text-slate-400">What you will learn in our Jayanagar classroom</p>
          </div>
          
          <div className="space-y-6">
            {[
              { title: "Module 1: Foundations of Deep Learning & NLP", desc: "Start with the basics of Neural Networks, PyTorch basics, and classic Natural Language Processing techniques. Understand word embeddings and attention mechanisms." },
              { title: "Module 2: Transformers & LLM Architecture", desc: "Deep dive into the 'Attention is All You Need' paper. Understand how models like GPT-3, BERT, and Llama function under the hood." },
              { title: "Module 3: Prompt Engineering & OpenAI API", desc: "Master advanced prompt engineering techniques (Zero-shot, Few-shot, Chain-of-Thought). Learn to integrate OpenAI APIs into Python applications." },
              { title: "Module 4: LangChain & LlamaIndex", desc: "Build powerful LLM applications using LangChain. Learn to chain prompts, use memory, and connect LLMs to external data sources." },
              { title: "Module 5: RAG (Retrieval-Augmented Generation) & Vector DBs", desc: "Solve LLM hallucinations by building RAG pipelines using Pinecone, ChromaDB, and FAISS vector databases." },
              { title: "Module 6: Fine-tuning & Open Source Models", desc: "Learn PEFT, LoRA, and how to fine-tune open-source models from HuggingFace on your custom datasets." },
            ].map((mod, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                <div className="shrink-0 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{mod.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Section */}
      <section className="py-20 bg-blue-50">
        <div className="container px-4 mx-auto lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Career Opportunities in Bangalore
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            The average salary for a Generative AI Engineer in Bangalore ranges from <strong>₹12 LPA to ₹35 LPA</strong> depending on experience. With our dedicated placement cell in Jayanagar, we prepare you for roles like <em>AI Prompt Engineer, LLM Developer, AI Product Manager, and Machine Learning Engineer</em>.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Badge variant="outline" className="px-4 py-2 text-lg border-blue-200 bg-white text-blue-800">Resume Building</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg border-blue-200 bg-white text-blue-800">Mock Interviews</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg border-blue-200 bg-white text-blue-800">Direct Referrals</Badge>
            <Badge variant="outline" className="px-4 py-2 text-lg border-blue-200 bg-white text-blue-800">Portfolio Creation</Badge>
          </div>
          <Link href="/register">
            <Button size="lg" className="px-10 py-6 text-xl bg-blue-600 hover:bg-blue-700 shadow-xl">
              Start Your AI Journey Today <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GenerativeAIBangalore;
