import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
} from 'react-icons/si';
import {
  FaUsers,
  FaLightbulb,
  FaComments,
  FaClock,
  FaBrain,
} from 'react-icons/fa';

export const techSkills = [
  { label: 'HTML5', icon: (props) => <SiHtml5 {...props} color="#e34f26" /> },
  { label: 'CSS3', icon: (props) => <SiCss3 {...props} color="#1572b6" /> },
  { label: 'JavaScript', icon: (props) => <SiJavascript {...props} color="#f7df1e" /> },
  { label: 'Bootstrap', icon: (props) => <SiBootstrap {...props} color="#7952b3" /> },
  { label: 'React.js', icon: (props) => <SiReact {...props} color="#61dafb" /> },
  { label: 'Next.js', icon: (props) => <SiNextdotjs {...props} color="#ffffff" /> },
  { label: 'Tailwind CSS', icon: (props) => <SiTailwindcss {...props} color="#06b6d4" /> },
  { label: 'Framer Motion', icon: (props) => <SiFramer {...props} color="#ffffff" /> },
];

export const tools = [
  { label: 'Git', icon: (props) => <SiGit {...props} color="#f05032" /> },
  { label: 'GitHub', icon: (props) => <SiGithub {...props} color="#ffffff" /> },
  { label: 'Vercel', icon: (props) => <SiVercel {...props} color="#ffffff" /> },
  { label: 'Netlify', icon: (props) => <SiNetlify {...props} color="#00c7b7" /> },
  { label: 'VS Code' },
  { label: 'Postman', icon: (props) => <SiPostman {...props} color="#ff6c37" /> },
  { label: 'Figma', icon: (props) => <SiFigma {...props} color="#f24e1e" /> },
];

export const softSkills = [
  { label: 'Teamwork', icon: (props) => <FaUsers {...props} color="#3b82f6" /> },
  { label: 'Creativity', icon: (props) => <FaLightbulb {...props} color="#facc15" /> },
  { label: 'Communication', icon: (props) => <FaComments {...props} color="#10b981" /> },
  { label: 'Time Management', icon: (props) => <FaClock {...props} color="#f97316" /> },
  { label: 'Problem Solving', icon: (props) => <FaBrain {...props} color="#8b5cf6" /> },
];
