import { Container } from "./styles";

export function Ingredients({ ingredient }) {
  return (
    <Container>
      <div className="ingredients">
        <div>
          <p>{ingredient}</p>
        </div>
      </div>
    </Container>
  );
}
