'use strict';

// Model for holding Project attributes
export interface Project {
    name: string;
    date: string; 
    description: string; 
    media?: Array<string>;
    githubHref?: string;
    liveHref?: string;
    techsUsed: Array<string>;
}
