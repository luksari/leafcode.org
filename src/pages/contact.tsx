import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import { Button, Layout } from '../components';

import { config } from '@config/SiteConfig';
import styled from 'styled-components';
import Hero from '../components/Hero';
import { IPageProps } from '../models/PageProps';

const ContactLink = styled.a`
  margin: 5px;
  display: flex;
  align-items: center;
`;

export const ContactPage: FunctionComponent<IPageProps> = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Hero title={'Kontakt'} subTitle={`Skontaktuj się z nami`} main>
      <>
        <ContactLink href='https://www.qarbon.pl'>
          <Button big>
            <svg width='1792' height='1792' viewBox='0 0 1792 1792' xmlns='http://www.w3.org/2000/svg'>
              <path d='M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z' />
            </svg>
            Więcej o nas
          </Button>
        </ContactLink>
      </>
    </Hero>
  </Layout>
);
export default ContactPage;
