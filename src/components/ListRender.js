import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  // Agora cada usuário possui um id estável.
  const [users] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "Jones", age: 19 },
    { id: 3, name: "Scorpion", age: 201 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;