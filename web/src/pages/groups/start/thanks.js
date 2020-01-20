import React from 'react';

import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import EmailLink from '../../../components/EmailLink';
import NarrowPageWrapper from '../../../layouts/NarrowPageWrapper';

const Thanks = () => (
    <Layout>
        <SEO title="Thanks for your interest in starting a Venture group." />
        <NarrowPageWrapper includeSidePadding={true} includeTopPadding={true}>
            <h1>Thanks for your interest in starting a Venture group.</h1>
            <p>
                We'll do some work on our end and reach out to you with more
                information. If you have a particular question about Venture
                groups, email us at{' '}
                <EmailLink emailAddress="groups@ourventure.church" />.
            </p>
        </NarrowPageWrapper>
    </Layout>
);

Thanks.propTypes = {};

export default Thanks;
