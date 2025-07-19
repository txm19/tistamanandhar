import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, MapPin, Calendar, Code, Briefcase, GraduationCap, User, Send, Users, BarChart3, BookOpen, Megaphone, Award, Star, Globe, Server, Database, Palette, Brain, Monitor, Smartphone, Cloud, Shield, GitBranch, FileCode, Coffee, Heart, Users2, Target, Zap, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import profileImage from '@/assets/tista-profile-new.jpg';
import utaLogo from '@/assets/uta-logo.png';
import apHonors from '@/assets/ap-honors.jpg';
import codepathCert from '@/assets/codepath-cert.png';
import globalItCert from '@/assets/global-it-cert.png';
import breakthroughCert from '@/assets/breakthrough-cert.png';
import goldmanSachsCert from '@/assets/goldman-sachs-cert.png';
import snapplyImage from '@/assets/snapply-screenshot.png';
import celestialImage from '@/assets/celestial-connect.jpg';
import pendigitsImage from '@/assets/pendigits-classifier.jpg';
import tpchImage from '@/assets/tpc-h-benchmark.jpg';
import lotteryImage from '@/assets/lottery-scheduler.png';
import puzzleImage from '@/assets/8-puzzle-solver.jpg';
import resumeImage from '@/assets/resume.png';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'experience',
    label: 'Experience'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'education',
    label: 'Education'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const projects = [{
    title: 'SnApply',
    description: 'MERN stack voice-assisted job application platform with speech-to-text/text-to-speech capabilities and secure user profiles.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Speech API'],
    link: 'https://github.com/txm19/SnApply',
    demo: '#',
    image: snapplyImage
  }, {
    title: 'Celestial Connect',
    description: 'Real-time social media app with compatibility analysis tool using natal charts for enhanced user connections.',
    techStack: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/txm19/CelestialConnectApp',
    demo: '#',
    image: celestialImage
  }, {
    title: 'PenDigits Classifier',
    description: 'Python-based k-NN and Naive Bayes pipeline achieving 95%+ accuracy on handwritten digit recognition.',
    techStack: ['Python', 'scikit-learn', 'NumPy', 'Matplotlib'],
    link: 'https://github.com/txm19/pendigits-knn-and-bayes',
    demo: '#',
    image: pendigitsImage
  }, {
    title: 'TPC-H Benchmarking',
    description: 'MySQL database performance profiling and optimization study with comprehensive analysis.',
    techStack: ['MySQL', 'Python', 'Data Analysis'],
    link: '#',
    demo: '#',
    image: tpchImage
  }, {
    title: 'Lottery Scheduler & Filesystem',
    description: 'Kernel programming projects improving process scheduling and file encryption in xv6 OS.',
    techStack: ['C', 'xv6 OS', 'Kernel Development'],
    link: 'https://github.com/txm19/lottery-scheduler',
    demo: '#',
    image: lotteryImage
  }, {
    title: '8-Puzzle Solver',
    description: 'AI search algorithms implementation for solving 8-puzzle using A*, BFS, DFS, and other search strategies.',
    techStack: ['Python', 'AI Algorithms', 'Search Strategies'],
    link: 'https://github.com/txm19/8-puzzle-solver',
    demo: '#',
    image: puzzleImage
  }];
  const experiences = [{
    title: 'International Student Assistant',
    company: 'University of Texas at Arlington',
    period: 'May 2025 - August 2025',
    impact: 'Delivered front-line support to international students, accelerating document turnaround time by 20%',
    icon: utaLogo,
    skills: ['Immigration Policy', 'Customer Service', 'Documentation', 'Compliance']
  }, {
    title: 'Global Engagement Student Assistant',
    company: 'University of Texas at Arlington',
    period: 'October 2024 - Present',
    impact: 'Developed Power BI dashboards for data-driven decision-making on international student programs',
    icon: utaLogo,
    skills: ['Power BI', 'Data Visualization', 'Canvas LMS', 'Program Management']
  }, {
    title: 'Advanced Placement Summer Institute Student Assistant',
    company: 'University of Texas at Arlington',
    period: 'June 2024 – July 2024',
    impact: 'Managed communication and operations, achieving 100% satisfaction rate and reducing shortages by 50%',
    icon: apHonors,
    skills: ['Operations Management', 'Communication', 'Inventory Management', 'Event Coordination']
  }, {
    title: 'Peer Educator',
    company: 'University of Texas at Arlington',
    period: 'September 2023 – May 2024',
    impact: 'Created data-driven content reaching 80+ students, boosting event participation by 35%',
    icon: utaLogo,
    skills: ['Data Analysis', 'Content Creation', 'Canva', 'Social Media', 'Outreach']
  }];
  const skillCategories = [{
    title: 'Programming Languages',
    icon: FileCode,
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL']
  }, {
    title: 'Frameworks & Libraries',
    icon: Code,
    skills: ['React', 'Node.js', 'Flask', 'FastAPI', 'Express', 'Material-UI']
  }, {
    title: 'Tools & Platforms',
    icon: Cloud,
    skills: ['Git', 'Docker', 'Jenkins', 'Google Cloud Platform', 'AWS', 'MongoDB']
  }, {
    title: 'Data Analysis',
    icon: BarChart3,
    skills: ['pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn']
  }, {
    title: 'Web Development',
    icon: Monitor,
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'REST APIs', 'GraphQL']
  }, {
    title: 'Soft Skills',
    icon: Heart,
    skills: ['Problem-solving', 'Communication', 'Teamwork', 'Adaptability', 'Leadership']
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_w15xxlb', 'template_pziiyfu', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'manandhartista@gmail.com'
      }, 'Pfx75uK84sinrJM1g');
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const {
            offsetTop,
            offsetHeight
          } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tista Manandhar
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`nav-link px-3 py-2 text-sm font-medium ${activeSection === item.id ? 'text-primary' : ''}`}>
                    {item.label}
                  </button>)}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-foreground hover:text-primary transition-smooth">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden glass-effect">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block px-3 py-2 text-base font-medium w-full text-left transition-smooth ${activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'}`}>
                  {item.label}
                </button>)}
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-sm text-primary font-medium mb-4">Hey, I'm Tista 👋</h1>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Honors Computer Science Student
                </span>
                <span className="block">Aspiring Software Engineer</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">Driven Computer Science Honors student with a strong foundation in software development and a passion for creating innovative, user-centric solutions. I specialize in bridging technology and design to craft impactful digital experiences, combining technical depth with creative vision.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={() => scrollToSection('projects')} className="btn-primary px-8 py-6 text-lg">
                  View My Work
                </Button>
                <Button onClick={() => scrollToSection('contact')} className="btn-primary px-8 py-6 text-lg">
                  Get In Touch
                </Button>
                <Button onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:e85ef68c-f1a4-40fb-8fec-c3ae8b93bafc';
                link.download = 'Tista_Manandhar_Resume.pdf';
                link.target = '_blank';
                link.click();
              }} className="btn-primary px-8 py-6 text-lg">
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-glow animate-float border-4 border-primary/30">
                  <img src={profileImage} alt="Tista Manandhar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/10 to-accent/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Projects.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my notable projects that showcase my skills and passion for technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => <Card key={index} className="project-card group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow" />
                  </div>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="skill-badge">
                        {tech}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-surface-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Experience.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and the impact I've made along the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((experience, index) => {
            return <Card key={index} className="project-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className="p-2 rounded-lg bg-primary/10 mr-3 w-12 h-12 flex items-center justify-center">
                            <img src={experience.icon} alt="" className="w-8 h-8 object-contain" />
                          </div>
                          <div>
                            <CardTitle className="text-lg leading-tight">{experience.title}</CardTitle>
                            <div className="flex items-center text-sm text-primary mt-1">
                              <Briefcase className="h-3 w-3 mr-1" />
                              {experience.company}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          {experience.period}
                        </div>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {experience.impact}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="skill-badge text-xs">
                          {skill}
                        </Badge>)}
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => <Card key={index} className="project-card">
                <CardHeader>
                <CardTitle className="text-lg flex items-center">
                    <category.icon className="h-5 w-5 mr-2 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="skill-badge">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Education.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and achievements in computer science.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Main Education Card */}
            <Card className="p-8 shadow-lg border-l-4 border-l-primary">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">Bachelor of Science in Computer Science</h3>
                    </div>
                    <div className="text-primary font-medium text-lg mb-1">University of Texas at Arlington</div>
                    <div className="text-muted-foreground mb-4">Expected Graduation: May 2026</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        Honors Program
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">Senior Year</Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground mb-1">2022 - 2026</div>
                  <div className="text-2xl font-bold text-primary">
                </div>
                </div>
              </div>
            </Card>

            {/* Achievement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-primary/20 bg-primary/5">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">ACM Officer</h4>
                <p className="text-sm text-muted-foreground">Engaged with the ACM student chapter at UTA to build connections, explore emerging technologies, and contribute to a vibrant tech community.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-accent/20 bg-accent/5">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Honors Program</h4>
                <p className="text-sm text-muted-foreground">Accepted into the rigorous Computer Science Honors Program, designed for high-achieving students pursuing advanced coursework and research.</p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-lg transition-shadow border-primary/20 bg-primary/5">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Maverick Recognition Scholarship</h4>
                <p className="text-sm text-muted-foreground">Earned the Maverick Recognition Scholarship for demonstrating strong academic excellence and university engagement.</p>
              </Card>
            </div>

            {/* Relevant Coursework */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Relevant Coursework</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Operating Systems', 'Computer Networks', 'Machine Learning', 'Web Development', 'Computer Architecture', 'Software Design Patterns', 'Cybersecurity Fundamentals'].map((course, index) => <div key={index} className="p-4 rounded-lg text-center text-sm font-medium hover:shadow-lg transition-all hover:scale-105 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40">
                    <span className="text-foreground">{course}</span>
                  </div>)}
              </div>
            </div>

            {/* Certifications & Additional Learning */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-foreground">Certifications & Additional Learning</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={codepathCert} alt="CodePath Certificate" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Intermediate Technical Interview Prep Course</h4>
                      <p className="text-primary font-medium mb-1">CodePath</p>
                      <p className="text-sm text-muted-foreground mb-2">Issued Jun 2024  </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={globalItCert} alt="Global IT Certificate" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Graphic Designing</h4>
                      <p className="text-primary font-medium mb-1">Global IT Skill Development Pvt.Ltd</p>
                      <p className="text-sm text-muted-foreground mb-2">Issued Jun 2019</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={breakthroughCert} alt="Break Through Tech Certificate" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Break Through Tech AI Program</h4>
                      <p className="text-primary font-medium mb-1">Cornell University</p>
                      <p className="text-sm text-muted-foreground mb-2">May 2025 - April 2026</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow bg-card border-border/30">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={goldmanSachsCert} alt="Goldman Sachs Certificate" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 text-foreground">Virtual Insight Series</h4>
                      <p className="text-primary font-medium mb-1">Goldman Sachs</p>
                      <p className="text-sm text-muted-foreground mb-2">May 2025 - Jun 2025</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Let's Connect.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-4" />
                  <a href="mailto:manandhartista@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                    manandhartista@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-4" />
                  <a href="tel:+12144299200" className="text-muted-foreground hover:text-primary transition-smooth">
                    +1 (214) 429-9200
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-4" />
                  <span className="text-muted-foreground">Arlington, TX</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Find Me Online</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://github.com/txm19" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.linkedin.com/in/tistamanandhar19/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="mailto:manandhartista@gmail.com">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            
            <Card className="project-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2 text-primary" />
                  Send Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Project Discussion" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project..." rows={4} required />
                  </div>
                  <Button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-surface-elevated border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Tista Manandhar. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/txm19" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/tistamanandhar19/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:manandhartista@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Portfolio;