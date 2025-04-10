async function getData(){
  const res = await fetch("https://snowtooth-api-rest.fly.dev")
  return res.json();
}

export default async function Page() {

  const data = await getData();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <h1 className="text-2xl font-bold text-center mb-6">Lift Status Info</h1>
    <table>
      <thead>
        <tr>
          <th>Lift Name</th>
          <th>Lift Status</th>          
        </tr>
      </thead>
      <tbody>
        {data.map((lift) => (<tr key={lift.id}>
          <td>{lift.name}</td>
          <td>{lift.status}</td>          
        </tr>))}
      </tbody>
    </table>
    </main>
    </div>
  );
}
