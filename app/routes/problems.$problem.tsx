import {CodeEditor} from "~/components/Editor";
import {useLoaderData, useFetcher
} from "@remix-run/react";
import {prisma} from "~/utils/db.server";
import {json} from "@remix-run/node";
import Split from 'react-split'
import React from "react";
import {problems} from "~/utils/problems/index.server";
import * as monaco from 'monaco-editor';

export async function loader({params}) {
    const problem = await prisma.problem.findUnique({
        where: {
            id: Number(params.problem)
        }
    });
    return json({problem});
}

export async function action({request, params}) {
    console.log(request);
    console.log(params);
    const formData = await request.formData();
    console.log(formData);
}

export default function Problem() {
    const {problem} = useLoaderData<typeof loader>();
    const fetcher = useFetcher();
    const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    function showValue() {
        if (!editorRef.current) {
            throw new Error('Editor not found');
        }
        alert(editorRef.current.getValue());
    }

    if (!problem) {
        throw new Error('Problem not found');
    }

    function submitCode() {
        fetcher.submit({});
        console.log('in submitCode');
    }

    return (
        <div>
            <Split
                sizes={[50, 50]}
                minSize={100}
                gutterSize={10}
                gutterAlign='center'
                snapOffset={30}
                cursor='col-resize'
                dragInterval={1}
                direction='horizontal'
                className='ml-5 flex'
            >
                <div className='bg-background'>
                    <h1>{problem.id}. {problem.title}</h1>
                </div>
                <div>
                    <CodeEditor code={problem.starterCode} onMount={handleEditorDidMount}/>
                    <div className='w-100 h-3 bg-background'>

                            <button className="rounded m-3 py-2 px-2 mt-2 text-white bg-black" type='submit' onClick={submitCode}>Submit Code</button>

                        <button onClick={showValue}>Show value</button>
                    </div>
                </div>
            </Split>

        </div>
    );
}