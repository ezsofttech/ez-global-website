import { Section1 } from '@/components/About-Sections/Section-1'
import { Section2 } from '@/components/About-Sections/Section-2'
import { Section3 } from '@/components/About-Sections/Section-3'

import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'About EZGlobal | Software Company in India',
  description: 'Learn about EZGlobal, a software engineering company in Raipur, Chhattisgarh, delivering web, mobile, AI and cloud systems across India, UK, UAE and USA.',
  // Add additional SEO fields as needed.
};

const AboutUsPage = () => {
  return (
    <>
      {/* H1 for the page
      <h1 className="text-4xl md:text-6xl font-bold text-center mt-30">
        Building software that <br /><span className='text-blue-600 font-bold'>earns its place.</span>
      </h1> */}
      {/* Section components */}
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
};

export default AboutUsPage