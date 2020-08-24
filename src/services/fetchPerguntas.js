
// const token = localStorage.getItem('token')
const APIurl = `https://opentdb.com/api.php?amount=5&token=c696320abbe2d053c41bf48bdd7e03bd862d99446094d417a362ca0aa94a8b36`

const fetchAPIperguntas = () => (
    fetch(APIurl)
      .then((response) => (
          response
          .json()
          .then((data) => (response.ok ? Promise.resolve(data) : Promise.reject(data)))
      ))
);

export default fetchAPIperguntas;