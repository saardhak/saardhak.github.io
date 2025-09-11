import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useSectionAnimation } from '@/hooks/use-section-animation';
import logo from '../assets/Pitch_Deck_Veina.png';

const VeinaProject = () => {
  const sectionRef = useSectionAnimation();
  const headerRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const imageRef = useScrollAnimation();
  const challengeRef = useScrollAnimation();
  const innovationRef = useScrollAnimation();
  const stat1Ref = useScrollAnimation();
  const stat2Ref = useScrollAnimation();
  const stat3Ref = useScrollAnimation();

  return (
    <section ref={sectionRef} id="startup" className="py-32 px-6 section-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div ref={headerRef} className="reveal">
            <h2 className="text-5xl md:text-6xl font-extralight mb-8 leading-tight text-apple-text">
              My Startup:
            </h2>
          </div>
          <div ref={imageRef} className="reveal mb-8">
            <a href="https://veinavascular.github.io" target="_blank" rel="noopener noreferrer">
              <img 
                src={logo} 
                alt="Veina Logo" 
                className="w-full max-w-md sm:w-150 sm:h-75 object-contain mx-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
          <div ref={subtitleRef} className="reveal">
            <p className="text-xl text-apple-gray max-w-3xl mx-auto leading-relaxed">
              Reimagining blood draws to address hemolysis in Emergency Medicine. Veina's novel blood-draw device reduces hemolysis by optimizing flow dynamics and minimizing red blood cell shearing, while seamlessly integrating into existing emergency department (ED) workflows.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
          <div ref={stat1Ref} className="reveal text-center">
            <div className="text-6xl font-bold text-red-500 mb-4">1 out of 6</div>
            <h4 className="text-2xl font-bold mb-3 text-red-500">National Average</h4>
            <p className="text-lg font-semibold text-apple-gray">blood samples hemolyze</p>
          </div>
          <div ref={stat2Ref} className="reveal text-center">
            <div className="text-6xl font-bold text-red-500 mb-4">$17B</div>
            <h4 className="text-2xl font-bold mb-3 text-red-500">Cost Burden</h4>
            <p className="text-lg font-semibold text-apple-gray">to the healthcare system</p>
          </div>
          <div ref={stat3Ref} className="reveal text-center">
            <div className="text-6xl font-bold text-red-500 mb-4">62M</div>
            <h4 className="text-2xl font-bold mb-3 text-red-500">Patients</h4>
            <p className="text-lg font-semibold text-apple-gray">get their blood redrawn every year</p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div ref={challengeRef} className="reveal mb-8">
            <h3 className="text-3xl font-medium mb-6 text-apple-text">The Unmet Clinical Need</h3>
            <p className="text-lg text-apple-gray leading-relaxed mb-4">
              Blood draws in the ED are inherently different from those in other clinical settings due to the urgency of care, high patient turnover, and the need to draw blood through IV catheters rather than dedicated phlebotomy equipment. These conditions often lead to turbulent flow and increased red blood cell damage, resulting in higher hemolysis rates.
            </p>
            <p className="text-lg text-apple-gray leading-relaxed mb-4">
              By improving blood sample integrity, Veina's device aims to prevent repeat blood draws, which consume hospital resources, prolong nursing time, delay patient care, and increase economic losses for the ED.
            </p>
          </div>
          <div ref={innovationRef} className="reveal mb-8">
            <h3 className="text-3xl font-medium mb-6 text-apple-text">Our Solution</h3>
            <p className="text-lg text-apple-gray leading-relaxed">
              Veina's device optimizes flow dynamics and minimizes red blood cell shearing, seamlessly integrating into existing workflows. No repeat blood draws. No wasted time. No compromises on care.
            </p>
          </div>
          <div className="reveal mt-8">
            <ul className="text-lg text-apple-gray leading-relaxed list-disc ml-6">
              <li><span className="font-bold text-primary">17%</span> of blood samples in the ED hemolyze, affecting over <span className="font-bold text-primary">12 million patients annually</span>.</li>
              <li>Hemolysis has a burden of <span className="font-bold text-primary">$1.4 billion annually</span> in the US.</li>
              <li>For a typical ED with 60,000 visits/year, the cost of hemolysis is <span className="font-bold text-primary">$221,000 annually</span>.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeinaProject;
