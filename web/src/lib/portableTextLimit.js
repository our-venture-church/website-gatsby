const defaults = { nonTextBehavior: 'remove', limit: 250 };

function textLimit(doc, opts = {}) {
    const { limit = 160, ellipsis = '...' } = opts;
    let count = 0;
    let limitReached = false;

    const excerpt = doc.reduce((blocks, block) => {
        if (limitReached) {
            return blocks;
        }
        if (block._type !== 'block') {
            return [...blocks, block];
        }
        const newBlock = {
            ...block,
            children: block.children.filter(Boolean).map(child => {
                const spanLength = child.text.length;
                if (count + spanLength < limit) {
                    count = count + spanLength;
                    return child;
                }
                const newSpan = {
                    ...child,
                    text: child.text.slice(0, limit - count) + ellipsis,
                };
                limitReached = true;
                return newSpan;
            }),
        };

        return [...blocks, newBlock];
    }, []);
    return excerpt;
}

const excerpt = textLimit(doc.text, { limit: 250 });
console.log(blocksToText(excerpt));

function blocksToText(blocks, opts = {}) {
    const options = Object.assign({}, defaults, opts);
    return blocks
        .map(block => {
            if (block._type !== 'block' || !block.children) {
                return options.nonTextBehavior === 'remove'
                    ? ''
                    : `[${block._type} block]`;
            }

            return block.children.map(child => child.text).join('');
        })
        .join('\n\n');
}
