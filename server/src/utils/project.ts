import { ProjectType } from '../types/index';
import {
  NEXT_JS,
  REACT_JS,
  NODE_JS,
  EXPRESS_JS,
  NEST_JS,
  POSTGRE_SQL,
  SPRING_BOOT,
  MY_SQL,
} from '../constants/technical';
import { Categories } from 'src/constants/categories';

export const PROJECT_LIST: ProjectType[] = [
  {
    id: 1,
    name: 'Discord Clone',
    description:
      'Web application for real-time messaging, and user management, inspired from Discord.',
    github: 'https://github.com/minhtrifit/discord-clone-client',
    images: [
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711428960/project-assets/discord-clone/1_wp9gaw.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711428952/project-assets/discord-clone/2_duhsts.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711428953/project-assets/discord-clone/3_f0dnzp.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711428954/project-assets/discord-clone/4_hdpuif.png',
    ],
    technicals: [NEXT_JS, NEST_JS, POSTGRE_SQL],
    demo: 'https://youtu.be/L8ixcX2tIdk',
    released: '19th Feb 2024',
    features: [
      'Authentication & Authorization: NextAuth email credentials, Github oauth, role delegation (user, admin).',
      'Friend feature: Real-time send friend request & friend notification.',
      'Message: Real-time send direct message (text, image, file type).',
      'Server: Real-time send channel message (text, image, file type) & server joining.',
      'Admin page management.',
    ],
    categories: [Categories.enterprise, Categories.clone],
  },
  {
    id: 2,
    name: 'Spotify Clone',
    description: 'Music web player inspired from Spotify 2.0.',
    github: 'https://github.com/minhtrifit/spotify-clone-client',
    images: [
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711431146/project-assets/spotify-clone/1_n6f1jk.jpg',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711431145/project-assets/spotify-clone/2_ffjk3u.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711431145/project-assets/spotify-clone/3_rysijk.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711431202/project-assets/spotify-clone/4_o4j5f8.png',
    ],
    technicals: [REACT_JS, SPRING_BOOT, MY_SQL],
    demo: 'https://youtu.be/iLBWCdZQNpQ',
    released: '22th Dec 2023',
    features: [
      'Authentication & Authorization: Json web token, role delegation (user, admin).',
      'Audio Interact: Listen single, create (admin), edit (admin), delete (admin), search by name.',
      `Album Interact: Listen album collection, skip to next or previous audio, create (admin, Google Drive Cloud
        storage), edit (admin), delete (admin).`,
      `Playlist Interact: Listen playlist collection, skip to next or previous audio, create (interactive UI), modify
      playlist (add or remove single audio), delete (admin).`,
    ],
    categories: [Categories.enterprise, Categories.clone],
  },
  {
    id: 3,
    name: 'Slearninglab',
    description:
      'Web application for online education management, inspired from Google Classroom.',
    github: 'https://github.com/minhtrifit/slearninglab-client',
    images: [
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711433315/project-assets/slearninglab/1_xp6ixu.webp',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711432781/project-assets/slearninglab/2_iuiv7h.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711432776/project-assets/slearninglab/3_kpusik.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711432783/project-assets/slearninglab/4_tks14y.png',
    ],
    technicals: [REACT_JS, NEST_JS, POSTGRE_SQL],
    demo: 'https://youtu.be/g9WHplySekY',
    released: '27th Aug 2023',
    features: [
      'Authentication & Authorization: Json web token, role delegation (student, teacher).',
      'Real-time Notification: Request join class (student, socketIO), accept join class (teacher, socketIO).',
      `Classroom teacher: Create classroom, create exam (multiple choice format, Cloudinary image storage),
      real-time chat (socketIO), upload document.`,
      `Classroom student: Exam practice, view exam result, real-time chat (socketIO), download document.`,
    ],
    categories: [Categories.enterprise, Categories.education],
  },
  {
    id: 4,
    name: 'Figure Shopping App',
    description: 'Shopping & Forum Website for trading figure.',
    github: 'https://github.com/minhtrifit/pern-figure-world-client',
    images: [
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711519394/project-assets/figure-world/1_uxrsss.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711437140/project-assets/figure-world/2_hhuoza.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711437140/project-assets/figure-world/3_mu0ul6.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711437132/project-assets/figure-world/4_tl3dvq.png',
    ],
    technicals: [REACT_JS, NODE_JS, EXPRESS_JS, POSTGRE_SQL],
    demo: 'https://youtu.be/rg2LySuBm0I',
    released: '10th May 2023',
    features: [
      'Authentication & Authorization: Firebase oauth.',
      'Home page: View figure product list.',
      `Product page: Figure product information.`,
      `Cart page: Add to cart & payment product.`,
      `Forum page: Review & feedback figure trading.`,
    ],
    categories: [Categories.enterprise, Categories.ecommerce],
  },
  {
    id: 5,
    name: 'VietNam Driving License',
    description:
      'Web application training for VietNam driving license multiple choice test.',
    github: 'https://github.com/minhtrifit/driving-license-nodejs',
    images: [
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711434997/project-assets/vietnam-driving-license/1_jtqzn1.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711434990/project-assets/vietnam-driving-license/2_txif24.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711435127/project-assets/vietnam-driving-license/3_ijgzbz.png',
      'https://res.cloudinary.com/dn2h31tcb/image/upload/v1711435126/project-assets/vietnam-driving-license/4_llmjhf.png',
    ],
    technicals: [NODE_JS, EXPRESS_JS, POSTGRE_SQL],
    demo: 'https://youtu.be/JDg3TORhMEE',
    released: '12th Feb 2023',
    features: [
      'Authentication & Authorization: Passport local.',
      'Document page: View exam question & answer by vehicle type.',
      `Exam page: Do multiple choice exam by verhicle type with VietNam ministry of transport's format.`,
      `History page: View exam result history.`,
    ],
    categories: [Categories.enterprise, Categories.education],
  },
];
