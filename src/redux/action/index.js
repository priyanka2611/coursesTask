import {HANDLESUBMIT, HANDLECHANGE } from '../constants';
export function handleSubmit(formData){
    return {
        type: HANDLESUBMIT,
        payload: formData
      };
}

export function handleChange(formData){
  return {
      type: HANDLECHANGE,
      payload: formData
    };
}