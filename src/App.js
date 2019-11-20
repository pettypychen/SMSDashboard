import React, { useCallback, useState } from "react";
import { Card, DataTable, Page } from "@shopify/polaris";

function sortTimestamp(rows, index, direction) {
  return [...rows].sort((rowA, rowB) => {
    const amountA = parseFloat(rowA[index].substring(1));
    const amountB = parseFloat(rowB[index].substring(1));

    return direction === "descending" ? amountB - amountA : amountA - amountB;
  });
}

export default function SortableDataTableExample1() {
  const [sortedRows, setSortedRows] = useState(null);
  const datatable0 = [
    [
      "Tan Ah Giang",
      "+6588888888",
      "21/10/19",
      "14/10/19 10:00",
      "14/10/19 10:05",
      "1"
    ],
    [
      "Mohm Ali",
      "+6512345678",
      "22/10/19",
      "13/10/19 10:00",
      "14/10/19 13:30",
      "1"
    ],
    [
      "Nanni Bin Shamin",
      "+6567892345",
      "21/10/19",
      "14/10/19 10:00",
      "15/10/19 10:00",
      "2",
      "Flu"
    ],
    ["Don Don Donki", "+6534213213", "21/10/19", "NA", "NA", "NA", "NA"]
  ];
  const initiallySortedRows = [
    ["Michael Jordan", "+6588888888", "21/10/19", "14/10/19 10:00", "Mismatch"],
    [
      "S Singh",
      "+6512345678",
      "22/10/19",
      "13/10/19 10:00",
      "Operation Cancelled"
    ],
    ["Kitty Paw", "+6523451231", "23/10/19", "14/10/19 10:00", "OAS Cancelled"],
    [
      "Nasoko Watameke ",
      "+6567892345",
      "21/10/19",
      "14/10/19 10:00",
      "SAP Cancelled"
    ],
    ["Mary Wang", "+6538293212", "21/10/19", "NA", "Twilio 30003 Error"]
  ];
  const rows = sortedRows ? sortedRows : initiallySortedRows;

  const datatable2 = [
    ["Will Smith", "+6523451231", "23/10/19", "NA", "Twilio 30003 Error"],
    ["Sunny Lo", "+6567892345", "21/10/19", "NA", "Twilio 30003 Error"],
    ["Huang Da Bao", "+6538293212", "21/10/19", "NA", "Twilio 30003 Error"]
  ];

  const handleSort = useCallback(
    (index, direction) => setSortedRows(sortTimestamp(rows, index, direction)),
    [rows]
  );

  return (
    <Page title="POCC Dashboard">
      <Card title="Reply Table: Patient Reply Status (D-5)">
        <DataTable
          columnContentTypes={[
            "text",
            "numeric",
            "date",
            "date",
            "text",
            "text",
            "text"
          ]}
          headings={[
            "Name",
            "Phone #",
            "Operation Date",
            "SMS Sent Date",
            "SMS Reply Date",
            "Reply Content",
            "Reason for Not Coming"
          ]}
          rows={datatable0}
          sortable={[true, true, true, true, true, true, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${datatable0.length} of ${
            datatable0.length
          } results`}
        />
      </Card>
      <Card title="Error Table: Appointment Receipt (Post booking)">
        <DataTable
          columnContentTypes={["text", "numeric", "date", "date", "text"]}
          headings={[
            "Name",
            "Phone #",
            "Operation Date",
            "SMS Sent Date",
            "Error"
          ]}
          rows={rows}
          sortable={[true, true, true, true, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${rows.length} of ${rows.length} results`}
        />
      </Card>
      <Card title="Error Table: 2-way SMS (D-5)">
        <DataTable
          columnContentTypes={["text", "numeric", "date", "date", "text"]}
          headings={[
            "Name",
            "Phone #",
            "Date of Operation",
            "Timestamp of SMS Sent",
            "Error"
          ]}
          rows={datatable2}
          sortable={[true, true, true, true, true]}
          defaultSortDirection="descending"
          initialSortColumnIndex={4}
          onSort={handleSort}
          footerContent={`Showing ${datatable2.length} of ${
            datatable2.length
          } results`}
        />
      </Card>
    </Page>
  );
}
