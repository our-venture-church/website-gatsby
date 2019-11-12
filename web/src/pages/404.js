import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import NarrowPageWrapper from '../layouts/NarrowPageWrapper';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <NarrowPageWrapper includeSidePadding={true} includeTopPadding={true}>
            <h1>Page not found</h1>
            <p>
                We just recently launched this version of our site, and some
                pages are still missing. Sadly, you found one. But hang tight we
                hope to have everything ready to go in a few weeks.
            </p>
            <p>
                Use the main navigation to find other pages on the site, or{' '}
                <Link to="/contact">contact us</Link> if you need more help.
            </p>
        </NarrowPageWrapper>
    </Layout>
);

export default NotFoundPage;
