import React from 'react';

export const Page = ({ children }) => {
  return <div>{children} </div>;
};

export const withPage = () => WrapperComponent =>
  class extends React.Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
