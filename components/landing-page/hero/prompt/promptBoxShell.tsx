// 'use client';
import { ReactNode } from 'react'
import clsx from 'clsx';

export default function PromptBox({
    leftSidePanel,
    rightSidePanel,
    promptInputBox = "",
}: {
    leftSidePanel?: ReactNode;
    promptInputBox?: ReactNode;
    rightSidePanel?: ReactNode;
}) {
    return (
        <div
            id="prompt-box-body"
            className={clsx(
                "flex items-center justify-center bg-white rounded-xl p-2 shadow-lg max-w-3xl w-full mb-6 z-10"
            )}
        >
            <div
                id="prompt-box-main"
                className={clsx(
                    "grid grid-cols-[auto_1fr_auto] gap-2 border border-gray-300 rounded-lg p-2 bg-gray-50 w-full box-border"
                )}
            >
                <div
                    className="flex flex-col gap-2"
                >
                    {leftSidePanel}
                </div>
                {promptInputBox}
                <div className="flex flex-col gap-2">
                    {rightSidePanel}
                </div>
            </div>
        </div>
    );
}