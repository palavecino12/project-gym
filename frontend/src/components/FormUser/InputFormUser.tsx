import {Controller, type Control, type FieldError} from 'react-hook-form';
import { type FormValues } from '../../schemas/schemaForm';

interface props{
    name: keyof FormValues;
    label: string;
    control: Control<FormValues>;
    type?: string;
    error?: FieldError;
}

const InputFormUser = ({name, label, control, type, error}: props) => {
    return(
        <div className="w-full rounded-full border border-gray-300 bg-white py-1 text-gray-700 shadow-sm 
            flex flex-row justify-around items-center">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field})=>
                <input id={name} type={type} {...field} className={`border-gray-300 ${error? "border-red-400": "border-green-400"}`}/>}/>
                
            {error && <p className='message-error'>{error.message}</p>}
        </div>
    )
}

export default InputFormUser;