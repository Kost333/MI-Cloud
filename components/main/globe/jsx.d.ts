import React, {AriaAttributes, DOMAttributes} from 'react';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Extend the HTMLAttributes interface to include model-viewer element
        'model-viewer'?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
}
