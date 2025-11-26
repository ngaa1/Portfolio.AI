
import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from './constants';
import ChatWidget from './components/ChatWidget';
import SkillChart from './components/SkillChart';
import { Github, Linkedin, Mail, Phone, MessageSquare, Download, ChevronDown, Terminal, Code2, Briefcase, GraduationCap, Award, MapPin, DraftingCompass, Cpu } from 'lucide-react';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600 font-sans">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-slate-900 flex items-center gap-2">
            <div className="bg-brand-900 text-white p-1.5 rounded">
              <DraftingCompass className="w-5 h-5" />
            </div>
            <span>LI CHULONG<span className="text-brand-700">.STRUCT</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-brand-700 transition-colors">关于我</a>
            <a href="#experience" className="hover:text-brand-700 transition-colors">工作经历</a>
            <a href="#projects" className="hover:text-brand-700 transition-colors">项目展示</a>
            <a href="#skills" className="hover:text-brand-700 transition-colors">技能特长</a>
          </div>
          <a href="#contact" className="bg-brand-900 hover:bg-brand-800 text-white px-5 py-2 rounded text-sm font-medium transition-colors shadow-lg shadow-brand-900/20">
            联系我
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
        {/* Engineering Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in slide-in-from-left-5 fade-in duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-brand-50 border border-brand-200 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-700"></span>
              </span>
              Structural Engineer & Developer
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              {PROFILE_DATA.name} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-800 to-brand-600">
                {PROFILE_DATA.title}
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed text-justify border-l-4 border-brand-200 pl-4">
              {PROFILE_DATA.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-brand-800 hover:bg-brand-700 text-white px-8 py-3.5 rounded font-semibold transition-all shadow-xl shadow-brand-900/10 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                查看项目
              </a>
              <button className="bg-white hover:bg-slate-50 text-slate-800 px-8 py-3.5 rounded font-semibold transition-all border border-slate-300 shadow-sm hover:shadow-md flex items-center gap-2 group">
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-brand-700" />
                下载简历
              </button>
            </div>

            <div className="flex gap-8 pt-4 border-t border-slate-100">
              <a href={`mailto:${PROFILE_DATA.email}`} className="text-slate-500 hover:text-brand-700 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-sm font-medium">{PROFILE_DATA.email}</span>
              </a>
              <div className="text-slate-500 hover:text-brand-700 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-sm font-medium">{PROFILE_DATA.phone}</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in zoom-in-95 fade-in duration-1000 delay-200">
             {/* Technical Card Representation */}
             <div className="bg-white border border-slate-200 rounded-xl p-1 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 relative group">
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-100 h-full">
                  <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Cpu className="text-brand-700 w-5 h-5" />
                      <span className="font-mono text-xs font-bold text-slate-500">SYSTEM_ARCH.TS</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                      <div className="w-2 h-2 rounded-full bg-slate-300" />
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-sm leading-relaxed">
                    <div className="flex gap-2">
                      <span className="text-brand-700 font-bold">interface</span>
                      <span className="text-slate-900">Engineer</span>
                      <span className="text-slate-400">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">core_competency:</span>
                      <span className="text-brand-600"> "Structural Analysis"</span>;
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-500">coding_stack:</span>
                      <span className="text-brand-600"> ["Python", "React", "FEA"]</span>;
                    </div>
                    <div className="pl-4">
                       <span className="text-slate-500">methodology:</span>
                       <span className="text-slate-900"> "Parametric Design"</span>;
                    </div>
                    <div className="text-slate-400">{'}'}</div>

                    <div className="mt-4 pt-4 border-t border-slate-200/50">
                       <div className="flex gap-2">
                          <span className="text-brand-700 font-bold">class</span>
                          <span className="text-slate-900">T_STARS</span>
                          <span className="text-slate-500">implements</span>
                          <span className="text-slate-900">Innovation</span>
                          <span className="text-slate-400">{'{'}</span>
                       </div>
                       <div className="pl-4 text-slate-500">// Patent Granted 2024</div>
                       <div className="pl-4 text-slate-500">// Optimized 600MW+ Projects</div>
                       <div className="text-slate-400">{'}'}</div>
                    </div>
                  </div>
                </div>
                
                {/* Decoration: Technical Overlay */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brand-50 rounded-full border border-brand-100 flex items-center justify-center opacity-80">
                   <div className="text-center">
                      <div className="text-xl font-bold text-brand-800">7+</div>
                      <div className="text-[10px] uppercase font-bold text-brand-600 tracking-wide">Years Exp</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* Experience Section - Clean Timeline */}
      <section id="experience" className="py-24 bg-slate-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-10 w-1 bg-brand-700 rounded-full" />
            <h2 className="text-3xl font-bold text-slate-900">工作经历</h2>
          </div>

          <div className="space-y-12">
            {PROFILE_DATA.experience.map((job) => (
              <div key={job.id} className="relative pl-8 md:pl-0 group">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-slate-300 group-last:bottom-auto group-last:h-full" />
                
                <div className="grid md:grid-cols-[120px_1fr] gap-8 md:gap-12">
                  {/* Left Column: Date */}
                  <div className="relative pt-1 text-right hidden md:block">
                     <div className="absolute right-[-49px] top-3 w-3 h-3 rounded-full bg-white border-4 border-brand-700 z-10 shadow-sm" />
                     <span className="text-sm font-bold text-slate-500 font-mono">{job.period.split(' ')[0]}</span>
                     <div className="text-xs text-slate-400 mt-1">{job.period.split(' - ')[1]}</div>
                  </div>

                  {/* Right Column: Content */}
                  <div>
                    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 border-b border-slate-100 pb-4">
                        <div>
                           <h3 className="text-xl font-bold text-slate-900">{job.company}</h3>
                           <div className="text-brand-700 font-medium flex items-center gap-2 mt-1">
                              <Briefcase className="w-4 h-4" />
                              {job.role}
                           </div>
                        </div>
                        <span className="md:hidden mt-2 inline-block px-3 py-1 bg-slate-100 rounded text-xs text-slate-600 font-mono">{job.period}</span>
                      </div>

                      <p className="text-slate-600 leading-relaxed mb-6 text-justify">
                        {job.description}
                      </p>
                      
                      <div className="grid lg:grid-cols-2 gap-8">
                         <div>
                            <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                               <div className="w-1 h-4 bg-brand-500 rounded-sm"></div>
                               核心职责
                            </h4>
                            <ul className="space-y-3">
                              {job.coreResponsibilities.map((resp, idx) => (
                                <li key={idx} className="text-sm text-slate-700 flex items-start gap-2.5">
                                  <div className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                                  {resp}
                                </li>
                              ))}
                            </ul>
                         </div>
                         
                         {job.projects.length > 0 && (
                            <div>
                               <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                                  <div className="w-1 h-4 bg-slate-500 rounded-sm"></div>
                                  参与项目
                               </h4>
                               <div className="space-y-3">
                                 {job.projects.map((proj, idx) => (
                                   <div key={idx} className="bg-slate-50 p-3 rounded border border-slate-100">
                                     <h5 className="text-brand-900 font-bold text-xs mb-1">{proj.name}</h5>
                                     <p className="text-xs text-slate-500 leading-tight">{proj.description.substring(0, 60)}...</p>
                                   </div>
                                 ))}
                               </div>
                            </div>
                         )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Highlights - Gallery Style */}
      <section id="projects" className="py-24 bg-white border-y border-slate-100">
         <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <div className="h-10 w-1 bg-brand-700 rounded-full" />
                 <h2 className="text-3xl font-bold text-slate-900">精选项目</h2>
              </div>
              <div className="hidden md:block text-slate-400 text-sm font-mono">SELECTED WORKS // 2021-2024</div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {PROFILE_DATA.projects.map(project => (
                  <div key={project.id} className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-brand-300 transition-all hover:shadow-xl hover:shadow-slate-200/50 flex flex-col h-full">
                    <div className="h-48 overflow-hidden relative bg-slate-100">
                       <img 
                          src={project.imageUrl} 
                          alt={project.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                        />
                       <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                       <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-md">{project.title}</h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                       <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1 text-justify">
                          {project.description}
                       </p>
                       <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                       </div>
                    </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Education & Honors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16">
              
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-8 pb-2 border-b border-slate-200">
                  <GraduationCap className="text-brand-700 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-slate-900">教育背景</h2>
                </div>
                <div className="space-y-6">
                  {PROFILE_DATA.education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-slate-50 rounded-bl-full -mr-8 -mt-8" />
                      
                      <div className="flex justify-between items-start mb-2 relative z-10">
                        <h3 className="text-lg font-bold text-slate-900">{edu.school}</h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded border border-slate-200">{edu.year.split(' ')[0]}</span>
                      </div>
                      <p className="text-brand-800 font-semibold text-sm mb-3 relative z-10">{edu.degree} {edu.gpa && <span className="text-slate-500 font-normal"> | GPA: {edu.gpa}</span>}</p>
                      
                      {edu.thesis && (
                         <div className="mb-3 p-3 bg-slate-50 rounded text-xs text-slate-600 border border-slate-100">
                            <span className="font-bold text-slate-700">Thesis:</span> {edu.thesis}
                         </div>
                      )}
                      {edu.courses && <p className="text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2">{edu.courses}</p>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors */}
              <div>
                <div className="flex items-center gap-3 mb-8 pb-2 border-b border-slate-200">
                  <Award className="text-brand-700 w-6 h-6" />
                  <h2 className="text-2xl font-bold text-slate-900">荣誉与激励</h2>
                </div>
                <div className="space-y-6">
                   {PROFILE_DATA.honors.map((honor, idx) => (
                      <div key={idx} className="flex gap-4 items-start group">
                         <div className="mt-1 w-12 h-12 shrink-0 bg-white border border-brand-200 rounded-lg shadow-sm flex flex-col items-center justify-center text-brand-800 font-bold group-hover:border-brand-500 transition-colors">
                            <span className="text-xs text-slate-400 font-normal">20</span>
                            <span className="text-lg leading-none">{honor.year.slice(-2)}</span>
                         </div>
                         <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm flex-1 group-hover:shadow-md transition-shadow">
                            <h3 className="text-slate-900 font-bold text-sm mb-1">{honor.title}</h3>
                            <p className="text-xs text-brand-700 font-medium mb-2">{honor.company}</p>
                            <p className="text-sm text-slate-600 leading-relaxed">{honor.description}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>

           </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Skills Radar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                 <div className="mb-8 flex items-center gap-4">
                    <div className="h-10 w-1 bg-brand-700 rounded-full" />
                    <h2 className="text-3xl font-bold text-slate-900">能力图谱</h2>
                 </div>
                 <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-inner">
                    <SkillChart data={PROFILE_DATA.skills} />
                 </div>
              </div>
            </div>

            {/* Detailed Skills List */}
            <div className="lg:col-span-7">
               <div className="space-y-8">
                  {Object.entries(PROFILE_DATA.detailedSkills).map(([category, items]) => (
                     <div key={category} className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm hover:border-brand-300 transition-colors">
                        <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
                           {category === '专业技能' && <DraftingCompass className="w-5 h-5 text-brand-600" />}
                           {category === '编程与开发' && <Terminal className="w-5 h-5 text-slate-700" />}
                           {category === '软技能' && <MessageSquare className="w-5 h-5 text-brand-400" />}
                           {category}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                           {items.map((skill, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                 <div className={`mt-2 w-1.5 h-1.5 rounded-sm shrink-0 transform rotate-45 
                                    ${category === '专业技能' ? 'bg-brand-600' : 
                                      category === '编程与开发' ? 'bg-slate-700' : 'bg-brand-400'}`} 
                                 />
                                 <span className="text-slate-600 text-sm font-medium">{skill}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 bg-slate-850 text-slate-300">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Open to Opportunities</h2>
            <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
              如果您需要一位兼具深厚结构设计背景与软件开发能力的工程师，<br/>欢迎通过以下方式与我联系。
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
             <a href={`mailto:${PROFILE_DATA.email}`} className="group relative inline-flex items-center justify-center gap-2 bg-brand-700 text-white px-8 py-4 rounded font-bold hover:bg-brand-600 transition-all overflow-hidden">
               <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
               <Mail className="w-5 h-5" />
               发送邮件
             </a>
             <button className="inline-flex items-center justify-center gap-2 bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded font-bold hover:bg-slate-700 transition-colors hover:border-slate-600">
               <MessageSquare className="w-5 h-5" />
               微信: {PROFILE_DATA.wechat}
             </button>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-brand-500 font-bold font-serif">L</div>
               <p>&copy; {new Date().getFullYear()} Li Chulong. All rights reserved.</p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-full border border-slate-800">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-xs font-mono text-emerald-500">SYSTEM ONLINE</span>
              </div>
              <span className="text-xs">Powered by Gemini 2.5 Flash</span>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
