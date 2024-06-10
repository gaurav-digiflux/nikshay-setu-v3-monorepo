import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export function NxWelcome({ title }: { title: string }) {
  const [storedValue, setLoaclStorage] = useState<string>('');
  const [asyncStorageVal, setAsyncStorageVal] = useState<string>('');
  const [cookies, setCookie] = useCookies(["TEST_KEY"]);

  const storeData = async (value: any) => {
    try {

      setCookie("TEST_KEY",value)
        } catch (e) {
      // saving error
    }
  };
  const fetchData = async () => {
    try {
      const value = await cookies.TEST_KEY
      console.log('TEST_KEY value:', value);
      setAsyncStorageVal(value&&value||"")
    } catch (e) {
      setAsyncStorageVal("erorr")
      console.log('TEST_KEY error:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);  
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
    html {
      -webkit-text-size-adjust: 100%;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
      line-height: 1.5;
      tab-size: 4;
      scroll-behavior: smooth;
    }
    body {
      font-family: inherit;
      line-height: inherit;
      margin: 0;
       background:#000000
    }
   `   }}
      />
      <div className="wrapper">
        <div className="container">
          <div>
            <h1 style={{color:"#ffffff"}}>
              <span > Hello there, </span>
              Welcome {title+asyncStorageVal} 👋
            </h1>
          </div>
          <span style={{color:"#ffffff"}}>Storage val : {asyncStorageVal}</span>
<input  value={storedValue} onChange={(v)=>setLoaclStorage(v.target.value)} style={{color:'black'}}/>
       
<button onClick={()=>{
  storeData(storedValue)
  fetchData();

}}>Save to cookies</button>
        </div>
      </div>
    </>
  );
}

export default NxWelcome;
