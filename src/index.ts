import app from './app'; //app exportada en app.ts

app.listen(app.get('port')); //Recuperamos puerto de app.ts
console.log('Server in port', app.get('port'));
