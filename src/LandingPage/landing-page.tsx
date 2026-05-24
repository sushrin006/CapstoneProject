import { Button } from "../components/button";
import LandingPageImage from "../icons/landingPageImage";
import { Card } from "../components/card";

import { ImpactCards } from "../components/impact-cards";
import TransparentIcon from "../icons/transparent-icon";
import SourceManagementIcon from "../icons/souce-management-icon";
import GroundedResponseIcon from "../icons/grounded-respone-icon";
import AcademicIcon from "../icons/academic-icon";
import LegalIcon from "../icons/legal-analysis-icon";
import FinancialIcon from "../icons/financial-reports";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between p-4">
        <h1 className="text-xl font-bold"> Insight Engine</h1>
        <Button className="cursor-pointer" onClick={() => navigate("/login")}>
          {" "}
          Get Started
        </Button>
      </div>
      <div className="bg-[#F4F4F6] flex justify-center  gap-4 p-8">
        <section className=" w-[50%] flex flex-col space-y-8 p-8 h-[690px] justify-center ">
          <h1 className="font-bold text-6xl">
            {" "}
            Less Hallucination. <br />
            <p className="text-[#1745CF]">More Trusted Answers.</p>
          </h1>
          <p className="font-semibold text-xl">
            An AI assistant powered by your documents, systems, and validated
            information to deliver accurate, context-aware insights you can
            trust.
          </p>
          <Button size="lg" onClick={() => navigate("/login")}>
            {" "}
            Get Started
          </Button>
        </section>
        {/* <section className="w-1/2  px-16 py-8 flex flex-col justify-center">
          <LandingPageImage />
        </section> */}
      </div>
      <section>
        <div className="bg-[#F8FAFC]  flex flex-col   ">
          <div className="flex flex-col items-center gap-2 p-8 mt-4">
            <h1 className="text-3xl font-bold"> Engineered for Accuracy</h1>
            <p>
              Move beyond generic AI with a system designed for precision,
              transparency, and deep source integration.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 justify-center items-center p-8 mb-4">
            <Card
              icon={<TransparentIcon width={48} height={44} />}
              title="Transparent Citations"
              description="Verify every claim with instant,
clickable citations pointing to the
exact page and paragraph in your
sources."
            />

            <Card
              icon={<SourceManagementIcon width={48} height={44} />}
              title="Source Management"
              description="Easily upload the PDFs, research papers,files,
and web links to build a specialized
knowledge base for your project."
            />
            <Card
              icon={<GroundedResponseIcon width={48} height={44} />}
              title="Grounded Responses"
              description="Verify every claim with instant,
clickable citations pointing to the
exact page and paragraph in your
sources."
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F6F6F8] ">
        <div className="flex flex-col  gap-4 p-8  ">
          <div className="px-8 flex gap-2 flex-col mt-4">
            <h1 className="font-bold text-3xl ">Real-World Impact</h1>
            <p>
              See how professionals across industries leverage Insight Engine to
              power their most critical analysis.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 p-8 ">
            <ImpactCards
              icon={<AcademicIcon width={48} height={44} />}
              title="Academic Research"
              description="Insight Engine streamlined my
            literature review by automatically 
            grouping hundreds of citations for my 
            thesis and identifying conflicting
            arguments across papers."
              image="https://cdn.dribbble.com/userupload/47644425/file/3433889ce90dc0df0a1720ce2054405a.png?resize=1504x1128&vertical=center"
              studyLevel="Graduate"
              university="Stanford University"
            />
            <ImpactCards
              icon={<LegalIcon width={48} height={44} />}
              title="Legal Analysis"
              description="We use it to fact-check complex
service agreements against our
internal compliance database. It
catches missing clauses that human
review often overlooks."
              image="https://cdn.dribbble.com/userupload/47644425/file/3433889ce90dc0df0a1720ce2054405a.png?resize=1504x1128&vertical=center"
              studyLevel="Senior Associate"
              university="Stanford University"
            />
            <ImpactCards
              icon={<FinancialIcon width={48} height={44} />}
              title="Financial Reports"
              description="Synthesizing quarterly earnings and
annual reports is now risk-free. Zero
hallucinations mean we can trust the
AI to extract precise fiscal data every
time."
              image="https://cdn.dribbble.com/userupload/47644425/file/3433889ce90dc0df0a1720ce2054405a.png?resize=1504x1128&vertical=center"
              studyLevel="Financial Analyst"
              university="Stanford University"
            />
          </div>
        </div>
      </section>
      <footer className="bg-white px-8 py-4">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">Insight Engine</h3>
          <div className="flex gap-5 text-gray-500">
            <p>Privacy Policy</p>
            <p>Terms and Service</p>
            <p>Help Center</p>
          </div>
        </div>
        <p className="text-gray-500">
          © 2024 Insight Engine. All rights reserved.
        </p>
      </footer>
    </div>
  );
};
