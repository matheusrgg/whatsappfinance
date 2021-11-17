
import axios from 'axios';
//chamadaApiFinancas1




export function chamadaApiFinancas1(req, res) {

  // setInterval(cotacaoDolar, 1000 * 60 * 60 * 24);
  //This will call your function myFunction every 24 hours.

  //vo tenta chamar a cada um minuto

  setInterval( ()=> cotacaoDolar(5.04), 10000 );
  // res.send(resposta);
  // console.log(resposta);

}




// cotacaoDolar(5.04)
async function cotacaoDolar(valorQueroReceberMensagem){
  try {

    const getApiResponse = await axios.get('https://www.alphavantage.co/query?function=FX_Daily&from_symbol=USD&to_symbol=BRL&interval=5min&apikey=NF9LLJ4784EWDDXS')
    const cotacoesMensal =  getApiResponse.data["Time Series FX (Daily)"]
    const datasMensais = Object.keys(cotacoesMensal);
    const dataCotacaoMaisRecente = datasMensais[0];
  
    const cotacaoDesejada = getApiResponse.data["Time Series FX (Daily)"][dataCotacaoMaisRecente]['4. close']
    const cotacaoDesejadaDois = parseFloat(cotacaoDesejada).toFixed(2)
    // const valorQueroReceberMensagem = 5.05;
  
    if(valorQueroReceberMensagem == cotacaoDesejadaDois){
      console.log( 'valor igual disparar mensagem')
    }else{
      console.log( 'valor diferente não disparar')
    }





  } catch (error) {
    console.log(errors)
  }
 
}

