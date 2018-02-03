import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import { cSiteName, cCopyright } from './templates.css';

const Templates = ({ children }) => {
  return (
    <Container>
      <Link to="/" className={cSiteName}>
        <Header as='h1'>
          YouTube Searcher
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={cCopyright}>
        Made with <Icon name="heart" color="black" /> by yagisuke
      </p>
    </Container>
  );
};

export default Templates;
