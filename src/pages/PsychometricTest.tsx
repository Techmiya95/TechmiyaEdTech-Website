import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from "recharts";

const PsychometricTest = () => {
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [showResults, setShowResults] = useState(false);
    const [resultData, setResultData] = useState<any>(null);

    const handleRatingChange = (questionId: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: parseInt(value) }));
    };

    const handleScenarioChange = (questionId: string, value: string) => {
        // Value mapping for Scenarios: A=5, B=4, C=3, D=2
        const scoreMap: Record<string, number> = { A: 5, B: 4, C: 3, D: 2 };
        setAnswers((prev) => ({ ...prev, [questionId]: scoreMap[value] }));
    };

    // Questions Data
    const questions = {
        A: {
            title: "Self-Image & Confidence",
            items: [
                { id: "q1", text: "I believe I can succeed even when things feel difficult." },
                { id: "q2", text: "I see myself as someone who can lead others." },
                { id: "q3", text: "I prefer taking initiative rather than waiting for instructions." },
                { id: "q4", text: "I am comfortable making decisions on my own." },
                { id: "q5", text: "I feel confident sharing my ideas in a group." },
            ],
        },
        B: {
            title: "Personality Traits",
            items: [
                { id: "q6", text: "I like planning and organizing my work." },
                { id: "q7", text: "I enjoy meeting new people." },
                { id: "q8", text: "I stay calm even under pressure." },
                { id: "q9", text: "I like trying new ways of doing things." },
                { id: "q10", text: "I complete tasks even when they feel boring." },
            ],
        },
        C: {
            title: "Interests (RIASEC-based)",
            items: [
                { id: "q11", text: "I enjoy fixing, building, or working with tools or machines." },
                { id: "q12", text: "I enjoy solving logical problems or puzzles." },
                { id: "q13", text: "I enjoy drawing, writing, music, or creative work." },
                { id: "q14", text: "I feel happy when I help others." },
                { id: "q15", text: "I enjoy convincing people or leading activities." },
                { id: "q16", text: "I like working with data, records, or systems." },
                { id: "q17", text: "I would enjoy working outdoors or with physical activity." },
                { id: "q18", text: "I like researching how things work." },
                { id: "q19", text: "I enjoy expressing myself creatively." },
                { id: "q20", text: "I enjoy teaching or guiding others." },
                { id: "q21", text: "I like starting projects or businesses." },
                { id: "q22", text: "I enjoy structured tasks and clear rules." },
            ],
        },
        D: {
            title: "Work Values",
            items: [
                { id: "q23", text: "Earning a high income is important to me." },
                { id: "q24", text: "I want a career that helps society." },
                { id: "q25", text: "Job security matters more than excitement." },
                { id: "q26", text: "I want freedom to express myself." },
                { id: "q27", text: "I prefer balance over long working hours." },
            ],
        },
    };

    const scenarios = [
        {
            id: "q28",
            text: "In a group project, I usually:",
            options: [
                { label: "Take charge and organize (Leader)", value: "A" },
                { label: "Analyze the problem (Thinker)", value: "B" },
                { label: "Suggest creative ideas (Creator)", value: "C" },
                { label: "Support the team (Helper)", value: "D" },
            ],
        },
        {
            id: "q29",
            text: "I feel most satisfied when I:",
            options: [
                { label: "Achieve a goal", value: "A" },
                { label: "Solve a problem", value: "B" },
                { label: "Create something", value: "C" },
                { label: "Help someone", value: "D" },
            ],
        },
        {
            id: "q30",
            text: "If given a choice, I prefer work that is:",
            options: [
                { label: "Practical and hands-on", value: "A" },
                { label: "Research-based", value: "B" },
                { label: "Creative", value: "C" },
                { label: "People-focused", value: "D" },
            ],
        },
    ];

    const calculateResults = () => {
        // Helper to safe get answer
        const getA = (id: string) => answers[id] || 0;

        // 1. RIASEC Buckets
        // R = Realistic (Q11, Q17)
        const R = getA("q11") + getA("q17");
        // I = Investigative (Q12, Q18)
        const I = getA("q12") + getA("q18");
        // A = Artistic (Q13, Q19)
        const A = getA("q13") + getA("q19");
        // S = Social (Q14, Q20)
        const S = getA("q14") + getA("q20");
        // E = Enterprising (Q15, Q21)
        const E = getA("q15") + getA("q21");
        // C = Conventional (Q16, Q22)
        const C = getA("q16") + getA("q22");

        // 2. Trait Scores
        // Self-Image & Leadership = Q1–Q5
        const Leadership = getA("q1") + getA("q2") + getA("q3") + getA("q4") + getA("q5");
        // Conscientiousness = Q6, Q10
        const Conscientiousness = getA("q6") + getA("q10");
        // Extraversion = Q7
        const Extraversion = getA("q7");
        // Emotional Stability = Q8
        const Stability = getA("q8");
        // Openness = Q9
        const Openness = getA("q9");

        const riasecScores = [
            { name: "Realistic", score: R, code: 'R' },
            { name: "Investigative", score: I, code: 'I' },
            { name: "Artistic", score: A, code: 'A' },
            { name: "Social", score: S, code: 'S' },
            { name: "Enterprising", score: E, code: 'E' },
            { name: "Conventional", score: C, code: 'C' },
        ];

        // Determine Top 2 Interest Buckets
        const sortedRiasec = [...riasecScores].sort((a, b) => b.score - a.score);
        const top2 = sortedRiasec.slice(0, 2);

        // Determine Archetype
        let archetype = "Undetermined";
        let careerClusters = "";

        // Logic: Look for matches with specific high traits or the RIASEC codes
        // We will use a simple point system to find the best fit based on the formulas in the prompt.
        // Analytical Explorer: I + Openness
        const scoreAnalytical = I + Openness;
        // Creative Influencer: A + E
        const scoreCreative = A + E;
        // Empathetic Guide: S + Agreeableness (Using S + S/2 as proxy or just S? Prompt implies S + something. Let's use S + Q14 (Help others)?) 
        // Actually, "S + Agreeableness" -> Agreeableness isn't explicitly defined. Let's assume Agreeableness is highly correlated with Social questions. 
        // Let's use S score + Q14 score (Q14 is part of S, so maybe double count? Let's simply sum S and Openness/etc as requested).
        // Wait, let's look at the others.
        // Strategic Leader: E + Leadership (scaled down? Leadership is sum of 5 qs, E is sum of 2. Need to balance?
        // Let's normalize? Or just sum raw. Leadership max is 25. E max is 10.
        // "I (max 10) + Openness (max 5)" = max 15.
        // "A (max 10) + E (max 10)" = max 20.
        // "S (max 10) + Agreeableness (unknown)".
        // Maybe I should look at "Dominant Traits" as conditions?
        // "Based on highest scores"
        // Let's just calculate raw sums for these combinations and pick the max.
        // For "Agreeableness", I'll use Q14 + Q20 (which is S) + maybe Q24 (helps society)? 
        // Let's stick to what is DEFINTELY there. 
        // I will use S + Q14 (as a specific trait proxy if needed) or just S * 1.5? 
        // Actually, let's treat "Agreeableness" as missing and rely on S.
        // Let's stick to the TOP 2 RIASEC method primarily, and then map to archetype?
        // The prompt says: "Based on highest scores: Archetype..." AND lists traits like "I + Openness".
        // I will compare these calculated "Archetype Scores":

        const archetypes = [
            {
                name: "Analytical Explorer",
                score: I + Openness, // Max 15
                careers: "Engineer, Data Analyst, Scientist, Economist",
                desc: "You love solving problems and understanding how things work."
            },
            {
                name: "Creative Influencer",
                score: A + (E * 0.5), // A (10) + E(10) -> Max 20. Let's scale or just sum? Prompt says "A + E". Let's sum. Max 20.
                careers: "Designer, Content Creator, Marketing, Media",
                desc: "You are creative and persuasive."
            },
            {  // Re-evaluating Creative Influencer score. "A + E". If I sum them, comparisons are skewed vs "I + Openness".
                // Maybe normalize everything to percentage of max possible for that specific combo?
                // "I + Openness" max = 15.
                // "A + E" max = 20.
                // "S + Agreeableness" -> Let's use S (10) + Q14 (5) = 15.
                // "E + Leadership" -> E (10) + Leadership (25) = 35.
                // "R + C" -> R (10) + C (10) = 20.
                // "C + Conscientious" -> C (10) + Q6(5)+Q10(5) = 20.

                // If I just take the max, "Strategic Leader" will almost always win because Leadership has 5 questions.
                // I should normalize.
                name: "Creative Influencer",
                score: (A + E) / 20,
                careers: "Designer, Content Creator, Marketing, Media",
                desc: "You are creative and persuasive."
            },
            {
                name: "Analytical Explorer",
                score: (I + Openness) / 15,
                careers: "Engineer, Data Analyst, Scientist, Economist",
                desc: "You love solving problems and understanding how things work."
            },
            {
                name: "Empathetic Guide",
                score: (S + getA("q14")) / 15, // Using S + Q14 as proxy
                careers: "Teacher, Psychologist, HR, Healthcare",
                desc: "You are helpful and understanding."
            },
            {
                name: "Strategic Leader",
                score: (E + Leadership) / 35,
                careers: "Entrepreneur, Manager, MBA Paths",
                desc: "You are a natural leader who takes initiative."
            },
            {
                name: "Practical Builder",
                score: (R + C) / 20,
                careers: "Technician, Architect, Civil, Operations",
                desc: "You enjoy hands-on work and structure."
            },
            {
                name: "Organized Specialist",
                score: (C + Conscientiousness) / 20,
                careers: "Accountant, Admin, QA, Banking",
                desc: "You are detailed-oriented and reliable."
            }
        ];

        // Sort by normalized score
        archetypes.sort((a, b) => b.score - a.score);
        const bestMatch = archetypes[0];

        setResultData({
            riasecScores,
            top2,
            archetype: bestMatch,
            allArchetypes: archetypes,
            traits: {
                Leadership, Conscientiousness, Extraversion, Stability, Openness
            }
        });
        setShowResults(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Student Psychometric Test
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Discover your strengths, personality, and ideal career path.
                    </p>
                </div>

                {!showResults ? (
                    <div className="space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Instructions</CardTitle>
                                <CardDescription>
                                    Rate each statement from 1 to 5. Answer honestly—there are no right or wrong answers.
                                    <div className="mt-2 text-sm font-medium text-gray-700 grid grid-cols-2 md:grid-cols-5 gap-2">
                                        <span>1 - Strongly Disagree</span>
                                        <span>2 - Disagree</span>
                                        <span>3 - Neutral</span>
                                        <span>4 - Agree</span>
                                        <span>5 - Strongly Agree</span>
                                    </div>
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        {/* Sections A, B, C, D */}
                        {Object.entries(questions).map(([sectionKey, section]) => (
                            <Card key={sectionKey}>
                                <CardHeader>
                                    <CardTitle>{section.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {section.items.map((q) => (
                                        <div key={q.id} className="space-y-3 border-b border-gray-100 pb-4 last:border-0">
                                            <Label className="text-base font-medium">{q.text}</Label>
                                            <RadioGroup
                                                onValueChange={(val) => handleRatingChange(q.id, val)}
                                                className="flex flex-wrap gap-4"
                                            >
                                                {[1, 2, 3, 4, 5].map((val) => (
                                                    <div key={val} className="flex items-center space-x-2">
                                                        <RadioGroupItem value={val.toString()} id={`${q.id}-${val}`} />
                                                        <Label htmlFor={`${q.id}-${val}`} className="font-normal text-gray-600">
                                                            {val}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}

                        {/* Section E Scenarios */}
                        <Card>
                            <CardHeader>
                                <CardTitle>E. Scenarios</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {scenarios.map((s) => (
                                    <div key={s.id} className="space-y-3 border-b border-gray-100 pb-4 last:border-0">
                                        <Label className="text-base font-medium">{s.text}</Label>
                                        <RadioGroup
                                            onValueChange={(val) => handleScenarioChange(s.id, val)}
                                            className="flex flex-col gap-2"
                                        >
                                            {s.options.map((opt) => (
                                                <div key={opt.value} className="flex items-center space-x-2">
                                                    <RadioGroupItem value={opt.value} id={`${s.id}-${opt.value}`} />
                                                    <Label htmlFor={`${s.id}-${opt.value}`} className="font-normal text-gray-600">
                                                        {opt.label}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <div className="flex justify-center pt-6">
                            <Button
                                size="lg"
                                onClick={calculateResults}
                                className="w-full md:w-auto px-12 text-lg bg-amber-500 hover:bg-amber-600 text-white"
                                disabled={Object.keys(answers).length < 30} // Simple check: ensure at least 30 answers (approx)
                            >
                                Submit Test
                            </Button>
                            {Object.keys(answers).length < 30 && (
                                <p className="text-center text-sm text-red-500 mt-2">Please answer all questions to submit.</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <div
                        className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700"
                    >
                        <Card className="bg-gradient-to-br from-amber-50 to-white border-amber-200">
                            <CardHeader className="text-center">
                                <CardTitle className="text-3xl text-amber-700">Your Archetype: {resultData.archetype.name}</CardTitle>
                                <CardDescription className="text-lg text-gray-700 mt-2">
                                    {resultData.archetype.desc}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="text-center">
                                <p className="font-semibold text-gray-800 mb-2">Recommended Career Paths:</p>
                                <p className="text-xl text-blue-600 font-bold">{resultData.archetype.careers}</p>
                            </CardContent>
                        </Card>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Interest Profile (RIASEC)</CardTitle>
                                </CardHeader>
                                <CardContent className="h-[300px]">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={resultData.riasecScores}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="code" />
                                            <YAxis />
                                            <RechartsTooltip />
                                            <Bar dataKey="score" fill="#f59e0b" name="Score" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                    <div className="mt-4 text-sm text-gray-500 text-center">
                                        R=Realistic, I=Investigative, A=Artistic, S=Social, E=Enterprising, C=Conventional
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>Your Top Traits</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {resultData.top2.map((t: any, i: number) => (
                                            <li key={t.code} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                <span className="font-semibold text-gray-700">{i + 1}. {t.name}</span>
                                                <span className="text-amber-600 font-bold">{t.score} / 10</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 border-t pt-4">
                                        <h4 className="font-semibold mb-3">Personality Snapshot</h4>
                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>Leadership: <span className="font-bold">{resultData.traits.Leadership}/25</span></div>
                                            <div>Conscientiousness: <span className="font-bold">{resultData.traits.Conscientiousness}/10</span></div>
                                            <div>Extraversion: <span className="font-bold">{resultData.traits.Extraversion}/5</span></div>
                                            <div>Openness: <span className="font-bold">{resultData.traits.Openness}/5</span></div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex justify-center pt-6">
                            <Button onClick={() => window.location.reload()} variant="outline">
                                Retake Test
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PsychometricTest;
