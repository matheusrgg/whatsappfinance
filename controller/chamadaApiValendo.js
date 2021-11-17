
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

export async function cotacaoDolar(){

    try {

        const getApiResponse = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=PETZ3.SA&apikey=${process.env.ALPHA_API_KEY}` )
        const cotacoesMensal =  getApiResponse.data["Weekly Time Series"]
        const datasMensais = Object.keys(cotacoesMensal);
        const dataCotacaoMaisRecente = datasMensais[0];
        const cotacaoDesejada = getApiResponse.data["Weekly Time Series"][dataCotacaoMaisRecente]['4. close']
        // setInterval(console.log(cotacaoDesejada),3000);
        console.log(cotacaoDesejada)
     
    
    
    
    
    
      } catch (error) {
        console.log(errors)
      }
}

