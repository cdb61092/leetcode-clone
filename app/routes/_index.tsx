import type {ActionFunctionArgs, MetaFunction} from "@remix-run/node";
import React, {Suspense}  from "react";
import {json} from "@remix-run/node";
import {useActionData, useLoaderData} from "@remix-run/react";
// import * as assert from "assert";
// import {CodeEditor} from "~/components/Editor";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({request} : ActionFunctionArgs) {
    const assert = await import('assert')
    const body = await request.formData();
    const code = body.get('code');

    // eslint-disable-next-line no-new-func
    const fn = new Function(`return ${code as string}`)()


    let success = 'false';

    try {
        const tests = [
            [1, 2],
            [2, 2],
            [3, 2],
        ]

        const answers = [3, 4, 5]

        for (const [a, b] of tests) {
            const res = fn(a, b)
            assert.equal(res, answers.shift())
        }

        success = 'true';
    } catch (e: any) {
        console.log(e)
        success = 'false'
    }


    return json({success: success})
}

const CodeEditor = React.lazy(() => import('~/components/Editor'));

export default function Index() {

    return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <Suspense>

            <CodeEditor/>
        </Suspense>

    </div>
  );
}
