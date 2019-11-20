import {HANDLESUBMIT, HANDLESUBMITFOREDIT } from '../constants';
export function handleSubmit(formData){
    return {
        type: HANDLESUBMIT,
        payload: formData
      };
}