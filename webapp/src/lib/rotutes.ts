export const getAllIdeasRoute = () => '/';
export const getViewIdeaRoute = ({ ideaNick }: { ideaNick: string }) => `/ideas/${ideaNick}`;
export const getNewIdeaRoute = () => '/ideas/new';
export const getSignUpRoute = () => '/sign-up';
export const getSignInRoute = () => '/sign-in';
export const getSignOutRoute = () => '/sign-out';
