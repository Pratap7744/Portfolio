import type { Project } from './types';

export const projects: Project[] = [
    {
        name: 'MindShare',
        description: {
            en: 'A social network application that allows users to make friends, follow, post content, like and comment on posts, and chat in real-time. This project helped me learn about integrating React.js with Node.js and MySQL. It was a valuable experience that strengthened my development skills.',
            in: "एक सोशल नेटवर्क एप्लिकेशन जो उपयोगकर्ताओं को मित्र बनाने, फॉलो करने, कंटेंट पोस्ट करने, पोस्ट पर लाइक व कमेंट करने और रीयल-टाइम में चैट करने की सुविधा देता है। इस प्रोजेक्ट के माध्यम से मैंने React.js को Node.js और MySQL के साथ इंटीग्रेट करना सीखा। यह एक मूल्यवान अनुभव रहा, जिसने मेरी डेवेलपमेंट स्किल्स को और मज़बूत किया।"
        },
        type: ['web', 'favorite'],
        date: '2024',
        technos: [
            'React',
            'SCSS',
            'Node.js',
            'MySQL',
        ],
        link: 'https://github.com/Pratap7744/MindShare-Social',
        repo_link: 'https://github.com/Pratap7744/MindShare-Social'
    },
    {
        name: 'Aesthetix',
        description: {
            in: "Aesthetix एक टूल है जो इमेजेस को मुख्य विषय के पीछे कस्टम टेक्स्ट जोड़कर सुंदर एस्थेटिक प्रभाव देता है। सुपाबेस द्वारा समर्थित लॉगिन सिस्टम के साथ, यह फॉन्ट स्टाइल्स, ग्रेडिएंट्स, शैडोज़ और अन्य सुविधाएँ प्रदान करता है जो इमेज डिजाइन को पर्सनलाइज करने में मदद करती हैं। Aesthetix सुंदर कंटेंट बनाना बेहद आसान बनाता है!",
            en: 'Aesthetix is a tool that enhances images by adding custom text behind the main subject, creating stunning aesthetics. With a login system powered by Supabase, it offers features like font styles, gradients, shadows, and more to personalize image designs. Aesthetix makes creating beautiful content effortless!'
        },
        type: ['web', 'favorite'],
        date: '2024',
        technos: [
            'React',
            'Tailwind CSS',
            'Supabase',
            'Vercel',
            
        ],
        link: 'https://text-behind-image-aesthetix1.vercel.app/',
        repo_link: 'https://github.com/Pratap7744/TextBehindImage-Aesthet'
    },
    {
        name: 'AI-ChatBot',
        description: {
            en: 'AI Chatbot is an assistant built using the Gemini AI API to fetch information based on user queries. It uses Clerk for secure authentication and stores search history in MongoDB, allowing easy access to past queries. With its seamless design, AI Chatbot offers a secure and personalized experience.',
            in: "AI Chatbot एक सहायक है जिसे Gemini AI API का उपयोग करके उपयोगकर्ता के सवालों के आधार पर जानकारी प्राप्त करने के लिए बनाया गया है। यह Clerk का उपयोग करके सुरक्षित प्रमाणीकरण करता है और MongoDB में खोज इतिहास को स्टोर करता है, जिससे पिछले सवालों तक आसान पहुँच मिलती है। इसके सहज डिज़ाइन के साथ, AI Chatbot एक सुरक्षित और व्यक्तिगत अनुभव प्रदान करता है।"
        },
        type: ['web', 'favorite'],
        date: '2023',
        technos: [
            'React',
            'CSS',
            'MongoDB',
            'Clerk',
            'Gemini'
        ],
        link: 'https://capitalympics.com/',
        repo_link: 'https://github.com/icepick4/capitalympics'
    },
    {
        name: 'Recipe-Blog',
        description: {
            en: 'I built a recipe blog app using Node.js, React, Tailwind CSS, and MongoDB, allowing users to share their unique recipes. The app features an intuitive interface for posting and browsing recipes, focusing on simplicity and responsiveness. Users can share their creations, explore new recipes, and connect with food enthusiasts.',
            in: "मैंने Node.js, React, Tailwind CSS, और MongoDB का उपयोग करके एक रेसिपी ब्लॉग ऐप बनाया है, जो उपयोगकर्ताओं को अपनी अनूठी रेसिपी साझा करने की अनुमति देता है। इस ऐप में रेसिपी पोस्ट करने और ब्राउज़ करने के लिए एक सहज इंटरफ़ेस है, जो सरलता और उत्तरदायित्व पर केंद्रित है। उपयोगकर्ता अपनी रचनाओं को साझा कर सकते हैं, नई रेसिपी तलाश सकते हैं, और खाद्य प्रेमियों से जुड़ सकते हैं।"
        },
        type: ['web','favorite'],
        date: '2023',
        technos: [
            'React',
            'Tailwind CSS',
            'Node.js',
            'MongoDB',
        ],
        link: 'https://capitalympics.com/',
        repo_link: 'https://github.com/icepick4/capitalympics'
    },
    {
        name: 'Tic-Tac-Toe',
        description: {
            en: 'A Python package serving as an API wrapper for the One Piece universe, allowing users to retrieve data from the series. This project was a learning experience in Python package development and API integration.',
            in: "Un package Python servant de wrapper API pour l'univers One Piece, permettant aux utilisateurs de récupérer des données de la série. Ce projet a été une expérience d'apprentissage dans le développement de packages Python et l'intégration d'API"
        },
        type: [ 'game'],
        date: '2023',
        technos: ['React'],
        link: 'https://pypi.org/project/onepyece/',
        repo_link: 'https://github.com/icepick4/onepyece'
    },
    {
        name: 'Portfolio Levi Lea',
        description: {
            en: 'A portfolio website created for Levi Lea, a student graphic designer. The site showcases her work and was developed using Vue.js, TypeScript, and Tailwind CSS.',
            in: 'Un site web de portfolio créé pour Levi Lea, une étudiante en design graphique. Le site présente son travail et a été développé en utilisant Vue.js, TypeScript et Tailwind CSS.'
        },
        type: ['web'],
        date: '2023',
        technos: ['Vue.js', 'TypeScript', 'Tailwind CSS', 'Swiper.js'],
        link: 'https://levilea.in/',
        repo_link: 'https://github.com/icepick4'
    },
    {
        name: 'Sonic Game',
        description: {
            en: 'This project is a game inspired by the Dino Game in Google Chrome. The game is a simple endless runner game where the player controls a character that must avoid obstacles. I chose to use a pixel art style for the game, designing some of the assets myself. This project was created to practice my skills in Pygame and Python, aiming to create a simple and fun game.',
            in: "Ce projet est un jeu inspiré du jeu Dino dans Google Chrome. Le jeu est un simple jeu de course sans fin où le joueur contrôle un personnage qui doit éviter les obstacles. J'ai choisi d'utiliser un style pixel art pour le jeu, concevant certains des actifs moi-même. Ce projet a été créé pour pratiquer mes compétences en Pygame et Python, dans le but de créer un jeu simple et amusant."
        },
        type: ['game'],
        date: '2022',
        technos: ['Python', 'Pygame'],
        link: 'https://github.com/icepick4/Sonic-Game/archive/refs/heads/main.zip',
        repo_link: 'https://github.com/icepick4/Sonic-Game'
    },
    {
        name: 'Tower of Hanoi',
        description: {
            en: 'Inspired by the classic Tower of Hanoi puzzle, this game challenges players to move disks between towers using TypeScript and Three.js. I initially started with JavaScript and transitioned to TypeScript, learning how to use Three.js for 3D graphics.',
            in: "Inspiré du classique puzzle de la Tour de Hanoï, ce jeu met au défi les joueurs de déplacer des disques entre des tours en utilisant TypeScript et Three.js. J'ai commencé avec JavaScript et suis passé à TypeScript, apprenant à utiliser Three.js pour les graphiques 3D."
        },
        type: ['game'],
        date: '2022',
        technos: ['TypeScript', 'Three.js', 'CSS'],
        link: 'https://icepick4.github.io/tower-of-hanoi/threejs/public/',
        repo_link: 'https://github.com/icepick4/tower-of-hanoi'
    },
    
];
