import React from "react";

export default function Table() {
  return (
    <div>
      <table border="1" cellPadding="10" style={{ margin: "20px auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>City</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Aryan</td>
            <td>Ahmedabad</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Raj</td>
            <td>Surat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
