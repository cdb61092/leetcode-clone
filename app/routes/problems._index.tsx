import { prisma } from "~/utils/db.server";
import { json } from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
} from "@nextui-org/react";

export async function loader() {
    const problems = await prisma.problem.findMany();


    return json({problems});
}

export default function ProblemsIndex() {
    const {problems} = useLoaderData<typeof loader>()
    console.log(problems)
    return (
        <div>
            <h1>Problems Index</h1>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Difficulty</TableColumn>
                    <TableColumn>Pattern</TableColumn>
                    <TableColumn>Categories</TableColumn>
                </TableHeader>
                <TableBody>
                    {problems.map((problem) => {
                        return (
                            <TableRow key={problem.id}>
                                <TableCell>{problem.title}</TableCell>
                                <TableCell>{problem.difficulty}</TableCell>
                                <TableCell>{problem.patterns}</TableCell>
                                <TableCell>{problem.categories.join(', ')}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}