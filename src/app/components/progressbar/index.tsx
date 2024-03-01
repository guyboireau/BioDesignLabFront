import React from 'react';

function LoadingBar({ progress }: { progress: number }) {
    const colors = ['red', 'yellow', 'green', 'blue'];
    return (<>
        <div className="flex w-1/4">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className={`flex-1 m-1 h-4 ${progress > index ? `bg-yellow-200` : 'bg-gray-200'}`}
                />

            ))}
        </div>
    </>
    );
}

export default LoadingBar;