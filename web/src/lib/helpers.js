// import { format } from 'date-fns';

export function cn(...args) {
    return args.filter(Boolean).join(' ');
}

export function mapEdgesToNodes(data) {
    if (!data.edges) return [];
    return data.edges.map(edge => edge.node);
}

export function filterOutDocsWithoutSlugs({ slug }) {
    return (slug || {}).current;
}

// export function getBlogUrl(publishedAt, slug) {
//     return `/blog/${format(publishedAt, 'YYYY/MM')}/${slug.current || slug}/`;
// }

export function buildImageObj(source) {
    const imageObj = {
        asset: { _ref: source.asset._ref || source.asset._id },
    };

    if (source.crop) imageObj.crop = source.crop;
    if (source.hotspot) imageObj.hotspot = source.hotspot;

    return imageObj;
}

import * as React from 'react';

import { IconContext, DefaultContext } from './iconContext';

function Tree2Element(tree): React.ReactElement<{}>[] {
    return (
        tree &&
        tree.map((node, i) =>
            React.createElement(
                node.tag,
                { key: i, ...node.attr },
                Tree2Element(node.child)
            )
        )
    );
}
export function GenIcon(data) {
    return props => (
        <IconBase attr={{ ...data.attr }} {...props}>
            {Tree2Element(data.child)}
        </IconBase>
    );
}

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
    children?: React.ReactNode;
    size?: string | number;
    color?: string;
    title?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(
    props: IconBaseProps & { attr: {} | undefined }
): JSX.Element {
    const elem = (conf: IconContext) => {
        const computedSize = props.size || conf.size || '1em';
        let className;
        if (conf.className) className = conf.className;
        if (props.className)
            className = (className ? className + ' ' : '') + props.className;
        const { attr, title, ...svgProps } = props;

        return (
            <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                {...conf.attr}
                {...attr}
                {...svgProps}
                className={className}
                style={{
                    color: props.color || conf.color,
                    ...conf.style,
                    ...props.style,
                }}
                height={computedSize}
                width={computedSize}
                xmlns="http://www.w3.org/2000/svg"
            >
                {title && <title>{title}</title>}
                {props.children}
            </svg>
        );
    };

    return IconContext !== undefined ? (
        <IconContext.Consumer>
            {(conf: IconContext) => elem(conf)}
        </IconContext.Consumer>
    ) : (
        elem(DefaultContext)
    );
}
