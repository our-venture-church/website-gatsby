import S from '@sanity/desk-tool/structure-builder';

const otherDocumentTypes = S.documentTypeListItems().filter(
    ({ name }) => !['siteSettings'].includes(name)
);

export default () =>
    S.list()
        .title('zContent')
        .items([...otherDocumentTypes]);
