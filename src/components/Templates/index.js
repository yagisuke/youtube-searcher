import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import { pullRight, h1 } from './templates.css';

const Templates = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          YouTube Searcher
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        Made with <Icon name="heart" color="black" /> by yagisuke
      </p>
    </Container>
  );
};

export default Templates;
