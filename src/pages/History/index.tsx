import { HistoryContainer, HistoryList } from "./styles"

export const History = () => {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th scope="col">Tarefa</th>
              <th scope="col">Duração</th>
              <th scope="col">Início</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td scope="row">Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td scope="row">Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>

            <tr>
              <td scope="row">Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>
            <tr>
              <td scope="row">Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Em andamento</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
     
    </HistoryContainer>
  )
}
