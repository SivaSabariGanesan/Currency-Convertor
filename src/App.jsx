import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [Amt, setAmt] = useState(1);
  const [from, setFrom] = useState("USD");
  const [To, setTo] = useState("INR");
  const [cc, setcc] = useState(null);
  const [er, setEr] = useState(null);

  useEffect(() => {
    const getex = async () => {
      try {
        let url = `https://open.er-api.com/v6/latest/${from}`;
        const res = await axios.get(url);
        setEr(res.data.rates[To]); // Corrected to setEr instead of er
      } catch (error) {
        console.error("Failed to fetch exchange rates", error);
      }
    };
    getex();
  }, [from, To]);

  const HAC = (e) => {
    const value = parseFloat(e.target.value);
    setAmt(isNaN(value) ? 0 : value);
  };

  const HFC = (e) => {
    setFrom(e.target.value);
  };

  const HTC = (e) => {
    setTo(e.target.value);
  };

  useEffect(() => {
    if (er != null) {
      setcc((Amt * er).toFixed(2));
    }
  }, [Amt, er]);

  return (
    <>
      <div className="Currencyconvertor"></div>
      <div className="box"></div>
      <div className="data">
        <h1>Currency Convertor</h1>
        <div className="input">
          <label htmlFor="amt">Amount:</label>
          <input type="number" id="amt" value={Amt} onChange={HAC} />
        </div>
        <div className="input">
          <label htmlFor="from">From</label>
          <select id="from" value={from} onChange={HFC}>
          <option value="AFN">AFN - Afghani</option>
<option value="ALL">ALL - Lek</option>
<option value="DZD">DZD - Dinar</option>
<option value="EUR">EUR - Euro</option>
<option value="AOA">AOA - New Kwanza</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="ARS">ARS - Peso</option>
<option value="AMD">AMD - Dram</option>
<option value="AUD">AUD - Australian Dollar</option>
<option value="EUR">EUR - Euro</option>
<option value="AZN">AZN - Manat</option>
<option value="BSD">BSD - Bahamian Dollar</option>
<option value="BHD">BHD - Bahrain Dinar</option>
<option value="BDT">BDT - Taka</option>
<option value="BBD">BBD - Barbados Dollar</option>
<option value="BYN">BYN - Belorussian Ruble</option>
<option value="EUR">EUR - Euro</option>
<option value="BZD">BZD - Belize Dollar</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="BTN">BTN - Ngultrum</option>
<option value="BOB">BOB - Boliviano</option>
<option value="BAM">BAM - Bosnia Mark</option>
<option value="BWP">BWP - Pula</option>
<option value="BRL">BRL - Real</option>
<option value="BND">BND - Brunei Dollar</option>
<option value="BGN">BGN - Lev</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="BIF">BIF - Burundi Franc</option>
<option value="KHR">KHR - Riel</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CAD">CAD - Canadian Dollar</option>
<option value="CVE">CVE - Cape Verdean Escudo</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CLP">CLP - Chilean Peso</option>
<option value="CNY">CNY - Chinese Yuan</option>
<option value="COP">COP - Colombian Peso</option>
<option value="KMF">KMF - Franc</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CRC">CRC - Colón</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="HRK">HRK - Croatian</option>
<option value="CUP">CUP - Cuban Peso</option>
<option value="EUR">EUR - Euro</option>
<option value="CZK">CZK - Koruna</option>
<option value="DKK">DKK - Danish Krone</option>
<option value="DJF">DJF - Djiboutian Franc</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="DOP">DOP - Dominican Peso</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="EGP">EGP - Egyptian Pound</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="ERN">ERN - Nakfa</option>
<option value="EUR">EUR - Euro</option>
<option value="ETB">ETB - Birr</option>
<option value="FJD">FJD - Fiji Dollar</option>
<option value="EUR">EUR - Euro</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="GHS">GHS - Cedi</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="GEL">GEL - Lari</option>
<option value="GMD">GMD - Dalasi</option>
<option value="GNF">GNF - Guinean Franc</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="GYD">GYD - Guyanese Dollar</option>
<option value="HTG">HTG - Gourde</option>
<option value="HNL">HNL - Lempira</option>
<option value="HUF">HUF - Forint</option>
<option value="ISK">ISK - Icelandic Króna</option>
<option value="INR">INR - Indian Rupee</option>
<option value="IDR">IDR - Rupiah</option>
<option value="IRR">IRR - Rial</option>
<option value="IQD">IQD - Iraqi Dinar</option>
<option value="ILS">ILS - Shekel</option>
<option value="JMD">JMD - Jamaican Dollar</option>
<option value="JPY">JPY - Yen</option>
<option value="JOD">JOD - Jordanian Dinar</option>
<option value="KZT">KZT - Tenge</option>
<option value="KES">KES - Kenya Shilling</option>
<option value="KPW">KPW - North Korean Won</option>
<option value="KRW">KRW - South Korean Won</option>
<option value="KWD">KWD - Kuwaiti Dinar</option>
<option value="KGS">KGS - Som</option>
<option value="LAK">LAK - New Kip</option>
<option value="LBP">LBP - Lebanese Pound</option>
<option value="LSL">LSL - Maluti</option>
<option value="LRD">LRD - Liberian Dollar</option>
<option value="LYD">LYD - Libyan Dinar</option>
<option value="CHF">CHF - Swiss Franc</option>
<option value="LTL">LTL - Litas</option>
<option value="MKD">MKD - Denar</option>
<option value="MGA">MGA - Malagasy Ariary</option>
<option value="MWK">MWK - Kwacha</option>
<option value="MYR">MYR - Ringgit</option>
<option value="MVR">MVR - Rufiyaa</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="MRU">MRU - Ouguiya</option>
<option value="MUR">MUR - Mauritian Rupee</option>
<option value="MXN">MXN - Mexican Peso</option>
<option value="MDL">MDL - Leu</option>
<option value="MNT">MNT - Togrog</option>
<option value="MAD">MAD - Dirham</option>
<option value="MZN">MZN - Metical</option>
<option value="MMK">MMK - Kyat</option>
<option value="NAD">NAD - Namibian Dollar</option>
<option value="NPR">NPR - Nepalese Rupee</option>
<option value="NZD">NZD - New Zealand Dollar</option>
<option value="NIO">NIO - Nicaraguan Cordoba</option>
<option value="NGN">NGN - Naira</option>
<option value="NOK">NOK - Norwegian Krone</option>
<option value="OMR">OMR - Omani Rial</option>
<option value="PKR">PKR - Pakistani Rupee</option>
<option value="PGK">PGK - Kina</option>
<option value="PEN">PEN - Sol</option>
<option value="PHP">PHP - Peso</option>
<option value="PLN">PLN - Zloty</option>
<option value="QAR">QAR - Qatari Rial</option>
<option value="RON">RON - Romanian Leu</option>
<option value="RUB">RUB - Ruble</option>
<option value="RWF">RWF - Rwandan Franc</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="WST">WST - Tala</option>
<option value="SAR">SAR - Riyal</option>
<option value="RSD">RSD - Serbian Dinar</option>
<option value="SCR">SCR - Seychelles Rupee</option>
<option value="SLL">SLL - Leone</option>
<option value="SGD">SGD - Singapore Dollar</option>
<option value="SBD">SBD - Solomon Islands Dollar</option>
<option value="ZAR">ZAR - Rand</option>
<option value="LKR">LKR - Sri Lankan Rupee</option>
<option value="SDG">SDG - Sudanese Pound</option>
<option value="SRD">SRD - Surinamese Dollar</option>
<option value="SZL">SZL - Lilangeni</option>
<option value="SEK">SEK - Krona</option>
<option value="SYP">SYP - Syrian Pound</option>
<option value="TWD">TWD - Taiwan Dollar</option>
<option value="TJS">TJS - Somoni</option>
<option value="TZS">TZS - Tanzanian Shilling</option>
<option value="THB">THB - Baht</option>
<option value="TOP">TOP - Pa’anga</option>
<option value="TTD">TTD - Trinidad and Tobago Dollar</option>
<option value="TND">TND - Tunisian Dinar</option>
<option value="TRY">TRY - Turkish Lira</option>
<option value="UGX">UGX - Ugandan New Shilling</option>
<option value="UAH">UAH - Hryvnia</option>
<option value="AED">AED - U.A.E. Dirham</option>
<option value="GBP">GBP - Pound Sterling</option>
<option value="USD">USD - Dollar</option>
<option value="UYU">UYU - Uruguay Peso</option>
<option value="UZS">UZS - Uzbekistani Sum</option>
<option value="VUV">VUV - Vatu</option>
<option value="VND">VND - Dong</option>
<option value="YER">YER - Rial</option>
<option value="ZMW">ZMW - Kwacha</option>
<option value="ZWL">ZWL - Zimbabwe Dollar</option>

          </select>
        </div>
        <div className="input">
          <label htmlFor="To">To</label>
          <select id="To" value={To} onChange={HTC}>
          <option value="AFN">AFN - Afghani</option>
<option value="ALL">ALL - Lek</option>
<option value="DZD">DZD - Dinar</option>
<option value="EUR">EUR - Euro</option>
<option value="AOA">AOA - New Kwanza</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="ARS">ARS - Peso</option>
<option value="AMD">AMD - Dram</option>
<option value="AUD">AUD - Australian Dollar</option>
<option value="EUR">EUR - Euro</option>
<option value="AZN">AZN - Manat</option>
<option value="BSD">BSD - Bahamian Dollar</option>
<option value="BHD">BHD - Bahrain Dinar</option>
<option value="BDT">BDT - Taka</option>
<option value="BBD">BBD - Barbados Dollar</option>
<option value="BYN">BYN - Belorussian Ruble</option>
<option value="EUR">EUR - Euro</option>
<option value="BZD">BZD - Belize Dollar</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="BTN">BTN - Ngultrum</option>
<option value="BOB">BOB - Boliviano</option>
<option value="BAM">BAM - Bosnia Mark</option>
<option value="BWP">BWP - Pula</option>
<option value="BRL">BRL - Real</option>
<option value="BND">BND - Brunei Dollar</option>
<option value="BGN">BGN - Lev</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="BIF">BIF - Burundi Franc</option>
<option value="KHR">KHR - Riel</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CAD">CAD - Canadian Dollar</option>
<option value="CVE">CVE - Cape Verdean Escudo</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CLP">CLP - Chilean Peso</option>
<option value="CNY">CNY - Chinese Yuan</option>
<option value="COP">COP - Colombian Peso</option>
<option value="KMF">KMF - Franc</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="CRC">CRC - Colón</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="HRK">HRK - Croatian</option>
<option value="CUP">CUP - Cuban Peso</option>
<option value="EUR">EUR - Euro</option>
<option value="CZK">CZK - Koruna</option>
<option value="DKK">DKK - Danish Krone</option>
<option value="DJF">DJF - Djiboutian Franc</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="DOP">DOP - Dominican Peso</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="EGP">EGP - Egyptian Pound</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="ERN">ERN - Nakfa</option>
<option value="EUR">EUR - Euro</option>
<option value="ETB">ETB - Birr</option>
<option value="FJD">FJD - Fiji Dollar</option>
<option value="EUR">EUR - Euro</option>
<option value="XAF">XAF - CFA Franc</option>
<option value="GHS">GHS - Cedi</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="GEL">GEL - Lari</option>
<option value="GMD">GMD - Dalasi</option>
<option value="GNF">GNF - Guinean Franc</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="GYD">GYD - Guyanese Dollar</option>
<option value="HTG">HTG - Gourde</option>
<option value="HNL">HNL - Lempira</option>
<option value="HUF">HUF - Forint</option>
<option value="ISK">ISK - Icelandic Króna</option>
<option value="INR">INR - Indian Rupee</option>
<option value="IDR">IDR - Rupiah</option>
<option value="IRR">IRR - Rial</option>
<option value="IQD">IQD - Iraqi Dinar</option>
<option value="ILS">ILS - Shekel</option>
<option value="JMD">JMD - Jamaican Dollar</option>
<option value="JPY">JPY - Yen</option>
<option value="JOD">JOD - Jordanian Dinar</option>
<option value="KZT">KZT - Tenge</option>
<option value="KES">KES - Kenya Shilling</option>
<option value="KPW">KPW - North Korean Won</option>
<option value="KRW">KRW - South Korean Won</option>
<option value="KWD">KWD - Kuwaiti Dinar</option>
<option value="KGS">KGS - Som</option>
<option value="LAK">LAK - New Kip</option>
<option value="LBP">LBP - Lebanese Pound</option>
<option value="LSL">LSL - Maluti</option>
<option value="LRD">LRD - Liberian Dollar</option>
<option value="LYD">LYD - Libyan Dinar</option>
<option value="CHF">CHF - Swiss Franc</option>
<option value="LTL">LTL - Litas</option>
<option value="MKD">MKD - Denar</option>
<option value="MGA">MGA - Malagasy Ariary</option>
<option value="MWK">MWK - Kwacha</option>
<option value="MYR">MYR - Ringgit</option>
<option value="MVR">MVR - Rufiyaa</option>
<option value="XOF">XOF - CFA Franc</option>
<option value="USD">USD - U.S. Dollar</option>
<option value="MRU">MRU - Ouguiya</option>
<option value="MUR">MUR - Mauritian Rupee</option>
<option value="MXN">MXN - Mexican Peso</option>
<option value="MDL">MDL - Leu</option>
<option value="MNT">MNT - Togrog</option>
<option value="MAD">MAD - Dirham</option>
<option value="MZN">MZN - Metical</option>
<option value="MMK">MMK - Kyat</option>
<option value="NAD">NAD - Namibian Dollar</option>
<option value="NPR">NPR - Nepalese Rupee</option>
<option value="NZD">NZD - New Zealand Dollar</option>
<option value="NIO">NIO - Nicaraguan Cordoba</option>
<option value="NGN">NGN - Naira</option>
<option value="NOK">NOK - Norwegian Krone</option>
<option value="OMR">OMR - Omani Rial</option>
<option value="PKR">PKR - Pakistani Rupee</option>
<option value="PGK">PGK - Kina</option>
<option value="PEN">PEN - Sol</option>
<option value="PHP">PHP - Peso</option>
<option value="PLN">PLN - Zloty</option>
<option value="QAR">QAR - Qatari Rial</option>
<option value="RON">RON - Romanian Leu</option>
<option value="RUB">RUB - Ruble</option>
<option value="RWF">RWF - Rwandan Franc</option>
<option value="XCD">XCD - East Caribbean Dollar</option>
<option value="WST">WST - Tala</option>
<option value="SAR">SAR - Riyal</option>
<option value="RSD">RSD - Serbian Dinar</option>
<option value="SCR">SCR - Seychelles Rupee</option>
<option value="SLL">SLL - Leone</option>
<option value="SGD">SGD - Singapore Dollar</option>
<option value="SBD">SBD - Solomon Islands Dollar</option>
<option value="ZAR">ZAR - Rand</option>
<option value="LKR">LKR - Sri Lankan Rupee</option>
<option value="SDG">SDG - Sudanese Pound</option>
<option value="SRD">SRD - Surinamese Dollar</option>
<option value="SZL">SZL - Lilangeni</option>
<option value="SEK">SEK - Krona</option>
<option value="SYP">SYP - Syrian Pound</option>
<option value="TWD">TWD - Taiwan Dollar</option>
<option value="TJS">TJS - Somoni</option>
<option value="TZS">TZS - Tanzanian Shilling</option>
<option value="THB">THB - Baht</option>
<option value="TOP">TOP - Pa’anga</option>
<option value="TTD">TTD - Trinidad and Tobago Dollar</option>
<option value="TND">TND - Tunisian Dinar</option>
<option value="TRY">TRY - Turkish Lira</option>
<option value="UGX">UGX - Ugandan New Shilling</option>
<option value="UAH">UAH - Hryvnia</option>
<option value="AED">AED - U.A.E. Dirham</option>
<option value="GBP">GBP - Pound Sterling</option>
<option value="USD">USD - Dollar</option>
<option value="UYU">UYU - Uruguay Peso</option>
<option value="UZS">UZS - Uzbekistani Sum</option>
<option value="VUV">VUV - Vatu</option>
<option value="VND">VND - Dong</option>
<option value="YER">YER - Rial</option>
<option value="ZMW">ZMW - Kwacha</option>
<option value="ZWL">ZWL - Zimbabwe Dollar</option>

          </select>
        </div>
        <div className="result">
          <p>{Amt} {from} is equal to {cc} {To}</p>
        </div>
      </div>
    </>
  );
}

export default App;
