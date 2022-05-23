import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Student} from '../../../models/student'


export interface TopStudentTableProps {
    rows: Student[],
    height: string
}

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'name', headerName: 'Name', width: 150 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 60,
  },
  { 
    field: 'mark',
    headerName: 'Mark',
    type: 'number',
    width: 60,
  }
  
];


export function StudentTable({rows, height}: TopStudentTableProps) {
  return (
    <div style={{ height: `${height}`, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[2]}
        checkboxSelection
      />
    </div>
  );
}
