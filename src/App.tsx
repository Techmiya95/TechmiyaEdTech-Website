
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import WorkshopRegister from "./pages/WorkshopRegister";

import Index from "./pages/Index";
import Courses from "./pages/Courses";
import ScrollToTop from "./components/ScrollToTop";
import CourseDetail from "./pages/CourseDetail";
import Reviews from "./pages/Reviews";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import DataDeletion from "./pages/DataDeletion";
import PsychometricTest from "./pages/PsychometricTest";
import Blog from "./pages/Blog";
import MachineLearningIntro from "./pages/MachineLearningIntro";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import PsychometricGeneric from "./pages/psychometric/PsychometricGeneric";
import PsychometricEngineering from "./pages/psychometric/PsychometricEngineering";
import PsychometricManagement from "./pages/psychometric/PsychometricManagement";
import CorporateTraining from "./pages/services/CorporateTraining";
import CSRPrograms from "./pages/services/CSRPrograms";
import Partnerships from "./pages/services/Partnerships";
import CampusDrives from "./pages/services/CampusDrives";
import Hackathons from "./pages/services/Hackathons";
import FDPSDP from "./pages/services/FDPSDP";
import Internships from "./pages/services/Internships";
import Mentorship from "./pages/services/Mentorship";
import SocialSidebar from "./components/SocialSidebar";
import { StickyFooterBar } from "./components/StickyFooterBar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Header />
          <SocialSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/conditions" element={<TermsAndConditions />} />
              <Route path="/privacy.html" element={<PrivacyPolicy />} />
              <Route path="/data-deletion.html" element={<DataDeletion />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/workshop-register" element={<WorkshopRegister />} />
              <Route path="/psychometric-test" element={<PsychometricTest />} />
              <Route path="/psychometric-test/generic" element={<PsychometricGeneric />} />
              <Route path="/psychometric-test/engineering" element={<PsychometricEngineering />} />
              <Route path="/psychometric-test/management" element={<PsychometricManagement />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/machine-learning-introduction" element={<MachineLearningIntro />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:jobId" element={<JobDetails />} />
              {/* Service Pages */}
              <Route path="/services/corporate-training" element={<CorporateTraining />} />
              <Route path="/services/csr-programs" element={<CSRPrograms />} />
              <Route path="/services/partnerships" element={<Partnerships />} />
              <Route path="/services/campus-drives" element={<CampusDrives />} />
              <Route path="/services/hackathons" element={<Hackathons />} />
              <Route path="/services/fdp-sdp" element={<FDPSDP />} />
              <Route path="/services/internships" element={<Internships />} />
              <Route path="/services/mentorship" element={<Mentorship />} />
              <Route path="/courses/:courseSlug" element={<CourseDetail />} />
            </Routes>
          </main>
          <Footer />
          <StickyFooterBar />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
