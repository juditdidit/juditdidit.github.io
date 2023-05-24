export interface Project {
    name: string;
    slug: string;
    category: 'web' | 'graphics' | 'shared';
    defaultCategory?: 'web' | 'graphics';
    tags?: Tag[];
    description?: Array<string>;
    type?: PROJECT_TYPE;
    label?: string;
    date?: string;
    link?: Link[];
    thumbnail: string;
    gallery?: Array<string>;
}

export interface Tag {
    type: 'skill' | 'tool';
    name: string;
}

export type PROJECT_TYPE = 'Personal project' | 'Professional work' | 'School project' | 'Collaboration';

export interface Link {
    url: string;
    text?: string;
}

export const PROJECT: Project[] = [
    {
        name: 'juditdidit',
        slug: 'juditdidit',
        category: 'web',
        tags: [
            { type: 'skill', name: 'Angular' },
            { type: 'skill', name: 'TypeScript' },
            { type: 'skill', name: 'SCSS' },
            { type: 'tool', name: 'GitHub' },
            { type: 'tool', name: 'VS Code' },
        ],
        description: [
            "That's this site! My original portfolio was a decade old by the point I needed it again. It really needed a makeover; the inner workings were definitely dated.",
            'It has been reworked in Angular 16 using TypeScript and SCSS, and hosted on GitHub pages.',
        ],
        type: 'Personal project',
        date: 'Originally 2014, redesigned in 2023',
        link: [
            {
                url: 'https://github.com/juditdidit/juditdidit',
                text: 'Browse the juditdidit GitHub repo',
            }
        ],
        thumbnail: 'juditdidit_thumb',
        gallery: ['juditdidit'],
    },
    {
        name: 'Majestic Beards',
        slug: 'majesticbeards',
        category: 'shared',
        defaultCategory: 'web',
        tags: [
            { type: 'skill', name: 'JavaScript' },
            { type: 'skill', name: 'LESS' },
            { type: 'tool', name: 'GitHub' },
            { type: 'tool', name: 'VS Code' },
        ],
        description: [
            "Ever wondered if you should shave your beard? This helpful page will make that decision for you. Answer a list of highly curated (read: randomized) questions to get the answer you've been asking for. Just know that there's only one right answer.",
            'This page was originally written without a JavaScript framework, so when rewriting the project, I wanted to keep to the basics, relying only on vanilla JavaScript.',
            'The logo artwork was designed with inspiration from the hipster logos popular around the early 2010s.',
        ],
        type: 'Personal project',
        label: 'Logo, web design',
        date: 'Originally 2014, redesigned in 2023',
        link: [
            {
                url: 'https://juditdidit.github.io/majesticbeards/',
                text: 'Live site',
            },
            {
                url: 'https://github.com/juditdidit/majesticbeards',
                text: 'Browse the Majestic beards GitHub repo',
            }
        ],
        thumbnail: 'majesticbeards_thumb',
        gallery: ['majesticbeards_reverse', 'majesticbeards_background', 'majesticbeards'],
    },
    {
        name: 'Austin Walk',
        slug: 'austinwalk',
        category: 'graphics',
        description: [
            "A minimalistic logo that combines the client's initials in a cool, strong color scheme.",
        ],
        type: 'Professional work',
        label: 'Logo',
        link: [
            {
                url: 'http://www.austinwalk.com/',
                text: 'Austin Walk Video Portfolio',
            },
        ],
        date: 'March 2014',
        thumbnail: 'austinwalk_thumb',
        gallery: ['austinwalk_logo_full', 'austinwalk_logo'],
    },
    {
        name: 'Crater',
        slug: 'crater',
        category: 'graphics',
        description: [
            "Metal band Crater's brand identity. The logo was designed to depict a crater through the typography, and maintain easy readability of the band name.",
        ],
        type: 'Professional work',
        label: 'Brand identity',
        date: 'November 2012',
        thumbnail: 'crater_thumb',
        gallery: ['crater_full', 'crater_thumb'],
    },
    {
        name: 'Antoine Law',
        slug: 'antoinelaw',
        category: 'graphics',
        description: [
            'In 2012, Antoine Law was a Los Angeles-based law firm focused on Internet and Business law and litigation. The logo captures a friendly, signature-like initial.'
        ],
        type: 'Professional work',
        label: 'Brand identity',
        date: 'September 2012',
        thumbnail: 'antoinelaw_thumb',
        gallery: ['antoinelaw_thumb'],
    },
    {
        name: 'Toscana',
        slug: 'toscana',
        category: 'graphics',
        description: [
            'Brand identity for Toscana Villas, a luxury apartment influenced by the Tuscan countryside.',
            "The logo's design was influenced by the rustic metal work decorating the windows and archways of the architecture.",
        ],
        type: 'School project',
        label: 'Brand identity',
        date: 'November 2011',
        thumbnail: 'toscana_thumb',
        gallery: ['toscana_thumb'],
    },
    {
        name: 'Hair',
        slug: 'hair',
        category: 'graphics',
        description: [
            'A black-and-white illustration etched into stone and printed through lithography.',
            'Depicted here initial digital drawing.'
        ],
        type: 'School project',
        label: 'Illustration, lithography',
        date: 'October 2012',
        thumbnail: 'hair_thumb',
        gallery: ['hair_vertical', 'hair_vertical_black'],
    },
    {
        name: 'DM Screen',
        slug: 'dmscreen',
        category: 'web',
        tags: [
            { type: 'skill', name: 'Angular' },
            { type: 'skill', name: 'TypeScript' },
            { type: 'skill', name: 'SCSS' },
            { type: 'skill', name: 'Bootstrap' },
            { type: 'tool', name: 'GitHub' },
            { type: 'tool', name: 'VS Code' },
        ],
        description: [
            'During the pandemic, I picked up D&D as a hobby. As a developer I wondered, "how can I over-engineer a simple thing such as tracking initiative order?" And so here we are. Bonus points for tracking monster health as well!',
            'The DM can enter character info such as name, roll count and alignment, and the app will automatically sort each character based on highest to lowest roll. Character unconsciousness can be toggled on or off to keep track of who needs death saves.',
            'Additionally monsters status, by way of name and HP, can be added so that they can be tracked alongside the players as well.',
            'Built with Angular 16, TypeScript, SCSS and Bootstrap 5. It is hosted on GitHub pages.',
        ],
        type: 'Personal project',
        date: 'Originally 2011, updated in 2023',
        link: [
            {
                url: 'https://juditdidit.github.io/dm-screen/',
                text: 'Live site'
            },
            {
                url: 'https://github.com/juditdidit/dm-screen',
                text: 'Brose the DM Screen GitHub repo'
            },
        ],
        thumbnail: 'dmscreen_thumb',
        gallery: ['dmscreen'],
    },
    {
        name: 'Poké Recipe Book',
        slug: 'poke-recipebook',
        category: 'web',
        tags: [
            { type: 'skill', name: 'Handlebars' },
            { type: 'skill', name: 'SCSS' },
            { type: 'tool', name: 'GitLab' },
            { type: 'tool', name: 'VS Code' },
        ],
        description: [
            "A helpful guide for Pokemon Quest. Figuring out recipes is no tall order, but at least now you don't have to keep track of them all.",
            'Collaborated with a fellow Pokemon fan in both design and development using Handlebars and SCSS.',
            "The game's graphics were replicated through CSS, and additional content was designed to match in style.",
        ],
        type: 'Collaboration',
        date: '2018',
        link: [
            {
                url: 'https://gitlab.com/niko.chaffin/pokemon-quest-recipe-book',
                text: 'Browse the Poké Recipe Book GitLab repo',
            },
        ],
        thumbnail: 'poke-recipebook_thumb',
        gallery: ['poke-recipebook'],
    },
    {
        name: 'WCC',
        slug: 'wcc',
        category: 'graphics',
        description: [
            "An insignia combining the client's initials and his love for writing."
        ],
        type: 'Professional work',
        label: 'Logo design',
        date: 'May 2013',
        thumbnail: 'wcc_thumb',
        gallery: ['wcc_thumb'],
    }
];
