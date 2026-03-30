import styled from "styled-components";
import fotoJuan from '../../assets/fotoJuan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function CardFuncionario() {
    const ContainerCard = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    `;

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        width: 300px;
    `;

    const DivInfo = styled.div`
        border-bottom: 1px solid #ccc;
        width: 100%;
    `;

    const DivInfoTexto = styled.div`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
    `;

    const FotoFuncionario = styled.img`
        width: 100%;
        height: 180px;
        object-fit: cover;
    `;

    const H2Infos = styled.h2`
        margin: 0px 0 10px 0;
        font-size: 28px;
    `;

    const ParagrafoInfos = styled.p`
        margin: 5px 0;
        font-size: 18px;
    `;

    const DivSocial = styled.div`
        width: 100%;
        border-bottom: 1px solid #ccc;
    `;

    const DivSocialConteudo = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 16px;
    `;

    const DivTarefas = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        width: 100%;
    `;

    const Table = styled.table`
        border-collapse: collapse;
        width: 90%;
    `;

    const TableHeader1 = styled.th`
        background-color: #d9d9d9;
        border: 1px solid #000;
        padding: 12px;
        font-weight: normal;
        text-align: center;
        width: 30%;
    `;

    const TableHeader2 = styled.th`
        background-color: #d9d9d9;
        border: 1px solid #000;
        padding: 12px;
        font-weight: normal;
        text-align: center;
        width: 70%;
    `;

    const TableCell = styled.td`
        border: 1px solid #ccc;
        padding: 12px;
        text-align: center;
    `;

    const Checkbox = styled.input`
        cursor: pointer;
    `;

    return (
        <ContainerCard>
            <Card>
                <FotoFuncionario src={fotoJuan} alt="Foto do Funcionario" />
                <DivInfo>
                    <DivInfoTexto>
                        <H2Infos>Juan Pablo</H2Infos>
                        <ParagrafoInfos>29/01/2006</ParagrafoInfos>
                        <ParagrafoInfos>Front-End</ParagrafoInfos>
                        <ParagrafoInfos>Estagiário</ParagrafoInfos>
                    </DivInfoTexto>
                </DivInfo>
                <DivSocial>
                    <DivSocialConteudo>
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <FontAwesomeIcon icon={faLocationDot} size="2x" />
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </DivSocialConteudo>
                </DivSocial>
                <DivTarefas>
                    <Table>
                        <thead>
                            <tr>
                            <TableHeader1>Estado</TableHeader1>
                            <TableHeader2>Tarefas</TableHeader2>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <TableCell>
                                <Checkbox type="checkbox" />
                            </TableCell>
                            <TableCell>Terminar Card</TableCell>
                            </tr>
                            <tr>
                            <TableCell>
                                <Checkbox type="checkbox" />
                            </TableCell>
                            <TableCell>Estilizar Botão</TableCell>
                            </tr>
                            <tr>
                            <TableCell>
                                <Checkbox type="checkbox" />
                            </TableCell>
                            <TableCell>Documentar</TableCell>
                            </tr>
                        </tbody>
                    </Table>
                </DivTarefas>
            </Card>
        </ContainerCard>
    );
}
