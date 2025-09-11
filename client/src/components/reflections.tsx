import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { useSectionAnimation } from '@/hooks/use-section-animation';

const Reflections = () => {
  const sectionRef = useSectionAnimation();
  const headerRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();


  return (
    <section ref={sectionRef} id="reflections" className="py-32 px-6 bg-background dark:bg-neutral-900 section-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div ref={headerRef} className="reveal">
            <h2 className="text-5xl md:text-6xl font-extralight mb-6 leading-tight text-apple-text">
              Reflections
            </h2>
          </div>
        </div>

        {/* Coming Soon Panel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-12 md:p-16 shadow-lg border border-gray-200 dark:border-gray-700 text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-4xl font-medium text-apple-text mb-4">
                Coming Soon
              </h3>
              <p className="text-xl text-apple-gray leading-relaxed max-w-2xl mx-auto">
                My thoughts, insights, and lessons learned from my journey in healthcare innovation and entrepreneurship. Stay tuned!
              </p>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-full text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                </svg>
                Subscribe for updates
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections; 