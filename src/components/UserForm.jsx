import React from "react";

const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input 
                  type="text"
                  name="name" 
                  id="name" 
                  placeholder="Digite seu nome" 
                  required 
                  value={data.name || ''} 
                  onChange={(e) => updateFieldHandler('name', e.target.value)}
                  />
            </div>
            <div className="form-control">
                <label htmlFor="email">E-mail:</label>
                <input 
                  type="email"
                  name="email" 
                  id="email" 
                  placeholder="Digite seu melhor e-mail" 
                  required 
                  />
            </div>
        </div>
    )
}

export default UserForm;