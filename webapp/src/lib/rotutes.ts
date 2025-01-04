export const getAllIdeasRoute = () => '/';
export const getViewIdeaRoute = ({ ideaNick }: { ideaNick: string }) => `/ideas/${ideaNick}`;
export const getNewIdeaRoute = () => '/ideas/new';
