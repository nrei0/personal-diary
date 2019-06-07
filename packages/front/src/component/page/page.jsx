import React from 'react';
import cn from 'classnames';

import styles from './page.scss';

/**
 * Page component.
 *
 * @param {{ children: React.FunctionComponentElement<any> }} props Props.
 */
export const Page = ({ children }) => <div className={cn(styles.page)}>{children}</div>;

/**
 * Page HOC component.
 *
 * @returns {function(React.FunctionComponent): React.FunctionComponent}
 */
export const withPage = () => WrapperComponent => props => (
  <Page>
    <WrapperComponent {...props} />
  </Page>
);
