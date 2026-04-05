import { Container } from '../..//components/container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../tampletes/maintampletes';

export function Home() {
  return (
    <MainTemplate>
      {/* Tudo o que está aqui dentro é o "children" que o template vai renderizar */}
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}