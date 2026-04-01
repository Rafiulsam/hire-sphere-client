export const applicationPromise = email => {
   return fetch(`http://localhost:5000/applications?email=${email}`) .then(res => res.json())
}