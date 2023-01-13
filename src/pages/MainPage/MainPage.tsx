import React from 'react';

import Main from './Main';
import withUser from '../../hoc/withUser';
import Content from '../../components/core/Content';

function MainPage() {
  return (
    <Content heading="Main">
      <Main />
    </Content>
  );
}

export default withUser(MainPage, false);
