"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Account = {
  id: string;
  balance: number;
  type: "primary_account" | "secondary_account" | "investment";
};

export const columns: ColumnDef<Account>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="!px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "balance",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className="!px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Saldo
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Tipologia",
    cell: ({ row }) => {
      if (row.getValue("type") == "primary_account") {
        return "Account principale";
      } else if (row.getValue("type") == "secondary_account") {
        return "Account secondario";
      } else {
        return "Account per investimenti";
      }
    },
  },
];
