export const technoTypes = [
    'language',
    'framework',
    'library',
    'database',
    'development-tool',
    'devops',
    'apis-integration'
] as const;

const technoTypesLabels: Record<TechnoType, Record<string, string>> = {
    language: {
        en: 'Language',
        in: 'प्रोग्रामिंग भाषा'
    },
    framework: {
        en: 'Framework',
        in: 'फ्रेमवर्क'
    },
    library: {
        en: 'Library',
        in: 'लाइब्रेरी'
    },
    database: {
        en: 'Database',
        in: 'डेटाबेस'
    },
    'development-tool': {
        en: 'Development Tool',
        in: 'डेवलपमेंट टूल'
    },
    devops: {
        en: 'DevOps',
        in: 'DevOps'
    },
    'apis-integration': {
        en: 'APIs & Integration',
        in: 'एपीआई & इंटीग्रेशन'
    }
};

export function getTechnoTypeLabel(type: TechnoType) {
    const { locale } = useI18n();
    return technoTypesLabels[type][locale.value];
}

type TechnoType = (typeof technoTypes)[number];

type Techno = {
    title: string;
    icon?: string;
    image?: string;
    type: TechnoType;
    url: string;
};

export const projectTypes = [
    'favorite',
    'web',
    'game',
    
] as const;

const projectTypesLabels: Record<ProjectType, Record<string, string>> = {
    favorite: {
        en: 'Favorite',
        in: 'पसंदीदा प्रोजेक्ट'
    },
    web: {
        en: 'Web',
        in: 'वेब'
    },
    game: {
        en: 'Game',
        in: 'गेम'
    },
};

export function getProjectTypeLabel(type: ProjectType) {
    const { locale } = useI18n();
    return projectTypesLabels[type][locale.value];
}

type ProjectType = (typeof projectTypes)[number];

type Locale = 'en' | 'in';

type Project = {
    name: string;
    description: Record<Locale, string>;
    date: string;
    type: ProjectType[];
    technos: string[];
    link: string;
    repo_link: string;
};

type Hobby = {
    title: Record<Locale, string>;
    icon: string;
    emoji: string;
};

export type { Hobby, Locale, Project, ProjectType, Techno, TechnoType };
