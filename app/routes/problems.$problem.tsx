import { CodeEditor } from "~/components/Editor";
import {useLoaderData} from "@remix-run/react";
import {prisma} from "~/utils/db.server";
import {json} from "@remix-run/node";

export async function loader({params}) {
    const problem = await prisma.problem.findUnique({
        where: {
            id: Number(params.problem)
        }
    });
  return json({ problem });
}


export default function Problem() {
    const { problem } = useLoaderData<typeof loader>();

    // console.log(problem)
  return (
    <>
      <h1>Problem</h1>
        <CodeEditor code={problem?.starterCode ?? ''}/>
    </>
  );
}