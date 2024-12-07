import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// A functional component to render a comparison table for services.
// Displays freelancer details such as name, price, and rating.
const ComparisonTable = ({ services }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        {/* Table header defining the column names */}
        <TableHead>
          <TableRow>
            <TableCell>Freelancer Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        {/* Table body rendering each service as a row */}
        <TableBody>
          {services.map((service) => (
            <TableRow key={service.id}>
              <TableCell>{service.freelancer}</TableCell>
              <TableCell>{service.price}</TableCell>
              <TableCell>{service.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ComparisonTable; // Exporting the component for use in other parts of the application.
