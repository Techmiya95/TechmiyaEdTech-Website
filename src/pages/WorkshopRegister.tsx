import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxSVCQQDN0SJjIjWt82yzzdQ8vtkDG7wZVqvHe_ctSOCKSMDvGXNzExvDu2pQ7NULY7/exec"
const WorkshopRegister: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    category: "Engineering Student",
    reason: "",
    workshop: "GENAI IGNITION WORKSHOP",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/\S+@\S+\.\S+/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.phone.trim() || form.phone.trim().length < 6)
      return "Please enter a valid phone number.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(null);

  const validation = validate();
  if (validation) {
    setError(validation);
    return;
  }

  setLoading(true);

  try {
    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      college: form.college,
      category: form.category,
      reason: form.reason,
      workshop: form.workshop,
      timestamp: new Date().toISOString(),
      page: window.location.pathname,
    };

    // ---- NO JSON → NO PREFLIGHT ----
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    const res = await fetch(GOOGLE_SCRIPT_URL, {
  method: "POST",
  body: formData,
  headers: {
    "Accept": "application/json",
  }
});

    if (res.ok) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        college: "",
        category: "Engineering Student",
        reason: "",
        workshop: "GENAI IGNITION WORKSHOP",
      });
    } else {
      throw new Error("Failed");
    }

  } catch (err) {
    setError("Unable to submit. Please try again.");
  } finally {
    setLoading(false);
  }
};


  const waMessage = encodeURIComponent(
    `Hi Techmiya Team, I registered for GENAI IGNITION WORKSHOP. Name: ${
      form.name
    }, Email: ${form.email}. Please confirm my seat.`
  );

  const waLink = `https://wa.me/918123759301?text=${waMessage}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT SIDE */}
          <div className="text-white">
            <Badge className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-full mb-4">
              GENAI IGNITION WORKSHOP
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
              Transform Into AI-Ready Talent
            </h1>

            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Join our 3-hour hands-on GenAI workshop: learn Agentic AI,
              build a mini-project, and earn a certificate.
            </p>

            <ul className="text-blue-100 space-y-2 mb-6">
              <li>✔ Live instructor-led session</li>
              <li>✔ Build a mini-agent project</li>
              <li>✔ Free guide & resource pack</li>
              <li>✔ Attendance Certificate</li>
            </ul>

            <div className="flex gap-4">
              <a href={waLink} target="_blank" rel="noreferrer">
                <Button className="bg-green-500 hover:bg-green-600">
                  WhatsApp Us
                </Button>
              </a>
              <a href="#register-form">
                <Button className="bg-white text-blue-900">
                  Register Now
                </Button>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <Card className="p-6 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Register for Workshop
                </CardTitle>
              </CardHeader>

              <CardContent>
                <form
                  id="register-form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <Input
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />

                  <Input
                    name="college"
                    placeholder="College / Organization"
                    value={form.college}
                    onChange={handleChange}
                  />

                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full rounded-md p-3"
                  >
                    <option>Engineering Student</option>
                    <option>MCA Student</option>
                    <option>BCA Student</option>
                    <option>Working Professional</option>
                    <option>Fresher</option>
                  </select>

                  <Textarea
                    name="reason"
                    placeholder="Why do you want to learn GenAI?"
                    value={form.reason}
                    onChange={handleChange}
                  />

                  {error && (
                    <p className="text-red-500 font-semibold">{error}</p>
                  )}

                  <Button type="submit" className="w-full py-4" disabled={loading}>
                    {loading ? "Submitting..." : "Secure My Seat — Free"}
                  </Button>

                  {sent && (
                    <div className="bg-green-50 p-4 rounded-md text-green-800">
                      <p className="font-semibold">
                        Registration received! Check your email soon.
                      </p>
                      <p className="mt-2 text-sm">
                        Want priority confirmation?{" "}
                        <a
                          className="underline"
                          href={waLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Message us on WhatsApp
                        </a>
                        .
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-10 text-center text-blue-200">
          <small>
            Seats limited — first-come first-serve. Certificate available only on attending live.
          </small>
        </div>
      </div>
    </div>
  );
};

export default WorkshopRegister;
