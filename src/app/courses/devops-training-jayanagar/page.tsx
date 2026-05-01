"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle2, Cloud, Server, Code, Shield, Terminal, ArrowRight, Laptop } from "lucide-react";
import Link from "next/link";

const DevOpsJayanagar = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "DevOps Training in Jayanagar",
    "description": "Comprehensive DevOps training in Jayanagar, Bangalore. Master AWS, Docker, Kubernetes, Jenkins, and CI/CD pipelines with real-world projects and 100% placement support at Techmiya EdTech.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Techmiya EdTech",
      "sameAs": "https://www.techmiyaedtech.com"
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead
        title="Best DevOps Training in Jayanagar | Placement Guarantee"
        description="Looking for the best DevOps training institute in Jayanagar, Bangalore? Techmiya EdTech offers hands-on AWS, Docker, Kubernetes & CI/CD training. Enroll today!"
        keywords="DevOps training Jayanagar, AWS DevOps course South Bangalore, CI/CD training Bangalore, Kubernetes course Jayanagar, best DevOps institute Jayanagar"
        canonicalUrl="/courses/devops-training-jayanagar"
        structuredData={schema}
      />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"></div>
        
        <div className="container relative z-10 px-4 mx-auto lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="px-4 py-1 mb-6 text-sm font-semibold text-white uppercase bg-indigo-600/80 rounded-full backdrop-blur-sm border border-indigo-400/30">
                #1 Rated DevOps Course in South Bangalore
              </Badge>
              <h1 className="mb-6 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                Accelerate Your IT Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">DevOps Mastery</span>
              </h1>
              <p className="mb-10 text-xl leading-relaxed text-indigo-100 max-w-2xl mx-auto lg:mx-0">
                Join our premium offline DevOps training center in Jayanagar. Master Cloud Infrastructure, CI/CD, Containerization, and Automation with live production-grade projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/register">
                  <Button size="lg" className="px-8 py-6 text-lg font-bold bg-white text-indigo-900 hover:bg-slate-100 shadow-xl">
                    Enroll in Jayanagar Batch
                  </Button>
                </Link>
                <a href="tel:+916363760275">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-bold border-indigo-400 text-white hover:bg-indigo-800">
                    Talk to Expert
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg hidden lg:block">
               {/* Terminal illustration */}
               <div className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                 <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-slate-700">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400">techmiya@devops: ~</span>
                 </div>
                 <div className="p-6 font-mono text-sm text-green-400 leading-relaxed space-y-2">
                    <p><span className="text-blue-400">$</span> git clone infrastructure.git</p>
                    <p className="text-slate-400">Cloning into 'infrastructure'...</p>
                    <p><span className="text-blue-400">$</span> docker build -t techmiya-app .</p>
                    <p className="text-slate-400">Step 1/10 : FROM node:18-alpine</p>
                    <p className="text-slate-400">---&gt; Successfully built 8a9b7c6d5e4f</p>
                    <p><span className="text-blue-400">$</span> kubectl apply -f deployment.yaml</p>
                    <p className="text-cyan-400">deployment.apps/techmiya-app created</p>
                    <p className="text-yellow-400 animate-pulse">Waiting for pods to be ready...</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Jayanagar Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Why Choose Offline DevOps Training in Jayanagar?
            </h2>
            <p className="text-lg text-slate-600">
              DevOps is highly practical. Trying to learn complex Kubernetes clusters or AWS networking through recorded videos often leads to frustration. 
              Our <strong>Jayanagar facility</strong> provides you with a dedicated lab environment, face-to-face mentorship, and collaborative project building.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl bg-gradient-to-br from-indigo-50 to-white">
              <CardContent className="p-8 text-center">
                <Cloud className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Cloud Native Focus</h3>
                <p className="text-slate-600">Extensive hands-on labs using AWS (EC2, S3, VPC, EKS) ensuring you are cloud-ready on day one.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-gradient-to-br from-purple-50 to-white">
              <CardContent className="p-8 text-center">
                <Terminal className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">100% Practical</h3>
                <p className="text-slate-600">No PPT reading. You will write Terraform scripts, configure Jenkins pipelines, and manage Docker swarms.</p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-xl bg-gradient-to-br from-cyan-50 to-white">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Interview Preparation</h3>
                <p className="text-slate-600">We conduct mock technical interviews right here in our Jayanagar campus with industry veterans.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-slate-50">
        <div className="container px-4 mx-auto lg:px-8 max-w-5xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Tools & Technologies Covered</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Linux/Bash', 'Git & GitHub', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'AWS Cloud', 'Prometheus', 'Grafana', 'Maven', 'Nginx'].map((tool, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-indigo-300 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-semibold text-slate-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="container px-4 mx-auto lg:px-8 text-center max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Become a Certified DevOps Engineer
          </h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            There are over 5,000+ open DevOps jobs in Bangalore today. Don't wait. Visit our Jayanagar branch for a free career counseling session.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="px-10 py-6 text-xl bg-white text-indigo-700 hover:bg-slate-100 shadow-xl">
                Visit Jayanagar Branch <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsJayanagar;
