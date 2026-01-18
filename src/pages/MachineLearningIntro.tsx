
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MachineLearningIntro = () => {
    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-4xl mx-auto">
                <Link to="/blog">
                    <Button variant="ghost" className="mb-8 pl-0 hover:bg-transparent hover:text-amber-600">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Button>
                </Link>

                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-6">
                    Introduction to Machine Learning: Types and Algorithms
                </h1>

                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-10">
                    <span>October 15, 2023</span>
                    <span>•</span>
                    <span>10 min read</span>
                </div>

                <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                    <p>
                        Machine Learning (ML) is a subset of artificial intelligence (AI) that focuses on building systems that learn from data, improve accuracy, and make decisions with minimal human intervention. Unlike traditional programming where rules are explicitly coded, ML models identify patterns in data to generate their own rules.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Types of Machine Learning</h2>
                    <p>
                        Machine learning can be broadly categorized into three main types based on how learning occurs:
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 my-8">
                        <div className="bg-amber-50 p-6 rounded-lg border border-amber-100">
                            <h3 className="font-bold text-amber-800 text-xl mb-2">Supervised Learning</h3>
                            <p className="text-sm">Learning with labeled data (input-output pairs).</p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                            <h3 className="font-bold text-blue-800 text-xl mb-2">Unsupervised Learning</h3>
                            <p className="text-sm">Finding hidden patterns in unlabeled data.</p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h3 className="font-bold text-green-800 text-xl mb-2">Reinforcement Learning</h3>
                            <p className="text-sm">Learning through trial, error, and feedback.</p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">1. Supervised Learning</h2>
                    <p>
                        In supervised learning, the algorithm is trained on a labeled dataset. The model learns the mapping between inputs and outputs.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Regression:</strong> Used for predicting continuous values. <br /><em>Algorithms: Linear Regression, Decision Trees, Support Vector Regression.</em></li>
                        <li><strong>Classification:</strong> Used for predicting categorical outcomes. <br /><em>Algorithms: Logistic Regression, Support Vector Machines (SVM), Naive Bayes, K-Nearest Neighbors (KNN).</em></li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">2. Unsupervised Learning</h2>
                    <p>
                        Unsupervised learning deals with unlabeled data. The goal is to discover the underlying structure or distribution in the data.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Clustering:</strong> Grouping similar data points together. <br /><em>Algorithms: K-Means Clustering, Hierarchical Clustering, DBSCAN.</em></li>
                        <li><strong>Dimensionality Reduction:</strong> Reducing the number of random variables under consideration. <br /><em>Algorithms: Principal Component Analysis (PCA), t-SNE.</em></li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">3. Reinforcement Learning</h2>
                    <p>
                        Reinforcement learning is about taking suitable action to maximize reward in a particular situation. It is employed by various software and machines to find the best possible behavior or path it should take in a specific situation.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Key Concepts:</strong> Agent, Environment, Action, Reward.</li>
                        <li><strong>Algorithms:</strong> Q-Learning, Deep Q-Network (DQN), Policy Gradients, Proximal Policy Optimization (PPO).</li>
                    </ul>
                </div>

                <hr className="my-12 border-gray-200" />

                <div className="bg-gray-50 p-8 rounded-xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to start your AI journey?</h3>
                    <p className="mb-6">Explore our improved Master's in Data Science & AI Course.</p>
                    <Link to="/courses">
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">View Courses</Button>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default MachineLearningIntro;
