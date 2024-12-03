import React from "react";
import { AccountTable } from "./_components/AccountTable";
import { Account, columns } from "./_components/Columns";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Account[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      balance: 100,
      type: "primary_account",
    },
    {
      id: "2",
      balance: 200,
      type: "primary_account",
    },
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <>
      <div className="flex justify-end w-full mb-4">
        <Button>Crea account</Button>
      </div>

      <AccountTable
        columns={columns}
        data={data}
      />
    </>
  );
}
