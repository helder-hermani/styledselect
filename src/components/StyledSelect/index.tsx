import {useContext, useState} from 'react';
import {StyledSelectContext} from './StyledSelectContext';

import styles from './StyledSelect.module.css';
import { useEffect } from 'react';

type StyledAttributesType={
    height?: string;
    maxHeight?: string;
    width?:string;
    maxWidth?:string;
    backgroundColor?: string;
    fontFamily?: string;
}

type ValidListArrayType = {
    Index: number;
    Value: string;
    IconUrl: string; 
}

type StyledSelectProps = {
    styledSelId: string;
    srcList: Array<Object>;
    defaultLabel?:string;
    stylesAttributes?: StyledAttributesType;
}

type StyledPickedOptionType = {
    id: string;
    value: string;
}

export function StyledSelect({styledSelId,
                            srcList,
                            defaultLabel="",
                            stylesAttributes={
                                width:"100%",
                                height:"35px",
                                maxWidth:"300px",
                                backgroundColor: "#FFFFFF",
                                fontFamily:"sans-serif"
                                }
                            }:StyledSelectProps){

    const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
    const [currentOption, setCurrentOption] = useState<string>("");
    const [selectIconDefaultUrl, setSelectIconDefaultUrl] = useState<string>('/assets/styledSelect/arrowdown.gif');

    const {buildValidList} = useContext(StyledSelectContext);
    const validListArray:Array<ValidListArrayType> = buildValidList(srcList)

    const {storeStyledSelectOption} = useContext(StyledSelectContext);

    useEffect(()=>{
        if (defaultLabel!=="" || typeof defaultLabel === undefined){
            setCurrentOption(defaultLabel);
        }else{
            setCurrentOption("Selecione");
        }
    },[])

    function pickOption(id:string, value:string, iconUrl:string){
        const pickedOption:StyledPickedOptionType={
            id:id,
            value:value
        }
        setCurrentOption(value);                //just interface
        setSelectIconDefaultUrl(iconUrl);       //just interface
        storeStyledSelectOption(pickedOption);
        setVisibleOptions(false);
    }

    return (
        <div className={styles.divMainContent} 
            style={{
                width: stylesAttributes.width,
                maxWidth:stylesAttributes.maxWidth
            }} 
            onMouseLeave={()=>setVisibleOptions(false)}
        >
            <div className={`${styles.elementSelect} ${styles.applyRadius}`}
                 style={{
                    backgroundColor: stylesAttributes.backgroundColor,
                    fontFamily: stylesAttributes.fontFamily,
                    height:stylesAttributes.height,
                }}
                 onClick={()=>setVisibleOptions(!visibleOptions)}
            >
                <div className={styles.optionDesc}>{currentOption}</div>
                <div className={styles.optionIcon}><img src={selectIconDefaultUrl} alt="" className={styles.optionIconImg} /></div>
            </div>
            <div className={`${styles.optionsFrame} ${visibleOptions === false && styles.hideElement}`}>
                {
                    validListArray.map((el)=>
                    <div className={styles.elementSelect} 
                        style={{
                            backgroundColor: stylesAttributes.backgroundColor,
                            fontFamily: stylesAttributes.fontFamily,
                            height:stylesAttributes.height,
                        }}
                        key={el.Index}
                        onClick={()=>pickOption(styledSelId, el.Value, el.IconUrl)}
                    >
                        <div className={styles.optionDesc}>{el.Value}</div>
                        <div className={styles.optionIcon}><img src={el.IconUrl} alt="" className={styles.optionIconImg} /></div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}