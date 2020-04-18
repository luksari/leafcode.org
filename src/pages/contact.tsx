import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Button, Layout, Hero } from '../components';
import { config } from '@config/SiteConfig';
import styled from 'styled-components';

const ContactLink = styled.a`
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const ContactPage: FunctionComponent = () => (
  <Layout>
    <Helmet title={`Kontakt | ${config.siteTitle}`} />
    <Hero title={'Kontakt'} subTitle={`Skontaktuj się ze mną`} main>
      <ContactLink href=''>
        <Button big>
          Więcej o mnie
        </Button>
      </ContactLink>
    </Hero>
  </Layout>
);

export default ContactPage;
