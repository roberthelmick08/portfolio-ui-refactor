'use strict';

// Model for holding Project attributes
export interface Job {
  name: string;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: Array<string>;
}
