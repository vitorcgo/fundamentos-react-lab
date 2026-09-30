import { useState } from "react";

const ListRender = () => {
  // Lista simples mantida em state apenas para fins didáticos.
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          // O índice é usado como key.
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;