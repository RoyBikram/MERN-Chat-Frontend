import io from 'socket.io-client';

// const ConnectSocket = () => { 
//     const ENDPOINT = ;
//     return ;
// }

const Socket = io(process.env.REACT_APP_API_BASE_URL)

 
export {Socket}
