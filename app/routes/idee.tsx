import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Groningen Klimaat Website" },
    { name: "description", content: "Groningen Klimaat Website" },
  ];
};

export default function Index() {
    return (
        <div>
            <h1>Ideeën</h1>
        </div>
    );
}
// onder de punt bomen en daar de mensen laten roken
//mvdvelde@pm.me