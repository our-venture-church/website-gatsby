// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import person from './person';
import sermon from './sermon';
import series from './series';
import ministry from './ministry';
import campus from './campus';
import event from './event';
import group from './group';
import homePage from './singletons/homePage';
import page from './page';
import siteSettings from './singletons/siteSettings';

import blockContent from './objects/blockContent';
import heroBlock from './objects/heroBlock';
import internalLink from './objects/internalLink';
import location from './objects/location';
import pageIntro from './objects/pageIntro';
import richText from './objects/richText';
import socialLink from './objects/socialLink';
import titleMessage from './objects/titleMessage';
import youTube from './objects/youTube';
import imNewPage from './singletons/imNewPage';
import locationsPage from './singletons/locationsPage';
import givePage from './singletons/givePage';
import watchListenPage from './singletons/watchListenPage';
import whatWeDoPage from './singletons/whatWeDoPage';
import whoWeArePage from './singletons/whoWeArePage';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        event,
        ministry,
        campus,
        person,
        sermon,
        series,
        group,
        page,
        siteSettings,

        homePage,
        imNewPage,
        locationsPage,
        givePage,
        watchListenPage,
        whatWeDoPage,
        whoWeArePage,
        // When added to this list, object types can be used as
        // { type: 'typename' } in other document schemas
        blockContent,
        heroBlock,
        internalLink,
        location,
        pageIntro,
        richText,
        socialLink,
        titleMessage,
        youTube,
    ]),
});
