import states from '../../Datas/states';
import departments from '../../Datas/departments';
import "./form.scss"
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { submitFormData } from '../../Redux/Actions/formActions';
import { useEffect } from 'react';

const Form = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data) => {
    dispatch(submitFormData(data));
    console.log("data:", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='personnalInfo_container'>
          <fieldset>
            <legend>Personnal Info</legend>
          <div className='names'>
            <div> 
              <label htmlFor="first-name">First name</label>
              <input
                id="first-name"
                type="text"
                placeholder="First name"
                {...register("firstName", { required: true, maxLength: 80 })}
              />
            </div>
            <div>
            <label htmlFor="last-name">Last name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true, maxLength: 100 })}
            />
          </div>
          </div>
          <div>
              <label htmlFor="date-of-birth">Date of birth</label>
              <input
                id="date-of-birth"
                type="date"
                placeholder="Date of birth"
                {...register("birthDate", { required: false })}
              />
            </div>
          </fieldset>
          
        </div>

        <div className='workInfo_container'>
          <fieldset>
            <legend>Work Info</legend>
            <div>
            <label htmlFor="start-date">Start Date</label>
            <input
              id="start-date"
              type="date"
              placeholder="Start Date"
              {...register("startDate", { required: false})}
            />
          </div>
          
          <div>
            <label htmlFor="department">Department</label>
            <select id="department" {...register("department", { required: true })}>
              {departments.map((department) => (
                <option key={department.name} value={department.name}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          </fieldset>
          
          
        </div>
      
       
      
        <fieldset>
          <legend>Adress</legend>
          <label htmlFor="street">Street</label>
        <input
          id="street"
          type="text"
          placeholder="Street"
          {...register("street", { required: true })}
        />
      
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
        />
      
        <label htmlFor="state">State</label>
        <select id="state" {...register("state", { required: true })}>
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      
        <label htmlFor="zip-code">Zip Code</label>
        <input
          id="zip-code"
          type="number"
          placeholder="Zip Code"
          {...register("zipCode", { required: true })}
        />

        </fieldset>
      
        
      
        <input type="submit" className='submit' />
      </form>
      
    );
};

export default Form;

