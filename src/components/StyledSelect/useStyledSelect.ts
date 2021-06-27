import { useContext } from "react";
import {StyledSelect} from './index';
import {StyledSelectContext} from './StyledSelectContext';

export function useStyledSelect(){
    const {getValue, styledSelectValues} =useContext(StyledSelectContext);
    return {StyledSelect, styledSelectValues, getValue};
}