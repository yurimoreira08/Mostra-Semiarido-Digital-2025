// Type definitions for the application

// Define animation types
export type Animation = {
  name: string;
  duration: string;
  timingFunction: string;
  delay?: string;
};

// Define event types
export type EventScheduleItem = {
  time: string;
  title: string;
  description: string;
  icon: JSX.Element;
};

// Define organization types
export type Organizer = {
  name: string;
  image: string;
  role: string;
};

// Define target audience types
export type TargetAudienceItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  bgColor: string;
  hoverColor: string;
};