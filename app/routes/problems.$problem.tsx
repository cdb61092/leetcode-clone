import {CodeEditor} from "~/components/Editor";
import {
    useLoaderData, useFetcher
} from "@remix-run/react";
import {prisma} from "~/utils/db.server";
import {json} from "@remix-run/node";
import Split from 'react-split'
import React from "react";
import {problems} from "~/utils/problems/index.server";
import type * as monaco from 'monaco-editor';

export async function loader({params}) {
    const problem = await prisma.problem.findUnique({
        where: {
            id: Number(params.problem)
        }
    });
    return json({problem});
}

export async function action({request, params}) {
    const problem = await prisma.problem.findUnique({
        where: {
            id: Number(params.problem)
        }
    });

    if (!problem) {
        throw new Error('Problem not found');
    }
    const formData = await request.formData();

    const code = formData.get('code');

    // eslint-disable-next-line no-new-func
    const fn = new Function(`${code} \n return ${problem?.functionName}`)();

    const handler = problems[problem.id]

    const res = handler(fn);

    return json({success: !res.error});
}

export default function Problem() {
    const {problem} = useLoaderData<typeof loader>();
    const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    const fetcher = useFetcher();
    const data = fetcher.data

    console.log(data);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
    }

    if (!problem) {
        throw new Error('Problem not found');
    }

    function submitCode() {
        if (!editorRef.current) {
            throw new Error('Editor not found');
        }

        const code = editorRef.current.getValue();

        fetcher.submit({
            code: code
        }, { method: "post" });

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
                    </div>
                </div>
            </Split>

        </div>
    );

}