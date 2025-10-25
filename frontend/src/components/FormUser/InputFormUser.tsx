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
        <div className="w-full">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field})=>
                <input id={name} type={type} {...field} className={`w-full p-4 rounded-xl border bg-white text-gray-700 shadow-lg focus:-translate-y-1 
                                                        focus:shadow:2xl focus:outline-none transition-all duration-200
                                                        ${error? "border-red-600": "border-black/20"}`}/>}/>
                
            {error && <p className='border-red-600'>{error.message}</p>}
        </div>
    )
}

export default InputFormUser;