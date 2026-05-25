import { CharacterT } from "@/types";
import { useRouter } from "next/navigation";

const Character = ({ character }: { character: CharacterT }) => {
  const router = useRouter();
  return (
    <div
      className="characterContainer"
      onClick={() => router.push("/character/" + character.id)}
    >
      <img src={character.image} />
      <div className="characterInfo">
        <h1>{character.name}</h1>
        <p>Gender: {character.gender}</p>
        <p>Status: {character.status}</p>
      </div>
    </div>
  );
};

export default Character;
