import React from "react";
import Editor from '@monaco-editor/react';

interface CodeEditorProps {
    code: string,
    onMount: (editor: any, monaco: any) => void
}

export function CodeEditor({ code, onMount }: CodeEditorProps) {
    return (
        <>
            <Editor
                height={500}
                defaultLanguage="javascript"
                defaultValue={code}
                value={code}
                theme={'vs-dark'}
                onMount={onMount}
                options={{
                    autoIndent: "full",
                }}

            />




        </>

    );
}
