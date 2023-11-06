import React from 'react';
import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('@google/model-viewer'), {
    ssr: false, // Ensure that the component is not rendered on the server side
});

const ModelViewerComponent = ({ src }: {src: string}) => {
    return (
        <ModelViewer
            // @ts-ignore
            src={src}
            alt="A 3D model"
            auto-rotate
            camera-controls
            background-color="#f0f0f0"
            shadow-intensity="1"
            ar
            ar-modes="webxr scene-viewer quick-look"
            ar-scale="auto"
            ar-placement="floor"
            ar-modes-user-requested
            style={{ width: '100%', height: '500px' }}
        />
    );
};


export default ModelViewerComponent;