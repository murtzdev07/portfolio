import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';

export default function Resume() {
  return (
    // We enforce a white background and black text purely for the PDF output
    <div className="bg-white text-black p-10 sm:p-16 max-w-[850px] mx-auto">
      
      {/* Header Section */}
      <header className="border-b border-gray-300 pb-8 mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-black mb-2">
            Murtaza <span className="text-emerald-600">Dawoodjeewala</span>
          </h1>
          <p className="text-xl font-medium text-gray-600">Frontend Engineer & Technical Co-founder</p>
        </div>
        
        {/* Contact Details */}
        <div className="flex flex-col gap-1.5 text-right text-sm font-medium text-gray-600">
          <a href="mailto:murtazadawoodjee.connect@gmail.com" className="flex items-center justify-end gap-2 text-black">
            murtazadawoodjee.connect@gmail.com <Mail className="h-3.5 w-3.5" />
          </a>
          <a href="tel:+918208266645" className="flex items-center justify-end gap-2 text-black">
            +91 8208266645 <Phone className="h-3.5 w-3.5" />
          </a>
          <span className="flex items-center justify-end gap-2 text-black">
            Ratlam, India <MapPin className="h-3.5 w-3.5" />
          </span>
          <div className="flex items-center justify-end gap-3 mt-1 pt-1 border-t border-gray-300">
            <a href="https://github.com/murtzdev07" className="flex items-center gap-1.5 text-blue-600"><SiGithub className="h-3 w-3"/> GitHub</a>
            <a href="https://linkedin.com/in/murtaza-dawoodjee" className="flex items-center gap-1.5 text-blue-600"><FaLinkedin className="h-3 w-3"/> LinkedIn</a>
            <a href="https://murtaza.dev.io" className="flex items-center gap-1 text-blue-600"><Globe className="h-3 w-3"/> Portfolio</a>
          </div>
        </div>
      </header>

      {/* Two Column Layout */}
      <div className="grid grid-cols-12 gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="col-span-8 space-y-8">
          
          {/* Summary */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3">Executive Summary</h2>
            <p className="text-sm leading-relaxed text-gray-800">
              A highly skilled Frontend Engineer bridging the gap between raw backend logic and refined user interfaces. Proven track record in co-founding software ventures, architecting serverless digital products, and building high-performance e-commerce and CRM solutions using modern frameworks like React, Next.js, and Node.js.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">Professional Experience</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">Sr. Frontend Developer & Graphic Designer</h3>
                  <span className="text-xs font-semibold text-gray-500">2025 – Present</span>
                </div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Ajicon Industries Pvt. Ltd. | Madhya Pradesh</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Spearheading frontend architecture and digital marketing media for private biomass manufacturing. Building high-performance interfaces and creative production pipelines.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">Technical Co-founder</h3>
                  <span className="text-xs font-semibold text-gray-500">2025 – Present</span>
                </div>
                <p className="text-sm font-medium text-emerald-600 mb-2">Webblers IT Solutions | Cloud-based</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Directing cloud-based web and app development operations, custom software creation, and advanced database administration.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-black">Co-founder & Creative Director</h3>
                  <span className="text-xs font-semibold text-gray-500">2022 – Present</span>
                </div>
                <p className="text-sm font-medium text-emerald-600 mb-2">MSquare Graphix | Ratlam, India</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Scaled a creative graphic design company focused on delivering cutting-edge visual solutions, branding, and industry design assets.
                </p>
              </div>
            </div>
          </section>

          {/* Selected Projects */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4">Selected Architecture</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-black">Home-Depot Kuwait E-Commerce</h3>
                <p className="text-xs font-mono text-gray-500 mb-1">Next.js, React, Supabase, Prisma</p>
                <p className="text-sm text-gray-700">Full-stack e-commerce platform for electronics with robust inventory and relational data management.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">Nature Bio ERP System</h3>
                <p className="text-xs font-mono text-gray-500 mb-1">React, Node.js, Express, Supabase</p>
                <p className="text-sm text-gray-700">Enterprise resource planning architecture with real-time sync and highly scalable database modularity.</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-black">FMB App - Ratlam (Android)</h3>
                <p className="text-xs font-mono text-gray-500 mb-1">Java, Android Studio, Firebase</p>
                <p className="text-sm text-gray-700">Community kitchen management app with real-time Firebase syncing, offline caching, and a custom widget.</p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar Content) */}
        <div className="col-span-4 space-y-8 border-l border-gray-200 pl-8">
          
          {/* Skills */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3">Core Stack</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Node.js', 'Express', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Prisma', 'Supabase', 'Firebase', 'Java', 'Git/GitHub'].map(skill => (
                <span key={skill} className="px-2 py-1 bg-gray-100 border border-gray-300 rounded text-xs font-semibold text-gray-800">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3">Education</h2>
            <div>
              <h3 className="text-sm font-bold text-black">Bachelor of Computer Application</h3>
              <p className="text-xs font-semibold text-gray-500 mb-1">Medi-Caps University</p>
              <p className="text-xs text-gray-600">2022 – 2025 | Indore, India</p>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold text-black">Higher Secondary (12th)</h3>
              <p className="text-xs font-semibold text-gray-500 mb-1">St. Joseph's Convent</p>
              <p className="text-xs text-gray-600">Completed | Ratlam, India</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}