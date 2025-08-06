import {Controller, type Control, type FieldError} from 'react-hook-form';
import { type FormValues } from '../FormUser/formUser';

interface props{
    name: keyof FormValues;
    label: string;
    control: Control<FormValues>;
    type?: string;
    error?: FieldError;
}

const InputFormUser = ({name, label, control, type, error}: props) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field})=>
                <input id={name} type={type} {...field} className={`form-control ${error? "is-invalid": ""}`}/>
            }/>
            {error && <p>{error.message}</p>}
        </div>
    )
}

export default InputFormUser;