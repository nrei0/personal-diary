import React from 'react';
import classNames from 'classnames/bind';

import styles from './page.scss';

const cn = classNames.bind(styles);

export const Page = ({ children }) => <div className={cn('page')}>{children}</div>;

export const withPage = () => WrapperComponent => props => (
  <Page>
    <WrapperComponent {...props} />
  </Page>
);
