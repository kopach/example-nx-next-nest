import React, { FC, useMemo } from 'react';
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { faker } from '@faker-js/faker';
import { formatISO } from 'date-fns';

type Record = {
  productName: string;
  licenseCode: string;
  user: {
    email: string;
    IPAddress: string;
  };
  checkInDate: Date;
  checkOutDate: Date;
};

//nested data is ok, see accessorKeys in ColumnDef below
const data: Record[] = Array.from({ length: 1000 }).map(() => {
  return {
    productName: faker.helpers.arrayElement(['Test Complete', 'Ready API']),
    licenseCode: faker.random.alphaNumeric(10),
    user: {
      email: faker.internet.email(),
      IPAddress: faker.internet.ip(),
    },
    checkInDate: faker.date.past(),
    checkOutDate: faker.date.past(),
  };
});

const SimpleComponentReact16: FC = () => {
  const columns = useMemo<MRT_ColumnDef<Record>[]>(
    () => [
      {
        accessorKey: 'productName', //access nested data with dot notation
        header: 'Product Name',
        enableGrouping: true,
      },
      {
        accessorKey: 'licenseCode',
        header: 'License Code',
        // enableClickToCopy: true,
      },
      {
        accessorKey: 'user.email', //normal accessorKey
        header: 'User Email',
        // enableClickToCopy: true,
      },
      {
        accessorKey: 'user.IPAddress',
        header: 'User IP',
        // enableClickToCopy: true,
      },
      {
        accessorFn: (row) =>
          Math.random() > 0.6
            ? 'Check In'
            : Math.random() > 0.3
            ? 'Check Out'
            : 'Rejected',
        header: 'Event',
        enableGrouping: true,
      },
      {
        accessorFn: (row) => `${formatISO(row.checkOutDate)}`,
        header: 'Date',
      },
      {
        accessorFn: (row) => `1/5`,
        header: 'Remaining Licenses',
      },
      {
        accessorFn: (row) => `UB-SSP-MacOs`,
        header: 'Host name',
      },
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      initialState={{ density: 'compact' }}
      enableGrouping
      enableColumnOrdering
      positionToolbarDropZone={'none'}
    />
  );
};

export default SimpleComponentReact16;
