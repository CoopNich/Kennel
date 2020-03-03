import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalManager from "../../modules/AnimalManager"
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId)
      .then(APIResult => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
      });
  }, []);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the employee list.
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/employee")
    );
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id)
        .then(() => AnimalManager.getAll().then(setAnimals));
};

  return (
    <div className="card">
      <p>Employee: {employee.name}</p>
      {animals.map(animal =>
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleDelete={handleDelete}
          deleteAnimal={deleteAnimal}
          {...props}
        />
      )}
    </div>
  );
};

export default EmployeeWithAnimals;