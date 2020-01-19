import React from 'react';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import EmailLink from '../../../components/EmailLink';
import NarrowPageWrapper from '../../../layouts/NarrowPageWrapper';

const POST = () => (
    <Layout>
        <SEO title="Thanks for joining a Venture group." />
        <NarrowPageWrapper includeSidePadding={true} includeTopPadding={true}>
            <h1>Something when wrong</h1>
            <p>
                We're having trouble processing your request. Please email{' '}
                <EmailLink emailAddress="groups@ourventure.church" /> to join
                the group you are interested in.
            </p>
        </NarrowPageWrapper>
    </Layout>
);

POST.propTypes = {};

export default POST;
