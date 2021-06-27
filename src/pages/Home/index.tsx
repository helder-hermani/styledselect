import { useState } from 'react';
import {useStyledSelect} from '../../components/StyledSelect/useStyledSelect';

import styles from './Index.module.css';

const srcLoginMode = [
    {
        index: 0,
        provider: "Google",
        logo: "/assets/styledSelect/googleicon.png"
    },
    {
        index: 1,
        provider: "Facebook",
        logo: "/assets/styledSelect/facebookicon.png"
    }
]

const dbEspecialities = [
    {
        "Index":0,
        "Label" : "Literatura",
        "Icon": "/assets/styledselect/literature.gif"
    },
    {
        "Index":1,
        "Label" : "Política",
        "Icon": "/assets/styledselect/politics.gif"
    },
    {
        "Index":2,
        "Label" : "Artes",
        "Icon": "/assets/styledselect/arts.gif"
    }]

export function Home(){
    const {getValue} = useStyledSelect();
    const {StyledSelect} = useStyledSelect()
    const [valorSel, setValorSel]=useState<string>("");
    const [valorSel2, setValorSel2]=useState<string>("");

    function checkValues(){
        setValorSel(getValue('mySelect1'));
        setValorSel2(getValue('mySelect2'));
    }


    return(
        <div className={styles.divContent}>
            <header>
                <h1>Styled Select</h1>
            </header>

            <section className={styles.sectionSamples}>
                <div className={styles.divSamples}>
                    <div className={styles.divSample}>
                        <p>1.) Exemplo apenas com parâmetros obrigatórios:</p>
                        <StyledSelect styledSelId='mySelect1' srcList={srcLoginMode} /> 
                    </div>

                    <div className={styles.divSample}>
                        <p>2.) Exemplo com parâmetros obrigatórios e todos os opcionais:</p>
                        <StyledSelect
                            styledSelId='mySelect2'
                            srcList={dbEspecialities}
                            defaultValue="Categorias"
                            stylesAttributes={{
                                backgroundColor: "#f2fd91",
                                fontFamily:"sans-serif",
                                width:"80%",
                                maxWidth:"200px",
                                height:"35px"
                        }}/>
                    </div>

                    <div className={`${styles.divSample} ${styles.divCheck}`}>
                        <button onClick={()=>checkValues()}>Verificar valores:</button>
                        <p>Valor escolhido 1: <span>{valorSel}</span></p>
                        <p>Valor escolhido 2: <span>{valorSel2}</span></p>
                    </div>
                </div>
                <div className={styles.descriptionContent}>
                    <h2>Características:</h2>
                    <ul>
                        <li>Pode ser utilizado quantas vezes desejar dentro da aplicação.</li>
                        <li>Valores podem ser recuperados em qualquer página/componente, através do ID único.</li>
                    </ul>
                    <h2>Parâmetros:</h2>
                    <ul>
                        <li>Recebe os parâmetros:
                            <ul>
                                <li>Identificação: Obrigatório. Identifica o componente na aplicação.</li>
                                <li>Valores: Obrigatório. Objeto JSON que contém as opções, seus respectivos valores e imagem da lista (opcional).</li>
                                <li>Valor Padrão: Opcional. Legenda que aparecerá por padrão na lista.</li>
                                <li>Estilos: Opcional. Customização para tipo de fonte, largura, altura, e cor de fundo.</li>
                            </ul>
                        </li>
                        <li>No exemplo 1, o Styled Select foi inserido apenas com os parâmetros obrigatórios (id e objeto JSON como fonte das opções).</li>
                        <li>No exemplo 2, o Styled Select foi inserido utlizando todos os oarâmetros permitidos.</li>
                    </ul>
                    <h2>Como utilizar:</h2>
                    <ul>
                        <li>Requisito: aplicação criada pelo create-react-app com template para TypeScript.</li>
                        <li>Copiar a pasta Assets para public/assets/styledselect. As imagens usadas na lista (ícones) devem estar nesta pasta.</li>
                        <li>Importar o componente &#123; StyledSelectContextProvider &#125; em &#95;App.tsx para utilizá-lo como Provedor de Contexto.</li>
                        <li>Importar o Hook &#123; useStyledSelect &#125; do componente StyledSelect nas páginas/componentes onde deseja utilizá-lo.</li>
                            <ul>
                                <li>O componente &#123; StyledSelect &#125; do Hook useStyledSelect renderiza o componente.</li>
                                <li>O componente &#123; getValue &#125; do Hook recupera o valor selecionado em determinado StyledSelect, identificado pelo seu ID.</li>
                            </ul>
                    </ul>
                </div>
            </section>
        </div>
    )
}