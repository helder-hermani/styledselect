# StyledSelect
#### Select customizável, com opções alimentadas por objeto json.

![enter image description here](https://firebasestorage.googleapis.com/v0/b/letmeask---nlw-6.appspot.com/o/styledselect01.png?alt=media&token=7c622e1e-214e-4f43-aebe-b905138d6a13)

## 1. Características Técnicas

 - Desenvolvido com ReactJS, utilizando TypeScript.
 - Renderização e compartilhamento de informações através de Context API e Hooks personalizados.

## 2. Roteiro de Inclusão no Projeto

 - Importar para o projeto o diretório /components/StyledSelect, composto pelos arquivos:
 
	a.) **index.tsx**: Constroi o componente StyledSelect.
	
	b.) **StyledSelect.module.css**: Folha de estilos CSS.
	
	c.) **UseStyledSelect.ts**: Implementa o hook { useStyleSelect }, que 	exporta o próprio conteúdo do componente e seus métodos.
	
	d.) **StyledSelectContext.tsx**: Contexto que compartilha as funcionalidades do componente.
	

 - Copiar o diretório **/public/assets/styledselect** para este mesmo endereço no projeto que está sendo desenvolvido. Todos os ícones a serem utilizados nas opções do select devem estar salvos nesta página pública ou em algum CDN, com URL própria.

 - No arquivo **`_App.tsx`**, importar o componente *{StyledSelectContextProvider}* do *`StyledSelectContext.tsx`** e utilizá-lo no *return* para compartilhamento do Contexto.
 - Na página/componente que for utilizar o StyledSelect, importar o Hook *`{useStyledSelect}`* do arquivo  **`UseStyledSelect.ts`**. Este Hook provê 3 informações:

	 - O próprio componente a ser renderizado, que receberá as propriedades descritas na seção *Parâmetros de Entrada*.
	 
	 - Uma lista (array) de objetos, cada um composto por duas propriedades, que são: identificação única do select e seu respectivo valor. Esta lista conterá dados de todos os componentes StyledSelect da aplicação. Mais detalhes na seção *Retorno*.
	 - Função que recupera o valor de um determinado select, identificado pelo seu ID. Mais detalhes na seção *Retorno*.
 

## 3. Utilização do StyledSelect e Parâmetros de Entrada

 - Na página/componente que for utilizar o StyledSelect, importar o Hook `{useStyledSelect}` do arquivo  **`UseStyledSelect.ts`**.
 
 - Definir a variável {StyledSelect}, que será a instância a ser renderizada.

        import {useStyledSelect} from '../../components/StyledSelect/useStyledSelect';
    >  
        export  function  Home(){
    
        const {StyledSelect} =  useStyledSelect();

		//Inclui um StyledSelect apenas com os parâmetros obrigatórios
       <StyledSelect styledSelId='mySelect1' srcList={srcLoginMode} />

### Parâmetros de Entrada

1.) O componente `<StyledSelect />`recebe os seguintes parâmetros  ***obrigatórios***:

 - **styledSelId**:  Obrigatório. Identificação única do componente. Cada StyledSelect  deverá ter uma ID única, pela qual seu valor (opção escolhida pelo usuário) poderá ser recuperado. Se, por erro, for criado mais de um StyledSelect com mesmo ID, **não** será emitida mensagem de erro, mas apenas será armazenado o valor do **último** componente utilizado. Tipo do parâmetro: *string*.
  
 - **srcList**: Obrigatório. Passa um array de objetos JSON, que representará as opções disponíveis para escolha do usuário. Tipo: *Array de Objetos genéricos* (`srcList:  Array<Object>`).
 
	Os objetos JSON precisam ter uma estrutura específica, com 3 propriedades, necessariamente chamadas *Index*, *Value* e *IconUrl*, sendo: 
	
	 - **Index**: Obrigatório. Tipo number, contendo uma identificação da opção.
	 - **Value**: Obrigatório. Tipo string, contendo a descrição/valor que será exibido na lista de opções.
	 - **IconUrl**: Opcional. Tipo string, indicando o endereço da imagem que aparecerá como ícone da opção. As imagens devem estar na pasta *public* ou armazenadas em CDN. 

	No entanto, os objetos JSON passados dentro do array para a propriedade **srcList** podem ter qualquer estrutura, ou seja, as propriedades poderão ter qualquer nome. Isso porque a construção do StyledSelect converterá para objetos com estrutura válida, através do método **buildValidList()** implementado em seu Contexto. Por esta razão, a propriedade **srcList** é definida com array de objetos genéricos, já que à princípio não se conhece o formato do JSON que será recebido.

	No entanto, os objetos passados no array deverão ter *pelo menos duas propriedades*, e a primeira deverá ser do tipo *number*. Se o objeto passado tiver apenas uma propriedade, retornará um StyledSelect cuja opção será uma descrição de erro. Se o objeto passado tiver a primeira propriedade com tipo diferente de número, retornará um StyledSelect cuja opção será descrição de erro. Se a terceira propriedade (opcional, representando a URL do ícone da opção) não tiver formato de URL, retornará o ícone padrão (cujo arquivo de imagem deverá estar salvo na pasta */public/assetes/styledselect/defaulticon.gif*). Se o objeto tiver mais de três propriedades, as demais serão desprezadas na construção do objeto válido.

2.) O componente `<StyledSelect />`recebe os seguintes parâmetros  ***opcionais***:

 - **defaultLabel**: Opcional, do tipo *string*. Descrição padrão que aparecerá no select. No entanto, não representa/armazena valor. Caso o usuário não escolha nenhuma opção no componente, a exibição em tela será a *string* passada nesse parâmetro, mas o valor do StyledSelect será *string* vazia. Se não for passado nenhum valor, visto que é propriedade opcional, a legenda padrão é a *string* "Selecione".
 
 - **stylesAttributes**:  Opcional. Recebe um objeto contendo as seguintes propriedades, todas opcionais e do tipo *string*.
	 - *height*: altura do StyledSelect. Default: 35px.
	 - *maxHeight*: altura máxima do StyledSelect.
	 - *width*: largura do StyledSelect. Default: 100%.
	 - *maxWidth*: largura máxima do StyledSelect. Default: 300px.
	 - *backgroundColor*: cor de fundo do StyledSelect. Default: #FFFFFF
	 - *fontFamily*: fonte do StyledSelect. Default: sans-serif.

### Exemplos:

1.) Utilizando apenas parâmetros obrigatórios.

    import {useStyledSelect} from  '../../components/StyledSelect/useStyledSelect';
    
    const  srcLoginMode  = [
	    {
		    index:  0,
		    provider:  "Google",
		    logo:  "/assets/styledSelect/googleicon.png"
	    },
	    {
		    index:  1,
		    provider:  "Facebook",
		    logo:  "/assets/styledSelect/facebookicon.png"
	    }
    ];
    
    export  function  Home(){    
       const {StyledSelect} =  useStyledSelect();
    
	    return(
			<div>
			   <StyledSelect  styledSelId='mySelect1'  srcList={srcLoginMode} />
			</div>

Exibirá: 

![enter image description here](https://firebasestorage.googleapis.com/v0/b/letmeask---nlw-6.appspot.com/o/styledselect-noparams.png?alt=media&token=a893976b-f768-473b-a80a-7adc11179299)

2.) Utilizando  parâmetros obrigatórios e opcionais.


    import {useStyledSelect} from  '../../components/StyledSelect/useStyledSelect';
    
    const  dbEspecialities  = [
		{
			"Index":0,
			"Label"  :  "Literatura",
			"Icon":  "/assets/styledselect/literature.gif"
		},
		{
			"Index":1,
			"Label"  :  "Política",
			"Icon":  "/assets/styledselect/politics.gif"
		},
		{
			"Index":2,
			"Label"  :  "Artes",
			"Icon":  "/assets/styledselect/arts.gif"
		}];
    
    export  function  Home(){    
       const {StyledSelect} =  useStyledSelect();
    
	    return(
			<div>
				<StyledSelect
                     			styledSelId='mySelect2'
                    			srcList={dbEspecialities}
                    			defaultLabel="Categorias"
                     			stylesAttributes={{
                         				backgroundColor: "#f2fd91",
                         				fontFamily:"sans-serif",
                         				width:"80%",
                         				maxWidth:"200px",
                         				height:"35px"
                 		}}/>
			 </div>

Exibirá:

![enter image description here](https://firebasestorage.googleapis.com/v0/b/letmeask---nlw-6.appspot.com/o/styledselect-params.png?alt=media&token=924c0bac-a6c2-4dd6-b573-968cce9ed29b)

## 4. Retorno, Armazenamento e Compartilhamento de Informações (via Hook useStyledSelect)

Quando o usuário interage com o StyledSelect e escolhe uma das opções apresentadas, o componente armazenará e proverá as seguintes informações, via contexto, acessíveis a toda aplicação:

- **StyledSelect**: O próprio componente, que receberá seus parâmetros e será renderizado em tela.

 - **styledSelectValues**: Um array de objetos, contendo todos os StyledSelect utilizados na aplicação. Cada objeto conterá duas propriedades:
	 - **id**: *String*. Identificação do StyledSelect (parâmetro de entrada `styledSelId` - vide seção 3).
	 - **value**: *String*. Opção escolhida pelo usuário.
	 
	Assim, caso sejam utilizados dois StyledSelect na aplicação (por exemplo, um com a propriedade styledSelId="MySelect1" e outro com styledSelId="MySelect2") , o componente retornará a variável **styledSelectValues** contendo um array com dois objetos, sendo o primeiro com a propriedade id="MySelect1" e value="opção escolhida pelo usuário no StyledSelect 1",  e o segundo com a propriedade id="MySelect2" e value="opção escolhida pelo usuário no StyledSelect 12", 

- **getValue**: Uma função que recebe a ID do StyledSelect e retorna seu respectivo valor. No caso do exemplo anterior, `getValue("MySelect1")` retornara `"opção escolhida pelo usuário no StyledSelect 1"`.


### Roteiro de Uso:

a.) No componente que for acessar as informações de um determinado StyledSelect, importe o Hook **{useStyledSelect}**.

b.) Instanciar de forma desestruturada os objetos e métodos que serão utilizados.

Exemplo:   

    import {useStyledSelect} from  '../../components/StyledSelect/useStyledSelect';
    
    export function Home(){
        const {getValue} = useStyledSelect();
        
        function showValue(idSel){
            alert(getValue(idSel));
        }
    
    return(
        <div>
            <button onClick={()=>showValue("mySelect1")}>Verificar valores:</button>
        <div>
    )

### Atenção: 
#### Recuperando o valor de um select, sem necessidade de interação do usuário.

Quando um usuário clica na opção desejada, o Contexto do StyledSelect armazenará como objeto o ID e seu respectivo valor na variável **styledSelectValues** , formando assim uma coleção (array) de objetos com id/valor, representando cada StyledSelect da aplicação.. Estes valores poderão ser acessados através da função **getValue** (tudo visíveis à toda aplicação, via Contexto).

Caso possua alguma informação (como um Estado) que precise ser exibida automaticamente assim que o usuário selecionar uma opção, utilize o hook do React `{ useEffect }` , sendo executado toda vez que a variável **styledSelectValues** tiver seu valor atualizado.
# styledselect
