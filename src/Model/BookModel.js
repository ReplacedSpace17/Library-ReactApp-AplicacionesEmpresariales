// models/LibraryModel.js
import axios from 'axios';
import backendUrl from '../configServer';

class LibraryModel {
  static getAutores() {
    return axios.get(backendUrl + '/api/autores');
  }

  static addLibro(bookData) {
    return axios.post(backendUrl + '/api/libros/add', bookData);
  }

  static addAutor(autorNombre) {
    return axios.post(backendUrl + '/api/autores/add', { name: autorNombre });
  }
}

export default LibraryModel;
