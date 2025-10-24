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
                <input id={name} type={type} {...field} className={`w-full rounded-xl border-gray-300 bg-white py-1 text-gray-700 shadow-xl 
                                                        flex flex-row justify-around items-center outline-none transition-all duration-300 placeholder:text-gray-400
                                                        focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:shadow-md
                                                        ${error? "border-red-600": "border-green-600"}`}/>}/>
                
            {error && <p className='border-red-600'>{error.message}</p>}
        </div>
    )
}

export default InputFormUser;