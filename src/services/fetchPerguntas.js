
// const token = localStorage.getItem('token')
const APIurl = `https://opentdb.com/api.php?amount=5&token=221da4d2fa628ece1df6e78c72422d93fd01cad5058b910850d21aedf39011c1`

const fetchAPIperguntas = () => (
    fetch(APIurl)
      .then((response) => (
          response
          .json()
          .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
      ))
);

export default fetchAPIperguntas;