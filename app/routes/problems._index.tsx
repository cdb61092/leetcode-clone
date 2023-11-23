import { prisma } from "~/utils/db.server";
import { json } from "@remix-run/node";
import {useLoaderData, Link, Outlet} from "@remix-run/react";
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
    const problemsWithLinks = problems.map((problem) => {
        return {
            ...problem,
            link: problem.title.toLowerCase().replaceAll(' ', '-')
        }
    });


    return json({problems: problemsWithLinks});
}

export default function ProblemsIndex() {
    const {problems} = useLoaderData<typeof loader>()
    // console.log(problems)
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
                                <TableCell><Link to={`./${problem.id}`}> {problem.title} </Link></TableCell>
                                <TableCell>{problem.difficulty}</TableCell>
                                <TableCell>{problem.patterns}</TableCell>
                                <TableCell>{problem.categories.join(', ')}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Outlet />
        </div>
    )
}