import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import GlobalStyles from "Components/GlobalStyles";

const AppPresenter = () => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <Flex alignCenter full column>
      <Notification text={"Hello"} seen={false} />
    </Flex>
  </Fragment>
);

export default AppPresenter;
