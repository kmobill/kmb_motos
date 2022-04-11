import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import { Popup, DatePicker} from 'react-date-time-picker-popup'
import 'react-date-time-picker-popup/dist/index.css'
const Form = (props) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState(new Date());

  return (
    <div className='container__AG__form'>
      <div className='container__AG__form__content'>
        <img className='img__formFondo' src={require("../../images/agendamientoPage/fondo_form.png")} alt=""/>
        <div className='container__form'>
          <p>{props.content}</p>
          
          <form id = "form__AG"onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className='form__calendar'>            
            <div className='container__date'>
              <div >
                <h1>DÍA</h1>
                <input className='date__item' {...register("Date")}
                   value ={day.getDate()}
                />
              </div>
              <div>
                <h1>MES</h1>
                <input className='date__item' {...register("Mounth")}
                   value ={day.getMonth()}
                />
              </div>
              <div>
                <h1>AÑO</h1>
                <input className='date__item' {...register("Year")}
                   value ={day.getFullYear()}
                />
              </div>    
            </div>            
            <img className="btn__form__consultar" src={require("../../images/agendamientoPage/8.png")} alt="" onClick={() => setVisible(true)}/>
            <Popup visible={visible} setVisible={setVisible}>
              <DatePicker 
                lang="esp" 
                selectedDay={day} 
                setSelectedDay={setDay} 
                timeSelector={true}              >
              </DatePicker>              
            </Popup>            
          </div>
            <label>*NOMBRE:</label>
            <input {...register("Name")} placeholder="*NOMBRE:" />
            <label>*CÉDULA:</label>
            <input {...register("ID")} placeholder="*CÉDULA" />
            <label>*CELULAR:</label>
            <input {...register("Phone")} placeholder="*CELULAR" />
            <label>*CORREO:</label>
            <input {...register("Email")} placeholder="*CORREO" />
            <label>*MARCA Y MODELO:</label>
            <input {...register("Model")} placeholder="*MARCA Y MODELO" />
            <label>TIPO DE SERVICIOS:</label>
            <select {...register("TyperService")}>
              <option value="">Seleccione...</option>
              <option value="Taller">Taller Multimarca</option>
              <option value="Respuesto">Respuesto</option>
              <option value="Auxilio">Auxilio Mecánico</option>
              <option value="Curier">Curier</option>
            </select>
            <label>TALLERES DISPONIBLES:</label>
            <select {...register("TallerAvailable")}>
              <option value="">Seleccione...</option>
              <option value="Taller_SUR">Taller Sur</option>
            </select>            
            <p>{data}</p>
          </form>
        </div>
        
      </div>
      <div className='container__AG__form__logo'>
        <img className='img__logo__form' src={require("../../images/agendamientoPage/logo_form.png")} alt=""/>
        <input className='btn__form__AG' type="submit" form="form__AG" value=""/>        
      </div>
    </div>
    
    
  )
}

export default Form