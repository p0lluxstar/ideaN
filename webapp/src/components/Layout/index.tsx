import { Link, Outlet } from 'react-router-dom';
import {
  getAllIdeasRoute,
  getNewIdeaRoute,
  getSignInRoute,
  getSignUpRoute,
} from '../../lib/rotutes';
import css from './index.module.scss';

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>IdeaNick</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getNewIdeaRoute()}>
              New idea
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getSignUpRoute()}>
              Sign Up
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getSignInRoute()}>
              Sign In
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  );
};
