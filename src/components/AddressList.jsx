import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { createAddresses, baseUrl as coinBaseUrl } from '../utils/coins';

function AddressList({ coinType, count }) {
  const baseUrl = coinBaseUrl[coinType];
  let rows = createAddresses(coinType, count);
  if (!rows) return <div></div>;
  return (
    <div>
      <TableContainer component={Paper}>
        <TableContainer size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="center">No.</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Private Key</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  <a
                    href={baseUrl + row.address}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {row.address}
                  </a>
                </TableCell>

                <TableCell align="left">{row.privateKey}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </TableContainer>
    </div>
  );
}

export default AddressList;
