// controllers/LibraryAddController.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LibraryModel from '../models/LibraryModel';
import LibraryAddView from '../views/LibraryAddView';

function LibraryAddController() {
  const [autores, setAutores] = useState([]);
  const [selectedAutor, setSelectedAutor] = useState(null);

  useEffect(() => {
    LibraryModel.getAutores()
      .then(response => {
        setAutores(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de autores:', error);
      });
  }, []);

  const navigate = useNavigate();

  const Home = () => {
    navigate('/HomeLibrary');
  };

  const Back = () => {
    navigate(-1);
  };

  const [bookData, setBook] = useState({
    author_id: selectedAutor,
    title: '',
    chapters: '',
    pages: '',
    price: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setBook({ ...bookData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    LibraryModel.addLibro(bookData)
      .then(response => {
        if (response.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Agregado',
            text: 'Se agregó correctamente',
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'Aceptar',
          });

          Home();
        } else {
          console.log('Error al guardar');
        }
      })
      .catch(error => {
        console.error('Error al guardar libro:', error);
      });
  };

  const addAutor = async () => {
    const { value: autorNombre } = await Swal.fire({
      title: 'Submit your author name',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: 'Agregar',
    });

    if (autorNombre) {
      try {
        const response = await LibraryModel.addAutor(autorNombre);

        Swal.fire({
          title: 'Autor agregado',
          text: response.data.mensaje,
          icon: 'success',
        }).then(() => {
          window.location.reload();
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Error al agregar autor',
          icon: 'error',
        });
      }
    }
  };

  return (
    <LibraryAddView
      autores={autores}
      selectedAutor={selectedAutor}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      addAutor={addAutor}
      bookData={bookData}
    />
  );
}

export default LibraryAddController;
  