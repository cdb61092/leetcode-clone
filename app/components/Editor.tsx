import React from "react";
import Editor from '@monaco-editor/react';
import type * as monaco from 'monaco-editor';
import {useFetcher} from "@remix-run/react";

interface SubmitData {
    success: string
}

export default function CodeEditor() {
    const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    const handleEditorDidMount = (editor) => {
        editorRef.current = editor;
    }

    const fetcher = useFetcher<SubmitData>()

    function handleSubmit(): void {

        const code = editorRef.current?.getValue() as string

        fetcher.submit({ code }, {'method': 'POST', action: '?index'})

        console.log({fetcherData: fetcher.data})
    }

    return (
        <>
            <Editor
                height={500}
                defaultLanguage="javascript"
                defaultValue="// some comment"
                value={'function add(a, b) {return a + b}'}
                theme={'vs-dark'}
                onMount={handleEditorDidMount}

            />

                <button type={'submit'} onClick={handleSubmit}>Submit Code</button>

            <div>hello {fetcher.data?.success}</div>


        </>

    );
}
