import styled from "styled-components";
import fotoJuan from '../../assets/fotoJuan.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function CardFuncionarioResponsivo() {
    const ContainerCard = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
    `;

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        border: 1px solid #ccc;
        width: 100%;
        max-width: 300px;

        @media (min-width: 768px) {
            max-width: 1000px;
            margin: 20px;
        }
    `;

    const TopSection = styled.div`
        display: flex;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
            align-items: stretch;
        }
    `;

    const DivInfo = styled.div`
        border-bottom: 1px solid #ccc;
        width: 100%;

        @media (min-width: 768px) {
            border-bottom: none;
        }
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

        @media (min-width: 768px) {
            width: 70%;
            height: 200px;
        }
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

        @media (min-width: 768px) {
            border-bottom: none;
            border-left: 1px solid #ccc;
            display: flex;
            width: 30%;
            justify-content: center;
        }
    `;

    const DivSocialConteudo = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 16px;

        @media (min-width: 768px) {
            flex-direction: column;
            gap: 20px;
        }
    `;

    const DivTarefas = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 100%;

        @media (min-width: 768px) {
            border-top: 1px solid #ccc;
        }
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

        @media (min-width: 768px) {
            width: 20%;
        }
    `;

    const TableHeader2 = styled.th`
        background-color: #d9d9d9;
        border: 1px solid #000;
        padding: 12px;
        font-weight: normal;
        text-align: center;
        width: 70%;

        @media (min-width: 768px) {
            width: 80%;
        }
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
                <TopSection>
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
                </TopSection>
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