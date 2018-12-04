'use strict';

// Model for holding Project attributes
export interface Project {
    name: string;
    date: string;
    description: Array<string>;
    media?: Array<{path: string, caption: string}>;
    githubHref?: string;
    liveHref?: string;
    techsUsed: Array<string>;
}
