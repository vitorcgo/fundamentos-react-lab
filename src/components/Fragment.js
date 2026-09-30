import React from "react";

const Fragment = () => {
  return (
    <>
      {/* Primeiro elemento irmão */}
      <div>
        <h2>Temos dois elementos pai</h2>
      </div>

      {/* Segundo elemento irmão */}
      <div>
        <h2>Este também é</h2>
      </div>
    </>
  );
};

export default Fragment;